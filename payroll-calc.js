/* 給与デスク — 給与計算ロジック（プロトタイプ）
   社会保険・残業・雇用保険・所得税（甲欄）・差引を実際に計算する小さなエンジン。
   所得税の甲欄は国税庁「電算機計算の特例（月額表）」で計算（税額定数は年度別の
   TAX_TABLES／既定は令和8年分の暫定）。乙欄は別表が複雑なため登録値を参照。
   住民税は市区町村からの通知額をマスタ登録して参照（設計どおり）。
   window.PayrollCalc.calc(emp) で各項目の期待値を返す。 */
(function (global) {
  // 料率は共通マスタ hr-data.js（window.HRData.rates）を単一の真実として参照する。
  // hr-data.js が未読込の場合に備えて既定値も持つ（二重管理を避けるため値は同一）。
  var DEFAULT_RATES = { health: 0.0998, care: 0.0159, childCare: 0.00115, pension: 0.183, employment: 0.006 };
  function rates() {
    var hr = (global.HRData && global.HRData.rates) || {};
    var wh = (global.HRData && global.HRData.office && global.HRData.office.workHoursMonth) || 147;
    return {
      health: hr.health != null ? hr.health : DEFAULT_RATES.health,
      care: hr.care != null ? hr.care : DEFAULT_RATES.care,
      childCare: hr.childCare != null ? hr.childCare : DEFAULT_RATES.childCare,
      pension: hr.pension != null ? hr.pension : DEFAULT_RATES.pension,
      employment: hr.employment != null ? hr.employment : DEFAULT_RATES.employment,
      workHours: wh,        // 月所定労働時間（hr-data の workHoursMonth）
      overtimeMult: hr.overtimeMult != null ? hr.overtimeMult : 1.25,   // 時間外（法定外）
      nightAdd: hr.nightAdd != null ? hr.nightAdd : 0.25,               // 深夜加算
      holidayMult: hr.holidayMult != null ? hr.holidayMult : 1.35,      // 法定休日
      over60Mult: hr.over60Mult != null ? hr.over60Mult : 1.50,         // 月60時間超
    };
  }
  var RATES = rates();   // モジュール読込時のスナップショット（公開用）

  var R = Math.round;

  /* 所得税（甲欄）＝国税庁「電算機計算の特例（月額表）」
     年度ごとに別表（給与所得控除・基礎控除・税率）が変わるため、年度別の
     設定として TAX_TABLES に切り出している。TAX_YEAR で適用年度を切替。
     ※運用前に最新の国税庁別表で要確認（特に R8 は令和7年度改正の暫定値）。 */
  var TAX_TABLES = {
    // 令和6年分（2024）
    R6: {
      label: '令和6年分',
      basic: 40000,   // 基礎控除（月額）＝ 48万 ÷ 12
      dep: 31667,     // 扶養親族等控除（月額/人）＝ 38万 ÷ 12
      // 給与所得控除（月額）別表第一: [上限a, 率, 加算]（率0は定額）
      kyuyo: [
        [135416, 0, 45834],
        [150000, 0.40, -8333],
        [300000, 0.30, 6667],
        [550000, 0.20, 36667],
        [708331, 0.10, 91667],
        [Infinity, 0, 162500],
      ],
      // 課税給与所得金額 → [上限, 税率, 控除額] 別表第三（復興特別所得税2.1%込み）
      brackets: [
        [162500, 0.05105, 0],
        [275000, 0.10210, 8296],
        [579166, 0.20420, 36374],
        [750000, 0.23483, 54113],
        [1500000, 0.33693, 130688],
        [3333333, 0.40840, 237893],
        [Infinity, 0.45945, 408061],
      ],
    },
    // 令和8年分（2026）暫定 — 令和7年度改正を反映（基礎控除58万・給与所得控除最低65万）。要・公式別表確認
    R8: {
      label: '令和8年分（暫定）',
      basic: 48333,   // 基礎控除 58万 ÷ 12（令和7年度改正）
      dep: 31667,     // 扶養親族等控除 38万 ÷ 12（据え置き）
      kyuyo: [        // 最低65万に引上げ・40%区分は廃止
        [158333, 0, 54167],
        [300000, 0.30, 6667],
        [550000, 0.20, 36667],
        [708333, 0.10, 91667],
        [Infinity, 0, 162500],
      ],
      brackets: [     // 税率表（別表第三）は据え置き
        [162500, 0.05105, 0],
        [275000, 0.10210, 8296],
        [579166, 0.20420, 36374],
        [750000, 0.23483, 54113],
        [1500000, 0.33693, 130688],
        [3333333, 0.40840, 237893],
        [Infinity, 0.45945, 408061],
      ],
    },
  };
  // 適用年度は hr-data.js（HRData.rates.taxYear）を参照。未指定なら R8。
  function taxYear() { return (global.HRData && global.HRData.rates && global.HRData.rates.taxYear) || 'R8'; }
  var TAX_YEAR = taxYear();

  function kyuyoKojo(a, t) {
    for (var i = 0; i < t.kyuyo.length; i++) {
      if (a <= t.kyuyo[i][0]) { var rate = t.kyuyo[i][1]; return rate ? a * rate + t.kyuyo[i][2] : t.kyuyo[i][2]; }
    }
    return 162500;
  }
  // 甲欄：その月の社会保険料等控除後の金額 a と扶養親族等の数 deps から税額を計算
  function incomeTaxKou(a, deps) {
    var t = TAX_TABLES[taxYear()];
    var ti = a - kyuyoKojo(a, t) - t.basic - t.dep * (deps || 0);
    if (ti <= 0) return 0;
    for (var i = 0; i < t.brackets.length; i++) {
      if (ti < t.brackets[i][0]) return Math.max(0, Math.floor(ti * t.brackets[i][1] - t.brackets[i][2]));
    }
    return 0;
  }

  // emp: { type:'月給'|'時給', base, hourly, workedHours, standardMonthly,
  //        care:bool, socialApplicable:bool, taxColumn:'甲'|'乙', dependents,
  //        incomeTax(乙欄の登録値), residentTax, commute, overtimeMin }
  /* 標準報酬月額の等級表（健康保険・全国健康保険協会）。報酬月額から標準報酬月額を判定。
     [等級, 標準報酬月額, 報酬月額の下限（この額以上）]。上限等級は下限のみで判定。
     厚生年金は標準報酬を 88,000〜650,000 にクランプ（第1等級88,000・上限第32等級650,000）。 */
  var SM_TABLE = [
    [1, 58000, 0], [2, 68000, 63000], [3, 78000, 73000], [4, 88000, 83000], [5, 98000, 93000],
    [6, 104000, 101000], [7, 110000, 107000], [8, 118000, 114000], [9, 126000, 122000], [10, 134000, 130000],
    [11, 142000, 138000], [12, 150000, 146000], [13, 160000, 155000], [14, 170000, 165000], [15, 180000, 175000],
    [16, 190000, 185000], [17, 200000, 195000], [18, 220000, 210000], [19, 240000, 230000], [20, 260000, 250000],
    [21, 280000, 270000], [22, 300000, 290000], [23, 320000, 310000], [24, 340000, 330000], [25, 360000, 350000],
    [26, 380000, 370000], [27, 410000, 395000], [28, 440000, 425000], [29, 470000, 455000], [30, 500000, 485000],
    [31, 530000, 515000], [32, 560000, 545000], [33, 590000, 575000], [34, 620000, 605000], [35, 650000, 635000],
    [36, 680000, 665000], [37, 710000, 695000], [38, 750000, 730000], [39, 790000, 770000], [40, 830000, 810000],
    [41, 880000, 855000], [42, 930000, 905000], [43, 980000, 955000], [44, 1030000, 1005000], [45, 1090000, 1055000],
    [46, 1150000, 1115000], [47, 1210000, 1175000], [48, 1270000, 1235000], [49, 1330000, 1295000], [50, 1390000, 1355000],
  ];
  function standardMonthly(pay) {
    pay = pay || 0;
    var row = SM_TABLE[0];
    for (var i = 0; i < SM_TABLE.length; i++) { if (pay >= SM_TABLE[i][2]) row = SM_TABLE[i]; else break; }
    var health = row[1], healthGrade = row[0];
    var pensionSm = Math.min(Math.max(health, 88000), 650000);   // 厚年は88,000〜650,000
    return { health: health, healthGrade: healthGrade, pension: pensionSm };
  }

  function calc(emp) {
    var r = rates();
    var applicable = emp.socialApplicable !== false;
    // 標準報酬月額：直接指定があればそれを使用、無ければ報酬月額から等級表で判定。
    var smInfo = emp.standardMonthly != null
      ? { health: emp.standardMonthly, healthGrade: standardMonthly(emp.standardMonthly).healthGrade, pension: Math.min(emp.standardMonthly, 650000) }
      : standardMonthly(emp.reportedPay || 0);
    var sm = smInfo.health;          // 健保・介護・子育ての算定基礎
    var smPension = smInfo.pension;  // 厚年（上限650,000）の算定基礎

    // 基本給
    var base = emp.type === '時給'
      ? R((emp.hourly || 0) * (emp.workedHours || 0))
      : (emp.base || 0);

    // 残業手当：月給は (月給 ÷ 所定時間)、時給は時給そのものを単価に
    var unit = emp.type === '時給'
      ? (emp.hourly || 0)
      : ((emp.base || 0) / r.workHours);
    // 残業手当（割増は hr-data の料率）。深夜・法定休日・60時間超は内訳があれば加算。
    //   時間外（法定外）×1.25 ＋ 深夜帯 ×+0.25 ＋ 60h超分 ×(1.50-1.25) ＋ 法定休日 ×1.35（別枠）
    var overtime =
      R(unit * r.overtimeMult * ((emp.overtimeMin || 0) / 60))
      + R(unit * r.nightAdd * ((emp.nightMin || 0) / 60))
      + R(unit * (r.over60Mult - r.overtimeMult) * ((emp.over60Min || 0) / 60))
      + R(unit * r.holidayMult * ((emp.holidayMin || 0) / 60));

    // 社会保険（本人負担＝労使折半。子育て支援金は本人負担分）
    var health = applicable ? R(sm * r.health / 2) : 0;
    var care = (applicable && emp.care) ? R(sm * r.care / 2) : 0;
    var childCare = applicable ? R(sm * r.childCare) : 0;
    var pension = applicable ? R(smPension * r.pension / 2) : 0;   // 厚年は上限650,000の標準報酬
    var social = health + care + childCare + pension;

    // 雇用保険：賃金総額（基本給＋残業＋通勤）× 本人料率
    var wageForEmp = base + overtime + (emp.commute || 0);
    var employment = R(wageForEmp * r.employment);

    // 所得税：甲欄は電算特例で計算（課税対象＝基本給＋残業−社会保険料、通勤は非課税）。
    //   乙欄は 88,000円未満を税額表どおり 3.063% で計算。88,000円以上は別表（月額表・乙）
    //   が必要なため登録値（emp.incomeTax）を参照。※高額帯は要・公式乙欄表の取込。
    var taxableAfterSI = Math.max(0, base + overtime - social);
    var incomeTax = emp.taxColumn === '乙'
      ? (taxableAfterSI < 88000 ? Math.floor(taxableAfterSI * 0.03063) : (emp.incomeTax || 0))
      : incomeTaxKou(taxableAfterSI, emp.dependents || 0);
    // 住民税は市区町村の通知額をマスタ登録して参照
    var residentTax = emp.residentTax || 0;
    var commute = emp.commute || 0;

    var gross = base + overtime + commute;
    var deduction = social + employment + incomeTax + residentTax;
    var net = gross - deduction;

    return {
      base: base, overtime: overtime,
      health: health, care: care, childCare: childCare, pension: pension, social: social,
      employment: employment, incomeTax: incomeTax, residentTax: residentTax,
      commute: commute, gross: gross, deduction: deduction, net: net,
      overtimeMin: emp.overtimeMin || 0,
      // 検算の根拠文（画面表示用）
      basis: {
        base: emp.type === '時給' ? '時給 × 勤務時間' : 'マスタ正規額',
        overtime: (emp.type === '時給'
          ? '時給 × ' + r.overtimeMult + ' × 残業時間'
          : '月給 ÷ ' + r.workHours + 'h × ' + r.overtimeMult + ' × 残業時間')
          + ((emp.nightMin || emp.holidayMin || emp.over60Min) ? '（＋深夜+' + (r.nightAdd * 100) + '%／法定休日×' + r.holidayMult + '／60h超×' + r.over60Mult + '）' : ''),
        social: applicable
          ? '標準報酬 ' + sm.toLocaleString('ja-JP') + '（健保' + smInfo.healthGrade + '等級' + (smPension < sm ? '・厚年上限650,000' : '') + '）× 料率（健保' + (r.health * 100) + '%/厚年' + (r.pension * 100) + '%ほか・折半）'
          : '社会保険の加入対象外',
        employment: '（基本給＋残業＋通勤）× ' + (r.employment * 100) + '%',
        incomeTax: emp.taxColumn === '乙'
          ? (taxableAfterSI < 88000 ? '乙欄・税額表 3.063%（88,000円未満）' : '乙欄・税額表（88,000円以上は登録値を参照）')
          : '甲欄・電算特例 ' + TAX_TABLES[taxYear()].label + '（給与所得控除→基礎→扶養' + (emp.dependents ? '×' + emp.dependents + '人' : '') + '→税率）',
        residentTax: '通知額をマスタ登録（特別徴収）',
        commute: 'マスタ区間額',
        net: '総支給 − 控除計',
      },
    };
  }

  /* 賞与の源泉所得税：「賞与に対する源泉徴収税額の算出率の表」（令和6年分・甲）。
     前月の社会保険料控除後の給与と扶養親族等の数から賞与率を引く。
     扶養>0は前月給与を扶養×31,667で調整して近似（要・公式表確認）。 */
  var BONUS_RATES = [
    [68000, 0], [79000, 0.02042], [252000, 0.04084], [300000, 0.06126], [334000, 0.08168],
    [363000, 0.10210], [395000, 0.12252], [426000, 0.14294], [520000, 0.16336], [601000, 0.18378],
    [678000, 0.20420], [708000, 0.22462], [745000, 0.24504], [788000, 0.26546], [846000, 0.28588],
    [914000, 0.30630], [1312000, 0.32672], [1521000, 0.35742], [2621000, 0.38804], [3496000, 0.41846],
    [Infinity, 0.45945],
  ];
  function bonusTaxRate(prevPay, deps) {
    var a = Math.max(0, (prevPay || 0) - 31667 * (deps || 0));
    for (var i = 0; i < BONUS_RATES.length; i++) { if (a < BONUS_RATES[i][0]) return BONUS_RATES[i][1]; }
    return 0.45945;
  }
  // 賞与の社会保険料・源泉所得税・差引を計算。
  // emp: { prevPay(前月社保後給与), dependents, care, socialApplicable, taxColumn, bonusTax(乙欄の登録値) }
  function calcBonus(emp, gross) {
    var r = rates();
    gross = gross || 0;
    var sb = Math.floor(gross / 1000) * 1000;          // 標準賞与額（1,000円未満切捨て）
    var applicable = emp.socialApplicable !== false;
    var health = applicable ? Math.round(sb * r.health / 2) : 0;
    var care = (applicable && emp.care) ? Math.round(sb * r.care / 2) : 0;
    var childCare = applicable ? Math.round(sb * r.childCare) : 0;
    var pension = applicable ? Math.round(Math.min(sb, 1500000) * r.pension / 2) : 0;  // 厚年は月150万上限
    var employment = Math.round(gross * r.employment);
    var social = health + care + childCare + pension + employment;
    var rate = bonusTaxRate(emp.prevPay, emp.dependents);
    var incomeTax = emp.taxColumn === '乙' ? (emp.bonusTax || 0) : Math.max(0, Math.floor((gross - social) * rate));
    return {
      standardBonus: sb, health: health, care: care, childCare: childCare, pension: pension,
      employment: employment, social: social, incomeTax: incomeTax, taxRate: rate, net: gross - social - incomeTax,
    };
  }

  global.PayrollCalc = { RATES: RATES, calc: calc, calcBonus: calcBonus, standardMonthly: standardMonthly, MAX_OVERTIME_MIN: 45 * 60 };
})(typeof window !== 'undefined' ? window : this);

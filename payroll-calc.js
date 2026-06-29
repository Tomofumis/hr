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
  function calc(emp) {
    var r = rates();
    var sm = emp.standardMonthly || 0;
    var applicable = emp.socialApplicable !== false;

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
    var pension = applicable ? R(sm * r.pension / 2) : 0;
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
          ? '標準報酬 ' + sm.toLocaleString('ja-JP') + ' × 料率（健保' + (r.health * 100) + '%/厚年' + (r.pension * 100) + '%ほか・折半）'
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

  global.PayrollCalc = { RATES: RATES, calc: calc, MAX_OVERTIME_MIN: 45 * 60 };
})(typeof window !== 'undefined' ? window : this);

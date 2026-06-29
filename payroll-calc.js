/* 給与デスク — 給与計算ロジック（プロトタイプ）
   社会保険・残業・雇用保険・所得税（甲欄）・差引を実際に計算する小さなエンジン。
   所得税の甲欄は国税庁「電算機計算の特例（月額表）」で計算。乙欄は別表が複雑な
   ため登録値を参照。住民税は市区町村からの通知額をマスタ登録して参照（設計どおり）。
   window.PayrollCalc.calc(emp) で各項目の期待値を返す。 */
(function (global) {
  // 設定画面の料率に対応（健保・厚年・雇用は設定値、介護・子育ては概算）
  var RATES = {
    health: 0.0998,        // 健康保険料率（労使合計）
    care: 0.0159,          // 介護保険料率（労使合計・40〜64歳）
    childCare: 0.00115,    // 子ども・子育て支援金（本人負担・対標準報酬）
    pension: 0.183,        // 厚生年金保険料率（労使合計）
    employment: 0.006,     // 雇用保険料率（本人負担分）
    workHours: 147,        // 月所定労働時間
    overtimeMult: 1.25,    // 時間外割増率（法定内・通常時間外）
  };

  var R = Math.round;

  /* 所得税（甲欄）＝国税庁「電算機計算の特例（月額表）」
     ※下記の定数は令和6年分。年次で別表（給与所得控除・基礎控除・税率）が
       変わるため、運用前に最新の国税庁別表で要確認。 */
  var BASIC_MONTHLY = 40000;   // 基礎控除（月額）= 48万 ÷ 12
  var DEP_MONTHLY = 31667;     // 扶養親族等控除（月額/人）= 38万 ÷ 12
  // 給与所得控除（月額）別表第一
  function kyuyoKojo(a) {
    if (a <= 135416) return 45834;
    if (a < 150000) return a * 0.40 - 8333;
    if (a < 300000) return a * 0.30 + 6667;
    if (a < 550000) return a * 0.20 + 36667;
    if (a < 708331) return a * 0.10 + 91667;
    return 162500;
  }
  // 課税給与所得金額 → 税率/控除額 別表第三（復興特別所得税2.1%込み）
  var TAX_BRACKETS = [
    [162500, 0.05105, 0],
    [275000, 0.10210, 8296],
    [579166, 0.20420, 36374],
    [750000, 0.23483, 54113],
    [1500000, 0.33693, 130688],
    [3333333, 0.40840, 237893],
    [Infinity, 0.45945, 408061],
  ];
  // 甲欄：その月の社会保険料等控除後の金額 a と扶養親族等の数 deps から税額を計算
  function incomeTaxKou(a, deps) {
    var ti = a - kyuyoKojo(a) - BASIC_MONTHLY - DEP_MONTHLY * (deps || 0);
    if (ti <= 0) return 0;
    for (var i = 0; i < TAX_BRACKETS.length; i++) {
      if (ti < TAX_BRACKETS[i][0]) return Math.max(0, Math.floor(ti * TAX_BRACKETS[i][1] - TAX_BRACKETS[i][2]));
    }
    return 0;
  }

  // emp: { type:'月給'|'時給', base, hourly, workedHours, standardMonthly,
  //        care:bool, socialApplicable:bool, taxColumn:'甲'|'乙', dependents,
  //        incomeTax(乙欄の登録値), residentTax, commute, overtimeMin }
  function calc(emp) {
    var r = RATES;
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
    var overtime = R(unit * r.overtimeMult * ((emp.overtimeMin || 0) / 60));

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
    //         乙欄は別表が複雑なため登録値を参照。
    var taxableAfterSI = Math.max(0, base + overtime - social);
    var incomeTax = emp.taxColumn === '乙'
      ? (emp.incomeTax || 0)
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
        overtime: emp.type === '時給'
          ? '時給 × ' + r.overtimeMult + ' × 残業時間'
          : '月給 ÷ ' + r.workHours + 'h × ' + r.overtimeMult + ' × 残業時間',
        social: applicable
          ? '標準報酬 ' + sm.toLocaleString('ja-JP') + ' × 料率（健保' + (r.health * 100) + '%/厚年' + (r.pension * 100) + '%ほか・折半）'
          : '社会保険の加入対象外',
        employment: '（基本給＋残業＋通勤）× ' + (r.employment * 100) + '%',
        incomeTax: emp.taxColumn === '乙'
          ? '乙欄・税額表（登録値を参照）'
          : '甲欄・電算特例（給与所得控除→基礎→扶養' + (emp.dependents ? '×' + emp.dependents + '人' : '') + '→税率）',
        residentTax: '通知額をマスタ登録（特別徴収）',
        commute: 'マスタ区間額',
        net: '総支給 − 控除計',
      },
    };
  }

  global.PayrollCalc = { RATES: RATES, calc: calc, MAX_OVERTIME_MIN: 45 * 60 };
})(typeof window !== 'undefined' ? window : this);

/* 給与デスク — 給与計算ロジック（プロトタイプ）
   社会保険・残業・雇用保険・差引を実際に計算する小さなエンジン。
   住民税は市区町村からの通知額をマスタ登録して参照（設計どおり）。
   所得税はマスタ参照（源泉徴収税額表は未実装）。
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

  // emp: { type:'月給'|'時給', base, hourly, workedHours, standardMonthly,
  //        care:bool, socialApplicable:bool, taxColumn:'甲'|'乙',
  //        incomeTax, residentTax, commute, overtimeMin }
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

    // 所得税・住民税はマスタ参照（税額表は未実装）
    var incomeTax = emp.incomeTax || 0;
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
        incomeTax: emp.taxColumn === '乙' ? '乙欄・源泉徴収税額表（マスタ参照）' : '甲欄・源泉徴収税額表（マスタ参照）',
        residentTax: '通知額をマスタ登録（特別徴収）',
        commute: 'マスタ区間額',
        net: '総支給 − 控除計',
      },
    };
  }

  global.PayrollCalc = { RATES: RATES, calc: calc, MAX_OVERTIME_MIN: 45 * 60 };
})(typeof window !== 'undefined' ? window : this);

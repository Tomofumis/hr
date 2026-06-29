/* 給与デスク — 共通マスタ（単一の真実）
   事業所設定・料率・所定労働をここに集約。payroll-calc.js と各画面はこれを参照する。
   ※将来は localStorage 連携で「設定画面の変更→全画面に反映」も可能。 */
(function (global) {
  global.HRData = {
    office: {
      name: '吉田国際特許事務所',
      rep: '吉田 雅比呂',
      corpNumber: '1234567890123',
      addr: '東京都千代田区九段北4-1-5市ヶ谷法曹ビル308',
      tel: '03-6277-7466',
      // 所定労働：09:00-17:00（7時間）・休憩60分。月147時間（7h×21日）。
      schedStart: '09:00', schedEnd: '17:00', schedHours: 7, breakMin: 60, workHoursMonth: 147,
    },
    // 控除料率（payroll-calc.js が参照。設定画面の表示もこれに揃える）
    rates: {
      health: 0.0998,      // 健康保険料率（労使合計）
      care: 0.0159,        // 介護保険料率（労使合計・40〜64歳）
      childCare: 0.00115,  // 子ども・子育て支援金（本人負担・対標準報酬）
      pension: 0.183,      // 厚生年金保険料率（労使合計）
      employment: 0.006,   // 雇用保険料率（本人負担分）※年度で変動（令和6年度0.6%）。要・年度確認
      taxYear: 'R8',       // 所得税の適用年度（payroll-calc の TAX_TABLES のキー）
      // 割増率（労働基準法）
      overtimeMult: 1.25,  // 時間外（法定外）の割増
      nightAdd: 0.25,      // 深夜（22:00-翌5:00）の加算
      holidayMult: 1.35,   // 法定休日労働の割増
      over60Mult: 1.50,    // 月60時間超の時間外の割増
    },
    // 従業員マスタ（単一の真実）。各画面はこれを参照する。
    // 明細チェック用：base/hourly/workedHours/standardMonthly/care/socialApplicable/taxColumn/
    //   dependents/residentTax/prevResidentTax/commute/overtimeMin/incomeTax(乙)/actualDelta
    // 賞与用：prevPay(前月社保後給与)/grade/bonus
    employees: [
      { code: 'A-001', name: '佐川 智史', type: '月給', base: 360000, standardMonthly: 530000, care: true, socialApplicable: true, taxColumn: '甲', dependents: 2, residentTax: 46700, prevResidentTax: 46700, commute: 12000, overtimeMin: 1295, prevPay: 332000, grade: 'A', bonus: 580000 },
      { code: 'A-002', name: '瀬川', type: '月給', base: 255000, standardMonthly: 380000, care: true, socialApplicable: true, taxColumn: '甲', dependents: 0, residentTax: 20000, prevResidentTax: 20000, commute: 9800, overtimeMin: 2870, prevPay: 237000, grade: 'B', bonus: 420000 },
      { code: 'A-003', name: '中原', type: '月給', base: 250000, standardMonthly: 360000, care: true, socialApplicable: true, taxColumn: '甲', dependents: 0, residentTax: 0, prevResidentTax: 0, commute: 14000, overtimeMin: 920, prevPay: 228000, grade: 'B', bonus: 400000, actualDelta: { '社保': 2400 } },
      { code: 'A-004', name: '鷲尾', type: '月給', base: 230000, standardMonthly: 340000, care: false, socialApplicable: true, taxColumn: '乙', dependents: 0, residentTax: 15400, prevResidentTax: 0, commute: 8400, overtimeMin: 640, incomeTax: 11800, prevPay: 203000, grade: 'B', bonus: 360000 },
      { code: 'A-005', name: '張', type: '月給', base: 240000, standardMonthly: 340000, care: false, socialApplicable: true, taxColumn: '乙', dependents: 0, residentTax: 13200, prevResidentTax: 13200, commute: 12000, overtimeMin: 645, incomeTax: 12500, prevPay: 210000, grade: 'B', bonus: 380000, actualDelta: { '通勤': 3000 } },
      { code: 'A-006', name: '栂', type: '時給', hourly: 2000, workedHours: 82.45, standardMonthly: 0, care: false, socialApplicable: false, taxColumn: '甲', dependents: 0, residentTax: 0, prevResidentTax: 0, commute: 6200, overtimeMin: 0, prevPay: 164900, grade: 'C', bonus: 250000 },
    ],
  };

  // 設定画面の保存値（localStorage）があれば上書き → 全画面の計算に反映
  try {
    if (global.localStorage) {
      var saved = JSON.parse(global.localStorage.getItem('hr_settings') || 'null');
      if (saved) {
        if (saved.rates) for (var k in saved.rates) { if (saved.rates[k] != null) global.HRData.rates[k] = saved.rates[k]; }
        if (saved.office) for (var k2 in saved.office) { if (saved.office[k2] != null) global.HRData.office[k2] = saved.office[k2]; }
      }
    }
  } catch (e) {}
})(typeof window !== 'undefined' ? window : this);

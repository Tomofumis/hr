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
  };
})(typeof window !== 'undefined' ? window : this);

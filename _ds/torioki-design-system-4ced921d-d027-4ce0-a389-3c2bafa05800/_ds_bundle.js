/* @ds-bundle: {"format":3,"namespace":"ToriokiDesignSystem_4ced92","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"ConfidenceBadge","sourcePath":"components/data/ConfidenceBadge.jsx"},{"name":"STATUS_KEYS","sourcePath":"components/data/StatusChip.jsx"},{"name":"StatusChip","sourcePath":"components/data/StatusChip.jsx"},{"name":"SummaryStat","sourcePath":"components/data/SummaryStat.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"MessageBubble","sourcePath":"components/messaging/MessageBubble.jsx"}],"sourceHashes":{"components/core/Button.jsx":"461ea4190c44","components/core/IconButton.jsx":"edda07b4d590","components/data/Avatar.jsx":"8de358f3f351","components/data/Badge.jsx":"c921c9c13f18","components/data/Card.jsx":"d00d91874113","components/data/ConfidenceBadge.jsx":"8cea60f8995f","components/data/StatusChip.jsx":"87b3224a4ef3","components/data/SummaryStat.jsx":"e78e33b43ce9","components/feedback/EmptyState.jsx":"0fdfd9291141","components/feedback/Skeleton.jsx":"3ac34479c171","components/forms/Input.jsx":"637062fe2e72","components/forms/Select.jsx":"2813ae7672ad","components/forms/Toggle.jsx":"946027a15302","components/messaging/MessageBubble.jsx":"b9a16cdb08f6","ui_kits/torioki-confirm/Confirm.jsx":"1b8ca7ca280d","ui_kits/torioki-dashboard/App.jsx":"990bf68f3bce","ui_kits/torioki-dashboard/DMPanel.jsx":"6e710272e14b","ui_kits/torioki-dashboard/Header.jsx":"cde71f3b72e0","ui_kits/torioki-dashboard/Ledger.jsx":"1caad9c5fdfb","ui_kits/torioki-dashboard/api.js":"7e1c7c7250b1","ui_kits/torioki-dashboard/data.js":"6b079ac6a0eb","ui_kits/torioki-dashboard/helpers.js":"bc3b988ee21c","ui_kits/torioki-dashboard/mock-server.js":"f7628177aa4f","ui_kits/torioki-notifications/Notifications.jsx":"8833af2de437","ui_kits/torioki-onboarding/Onboarding.jsx":"2e0a525d7710","ui_kits/torioki-settings/Settings.jsx":"204d5ffeb57f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ToriokiDesignSystem_4ced92 = window.ToriokiDesignSystem_4ced92 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control.
 */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  type = "button",
  leadingIcon,
  trailingIcon,
  className = "",
  children,
  ...rest
}) {
  const cls = ["tk-btn", `tk-btn--${variant}`, `tk-btn--${size}`, block ? "tk-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), leadingIcon, children != null && /*#__PURE__*/React.createElement("span", null, children), trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, icon-only control for toolbars and dense rows.
 */
function IconButton({
  size = "md",
  bordered = false,
  label,
  className = "",
  children,
  ...rest
}) {
  const cls = ["tk-iconbtn", `tk-iconbtn--${size}`, bordered ? "tk-iconbtn--bordered" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — circular initial / image for a customer. */
function Avatar({
  name = "",
  src,
  size = "md",
  className = "",
  ...rest
}) {
  const initial = (name || "").trim().charAt(0) || "?";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["tk-avatar", `tk-avatar--${size}`, className].filter(Boolean).join(" "),
    "aria-label": name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Badge — small inline label / count. */
function Badge({
  tone = "neutral",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["tk-badge", `tk-badge--${tone}`, className].filter(Boolean).join(" ")
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "tk-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — the base surface container. */
function Card({
  as: Tag = "div",
  pad = false,
  flat = false,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["tk-card", pad ? "tk-card--pad" : "", flat ? "tk-card--flat" : "", interactive ? "tk-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/ConfidenceBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ConfidenceBadge — small 3-bar meter for the AI parse confidence.
 */
function ConfidenceBadge({
  level = "high",
  showLabel = true,
  className = "",
  ...rest
}) {
  const labels = {
    high: "high",
    medium: "medium",
    low: "low"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["tk-confidence", className].filter(Boolean).join(" "),
    "data-level": level,
    title: `解析信頼度: ${level}`
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tk-confidence__bars",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-confidence__bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-confidence__bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-confidence__bar"
  })), showLabel && /*#__PURE__*/React.createElement("span", null, labels[level]));
}
Object.assign(__ds_scope, { ConfidenceBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ConfidenceBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Maps the Japanese status label to its style key. */
const STATUS_KEYS = {
  "未確認": "unconfirmed",
  "確定": "confirmed",
  "受渡済": "delivered",
  "キャンセル": "cancelled"
};

/**
 * StatusChip — colored chip showing a reservation's 状況.
 * Render as a button (interactive) for one-tap cycling, or as a
 * static span for read-only display.
 */
function StatusChip({
  value,
  interactive = false,
  className = "",
  ...rest
}) {
  const key = STATUS_KEYS[value] || "unconfirmed";
  const cls = ["tk-statuschip", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "tk-statuschip__dot",
    "aria-hidden": "true"
  }), value, interactive && /*#__PURE__*/React.createElement("span", {
    className: "tk-statuschip__caret",
    "aria-hidden": "true"
  }, "\u21C6"));
  if (interactive) {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      className: cls,
      "data-status": key,
      "aria-label": `状況: ${value}（タップで変更）`
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    "data-status": key
  }, rest), inner);
}
Object.assign(__ds_scope, { STATUS_KEYS, StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/data/SummaryStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SummaryStat — a single number + label for the top-of-page summary. */
function SummaryStat({
  value,
  unit,
  label,
  tone = "default",
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tk-stat", tone !== "default" ? `tk-stat--${tone}` : "", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tk-stat__num"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "tk-stat__unit"
  }, unit)), /*#__PURE__*/React.createElement("div", {
    className: "tk-stat__label"
  }, label));
}
Object.assign(__ds_scope, { SummaryStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SummaryStat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** EmptyState — calm placeholder for empty ledgers / threads. */
function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tk-empty", className].filter(Boolean).join(" ")
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    className: "tk-empty__icon",
    "aria-hidden": "true"
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    className: "tk-empty__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "tk-empty__desc"
  }, description), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Skeleton — shimmering placeholder block for loading states. */
function Skeleton({
  width,
  height = 16,
  radius,
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["tk-skel", className].filter(Boolean).join(" "),
    style: {
      display: "block",
      width: width ?? "100%",
      height: typeof height === "number" ? `${height}px` : height,
      borderRadius: radius,
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field. Renders a <textarea> when multiline.
 */
function Input({
  label,
  hint,
  error,
  multiline = false,
  invalid = false,
  id,
  leadingIcon,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const isInvalid = invalid || !!error;
  const inputCls = ["tk-input", multiline ? "tk-textarea" : "", isInvalid ? "tk-input--invalid" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["tk-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tk-label",
    htmlFor: fieldId
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: inputCls,
    "aria-invalid": isInvalid
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: inputCls,
    "aria-invalid": isInvalid
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "tk-hint tk-hint--error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "tk-hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — labelled dropdown. Wraps a native <select> for accessibility
 * and mobile behavior, with Torioki styling + a chevron.
 * `options` is an array of { value, label } or plain strings.
 */
function Select({
  label,
  hint,
  options = [],
  id,
  className = "",
  children,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: ["tk-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tk-label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tk-select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId
  }, rest), children || opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "tk-select__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))), hint && /*#__PURE__*/React.createElement("span", {
    className: "tk-hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle — an accessible on/off switch. Controlled via `checked` + `onChange`.
 */
function Toggle({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    id: fieldId,
    "aria-checked": checked,
    "aria-label": typeof label === "string" ? label : undefined,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    className: ["tk-toggle", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tk-toggle__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-toggle__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "tk-toggle__label"
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/messaging/MessageBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MessageBubble — a single DM message. `direction` "in" is the
 * customer (left), "out" is Torioki's auto-reply (right).
 */
function MessageBubble({
  direction = "in",
  text,
  time,
  auto = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["tk-msg", `tk-msg--${direction}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tk-msg__bubble"
  }, text), (time || auto) && /*#__PURE__*/React.createElement("div", {
    className: "tk-msg__meta"
  }, auto && /*#__PURE__*/React.createElement("span", {
    className: "tk-msg__auto"
  }, "\u81EA\u52D5\u8FD4\u4FE1"), time && /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, time)));
}
Object.assign(__ds_scope, { MessageBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/messaging/MessageBubble.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-confirm/Confirm.jsx
try { (() => {
// Torioki — public reservation confirmation page (customer-facing).
// Opened from a link the auto-reply sends. Read-only, no auth.
// Production endpoint (NOT in current API spec): GET /api/r/:token
//   → { shop: {...}, reservation: Reservation }  (public, token-scoped)
const {
  useEffect
} = React;

// mock payload (production: fetched by token)
const PAYLOAD = {
  shop: {
    name: "あおぞらパン店",
    handle: "@aozora_bakery",
    address: "東京都世田谷区北沢 2-1-1",
    phone: "03-1234-5678",
    hours: "8:00 – 18:00（水曜定休）"
  },
  reservation: {
    id: "r-0042",
    customer: "山田 あさ",
    items: [{
      name: "クロワッサン",
      quantity: 2
    }, {
      name: "カンパーニュ",
      quantity: 1
    }],
    dateLabel: "6月13日(土)",
    pickupTime: "10:30",
    status: "確定"
  }
};
function ConfirmApp() {
  const {
    Card,
    StatusChip
  } = window.ToriokiDesignSystem_4ced92;
  const {
    shop,
    reservation: r
  } = PAYLOAD;
  useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "tkc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkc__wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkc__shop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkc__logo"
  }, shop.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tkc__shopname"
  }, shop.name), /*#__PURE__*/React.createElement("div", {
    className: "tkc__shophandle"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "at-sign",
    style: {
      width: 12,
      height: 12
    }
  }), shop.handle.replace("@", "")))), /*#__PURE__*/React.createElement("div", {
    className: "tkc__hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkc__herotitle"
  }, "\u3054\u4E88\u7D04\u3092\u627F\u308A\u307E\u3057\u305F"), /*#__PURE__*/React.createElement("div", {
    className: "tkc__herosub"
  }, r.customer, " \u3055\u307E\u3001\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002")), /*#__PURE__*/React.createElement(Card, {
    className: "tkc__resv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkc__resvtop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkc__when"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tkc__whenlabel"
  }, "\u304A\u6E21\u3057\u65E5\u6642"), /*#__PURE__*/React.createElement("span", {
    className: "tkc__whendate tabular"
  }, r.dateLabel), /*#__PURE__*/React.createElement("span", {
    className: "tkc__whentime tabular"
  }, r.pickupTime)), /*#__PURE__*/React.createElement(StatusChip, {
    value: r.status
  })), /*#__PURE__*/React.createElement("div", {
    className: "tkc__items"
  }, r.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "tkc__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tkc__itemname"
  }, it.name), /*#__PURE__*/React.createElement("span", {
    className: "tkc__itemqty"
  }, "\xD7", it.quantity)))), /*#__PURE__*/React.createElement("div", {
    className: "tkc__resvfoot"
  }, /*#__PURE__*/React.createElement("span", null, "\u4E88\u7D04\u756A\u53F7"), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "#", r.id.replace("r-", "")))), /*#__PURE__*/React.createElement("div", {
    className: "tkc__note"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle"
  }), /*#__PURE__*/React.createElement("span", null, "\u3054\u5909\u66F4\u30FB\u30AD\u30E3\u30F3\u30BB\u30EB\u306F\u3001Instagram\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304B\u3089\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tkc__sectitle"
  }, "\u304A\u5E97\u306E\u60C5\u5831"), /*#__PURE__*/React.createElement(Card, {
    pad: true,
    flat: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkc__inforow"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tkc__infoval"
  }, shop.address, /*#__PURE__*/React.createElement("span", null, "\u4E16\u7530\u8C37\u4EE3\u7530\u99C5\u304B\u3089\u5F92\u6B693\u5206"))), /*#__PURE__*/React.createElement("div", {
    className: "tkc__inforow"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tkc__infoval"
  }, shop.phone)), /*#__PURE__*/React.createElement("div", {
    className: "tkc__inforow"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tkc__infoval"
  }, shop.hours)))), /*#__PURE__*/React.createElement("div", {
    className: "tkc__powered"
  }, "Powered by ", /*#__PURE__*/React.createElement("b", null, "torioki", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, ".")))));
}
window.ConfirmApp = ConfirmApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-confirm/Confirm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/App.jsx
try { (() => {
// App: real API wiring per the Torioki API spec.
//  - GET /api/reservations polled every 4s
//  - PATCH /api/reservations on chip tap (optimistic update)
//  - POST /api/simulate then refetch
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const POLL_MS = 4000;
function SummaryBar({
  reservations,
  today
}) {
  const {
    SummaryStat,
    Card
  } = window.ToriokiDesignSystem_4ced92;
  const active = reservations.filter(r => r.status !== "キャンセル");
  const todayCount = active.filter(r => r.pickupDate === today && r.status !== "受渡済").length;
  const unconfirmed = reservations.filter(r => r.status === "未確認").length;
  const upcoming = active.filter(r => r.pickupDate && r.pickupDate > today).length;
  return /*#__PURE__*/React.createElement(Card, {
    pad: true,
    className: "tk-summary"
  }, /*#__PURE__*/React.createElement(SummaryStat, {
    value: todayCount,
    unit: "\u4EF6",
    label: "\u672C\u65E5\u306E\u304A\u6E21\u3057",
    tone: "accent"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-summary__div"
  }), /*#__PURE__*/React.createElement(SummaryStat, {
    value: unconfirmed,
    unit: "\u4EF6",
    label: "\u672A\u78BA\u8A8D",
    tone: unconfirmed ? "alert" : "default"
  }), /*#__PURE__*/React.createElement("span", {
    className: "tk-summary__div"
  }), /*#__PURE__*/React.createElement(SummaryStat, {
    value: upcoming,
    unit: "\u4EF6",
    label: "\u4ECA\u5F8C\u306E\u4E88\u5B9A"
  }));
}
function App() {
  const ORDER = window.TK_STATUS_ORDER;
  const {
    nowHHMM
  } = window.TKfmt;
  // production: derive from real `new Date()`. Prototype dataset is dated around TORIOKI_SEED.today.
  const today = window.TORIOKI_SEED.today;
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [activeCustomer, setActiveCustomer] = useState(null);
  const [theme, setTheme] = useState("auto");
  const [lastUpdated, setLastUpdated] = useState("—");
  const activeRef = useRef(null);
  activeRef.current = activeCustomer;

  // ---- data load (shared by initial load, poll, manual refresh) ----
  const load = useCallback(async (mode = "poll") => {
    if (mode === "manual") setRefreshing(true);
    try {
      const {
        reservations,
        messages
      } = await window.ToriokiAPI.getAll();
      setReservations(reservations);
      setMessages(messages);
      setError(false);
      setLastUpdated(nowHHMM());
      if (!activeRef.current && reservations.length) setActiveCustomer(reservations[0].customer);
    } catch (e) {
      setError(true);
    } finally {
      if (mode === "first") setLoading(false);
      if (mode === "manual") setTimeout(() => setRefreshing(false), 300);
    }
  }, [nowHHMM]);

  // initial + polling
  useEffect(() => {
    load("first");
    const id = setInterval(() => {
      if (!document.hidden) load("poll");
    }, POLL_MS);
    const onVis = () => {
      if (!document.hidden) load("poll");
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [load]);

  // re-render lucide icons after content changes
  useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    return () => clearTimeout(t);
  });
  const toggleTheme = () => {
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = theme === "auto" ? sysDark ? "dark" : "light" : theme;
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  // ---- status change: optimistic update + PATCH ----
  const cycleStatus = useCallback(async id => {
    let prevStatus = null;
    setReservations(rs => rs.map(r => {
      if (r.id !== id) return r;
      prevStatus = r.status;
      return {
        ...r,
        status: ORDER[(ORDER.indexOf(r.status) + 1) % ORDER.length]
      };
    }));
    const next = (() => {
      const r = reservations.find(x => x.id === id);
      return r ? ORDER[(ORDER.indexOf(r.status) + 1) % ORDER.length] : null;
    })();
    if (!next) return;
    try {
      await window.ToriokiAPI.patchStatus(id, next);
    } catch (e) {
      // revert + reconcile from server
      setReservations(rs => rs.map(r => r.id === id && prevStatus ? {
        ...r,
        status: prevStatus
      } : r));
      load("poll");
    }
  }, [reservations, ORDER, load]);

  // ---- simulate: POST then refetch ----
  const simulate = async (text, customer) => {
    setSending(true);
    try {
      await window.ToriokiAPI.simulate(text, customer);
      setActiveCustomer(customer);
      await load("poll");
    } catch (e) {
      setError(true);
    } finally {
      setSending(false);
    }
  };
  const customers = [...new Set([...reservations.map(r => r.customer), ...messages.map(m => m.customer), ...(activeCustomer ? [activeCustomer] : [])])];
  const effTheme = theme === "auto" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : theme;
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-app"
  }, /*#__PURE__*/React.createElement(Header, {
    theme: effTheme,
    onToggleTheme: toggleTheme,
    onRefresh: () => load("manual"),
    lastUpdated: lastUpdated,
    refreshing: refreshing
  }), error && /*#__PURE__*/React.createElement("div", {
    className: "tk-app__error",
    role: "alert"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wifi-off",
    style: {
      width: 15,
      height: 15
    }
  }), "\u30B5\u30FC\u30D0\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3002\u518D\u8A66\u884C\u3057\u3066\u3044\u307E\u3059\u2026"), /*#__PURE__*/React.createElement("main", {
    className: "tk-app__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-col tk-col--ledger"
  }, /*#__PURE__*/React.createElement(SummaryBar, {
    reservations: reservations,
    today: today
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-panel__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tk-panel__title"
  }, "\u53D6\u308A\u7F6E\u304D\u53F0\u5E33"), /*#__PURE__*/React.createElement("span", {
    className: "tk-panel__sub tabular"
  }, reservations.filter(r => r.status !== "キャンセル" && r.status !== "受渡済").length, "\u4EF6 \u9032\u884C\u4E2D")), /*#__PURE__*/React.createElement(Ledger, {
    reservations: reservations,
    today: today,
    loading: loading,
    activeCustomer: activeCustomer,
    onCycleStatus: cycleStatus,
    onOpenThread: setActiveCustomer
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "tk-col tk-col--dm"
  }, /*#__PURE__*/React.createElement(DMPanel, {
    customer: activeCustomer,
    messages: messages,
    customers: customers,
    sending: sending,
    onChangeCustomer: setActiveCustomer,
    onSimulate: simulate
  }))));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/DMPanel.jsx
try { (() => {
// DM panel: thread for the active customer + 動作確認 (simulate) composer.
function DMPanel({
  customer,
  messages,
  customers,
  sending,
  onChangeCustomer,
  onSimulate
}) {
  const {
    MessageBubble,
    Avatar,
    Button,
    Input,
    Badge
  } = window.ToriokiDesignSystem_4ced92;
  const {
    isoToHHMM
  } = window.TKfmt;
  const [text, setText] = React.useState("");
  const scrollRef = React.useRef(null);
  const thread = messages.filter(m => m.customer === customer);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [thread.length, customer]);
  const send = () => {
    const t = text.trim();
    if (!t || sending) return;
    onSimulate(t, customer);
    setText("");
  };

  // First render before the initial GET resolves: no customer selected yet.
  if (!customer) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tk-dm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tk-dm__head"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "\u2026",
      size: "md"
    }), /*#__PURE__*/React.createElement("div", {
      className: "tk-dm__headtext"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tk-dm__name",
      style: {
        color: "var(--text-4)"
      }
    }, "\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"))), /*#__PURE__*/React.createElement("div", {
      className: "tk-dm__thread"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tk-dm__empty"
    }, "\u53F0\u5E33\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-dm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-dm__head"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: customer,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-dm__headtext"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-dm__name"
  }, customer), /*#__PURE__*/React.createElement("span", {
    className: "tk-dm__channel"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "at-sign",
    style: {
      width: 12,
      height: 12
    }
  }), " Instagram DM")), /*#__PURE__*/React.createElement("select", {
    className: "tk-dm__switch",
    value: customer,
    onChange: e => onChangeCustomer(e.target.value),
    "aria-label": "\u304A\u5BA2\u69D8\u3092\u5207\u308A\u66FF\u3048"
  }, customers.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "tk-dm__thread",
    ref: scrollRef
  }, thread.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "tk-dm__empty"
  }, "\u3053\u306E\u304A\u5BA2\u69D8\u3068\u306EDM\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002"), thread.map(m => /*#__PURE__*/React.createElement(MessageBubble, {
    key: m.id,
    direction: m.direction,
    text: m.text,
    time: isoToHHMM(m.at),
    auto: m.direction === "out"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tk-dm__composer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-dm__composerlabel"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "flask-conical",
    style: {
      width: 13,
      height: 13
    }
  }), "\u52D5\u4F5C\u78BA\u8A8D \u2014 \u64EC\u4F3CDM\u3092\u9001\u4FE1"), /*#__PURE__*/React.createElement("div", {
    className: "tk-dm__composerrow"
  }, /*#__PURE__*/React.createElement(Input, {
    multiline: true,
    rows: 2,
    value: text,
    placeholder: "\u4F8B\uFF09\u30D0\u30B2\u30C3\u30C8\u30921\u672C\u3001\u660E\u65E5\u306E\u5915\u65B9\u306B\u53D6\u308A\u7F6E\u304D\u3067\u304D\u307E\u3059\u304B\uFF1F",
    onChange: e => setText(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) send();
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: send,
    disabled: !text.trim() || sending,
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": sending ? "loader" : "send",
      className: sending ? "tk-spin" : "",
      style: {
        width: 16,
        height: 16
      }
    })
  }, sending ? "送信中" : "送信"))));
}
window.DMPanel = DMPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/DMPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/Header.jsx
try { (() => {
// Header bar: wordmark, one-line description, refresh + theme toggle.
function Header({
  theme,
  onToggleTheme,
  onRefresh,
  lastUpdated,
  refreshing
}) {
  const {
    IconButton
  } = window.ToriokiDesignSystem_4ced92;
  return /*#__PURE__*/React.createElement("header", {
    className: "tk-app__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "tk-brand__mark",
    src: "../../assets/mark.svg",
    alt: "",
    width: "28",
    height: "28"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-brand__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-brand__name"
  }, "torioki", /*#__PURE__*/React.createElement("span", {
    className: "tk-brand__dot"
  }, ".")), /*#__PURE__*/React.createElement("span", {
    className: "tk-brand__desc"
  }, "DM\u306E\u53D6\u308A\u7F6E\u304D\u3092\u3001\u81EA\u52D5\u3067\u53F0\u5E33\u306B\u3002"))), /*#__PURE__*/React.createElement("div", {
    className: "tk-app__headeractions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-updated tabular"
  }, "\u6700\u7D42\u66F4\u65B0 ", lastUpdated), /*#__PURE__*/React.createElement(IconButton, {
    label: "\u53F0\u5E33\u3092\u66F4\u65B0",
    bordered: true,
    onClick: onRefresh
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "refresh-cw",
    className: refreshing ? "tk-spin" : "",
    style: {
      width: 17,
      height: 17
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: theme === "dark" ? "ライトモードへ" : "ダークモードへ",
    bordered: true,
    onClick: onToggleTheme
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": theme === "dark" ? "sun" : "moon",
    style: {
      width: 17,
      height: 17
    }
  }))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/Ledger.jsx
try { (() => {
// Ledger (取り置き台帳): reservations grouped by pickup date.
const TK_STATUS_ORDER = ["未確認", "確定", "受渡済", "キャンセル"];
function ReservationItem({
  r,
  onCycleStatus,
  onOpenThread,
  active
}) {
  const {
    StatusChip,
    ConfidenceBadge,
    Avatar
  } = window.ToriokiDesignSystem_4ced92;
  const {
    itemSummary
  } = window.TKfmt;
  const hasNote = r.notes && r.notes.length > 0;
  const dimmed = r.status === "受渡済" || r.status === "キャンセル";
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-resv" + (dimmed ? " is-dimmed" : "") + (active ? " is-active" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "tk-resv__main",
    onClick: () => onOpenThread(r.customer),
    "aria-label": `${r.customer} のDMを開く`
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-resv__time tabular"
  }, r.pickupTime || "—:—"), /*#__PURE__*/React.createElement(Avatar, {
    name: r.customer,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tk-resv__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-resv__cust"
  }, r.customer), /*#__PURE__*/React.createElement("div", {
    className: "tk-resv__items"
  }, itemSummary(r.items)), hasNote && /*#__PURE__*/React.createElement("div", {
    className: "tk-resv__note"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "alert-circle",
    style: {
      width: 14,
      height: 14,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, r.notes.join(" / "))), /*#__PURE__*/React.createElement("div", {
    className: "tk-resv__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "#", r.id.replace("r-", "")), /*#__PURE__*/React.createElement(ConfidenceBadge, {
    level: r.confidence
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tk-resv__action"
  }, /*#__PURE__*/React.createElement(StatusChip, {
    value: r.status,
    interactive: true,
    onClick: () => onCycleStatus(r.id)
  })));
}
function LedgerGroup({
  group,
  today,
  onCycleStatus,
  onOpenThread,
  activeCustomer
}) {
  const {
    groupLabel,
    relKind
  } = window.TKfmt;
  const kind = relKind(group.date, today);
  return /*#__PURE__*/React.createElement("section", {
    className: "tk-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tk-group__head tk-group__head--" + kind
  }, /*#__PURE__*/React.createElement("span", {
    className: "tk-group__label"
  }, groupLabel(group.date, today)), /*#__PURE__*/React.createElement("span", {
    className: "tk-group__count tabular"
  }, group.items.length, "\u4EF6")), /*#__PURE__*/React.createElement("div", {
    className: "tk-group__items"
  }, group.items.map(r => /*#__PURE__*/React.createElement(ReservationItem, {
    key: r.id,
    r: r,
    today: today,
    active: activeCustomer === r.customer,
    onCycleStatus: onCycleStatus,
    onOpenThread: onOpenThread
  }))));
}
function Ledger({
  reservations,
  today,
  loading,
  onCycleStatus,
  onOpenThread,
  activeCustomer
}) {
  const {
    EmptyState,
    Skeleton
  } = window.ToriokiDesignSystem_4ced92;
  const {
    groupByDate
  } = window.TKfmt;
  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tk-ledger__loading"
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
      className: "tk-resv tk-resv--skel",
      key: i
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: 42,
      height: 16
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: 38,
      height: 38,
      radius: 999
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "45%",
      height: 14
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "70%",
      height: 12
    })), /*#__PURE__*/React.createElement(Skeleton, {
      width: 72,
      height: 30,
      radius: 999
    }))));
  }
  if (!reservations.length) {
    return /*#__PURE__*/React.createElement(EmptyState, {
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "inbox",
        style: {
          width: 22,
          height: 22
        }
      }),
      title: "\u307E\u3060\u53D6\u308A\u7F6E\u304D\u306F\u3042\u308A\u307E\u305B\u3093",
      description: "Instagram\u306EDM\u304C\u5C4A\u304F\u3068\u3001\u81EA\u52D5\u3067\u89E3\u6790\u3057\u3066\u3053\u3053\u306B\u8A18\u9332\u3057\u307E\u3059\u3002\u4E0B\u306E\u300C\u52D5\u4F5C\u78BA\u8A8D\u300D\u304B\u3089\u8A66\u305B\u307E\u3059\u3002"
    });
  }
  const groups = groupByDate(reservations);
  return /*#__PURE__*/React.createElement("div", {
    className: "tk-ledger"
  }, groups.map(g => /*#__PURE__*/React.createElement(LedgerGroup, {
    key: g.date || "none",
    group: g,
    today: today,
    activeCustomer: activeCustomer,
    onCycleStatus: onCycleStatus,
    onOpenThread: onOpenThread
  })));
}
window.Ledger = Ledger;
window.TK_STATUS_ORDER = TK_STATUS_ORDER;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/Ledger.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/api.js
try { (() => {
// ============================================================
// Torioki API client — matches the API spec exactly.
// Same-origin, relative paths, JSON. Framework-agnostic.
//
// Production (React/TS): port this to src/lib/api.ts unchanged —
// the endpoints, methods, and shapes are the contract.
// ============================================================
(function () {
  async function toJSON(res) {
    if (!res.ok) {
      const err = new Error("Torioki API " + res.status + " " + res.url);
      err.status = res.status;
      throw err;
    }
    return res.status === 204 ? null : res.json();
  }
  const ToriokiAPI = {
    // 1) GET /api/reservations
    //    → { reservations: Reservation[], messages: Message[] }
    //    reservations sorted by pickupDate asc, messages by at asc.
    async getAll(signal) {
      const res = await fetch("/api/reservations", {
        headers: {
          Accept: "application/json"
        },
        signal
      });
      return toJSON(res);
    },
    // 2) PATCH /api/reservations { id, status } → updated Reservation (404 if missing)
    async patchStatus(id, status) {
      const res = await fetch("/api/reservations", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id,
          status
        })
      });
      return toJSON(res);
    },
    // 3) POST /api/simulate { text, customer? } → { parsed, reply }
    //    Caller should re-run getAll() afterwards to reflect the new reservation.
    async simulate(text, customer) {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(customer ? {
          text,
          customer
        } : {
          text
        })
      });
      return toJSON(res);
    }
  };
  window.ToriokiAPI = ToriokiAPI;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/api.js", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/data.js
try { (() => {
// Torioki dashboard — mock data (mirrors the real API shape).
// Reservation / Message types from the brief.
window.TORIOKI_SEED = {
  today: "2026-06-11",
  // pretend "now" for grouping
  reservations: [{
    id: "r-0042",
    customer: "山田 あさ",
    items: [{
      name: "クロワッサン",
      quantity: 2
    }, {
      name: "カンパーニュ",
      quantity: 1
    }],
    pickupDate: "2026-06-11",
    pickupTime: "10:30",
    status: "未確認",
    confidence: "high",
    notes: []
  }, {
    id: "r-0041",
    customer: "佐藤 けい",
    items: [{
      name: "あんバターサンド",
      quantity: 3
    }],
    pickupDate: "2026-06-11",
    pickupTime: "16:00",
    status: "確定",
    confidence: "high",
    notes: []
  }, {
    id: "r-0040",
    customer: "鈴木 みのり",
    items: [{
      name: "食パン（1.5斤）",
      quantity: 1
    }],
    pickupDate: "2026-06-11",
    pickupTime: null,
    status: "未確認",
    confidence: "low",
    notes: ["受取時間が読み取れませんでした"]
  }, {
    id: "r-0039",
    customer: "高橋 ゆう",
    items: [{
      name: "ガトーショコラ",
      quantity: 1
    }, {
      name: "焼き菓子セット",
      quantity: 2
    }],
    pickupDate: "2026-06-12",
    pickupTime: "11:00",
    status: "確定",
    confidence: "medium",
    notes: ["「個数は当日相談」とのメッセージあり"]
  }, {
    id: "r-0038",
    customer: "田中 そう",
    items: [{
      name: "バゲット",
      quantity: 2
    }],
    pickupDate: "2026-06-13",
    pickupTime: "09:30",
    status: "確定",
    confidence: "high",
    notes: []
  }, {
    id: "r-0035",
    customer: "伊藤 なな",
    items: [{
      name: "シュトーレン",
      quantity: 1
    }],
    pickupDate: "2026-06-10",
    pickupTime: "15:00",
    status: "受渡済",
    confidence: "high",
    notes: []
  }],
  messages: [{
    id: "m-1",
    customer: "山田 あさ",
    direction: "in",
    text: "こんにちは！明日の朝、クロワッサンを2つとカンパーニュを1つ取り置きできますか？",
    at: "10:28"
  }, {
    id: "m-2",
    customer: "山田 あさ",
    direction: "out",
    text: "ありがとうございます！クロワッサン×2、カンパーニュ×1を承りました。6/11(水) 10:30 以降にお渡しできます。当日お気をつけてお越しください。",
    at: "10:28",
    auto: true
  }, {
    id: "m-3",
    customer: "山田 あさ",
    direction: "in",
    text: "助かります、よろしくお願いします！",
    at: "10:29"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/data.js", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/helpers.js
try { (() => {
// Date / formatting helpers for the Torioki dashboard.
(function () {
  const WD = ["日", "月", "火", "水", "木", "金", "土"];
  function parseYMD(s) {
    if (!s) return null;
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
  function dayDiff(a, b) {
    const ms = parseYMD(a) - parseYMD(b);
    return Math.round(ms / 86400000);
  }

  // "今日 6/11(水)" style label, relative to `today`.
  function groupLabel(dateStr, today) {
    if (!dateStr) return "日付未確定";
    const dt = parseYMD(dateStr);
    const diff = dayDiff(dateStr, today);
    const md = `${dt.getMonth() + 1}/${dt.getDate()}(${WD[dt.getDay()]})`;
    let rel = "";
    if (diff === 0) rel = "今日 ";else if (diff === 1) rel = "明日 ";else if (diff === -1) rel = "昨日 ";
    return rel + md;
  }
  function relKind(dateStr, today) {
    if (!dateStr) return "unknown";
    const diff = dayDiff(dateStr, today);
    if (diff < 0) return "past";
    if (diff === 0) return "today";
    return "future";
  }
  function itemSummary(items) {
    return items.map(i => `${i.name} ×${i.quantity}`).join("、");
  }

  // ISO8601 → "HH:MM" (messages carry ISO `at` per the API spec).
  function isoToHHMM(iso) {
    if (!iso) return "";
    if (!iso.includes("T")) return iso; // already HH:MM
    const d = new Date(iso);
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  function nowHHMM() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }

  // Group reservations by pickupDate, sorted; null dates last.
  function groupByDate(reservations) {
    const map = new Map();
    for (const r of reservations) {
      const key = r.pickupDate || "__none__";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(r);
    }
    const keys = [...map.keys()].sort((a, b) => {
      if (a === "__none__") return 1;
      if (b === "__none__") return -1;
      return a < b ? -1 : 1;
    });
    return keys.map(k => ({
      date: k === "__none__" ? null : k,
      items: map.get(k).sort((x, y) => (x.pickupTime || "99:99").localeCompare(y.pickupTime || "99:99"))
    }));
  }
  window.TKfmt = {
    groupLabel,
    relKind,
    itemSummary,
    groupByDate,
    isoToHHMM,
    nowHHMM,
    WD
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/helpers.js", error: String((e && e.message) || e) }); }

// ui_kits/torioki-dashboard/mock-server.js
try { (() => {
// ============================================================
// MOCK BACKEND — prototype only.
// Intercepts window.fetch and serves /api/* from an in-memory DB,
// honoring the Torioki API contract (GET / PATCH / POST simulate).
//
// ⚠️ PRODUCTION: delete this file and its <script> tag. The real
// server implements the same contract; api.js then hits it directly.
// The DM-parsing logic below (parseDM / buildReply) lives SERVER-SIDE
// in production — it is here only to make the prototype self-contained.
// ============================================================
(function () {
  const seed = window.TORIOKI_SEED;
  const TODAY = seed.today; // pretend "now" date for the mock dataset

  function isoAt(hhmm) {
    if (typeof hhmm === "string" && hhmm.includes("T")) return hhmm;
    const [h, m] = String(hhmm || "00:00").split(":").map(Number);
    const [y, mo, d] = TODAY.split("-").map(Number);
    return new Date(y, mo - 1, d, h || 0, m || 0).toISOString();
  }

  // mutable in-memory DB
  const DB = {
    reservations: structuredClone(seed.reservations),
    messages: seed.messages.map(m => ({
      id: m.id,
      customer: m.customer,
      direction: m.direction,
      text: m.text,
      at: isoAt(m.at)
    }))
  };
  let seq = 1000;

  // ---- sorting per contract ----
  const byDateAsc = (a, b) => (a.pickupDate || "9999-99-99").localeCompare(b.pickupDate || "9999-99-99");
  const byAtAsc = (a, b) => a.at.localeCompare(b.at);

  // ---- DM parsing (SERVER-SIDE in production) ----
  const PRODUCTS = ["クロワッサン", "カンパーニュ", "バゲット", "食パン", "あんバターサンド", "ガトーショコラ", "シュトーレン", "焼き菓子", "プリン", "スコーン", "マフィン", "ベーグル", "デニッシュ"];
  const KANJI = {
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10
  };
  function toNum(s) {
    if (KANJI[s]) return KANJI[s];
    const z = String(s).replace(/[０-９]/g, c => "0123456789"["０１２３４５６７８９".indexOf(c)]);
    const n = parseInt(z, 10);
    return isNaN(n) ? 1 : n;
  }
  function parseDM(text) {
    const found = PRODUCTS.filter(p => text.includes(p));
    const qtyMatch = text.match(/([0-9０-９一二三四五六七八九十]+)\s*(つ|個|本|斤|セット|枚)?/);
    const qty = qtyMatch ? toNum(qtyMatch[1]) : 1;
    const items = found.length ? found.map((name, i) => ({
      name,
      quantity: i === 0 ? qty : 1
    })) : [{
      name: "商品（要確認）",
      quantity: qty
    }];
    const timeMatch = text.match(/([0-9]{1,2})\s*[:時]\s*([0-9]{0,2})/);
    const pickupTime = timeMatch ? `${String(+timeMatch[1]).padStart(2, "0")}:${(timeMatch[2] || "00").padStart(2, "0")}` : null;
    const notes = [];
    let confidence = "high";
    if (!found.length) {
      confidence = "low";
      notes.push("商品名を特定できませんでした");
    } else if (!pickupTime) {
      confidence = "medium";
      notes.push("受取時間が読み取れませんでした");
    }
    // simple relative-date read
    let pickupDate = TODAY;
    if (text.includes("明日")) pickupDate = addDays(TODAY, 1);else if (text.includes("明後日")) pickupDate = addDays(TODAY, 2);
    return {
      items,
      pickupDate,
      pickupTime,
      confidence,
      notes
    };
  }
  function addDays(ymd, n) {
    const [y, m, d] = ymd.split("-").map(Number);
    const dt = new Date(y, m - 1, d + n);
    return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
  }
  function buildReply(parsed, customer) {
    const list = parsed.items.map(i => `${i.name}×${i.quantity}`).join("、");
    if (parsed.confidence === "low") return `${customer}さま、ありがとうございます！内容を確認したいのですが、ご希望の商品とお受け取り日時をもう一度教えていただけますか？`;
    const when = parsed.pickupTime ? `${parsed.pickupTime} 以降に` : "ご都合のよいお時間に";
    return `${customer}さま、ありがとうございます！${list} を承りました。${when}お渡しできます。お気をつけてお越しください。`;
  }

  // ---- fetch interceptor ----
  const realFetch = window.fetch ? window.fetch.bind(window) : null;
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const json = (body, status = 200) => new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json"
    }
  });
  window.fetch = async function (input, init = {}) {
    const url = typeof input === "string" ? input : input && input.url || "";
    const path = url.replace(/^https?:\/\/[^/]+/, "");
    if (!path.startsWith("/api/")) {
      if (realFetch) return realFetch(input, init);
      throw new Error("no network in prototype: " + url);
    }
    const method = (init.method || "GET").toUpperCase();
    await delay(160 + Math.random() * 120); // simulate latency

    // GET /api/reservations
    if (path === "/api/reservations" && method === "GET") {
      return json({
        reservations: [...DB.reservations].sort(byDateAsc),
        messages: [...DB.messages].sort(byAtAsc)
      });
    }

    // PATCH /api/reservations
    if (path === "/api/reservations" && method === "PATCH") {
      const {
        id,
        status
      } = JSON.parse(init.body || "{}");
      const r = DB.reservations.find(x => x.id === id);
      if (!r) return json({
        error: "not found"
      }, 404);
      r.status = status;
      return json(r);
    }

    // POST /api/simulate
    if (path === "/api/simulate" && method === "POST") {
      const {
        text,
        customer = "新規のお客様"
      } = JSON.parse(init.body || "{}");
      const at = new Date().toISOString();
      const parsed = parseDM(text);
      const reply = buildReply(parsed, customer);
      DB.messages.push({
        id: "m-" + ++seq,
        customer,
        direction: "in",
        text,
        at
      });
      DB.messages.push({
        id: "m-" + ++seq,
        customer,
        direction: "out",
        text: reply,
        at
      });
      DB.reservations.push({
        id: "r-" + ++seq,
        customer,
        items: parsed.items,
        pickupDate: parsed.pickupDate,
        pickupTime: parsed.pickupTime,
        status: "未確認",
        confidence: parsed.confidence,
        notes: parsed.notes
      });
      return json({
        parsed,
        reply
      });
    }
    return json({
      error: "unknown endpoint"
    }, 404);
  };
  console.info("[Torioki] mock backend active — remove mock-server.js in production.");
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-dashboard/mock-server.js", error: String((e && e.message) || e) }); }

// ui_kits/torioki-notifications/Notifications.jsx
try { (() => {
// Torioki — Notifications & History.
// Production endpoints (NOT in current API spec):
//   GET /api/notifications → Notification[]   (and PATCH read state)
//   GET /api/reservations?status=受渡済,キャンセル&before=...  (history filter)
const {
  useState,
  useEffect
} = React;
const NOTIFS = [{
  id: "n1",
  type: "new",
  customer: "山田 あさ",
  text: "<b>山田 あさ</b> さんから新しい取り置き（クロワッサン×2 ほか）",
  at: "5分前",
  group: "今日",
  unread: true
}, {
  id: "n2",
  type: "attn",
  customer: "鈴木 みのり",
  text: "<b>鈴木 みのり</b> さんの予約は受取時間が読み取れませんでした。確認してください。",
  at: "32分前",
  group: "今日",
  unread: true
}, {
  id: "n3",
  type: "remind",
  customer: "佐藤 けい",
  text: "本日 16:00 <b>佐藤 けい</b> さんのお渡し予定です。",
  at: "1時間前",
  group: "今日",
  unread: false
}, {
  id: "n4",
  type: "done",
  customer: "伊藤 なな",
  text: "<b>伊藤 なな</b> さんへのお渡しが完了しました。",
  at: "昨日 15:10",
  group: "今週",
  unread: false
}, {
  id: "n5",
  type: "new",
  customer: "高橋 ゆう",
  text: "<b>高橋 ゆう</b> さんから新しい取り置き（ガトーショコラ ほか）",
  at: "昨日 11:02",
  group: "今週",
  unread: false
}];
const HISTORY = [{
  id: "r-0035",
  customer: "伊藤 なな",
  items: "シュトーレン ×1",
  date: "6/11(水)",
  status: "受渡済"
}, {
  id: "r-0031",
  customer: "中村 ひかり",
  items: "バゲット ×2、スコーン ×3",
  date: "6/10(火)",
  status: "受渡済"
}, {
  id: "r-0028",
  customer: "小林 そら",
  items: "食パン ×1",
  date: "6/9(月)",
  status: "キャンセル"
}, {
  id: "r-0024",
  customer: "加藤 みお",
  items: "あんバターサンド ×4",
  date: "6/8(日)",
  status: "受渡済"
}, {
  id: "r-0019",
  customer: "山口 れん",
  items: "マフィン ×2",
  date: "6/7(土)",
  status: "受渡済"
}];
const ICO = {
  new: "inbox",
  attn: "alert-circle",
  remind: "bell",
  done: "check"
};
function Notif({
  n
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tkn__item" + (n.unread ? " is-unread" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkn__ico tkn__ico--" + n.type
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ICO[n.type]
  })), /*#__PURE__*/React.createElement("div", {
    className: "tkn__itembody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkn__itemtext",
    dangerouslySetInnerHTML: {
      __html: n.text
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "tkn__itemtime tabular"
  }, n.at)));
}
function NotifApp() {
  const {
    IconButton,
    Badge,
    StatusChip,
    Avatar,
    Button
  } = window.ToriokiDesignSystem_4ced92;
  const [tab, setTab] = useState("notif");
  const [filter, setFilter] = useState("すべて");
  useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  });
  const unread = NOTIFS.filter(n => n.unread).length;
  const groups = [...new Set(NOTIFS.map(n => n.group))];
  const hist = HISTORY.filter(h => filter === "すべて" || h.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "tkn"
  }, /*#__PURE__*/React.createElement("header", {
    className: "tkn__header"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u623B\u308B",
    bordered: true,
    onClick: () => history.length > 1 ? history.back() : null
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 17,
      height: 17
    }
  })), /*#__PURE__*/React.createElement("h1", {
    className: "tkn__title"
  }, tab === "notif" ? "通知" : "履歴"), /*#__PURE__*/React.createElement("span", {
    className: "tkn__spacer"
  }), tab === "notif" && unread > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "\u3059\u3079\u3066\u65E2\u8AAD")), /*#__PURE__*/React.createElement("div", {
    className: "tkn__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkn__tabs",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tkn__tab" + (tab === "notif" ? " is-active" : ""),
    onClick: () => setTab("notif"),
    role: "tab",
    "aria-selected": tab === "notif"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 15,
      height: 15
    }
  }), " \u901A\u77E5", unread > 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: "count"
  }, unread)), /*#__PURE__*/React.createElement("button", {
    className: "tkn__tab" + (tab === "hist" ? " is-active" : ""),
    onClick: () => setTab("hist"),
    role: "tab",
    "aria-selected": tab === "hist"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "history",
    style: {
      width: 15,
      height: 15
    }
  }), " \u5C65\u6B74")), tab === "notif" ? /*#__PURE__*/React.createElement("div", null, groups.map(g => /*#__PURE__*/React.createElement("div", {
    className: "tkn__group",
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkn__grouplabel"
  }, g), /*#__PURE__*/React.createElement("div", {
    className: "tkn__list"
  }, NOTIFS.filter(n => n.group === g).map((n, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n.id
  }, /*#__PURE__*/React.createElement(Notif, {
    n: n
  }), i < arr.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "tkn__sep"
  }))))))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tkn__filters"
  }, ["すべて", "受渡済", "キャンセル"].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: "tkn__filter" + (filter === f ? " is-on" : ""),
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", null, hist.map(h => /*#__PURE__*/React.createElement("div", {
    className: "tkn__hrow",
    key: h.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "tkn__hdate tabular"
  }, h.date), /*#__PURE__*/React.createElement(Avatar, {
    name: h.customer,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tkn__hbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tkn__hcust"
  }, h.customer), /*#__PURE__*/React.createElement("div", {
    className: "tkn__hitems"
  }, h.items)), /*#__PURE__*/React.createElement(StatusChip, {
    value: h.status
  })))))));
}
window.NotifApp = NotifApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-notifications/Notifications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-onboarding/Onboarding.jsx
try { (() => {
// Torioki — Login & Onboarding flow.
// State machine: login → welcome(店舗情報) → hours → reply → done.
// Auth + setup are mocked. Production endpoints (NOT in the current API
// spec) are noted in the handoff: POST /api/auth/instagram, GET/PATCH
// /api/settings, POST /api/onboarding/complete.
const {
  useState,
  useEffect
} = React;
const STEPS = ["店舗情報", "営業時間", "自動返信"];
const DAYS = ["月", "火", "水", "木", "金", "土", "日"];
function Brand() {
  return /*#__PURE__*/React.createElement("div", {
    className: "tko__brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tko__brandrow"
  }, /*#__PURE__*/React.createElement("img", {
    className: "tko__mark",
    src: "../../assets/mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "tko__word"
  }, "torioki", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "tko__tagline"
  }, "DM\u306E\u53D6\u308A\u7F6E\u304D\u3092\u3001\u81EA\u52D5\u3067\u53F0\u5E33\u306B\u3002"));
}
function Login({
  onLogin
}) {
  const {
    Button,
    Input
  } = window.ToriokiDesignSystem_4ced92;
  const [email, setEmail] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "tko__card"
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("h1", {
    className: "tko__h"
  }, "\u30ED\u30B0\u30A4\u30F3"), /*#__PURE__*/React.createElement("p", {
    className: "tko__sub"
  }, "\u304A\u5E97\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u7D9A\u3051\u3066\u304F\u3060\u3055\u3044\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "tko__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onLogin,
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "at-sign",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "Instagram \u3067\u7D9A\u3051\u308B"), !email && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    block: true,
    onClick: () => setEmail(true),
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail",
      style: {
        width: 18,
        height: 18
      }
    })
  }, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3067\u7D9A\u3051\u308B")), email && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "tko__or"
  }, "\u307E\u305F\u306F"), /*#__PURE__*/React.createElement("div", {
    className: "tko__fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    type: "email",
    placeholder: "owner@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u30D1\u30B9\u30EF\u30FC\u30C9",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    block: true,
    onClick: onLogin
  }, "\u30ED\u30B0\u30A4\u30F3"))), /*#__PURE__*/React.createElement("p", {
    className: "tko__foot"
  }, "\u7D9A\u884C\u3059\u308B\u3068", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u5229\u7528\u898F\u7D04"), "\u3068", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"), "\u306B\u540C\u610F\u3057\u305F\u3082\u306E\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002"));
}
function Stepper({
  step
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tko__steps"
  }, STEPS.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "tko__pip" + (i < step ? " is-done" : i === step ? " is-current" : "")
  })));
}
function OnboardApp() {
  const {
    Button,
    Input,
    Toggle,
    Badge,
    MessageBubble,
    IconButton
  } = window.ToriokiDesignSystem_4ced92;
  const [screen, setScreen] = useState("login"); // login | onboard | done
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    instagram: "",
    phone: "",
    days: {
      月: true,
      火: true,
      水: false,
      木: true,
      金: true,
      土: true,
      日: false
    },
    open: "08:00",
    close: "18:00",
    replyOn: true,
    reply: "{name}さま、ありがとうございます！{items} を承りました。{time} 以降にお渡しできます。"
  });
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  });
  const next = () => step < STEPS.length - 1 ? setStep(step + 1) : setScreen("done");
  const back = () => step > 0 ? setStep(step - 1) : setScreen("login");
  const preview = form.reply.replaceAll("{name}", "山田").replaceAll("{items}", "クロワッサン×2").replaceAll("{time}", "10:30").replaceAll("{date}", "6/13(土)");
  if (screen === "login") {
    return /*#__PURE__*/React.createElement("div", {
      className: "tko"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tko__stage"
    }, /*#__PURE__*/React.createElement(Login, {
      onLogin: () => setScreen("onboard")
    })));
  }
  if (screen === "done") {
    return /*#__PURE__*/React.createElement("div", {
      className: "tko"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tko__stage"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tko__card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tko__check"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 30,
        height: 30
      }
    })), /*#__PURE__*/React.createElement("h1", {
      className: "tko__h"
    }, "\u6E96\u5099\u304C\u3067\u304D\u307E\u3057\u305F"), /*#__PURE__*/React.createElement("p", {
      className: "tko__sub"
    }, form.name || "お店", "\u306E\u53D6\u308A\u7F6E\u304D\u3092\u53D7\u3051\u4ED8\u3051\u3089\u308C\u307E\u3059\u3002DM\u304C\u5C4A\u304F\u3068\u81EA\u52D5\u3067\u53F0\u5E33\u306B\u8A18\u9332\u3055\u308C\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
      className: "tko__actions"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      block: true,
      onClick: () => {
        window.location.href = "../torioki-dashboard/index.html";
      },
      trailingIcon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "arrow-right",
        style: {
          width: 18,
          height: 18
        }
      })
    }, "\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9\u3092\u958B\u304F")))));
  }

  // onboard
  return /*#__PURE__*/React.createElement("div", {
    className: "tko"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tko__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tko__topbrand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark.svg",
    alt: ""
  }), "\u521D\u671F\u8A2D\u5B9A"), /*#__PURE__*/React.createElement(Stepper, {
    step: step
  })), /*#__PURE__*/React.createElement("div", {
    className: "tko__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tko__card tko__card--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tko__steplabel"
  }, "STEP ", step + 1, " / ", STEPS.length), step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: "tko__h",
    style: {
      textAlign: "left"
    }
  }, "\u304A\u5E97\u306E\u3053\u3068\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044"), /*#__PURE__*/React.createElement("p", {
    className: "tko__sub",
    style: {
      textAlign: "left",
      marginBottom: "var(--space-6)"
    }
  }, "\u53F0\u5E33\u3084\u9867\u5BA2\u5411\u3051\u30DA\u30FC\u30B8\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "tko__fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u5E97\u540D",
    placeholder: "\u3042\u304A\u305E\u3089\u30D1\u30F3\u5E97",
    value: form.name,
    onChange: e => set("name", e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "tko__grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Instagram \u30A2\u30AB\u30A6\u30F3\u30C8",
    placeholder: "@aozora_bakery",
    value: form.instagram,
    onChange: e => set("instagram", e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u96FB\u8A71\u756A\u53F7\uFF08\u4EFB\u610F\uFF09",
    placeholder: "03-1234-5678",
    value: form.phone,
    onChange: e => set("phone", e.target.value)
  })))), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: "tko__h",
    style: {
      textAlign: "left"
    }
  }, "\u55B6\u696D\u65E5\u3068\u6642\u9593"), /*#__PURE__*/React.createElement("p", {
    className: "tko__sub",
    style: {
      textAlign: "left",
      marginBottom: "var(--space-6)"
    }
  }, "\u304A\u6E21\u3057\u53EF\u80FD\u306A\u66DC\u65E5\u30FB\u6642\u9593\u5E2F\u306E\u5224\u5B9A\u306B\u4F7F\u3044\u307E\u3059\u3002\u3042\u3068\u304B\u3089\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "tko__fields"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tk-label",
    style: {
      marginBottom: "var(--space-2)"
    }
  }, "\u55B6\u696D\u65E5"), /*#__PURE__*/React.createElement("div", {
    className: "tko__days"
  }, DAYS.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    className: "tko__day" + (form.days[d] ? " is-on" : ""),
    onClick: () => set("days", {
      ...form.days,
      [d]: !form.days[d]
    }),
    "aria-pressed": form.days[d]
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "tko__grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u958B\u5E97",
    type: "time",
    value: form.open,
    onChange: e => set("open", e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u9589\u5E97",
    type: "time",
    value: form.close,
    onChange: e => set("close", e.target.value)
  })))), step === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: "tko__h",
    style: {
      textAlign: "left"
    }
  }, "\u81EA\u52D5\u8FD4\u4FE1\u3092\u8A2D\u5B9A"), /*#__PURE__*/React.createElement("p", {
    className: "tko__sub",
    style: {
      textAlign: "left",
      marginBottom: "var(--space-6)"
    }
  }, "DM\u3092\u53D7\u3051\u53D6\u308B\u3068\u3001AI\u304C\u5185\u5BB9\u3092\u89E3\u6790\u3057\u3066\u81EA\u52D5\u3067\u8FD4\u4FE1\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "tko__fields"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: form.replyOn,
    onChange: v => set("replyOn", v),
    label: "\u81EA\u52D5\u8FD4\u4FE1\u3092\u6709\u52B9\u306B\u3059\u308B"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: form.replyOn ? "accent" : "neutral",
    dot: true
  }, form.replyOn ? "ON" : "OFF")), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: form.replyOn ? 1 : 0.5,
      pointerEvents: form.replyOn ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u8FD4\u4FE1\u30E1\u30C3\u30BB\u30FC\u30B8",
    multiline: true,
    rows: 3,
    value: form.reply,
    onChange: e => set("reply", e.target.value),
    hint: "{name} {items} {time} \u306F\u5B9F\u969B\u306E\u5024\u306B\u7F6E\u304D\u63DB\u308F\u308A\u307E\u3059\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tko__preview"
  }, /*#__PURE__*/React.createElement(MessageBubble, {
    direction: "in",
    text: "\u30AF\u30ED\u30EF\u30C3\u30B5\u30F3\u30922\u3064\u53D6\u308A\u7F6E\u304D\u3067\u304D\u307E\u3059\u304B\uFF1F",
    time: "10:28"
  }), /*#__PURE__*/React.createElement(MessageBubble, {
    direction: "out",
    auto: true,
    text: preview,
    time: "10:28"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "tko__navrow"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: back,
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-left",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "\u623B\u308B"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: next,
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": step === STEPS.length - 1 ? "check" : "arrow-right",
      style: {
        width: 16,
        height: 16
      }
    })
  }, step === STEPS.length - 1 ? "完了する" : "次へ")))));
}
window.OnboardApp = OnboardApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-onboarding/Onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/torioki-settings/Settings.jsx
try { (() => {
// Torioki — Settings screen.
// State is local + dirty-tracked; in production each section maps to the
// settings API (see handoff notes). Save is mocked with a toast.
const {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback
} = React;
const WEEKDAYS = ["月", "火", "水", "木", "金", "土", "日"];
function timeOptions(from = 6, to = 22) {
  const out = [];
  for (let h = from; h <= to; h++) {
    for (const m of ["00", "30"]) out.push(`${String(h).padStart(2, "0")}:${m}`);
  }
  return out;
}
const TIMES = timeOptions();
const DEFAULTS = {
  store: {
    name: "あおぞらパン店",
    instagram: "@aozora_bakery",
    phone: "03-1234-5678",
    address: "東京都世田谷区..."
  },
  hours: WEEKDAYS.map((d, i) => ({
    day: d,
    open: i !== 2,
    from: "08:00",
    to: "18:00" // 水 closed by default
  })),
  reply: {
    enabled: true,
    high: "{name}さま、ありがとうございます！{items} を承りました。{date} {time} 以降にお渡しできます。お気をつけてお越しください。",
    low: "{name}さま、ありがとうございます！内容を確認したいのですが、ご希望の商品とお受け取り日時をもう一度教えていただけますか？"
  },
  pickup: {
    lead: "翌日以降",
    perSlot: "5"
  }
};
const SECTIONS = [{
  id: "store",
  label: "店舗情報",
  icon: "store"
}, {
  id: "hours",
  label: "営業時間",
  icon: "clock"
}, {
  id: "reply",
  label: "自動返信",
  icon: "message-circle"
}, {
  id: "pickup",
  label: "受け取り設定",
  icon: "shopping-bag"
}];
function Section({
  id,
  title,
  desc,
  children
}) {
  const {
    Card
  } = window.ToriokiDesignSystem_4ced92;
  return /*#__PURE__*/React.createElement(Card, {
    pad: true,
    as: "section",
    id: "sec-" + id
  }, /*#__PURE__*/React.createElement("div", {
    className: "tks-sec__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tks-sec__title"
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    className: "tks-sec__desc"
  }, desc)), /*#__PURE__*/React.createElement("div", {
    className: "tks-sec__body"
  }, children));
}
function StoreSection({
  v,
  set
}) {
  const {
    Input
  } = window.ToriokiDesignSystem_4ced92;
  return /*#__PURE__*/React.createElement(Section, {
    id: "store",
    title: "\u5E97\u8217\u60C5\u5831",
    desc: "\u53F0\u5E33\u3084\u9867\u5BA2\u5411\u3051\u30DA\u30FC\u30B8\u306B\u8868\u793A\u3055\u308C\u308B\u57FA\u672C\u60C5\u5831\u3067\u3059\u3002"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tks-logo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tks-logo__slot"
  }, v.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-2)",
      marginBottom: 4
    }
  }, "\u5E97\u8217\u30ED\u30B4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-4)"
    }
  }, "\u6B63\u65B9\u5F62\u30FB1MB\u307E\u3067\uFF08\u672C\u756A\u3067\u306F\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\uFF09"))), /*#__PURE__*/React.createElement("div", {
    className: "tks-grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u5E97\u540D",
    value: v.name,
    onChange: e => set("name", e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Instagram \u30A2\u30AB\u30A6\u30F3\u30C8",
    value: v.instagram,
    onChange: e => set("instagram", e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u96FB\u8A71\u756A\u53F7",
    value: v.phone,
    onChange: e => set("phone", e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u4F4F\u6240",
    value: v.address,
    onChange: e => set("address", e.target.value)
  })));
}
function HoursSection({
  v,
  set
}) {
  const {
    Toggle,
    Select
  } = window.ToriokiDesignSystem_4ced92;
  return /*#__PURE__*/React.createElement(Section, {
    id: "hours",
    title: "\u55B6\u696D\u6642\u9593",
    desc: "\u304A\u6E21\u3057\u53EF\u80FD\u306A\u6642\u9593\u5E2F\u306E\u5224\u5B9A\u306B\u4F7F\u308F\u308C\u307E\u3059\u3002\u5B9A\u4F11\u65E5\u306F\u53D7\u3051\u4ED8\u3051\u307E\u305B\u3093\u3002"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tks-hours"
  }, v.map((row, i) => /*#__PURE__*/React.createElement("div", {
    className: "tks-hours__row",
    key: row.day
  }, /*#__PURE__*/React.createElement("span", {
    className: "tks-hours__day"
  }, row.day), /*#__PURE__*/React.createElement(Toggle, {
    checked: row.open,
    onChange: on => set(i, "open", on),
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: row.open ? "var(--text-2)" : "var(--text-4)"
      }
    }, row.open ? "営業" : "定休")
  }), row.open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
    value: row.from,
    onChange: e => set(i, "from", e.target.value),
    options: TIMES,
    "aria-label": `${row.day} 開店`
  }), /*#__PURE__*/React.createElement("span", {
    className: "tks-hours__sep"
  }, "\u301C"), /*#__PURE__*/React.createElement(Select, {
    value: row.to,
    onChange: e => set(i, "to", e.target.value),
    options: TIMES,
    "aria-label": `${row.day} 閉店`
  })) : /*#__PURE__*/React.createElement("span", {
    className: "tks-hours__closed"
  }, "\u5B9A\u4F11\u65E5")))));
}
function ReplySection({
  v,
  set,
  store
}) {
  const {
    Toggle,
    Input,
    MessageBubble,
    Badge
  } = window.ToriokiDesignSystem_4ced92;
  const fill = tpl => tpl.replaceAll("{name}", "山田").replaceAll("{items}", "クロワッサン×2").replaceAll("{date}", "6/12(金)").replaceAll("{time}", "10:30");
  return /*#__PURE__*/React.createElement(Section, {
    id: "reply",
    title: "\u81EA\u52D5\u8FD4\u4FE1",
    desc: "DM\u3092\u53D7\u3051\u53D6\u3063\u305F\u3068\u304D\u3001AI\u304C\u89E3\u6790\u3057\u3066\u81EA\u52D5\u3067\u8FD4\u4FE1\u3057\u307E\u3059\u3002{ } \u306E\u5DEE\u3057\u8FBC\u307F\u8A9E\u306F\u5B9F\u969B\u306E\u5024\u306B\u7F6E\u304D\u63DB\u308F\u308A\u307E\u3059\u3002"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: v.enabled,
    onChange: on => set("enabled", on),
    label: "\u81EA\u52D5\u8FD4\u4FE1\u3092\u6709\u52B9\u306B\u3059\u308B"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: v.enabled ? "accent" : "neutral",
    dot: true
  }, v.enabled ? "稼働中" : "停止中")), /*#__PURE__*/React.createElement("div", {
    className: "tks-vars"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-3)",
      marginRight: 4
    }
  }, "\u5DEE\u3057\u8FBC\u307F\u8A9E:"), /*#__PURE__*/React.createElement("span", {
    className: "tks-var"
  }, "{name}"), /*#__PURE__*/React.createElement("span", {
    className: "tks-var"
  }, "{items}"), /*#__PURE__*/React.createElement("span", {
    className: "tks-var"
  }, "{date}"), /*#__PURE__*/React.createElement("span", {
    className: "tks-var"
  }, "{time}")), /*#__PURE__*/React.createElement("div", {
    className: "tks-reply"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      opacity: v.enabled ? 1 : 0.5,
      pointerEvents: v.enabled ? "auto" : "none"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u89E3\u6790\u3067\u304D\u305F\u3068\u304D\uFF08\u4FE1\u983C\u5EA6 high\uFF09",
    multiline: true,
    rows: 3,
    value: v.high,
    onChange: e => set("high", e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u78BA\u8A8D\u304C\u5FC5\u8981\u306A\u3068\u304D\uFF08\u4FE1\u983C\u5EA6 low\uFF09",
    multiline: true,
    rows: 3,
    value: v.low,
    onChange: e => set("low", e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "tks-reply__preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tks-reply__previewlabel"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "eye",
    style: {
      width: 13,
      height: 13
    }
  }), " \u30D7\u30EC\u30D3\u30E5\u30FC"), /*#__PURE__*/React.createElement(MessageBubble, {
    direction: "in",
    text: "\u30AF\u30ED\u30EF\u30C3\u30B5\u30F3\u30922\u3064\u3001\u660E\u65E5\u306E\u671D\u306B\u53D6\u308A\u7F6E\u304D\u3067\u304D\u307E\u3059\u304B\uFF1F",
    time: "10:28"
  }), /*#__PURE__*/React.createElement(MessageBubble, {
    direction: "out",
    auto: true,
    text: fill(v.high),
    time: "10:28"
  }))));
}
function PickupSection({
  v,
  set
}) {
  const {
    Select
  } = window.ToriokiDesignSystem_4ced92;
  return /*#__PURE__*/React.createElement(Section, {
    id: "pickup",
    title: "\u53D7\u3051\u53D6\u308A\u8A2D\u5B9A",
    desc: "\u53D6\u308A\u7F6E\u304D\u306E\u53D7\u3051\u4ED8\u3051\u6761\u4EF6\u3067\u3059\u3002"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tks-grid2"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u6700\u77ED\u306E\u53D7\u3051\u53D6\u308A",
    value: v.lead,
    onChange: e => set("lead", e.target.value),
    options: ["当日も可", "翌日以降", "2日後以降"]
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u540C\u4E00\u6642\u9593\u5E2F\u306E\u4E0A\u9650",
    value: v.perSlot,
    onChange: e => set("perSlot", e.target.value),
    options: [{
      value: "0",
      label: "上限なし"
    }, {
      value: "3",
      label: "3件まで"
    }, {
      value: "5",
      label: "5件まで"
    }, {
      value: "10",
      label: "10件まで"
    }]
  })));
}
function SettingsApp() {
  const {
    IconButton,
    Button
  } = window.ToriokiDesignSystem_4ced92;
  const [data, setData] = useState(() => structuredClone(DEFAULTS));
  const [saved, setSaved] = useState(() => structuredClone(DEFAULTS));
  const [active, setActive] = useState("store");
  const [toast, setToast] = useState(false);
  const [theme, setTheme] = useState("auto");
  const dirty = useMemo(() => JSON.stringify(data) !== JSON.stringify(saved), [data, saved]);
  useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  });
  const toggleTheme = () => {
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const cur = theme === "auto" ? sysDark ? "dark" : "light" : theme;
    const next = cur === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };
  const setStore = (k, val) => setData(d => ({
    ...d,
    store: {
      ...d.store,
      [k]: val
    }
  }));
  const setHours = (i, k, val) => setData(d => ({
    ...d,
    hours: d.hours.map((r, j) => j === i ? {
      ...r,
      [k]: val
    } : r)
  }));
  const setReply = (k, val) => setData(d => ({
    ...d,
    reply: {
      ...d.reply,
      [k]: val
    }
  }));
  const setPickup = (k, val) => setData(d => ({
    ...d,
    pickup: {
      ...d.pickup,
      [k]: val
    }
  }));
  const save = () => {
    // production: PATCH /api/settings  (see handoff)
    setSaved(structuredClone(data));
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };
  const discard = () => setData(structuredClone(saved));
  const jump = id => {
    setActive(id);
    const el = document.getElementById("sec-" + id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 84,
      behavior: "smooth"
    });
  };

  // scrollspy
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 130;
      let cur = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById("sec-" + s.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const effTheme = theme === "auto" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : theme;
  return /*#__PURE__*/React.createElement("div", {
    className: "tks"
  }, /*#__PURE__*/React.createElement("header", {
    className: "tks__header"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\u623B\u308B",
    bordered: true,
    onClick: () => history.length > 1 ? history.back() : null
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 17,
      height: 17
    }
  })), /*#__PURE__*/React.createElement("h1", {
    className: "tks__title"
  }, "\u8A2D\u5B9A"), /*#__PURE__*/React.createElement("span", {
    className: "tks__headerspacer"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: effTheme === "dark" ? "ライトモードへ" : "ダークモードへ",
    bordered: true,
    onClick: toggleTheme
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": effTheme === "dark" ? "sun" : "moon",
    style: {
      width: 17,
      height: 17
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tks__body"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "tks__nav",
    "aria-label": "\u8A2D\u5B9A\u30BB\u30AF\u30B7\u30E7\u30F3"
  }, SECTIONS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: "tks__navitem" + (active === s.id ? " is-active" : ""),
    onClick: () => jump(s.id)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon
  }), " ", s.label))), /*#__PURE__*/React.createElement("div", {
    className: "tks__content"
  }, /*#__PURE__*/React.createElement(StoreSection, {
    v: data.store,
    set: setStore
  }), /*#__PURE__*/React.createElement(HoursSection, {
    v: data.hours,
    set: setHours
  }), /*#__PURE__*/React.createElement(ReplySection, {
    v: data.reply,
    set: setReply,
    store: data.store
  }), /*#__PURE__*/React.createElement(PickupSection, {
    v: data.pickup,
    set: setPickup
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tks-savebar" + (dirty ? " is-shown" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "tks-savebar__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tks-savebar__msg"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pencil-line",
    className: "tks-savebar__dot",
    style: {
      width: 15,
      height: 15,
      color: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u672A\u4FDD\u5B58\u306E\u5909\u66F4\u304C\u3042\u308A\u307E\u3059")), /*#__PURE__*/React.createElement("span", {
    className: "tks-savebar__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: discard
  }, "\u53D6\u308A\u6D88\u3059"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: save,
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 16,
        height: 16
      }
    })
  }, "\u4FDD\u5B58\u3059\u308B")))), /*#__PURE__*/React.createElement("div", {
    className: "tks-toast" + (toast ? " is-shown" : ""),
    role: "status"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle-2",
    style: {
      width: 16,
      height: 16
    }
  }), " \u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F"));
}
window.SettingsApp = SettingsApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/torioki-settings/Settings.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ConfidenceBadge = __ds_scope.ConfidenceBadge;

__ds_ns.STATUS_KEYS = __ds_scope.STATUS_KEYS;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.SummaryStat = __ds_scope.SummaryStat;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.MessageBubble = __ds_scope.MessageBubble;

})();

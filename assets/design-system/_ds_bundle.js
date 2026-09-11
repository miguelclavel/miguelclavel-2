/* @ds-bundle: {"format":4,"namespace":"EditorialClarityDesignSystem_9cb24c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Reveal","sourcePath":"components/media/Reveal.jsx"},{"name":"WindowFrame","sourcePath":"components/media/WindowFrame.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"9ccee24b0cbe","components/core/Button.jsx":"8672db29f1e9","components/core/Card.jsx":"a7b260d506c9","components/core/Chip.jsx":"2f02fe2836ad","components/core/Eyebrow.jsx":"2cbfc418abf9","components/core/Icon.jsx":"ab0fd799d164","components/core/IconButton.jsx":"4f57a048db1b","components/core/Stat.jsx":"68f054d5a872","components/feedback/Dialog.jsx":"efe12b842981","components/feedback/Toast.jsx":"e3ef4a640836","components/feedback/Tooltip.jsx":"430a89a046ef","components/forms/Checkbox.jsx":"4c942bead0f5","components/forms/Input.jsx":"2f9ba12931e4","components/forms/Radio.jsx":"73da5d19f899","components/forms/Select.jsx":"40a2b750ce71","components/forms/Switch.jsx":"e653fc946735","components/layout/Hero.jsx":"0786cee3717e","components/layout/Section.jsx":"4293a48e50d9","components/media/Reveal.jsx":"cd995c9bd977","components/media/WindowFrame.jsx":"aa060023342d","components/navigation/Tabs.jsx":"65e0234d9a83","components/navigation/TopNav.jsx":"5abd880cb81c","ui_kits/case-study/App.jsx":"9633ad4c6423","ui_kits/case-study/BriefBand.jsx":"8ae2078e7c79","ui_kits/case-study/ContactBand.jsx":"bbe4b74f21aa","ui_kits/case-study/EvidenceBand.jsx":"4b8d9e5d2d33","ui_kits/case-study/OutcomeBand.jsx":"c47d84a8ea13","ui_kits/case-study/ProcessBand.jsx":"7a55b5106a8a","ui_kits/case-study/SiteFooter.jsx":"b18b7b4984b9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EditorialClarityDesignSystem_9cb24c = window.EditorialClarityDesignSystem_9cb24c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  status = 'neutral',
  children,
  style,
  ...rest
}) {
  const map = {
    neutral: {
      dot: 'var(--text-tertiary)',
      color: 'var(--text-secondary)'
    },
    positive: {
      dot: 'var(--status-positive)',
      color: 'var(--text-primary)'
    },
    caution: {
      dot: 'var(--status-caution)',
      color: 'var(--text-primary)'
    },
    negative: {
      dot: 'var(--status-negative)',
      color: 'var(--text-primary)'
    }
  };
  const s = map[status] || map.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-caption)',
      fontWeight: 500,
      color: s.color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: s.dot,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '9px 20px',
    fontSize: '15px'
  },
  md: {
    padding: '13px 28px',
    fontSize: '16px'
  },
  lg: {
    padding: '16px 34px',
    fontSize: '17px'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    minHeight: 'var(--tap-min)',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-system)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'default' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    opacity: disabled ? 0.4 : 1,
    transition: 'background-color var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease), transform var(--dur-fast) var(--ease)',
    transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
    ...(SIZES[size] || SIZES.md)
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--surface-secondary-btn)',
      color: 'var(--accent)',
      borderColor: 'var(--border-hairline)'
    },
    text: {
      background: hover && !disabled ? 'var(--surface-hover-subtle)' : 'transparent',
      color: 'var(--accent)',
      padding: '10px 16px',
      minHeight: 'var(--tap-min)'
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...(skins[variant] || skins.primary),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  onDark = false,
  padding = 'var(--space-7)',
  as: Tag = 'div',
  style,
  children,
  ...rest
}) {
  const light = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-hairline)',
    boxShadow: 'var(--shadow-card)'
  };
  const dark = {
    background: 'var(--surface-card-on-dark)',
    border: '1px solid transparent',
    boxShadow: 'var(--ring-on-dark)',
    color: 'var(--text-inverse)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      boxSizing: 'border-box',
      ...(onDark ? dark : light),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  tone = 'glass',
  children,
  style,
  ...rest
}) {
  const tones = {
    glass: {
      background: 'var(--surface-chip)',
      backdropFilter: 'var(--blur-chip)',
      WebkitBackdropFilter: 'var(--blur-chip)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-hairline-soft)'
    },
    solid: {
      background: 'var(--surface-wash)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-hairline-soft)'
    },
    dark: {
      background: 'var(--surface-card-on-dark)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--hairline-on-dark)'
    },
    accent: {
      background: 'rgba(0,113,227,.08)',
      color: 'var(--accent)',
      border: '1px solid rgba(0,113,227,.18)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-caption)',
      fontWeight: 500,
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      ...(tones[tone] || tones.glass),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  index,
  children,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--accent-indicator)' : 'var(--accent)',
      ...style
    }
  }, rest), index ? `${index} · ` : '', children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.474.0/icons/';

/** Lucide (CDN) glyph, tinted via CSS mask so it inherits currentColor. */
function Icon({
  name,
  size = 18,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 44,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const skins = {
    ghost: {
      background: hover ? 'var(--surface-hover-subtle)' : 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--surface-hover-subtle)' : 'var(--surface-secondary-btn)',
      color: 'var(--accent)',
      border: '1px solid var(--border-hairline)'
    },
    solid: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: '#fff',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      padding: 0,
      transition: 'background-color var(--dur) var(--ease), transform var(--dur-fast) var(--ease)',
      transform: press ? 'scale(var(--press-scale))' : 'none',
      ...(skins[variant] || skins.ghost),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.41),
    color: "currentColor"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  onDark = false,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-system)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-stat)',
      letterSpacing: 'var(--track-tight)',
      lineHeight: 1.05,
      color: onDark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-inverse-muted)' : 'var(--text-tertiary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  actions,
  onClose,
  width = 460,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,.18)',
      padding: 'var(--space-6)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      boxSizing: 'border-box',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      WebkitBackdropFilter: 'var(--blur-overlay)',
      borderRadius: 'var(--radius-overlay)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-7)',
      fontFamily: 'var(--font-system)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '21px',
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: 36,
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  info: {
    icon: 'info',
    color: 'var(--accent)'
  },
  success: {
    icon: 'check',
    color: 'var(--status-positive)'
  },
  error: {
    icon: 'triangle-alert',
    color: 'var(--status-negative)'
  }
};
function Toast({
  tone = 'info',
  message,
  action,
  style,
  ...rest
}) {
  const t = TONE[tone] || TONE.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '12px 18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      WebkitBackdropFilter: 'var(--blur-overlay)',
      boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16,
    color: t.color
  }), /*#__PURE__*/React.createElement("span", null, message), action);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      opacity: open ? 1 : 0,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '7px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-overlay)',
      WebkitBackdropFilter: 'var(--blur-overlay)',
      boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-primary)',
      transition: 'opacity var(--dur) var(--ease)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--tap-min)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-primary)',
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? 'default' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      background: checked ? 'var(--accent)' : 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--accent)' : 'var(--border-hairline)'),
      transition: 'background-color var(--dur) var(--ease), border-color var(--dur) var(--ease)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "#fff"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Input({
  label,
  hint,
  error,
  type = 'text',
  pill = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-system)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-primary)',
      minHeight: 'var(--tap-min)',
      padding: pill ? '12px 18px' : '12px 14px',
      boxSizing: 'border-box',
      background: 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--status-negative)' : 'var(--border-hairline)'),
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-tile)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'box-shadow var(--dur) var(--ease), border-color var(--dur) var(--ease)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      lineHeight: 'var(--lh-caption)',
      color: error ? 'var(--status-negative)' : 'var(--text-tertiary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--tap-min)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-primary)',
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? 'default' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-card)',
      border: '1px solid ' + (checked ? 'var(--accent)' : 'var(--border-hairline)'),
      transition: 'border-color var(--dur) var(--ease)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-system)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    style: {
      font: 'inherit',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-primary)',
      minHeight: 'var(--tap-min)',
      padding: '12px 40px 12px 14px',
      boxSizing: 'border-box',
      appearance: 'none',
      background: 'var(--surface-card)',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--text-tertiary) 50%),linear-gradient(135deg,var(--text-tertiary) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) 52%, calc(100% - 15px) 52%',
      backgroundSize: '5px 5px, 5px 5px',
      backgroundRepeat: 'no-repeat',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-tile)',
      outline: 'none'
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-tertiary)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 'var(--tap-min)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-primary)',
      opacity: disabled ? 0.4 : 1,
      cursor: disabled ? 'default' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      boxSizing: 'border-box',
      background: checked ? 'var(--status-positive)' : 'rgba(0,0,0,.12)',
      display: 'inline-flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      transition: 'background-color var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,.15)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  eyebrow,
  title,
  lede,
  meta,
  actions,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      background: 'var(--hero-wash)',
      padding: 'calc(var(--section-y) + 24px) 0 var(--section-y)',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--size-display)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-primary)',
      textWrap: 'pretty'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) auto 0',
      maxWidth: 'var(--measure-lede)',
      fontSize: 'var(--size-lede)',
      lineHeight: 'var(--lh-lede)',
      color: 'var(--text-secondary)'
    }
  }, lede), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      justifyContent: 'center'
    }
  }, meta), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-3)',
      justifyContent: 'center'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BANDS = {
  white: {
    background: 'var(--surface-page)',
    color: 'var(--text-secondary)'
  },
  wash: {
    background: 'var(--surface-wash)',
    color: 'var(--text-secondary)'
  },
  dark: {
    background: 'var(--surface-dark)',
    color: 'var(--text-inverse-muted)'
  },
  hero: {
    background: 'var(--hero-wash)',
    color: 'var(--text-secondary)'
  }
};
function Section({
  band = 'white',
  index,
  eyebrow,
  title,
  lede,
  align = 'left',
  children,
  style,
  ...rest
}) {
  const b = BANDS[band] || BANDS.white;
  const dark = band === 'dark';
  const centred = align === 'center';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      ...b,
      padding: 'var(--section-y) 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, (eyebrow || title || lede) && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: centred ? 'var(--measure-lede)' : 'none',
      margin: centred ? '0 auto' : 0,
      textAlign: centred ? 'center' : 'left'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index,
    onDark: dark
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--size-section)',
      lineHeight: 'var(--lh-section)',
      letterSpacing: 'var(--track-tight)',
      color: dark ? 'var(--text-inverse)' : 'var(--text-primary)'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--size-lede)',
      lineHeight: 'var(--lh-lede)',
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
      maxWidth: 'var(--measure-lede)',
      marginLeft: centred ? 'auto' : 0,
      marginRight: centred ? 'auto' : 0
    }
  }, lede)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: eyebrow || title || lede ? 'var(--space-12)' : 0
    }
  }, children)));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/media/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
function Reveal({
  delay = 0,
  children,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(var(--reveal-shift))',
      transition: `opacity var(--dur-slow) var(--ease) ${delay}ms, transform var(--dur-slow) var(--ease) ${delay}ms`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/media/WindowFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WindowFrame({
  url = 'example.com',
  caption,
  src,
  alt = '',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-media)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-window)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--space-4)',
      background: 'rgba(246,246,246,.92)',
      borderBottom: '1px solid var(--border-hairline-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, ['var(--dot-red)', 'var(--dot-amber)', 'var(--dot-green)'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 12,
      height: 12,
      borderRadius: 'var(--radius-pill)',
      background: c
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '0 auto',
      paddingRight: 56,
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-eyebrow)',
      color: '#8E8E93'
    }
  }, url)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'block'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%'
    }
  }) : children)), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-3)',
      fontFamily: 'var(--font-system)',
      fontSize: 'var(--size-caption)',
      lineHeight: 'var(--lh-caption)',
      color: 'var(--text-tertiary)'
    }
  }, caption));
}
Object.assign(__ds_scope, { WindowFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/WindowFrame.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 'var(--space-1)',
      padding: 4,
      background: 'var(--surface-wash)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, rest), items.map(t => {
    const id = t.value || t;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        font: 'inherit',
        fontSize: 'var(--size-caption)',
        fontWeight: 'var(--weight-medium)',
        padding: '9px 16px',
        minHeight: 36,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: on ? 'var(--surface-card)' : 'transparent',
        boxShadow: on ? 'var(--shadow-card)' : 'none',
        transition: 'background-color var(--dur) var(--ease), color var(--dur) var(--ease)'
      }
    }, t.label || id);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
function TopNav({
  brand = 'Editorial',
  links = [],
  action,
  progress,
  scrollTarget,
  style,
  ...rest
}) {
  const [scrolled, setScrolled] = useState(false);
  const [auto, setAuto] = useState(0);
  useEffect(() => {
    const el = scrollTarget || window;
    const read = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      const h = el === window ? document.documentElement.scrollHeight - window.innerHeight : el.scrollHeight - el.clientHeight;
      setScrolled(y > 8);
      setAuto(h > 0 ? Math.min(1, y / h) : 0);
    };
    read();
    el.addEventListener('scroll', read, {
      passive: true
    });
    return () => el.removeEventListener('scroll', read);
  }, [scrollTarget]);
  const pct = Math.round((progress != null ? progress : auto) * 100);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'var(--surface-glass)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-nav)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-nav)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--border-hairline-soft)' : 'transparent'),
      transition: 'background-color var(--dur) var(--ease), border-color var(--dur) var(--ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 'var(--nav-height)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontSize: 'var(--size-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--track-tight)'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: l.href || l.label
  }, l))), action)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      width: pct + '%',
      background: 'var(--accent-indicator)',
      transition: 'width var(--dur-fast) linear'
    }
  })));
}
function NavLink({
  href,
  label,
  active
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: 'var(--size-caption)',
      fontWeight: 500,
      padding: '8px 12px',
      borderRadius: 'var(--radius-pill)',
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: hover || active ? 'var(--surface-hover-subtle)' : 'transparent',
      transition: 'background-color var(--dur) var(--ease), color var(--dur) var(--ease)'
    }
  }, label);
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/App.jsx
try { (() => {
const {
  TopNav,
  Hero,
  Section,
  Card,
  Chip,
  Badge,
  Button,
  Stat,
  Eyebrow,
  WindowFrame,
  Reveal,
  Tabs,
  Input,
  Select,
  Checkbox,
  Dialog,
  Toast,
  Icon,
  Tooltip,
  IconButton
} = window.EditorialClarityDesignSystem_9cb24c;
function CaseStudyApp() {
  const [view, setView] = React.useState('After');
  const [dialog, setDialog] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const send = () => {
    setDialog(false);
    setToast(true);
    setTimeout(() => setToast(false), 3200);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "top"
  }, /*#__PURE__*/React.createElement(TopNav, {
    brand: "Editorial Clarity",
    links: [{
      href: '#brief',
      label: 'Brief'
    }, {
      href: '#process',
      label: 'Process'
    }, {
      href: '#evidence',
      label: 'Evidence'
    }, {
      href: '#outcome',
      label: 'Outcome'
    }],
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setDialog(true)
    }, "Request the deck")
  }), /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Case study \u2014 INS-779",
    title: "Rebuilding a service people had given up on",
    lede: "Four hundred thousand people a year start this application. Fewer than half finish it. Twelve weeks of research and rebuilding changed that.",
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Chip, null, "Product design"), /*#__PURE__*/React.createElement(Chip, null, "Service research"), /*#__PURE__*/React.createElement(Chip, null, "Public sector"), /*#__PURE__*/React.createElement(Chip, null, "2026")),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => setDialog(true)
    }, "Read the case study"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      href: "#brief"
    }, "Jump to the brief"))
  }), /*#__PURE__*/React.createElement(BriefBand, null), /*#__PURE__*/React.createElement(ProcessBand, {
    view: view,
    setView: setView
  }), /*#__PURE__*/React.createElement(EvidenceBand, null), /*#__PURE__*/React.createElement(OutcomeBand, null), /*#__PURE__*/React.createElement(ContactBand, {
    onSend: send
  }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    title: "Request the full deck",
    description: "We'll email a PDF of the case study. No follow-up, no list.",
    onClose: () => setDialog(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDialog(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: send
    }, "Send it"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Why are you asking?",
    options: ['Considering working together', 'Research', 'Curiosity']
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 28,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    message: "Deck sent \u2014 check your inbox."
  })));
}
Object.assign(window, {
  CaseStudyApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/BriefBand.jsx
try { (() => {
const {
  Section,
  Card,
  Stat,
  Badge,
  Reveal
} = window.EditorialClarityDesignSystem_9cb24c;
function BriefBand() {
  const rows = [['Client', 'A national health service directorate'], ['Engagement', '12 weeks, two designers, one researcher'], ['Scope', 'Application journey, eligibility checker, notifications']];
  return /*#__PURE__*/React.createElement(Section, {
    id: "brief",
    band: "white",
    index: "01",
    eyebrow: "Brief",
    title: "A form nobody could finish in one sitting",
    lede: "The service worked on paper. In practice, applicants dropped out at the eligibility step, called the helpline instead, and started again a week later."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--gap-grid)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '128px 1fr',
      gap: 'var(--space-5)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      fontWeight: 600,
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body)',
      color: 'var(--text-primary)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline-soft)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "negative"
  }, "Completion 46%"), /*#__PURE__*/React.createElement(Badge, {
    status: "caution"
  }, "Helpline volume rising"), /*#__PURE__*/React.createElement(Badge, {
    status: "neutral"
  }, "No mobile pathway"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "400k",
    label: "Applications a year"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "46%",
    label: "Finished in one sitting"
  })))));
}
Object.assign(window, {
  BriefBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/BriefBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/ContactBand.jsx
try { (() => {
const {
  Section,
  Card,
  Input,
  Select,
  Checkbox,
  Switch,
  Button,
  Tooltip,
  IconButton
} = window.EditorialClarityDesignSystem_9cb24c;
function ContactBand({
  onSend
}) {
  const [ok, setOk] = React.useState(true);
  return /*#__PURE__*/React.createElement(Section, {
    id: "contact",
    band: "wash",
    index: "05",
    eyebrow: "Contact",
    title: "Working on something similar?",
    lede: "Send a line about the service and where it gets stuck. We reply within a day."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr .8fr',
      gap: 'var(--gap-grid)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@service.gov"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Where it gets stuck",
    options: ['Eligibility', 'Application', 'Notifications', 'Something else']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the research summary too",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onSend
  }, "Send"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Copy the studio email"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "link",
    label: "Copy email",
    variant: "outline"
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)",
    style: {
      display: 'grid',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '19px',
      letterSpacing: 'var(--track-tight)'
    }
  }, "Or just read"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, "The full write-up runs to eleven pages, including the research protocol and the questions we cut.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Case study PDF"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "sm"
  }, "Research protocol")))));
}
Object.assign(window, {
  ContactBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/ContactBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/EvidenceBand.jsx
try { (() => {
const {
  Section,
  Card,
  Stat,
  Chip,
  Reveal
} = window.EditorialClarityDesignSystem_9cb24c;
function EvidenceBand() {
  const quotes = [['“I gave up the first time. This time I was done before my tea went cold.”', 'Applicant, Leeds — round 3 testing'], ['“We stopped getting calls about question seven, because question seven is gone.”', 'Helpline adviser']];
  return /*#__PURE__*/React.createElement(Section, {
    id: "evidence",
    band: "dark",
    index: "03",
    eyebrow: "Evidence",
    title: "What the testing showed",
    lede: "Four rounds, 32 participants, measured against the live journey on the same tasks."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, [['+38%', 'Task completion'], ['−4m', 'Median time'], ['12', 'Steps removed'], ['−31%', 'Helpline calls']].map(([v, l], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(Stat, {
    onDark: true,
    value: v,
    label: l
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gap-grid)'
    }
  }, quotes.map(([q, who]) => /*#__PURE__*/React.createElement(Card, {
    key: who,
    onDark: true,
    padding: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '21px',
      lineHeight: 1.4,
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-inverse)'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--size-caption)',
      color: 'var(--text-inverse-muted)'
    }
  }, who)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-caption)',
      lineHeight: 'var(--lh-caption)',
      color: 'var(--text-inverse-muted)'
    }
  }, "Figures compare the revised journey with the live service over the same six-week window. Sample n=1,204.")));
}
Object.assign(window, {
  EvidenceBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/EvidenceBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/OutcomeBand.jsx
try { (() => {
const {
  Section,
  Card,
  WindowFrame,
  Chip,
  Reveal,
  Button
} = window.EditorialClarityDesignSystem_9cb24c;
function OutcomeBand() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "outcome",
    band: "white",
    index: "04",
    eyebrow: "Outcome",
    title: "Shipped in April, unchanged since",
    lede: "The new journey went live to all users after a four-week phased rollout. Two follow-up releases have added translations and an offline save."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gap-grid)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(WindowFrame, {
    url: "service.example.gov/apply/check-answers",
    caption: "Check-your-answers screen, shipped April 2026."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 34px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Step 3 of 3"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: '26px',
      letterSpacing: 'var(--track-tight)'
    }
  }, "Check your answers"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, [['Where you live', 'England'], ['Claimed before', 'No'], ['Contact', 'Email']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid var(--border-hairline-soft)',
      fontSize: 'var(--size-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'inline-flex',
      background: 'var(--accent)',
      color: '#fff',
      fontSize: 15,
      fontWeight: 600,
      padding: '11px 24px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Submit application")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--gap-grid-tight)'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '19px',
      letterSpacing: 'var(--track-tight)'
    }
  }, "What we handed over"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 'var(--space-4) 0 0',
      paddingLeft: 18,
      fontSize: 'var(--size-body-sm)',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("li", null, "Journey map and content model"), /*#__PURE__*/React.createElement("li", null, "Component specs for the internal design system"), /*#__PURE__*/React.createElement("li", null, "Research archive: 18 sessions, tagged"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '19px',
      letterSpacing: 'var(--track-tight)'
    }
  }, "Still open"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, "Notifications remain on the legacy template. A follow-on engagement is scoped for autumn."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "solid"
  }, "Phase 2"), /*#__PURE__*/React.createElement(Chip, {
    tone: "solid"
  }, "Autumn 2026")))))));
}
Object.assign(window, {
  OutcomeBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/OutcomeBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/ProcessBand.jsx
try { (() => {
const {
  Section,
  Card,
  Tabs,
  WindowFrame,
  Chip,
  Reveal,
  Eyebrow
} = window.EditorialClarityDesignSystem_9cb24c;
function ProcessBand({
  view,
  setView
}) {
  const steps = [['Listen', 'Eighteen sessions in three cities, plus two weeks on the helpline.'], ['Map', 'Every question in the form traced to the decision it actually informs.'], ['Cut', 'Twelve steps removed; eligibility moved to a two-question checker.'], ['Test', 'Four rounds of moderated testing against the live journey.']];
  return /*#__PURE__*/React.createElement(Section, {
    id: "process",
    band: "wash",
    index: "02",
    eyebrow: "Process",
    title: "Three weeks of listening before a single screen",
    lede: "We rebuilt the journey around the two decisions applicants actually make, and moved everything else out of the way."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gap-grid-tight)'
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, '0' + (i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: '19px',
      letterSpacing: 'var(--track-tight)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--size-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Before', 'After'],
    value: view,
    onChange: setView
  }), /*#__PURE__*/React.createElement(WindowFrame, {
    style: {
      width: '100%'
    },
    url: "service.example.gov/apply/eligibility",
    caption: view === 'After' ? 'Revised eligibility check — two questions, answered in under a minute.' : 'Original eligibility step — nine questions, four of them unused downstream.'
  }, /*#__PURE__*/React.createElement(MockForm, {
    view: view
  })))));
}
function MockForm({
  view
}) {
  const before = ['National insurance number', 'Date of birth', 'Household income (gross)', 'Household income (net)', 'Existing claims', 'Tenancy type', 'Employer PAYE reference', 'Local authority', 'Referral code'];
  const after = ['Do you live in England or Wales?', 'Have you claimed in the last 12 months?'];
  const fields = view === 'After' ? after : before;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 40px 40px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, view === 'After' ? 'Step 1 of 3' : 'Step 1 of 11'), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: '28px',
      letterSpacing: 'var(--track-tight)'
    }
  }, "Check if you can apply"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, fields.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: '14px 16px',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-tile)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body-sm)',
      color: 'var(--text-primary)'
    }
  }, f), /*#__PURE__*/React.createElement("span", {
    style: {
      width: view === 'After' ? 132 : 96,
      height: 12,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-wash)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--accent)',
      color: '#fff',
      fontSize: 15,
      fontWeight: 600,
      padding: '11px 24px',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Continue"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-tertiary)'
    }
  }, view === 'After' ? 'About 1 minute left' : 'About 22 minutes left'))));
}
Object.assign(window, {
  ProcessBand,
  MockForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/ProcessBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-study/SiteFooter.jsx
try { (() => {
const {
  Icon
} = window.EditorialClarityDesignSystem_9cb24c;
function SiteFooter() {
  const cols = [['Work', ['Case studies', 'Services', 'Sectors']], ['Studio', ['About', 'How we work', 'Contact']], ['More', ['Notes', 'Hiring', 'Privacy']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-hairline-soft)',
      padding: 'var(--space-16) 0 var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '17px',
      fontWeight: 600,
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-primary)'
    }
  }, "Editorial Clarity"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--size-caption)',
      lineHeight: 'var(--lh-caption)',
      color: 'var(--text-tertiary)',
      maxWidth: 260
    }
  }, "Service design for organisations that answer to the public.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#top",
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-secondary)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-12) auto 0',
      padding: '0 var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      color: 'var(--text-tertiary)'
    }
  }, "\xA9 2026 \xB7 All figures illustrative"), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--size-caption)'
    }
  }, "Back to top ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 14,
    color: "var(--accent)"
  }))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-study/SiteFooter.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.WindowFrame = __ds_scope.WindowFrame;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();

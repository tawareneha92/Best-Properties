/* @ds-bundle: {"format":4,"namespace":"BestPropertiesDesignSystem_20a5e0","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ContactRow","sourcePath":"components/property/ContactRow.jsx"},{"name":"PropertyCard","sourcePath":"components/property/PropertyCard.jsx"},{"name":"SectionHeading","sourcePath":"components/property/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/property/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f4f1217c308c","components/core/Button.jsx":"2b36ec3bc0d0","components/core/Card.jsx":"f764a5debdd6","components/core/Divider.jsx":"0ed9a9685c24","components/core/Icon.jsx":"c1ccd08bf2e7","components/core/IconButton.jsx":"5cc1a6c68c92","components/core/Tag.jsx":"c6a550d1d3df","components/feedback/Dialog.jsx":"0c3d84a69367","components/feedback/Toast.jsx":"e81deeedd0a3","components/feedback/Tooltip.jsx":"5082345464a4","components/forms/Checkbox.jsx":"47d081b21163","components/forms/Input.jsx":"f4fc1c9feabc","components/forms/Radio.jsx":"2a2f90225ec6","components/forms/Select.jsx":"c05e6cfbe48a","components/forms/Switch.jsx":"3cdc37c8725b","components/navigation/Navbar.jsx":"ef0f96e72bdb","components/navigation/Tabs.jsx":"160738d69ab9","components/property/ContactRow.jsx":"c34397b8765f","components/property/PropertyCard.jsx":"7ad6d3148bdc","components/property/SectionHeading.jsx":"815b47a5157b","components/property/StatBlock.jsx":"706694d925fa","ui_kits/collateral/BusinessCard.jsx":"276a593803a0","ui_kits/collateral/SocialPosts.jsx":"b6d8f3e4f474","ui_kits/website/ContactScreen.jsx":"19ab47483e34","ui_kits/website/DetailScreen.jsx":"b51c91ed3faa","ui_kits/website/HomeScreen.jsx":"a1b4c244d542","ui_kits/website/PropertiesScreen.jsx":"58b966a2f48f","ui_kits/website/Shell.jsx":"8e8b71c6ec83","ui_kits/website/data.js":"c452ab97228d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BestPropertiesDesignSystem_20a5e0 = window.BestPropertiesDesignSystem_20a5e0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  surface = 'navy',
  elevation = 1,
  hoverBorder,
  padding = 'var(--pad-card)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const surfaces = {
    navy: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    light: {
      background: 'var(--surface-card-light)',
      color: 'var(--text-on-light)',
      border: '1px solid rgba(7,18,37,.10)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-divider)'
    }
  };
  const shadows = {
    0: 'var(--elev-0)',
    1: 'var(--elev-1)',
    2: 'var(--elev-2)',
    3: 'var(--elev-3)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: shadows[elevation],
      transition: 'border-color .2s ease, box-shadow .2s ease',
      ...surfaces[surface],
      ...(hoverBorder && hover ? {
        borderColor: 'var(--brand-gold)'
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  variant = 'subtle',
  width = '100%',
  glow,
  style,
  ...rest
}) {
  const variants = {
    subtle: {
      height: 1,
      background: 'var(--border-divider)'
    },
    gold: {
      height: 1,
      background: 'var(--border-subtle)'
    },
    gradient: {
      height: 2,
      background: 'var(--gradient-accent)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      border: 0,
      ...variants[variant],
      ...(glow ? {
        boxShadow: 'var(--glow-accent)'
      } : null),
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.441.0/icons/';

/** Line icon rendered from the Lucide static set via CSS mask so it inherits color. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'gold',
  icon,
  children,
  style,
  ...rest
}) {
  const tones = {
    gold: {
      background: 'var(--brand-gold)',
      color: 'var(--brand-navy)',
      border: '1px solid var(--brand-gold)'
    },
    outline: {
      background: 'rgba(244,196,78,.08)',
      color: 'var(--brand-gold)',
      border: '1px solid var(--border-strong)'
    },
    red: {
      background: 'var(--accent-red)',
      color: 'var(--white)',
      border: '1px solid var(--accent-red)'
    },
    muted: {
      background: 'transparent',
      color: 'var(--brand-gold-muted)',
      border: '1px solid var(--border-divider)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--gap-icon-text)',
  height: 'var(--control-height)',
  minWidth: 120,
  padding: '0 var(--space-5)',
  borderRadius: 'var(--radius-button)',
  fontFamily: 'var(--font-display)',
  fontSize: 16,
  fontWeight: 'var(--weight-semibold)',
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'background .18s ease, color .18s ease, border-color .18s ease',
  textDecoration: 'none'
};
const variants = {
  primary: {
    background: 'var(--brand-gold)',
    color: 'var(--text-on-gold)',
    border: '1px solid var(--brand-gold)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--brand-gold)',
    border: '1px solid var(--brand-gold)'
  },
  dark: {
    background: 'var(--brand-navy)',
    color: 'var(--brand-gold)',
    border: '1px solid var(--brand-gold)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--warm-white)',
    border: '1px solid transparent',
    minWidth: 0
  }
};
const hovers = {
  primary: {
    background: 'var(--brand-gold-light)',
    borderColor: 'var(--brand-gold-light)'
  },
  secondary: {
    background: 'var(--brand-gold)',
    color: 'var(--text-on-gold)'
  },
  dark: {
    background: 'var(--brand-gold)',
    color: 'var(--text-on-gold)'
  },
  ghost: {
    color: 'var(--brand-gold)'
  }
};
const sizes = {
  sm: {
    height: 40,
    fontSize: 15,
    padding: '0 var(--space-4)'
  },
  md: {},
  lg: {
    height: 56,
    fontSize: 16,
    padding: '0 var(--space-6)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth,
  disabled,
  as = 'button',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...sizes[size],
      ...(hover && !disabled ? hovers[variant] : null),
      ...(fullWidth ? {
        width: '100%'
      } : null),
      ...(disabled ? {
        opacity: .45,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: 18
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 44,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    secondary: {
      background: hover ? 'var(--brand-gold)' : 'transparent',
      color: hover ? 'var(--brand-navy)' : 'var(--brand-gold)',
      border: '1px solid var(--brand-gold)'
    },
    primary: {
      background: hover ? 'var(--brand-gold-light)' : 'var(--brand-gold)',
      color: 'var(--brand-navy)',
      border: '1px solid transparent'
    },
    quiet: {
      background: 'transparent',
      color: hover ? 'var(--brand-gold)' : 'var(--warm-white)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-button)',
      cursor: 'pointer',
      transition: 'all .18s ease',
      ...skins[variant],
      ...(disabled ? {
        opacity: .45,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  icon,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255,248,231,.05)',
      border: '1px solid var(--border-divider)',
      color: 'var(--warm-white)',
      fontSize: 13,
      fontWeight: 'var(--weight-medium)',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--brand-gold)"
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(7,18,37,.72)',
      padding: 'var(--space-5)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-panel)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--elev-3)',
      padding: 'var(--space-6)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--brand-gold)'
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "quiet",
    size: 32
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--warm-white)',
      opacity: .88
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  success: {
    icon: 'check-circle',
    color: 'var(--brand-gold)'
  },
  info: {
    icon: 'info',
    color: 'var(--brand-gold)'
  },
  alert: {
    icon: 'alert-circle',
    color: 'var(--accent-red)'
  }
};
function Toast({
  tone = 'success',
  title,
  message,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "status",
    style: {
      display: 'flex',
      gap: 'var(--gap-icon-text)',
      alignItems: 'flex-start',
      maxWidth: 380,
      padding: 'var(--space-4)',
      background: 'var(--surface-panel)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--elev-2)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 19,
    color: t.color,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", null, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--brand-gold)'
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 2,
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--warm-white)',
      opacity: .82
    }
  }, message) : null));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }), children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--brand-navy)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--elev-2)',
      fontSize: 12,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--warm-white)',
      zIndex: 5
    }
  }, label) : null);
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
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--gap-icon-text)',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 15,
      color: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      background: checked ? 'var(--brand-gold)' : 'transparent',
      border: '1px solid ' + (checked ? 'var(--brand-gold)' : 'var(--border-divider)'),
      transition: 'all .15s ease'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "var(--brand-navy)"
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  icon,
  error,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || rest.name || undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--gap-icon-text)',
      height: 'var(--control-height)',
      padding: 'var(--pad-input)',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,248,231,.04)',
      border: '1px solid ' + (error ? 'var(--accent-red)' : focus ? 'var(--brand-gold)' : 'var(--border-divider)'),
      transition: 'border-color .18s ease'
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: "var(--brand-gold-muted)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--warm-white)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      ...style
    }
  }))), hint || error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 12,
      color: error ? 'var(--accent-red)' : 'var(--brand-gold-muted)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  disabled,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--gap-icon-text)',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 15,
      color: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (checked ? 'var(--brand-gold)' : 'var(--border-divider)'),
      transition: 'all .15s ease'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--brand-gold)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  placeholder,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || rest.name || undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      display: 'block'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 'var(--control-height)',
      padding: 'var(--pad-input)',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,248,231,.04)',
      border: '1px solid ' + (focus ? 'var(--brand-gold)' : 'var(--border-divider)')
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--warm-white)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      ...style
    }
  }), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        color: '#071225'
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17,
    color: "var(--brand-gold)"
  })));
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
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      minHeight: 44,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      fontSize: 15,
      color: 'var(--warm-white)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-gold)' : 'rgba(255,248,231,.10)',
      border: '1px solid ' + (checked ? 'var(--brand-gold)' : 'var(--border-divider)'),
      transition: 'all .18s ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 22 : 2,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand-navy)' : 'var(--brand-gold-muted)',
      transition: 'left .18s ease'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Navbar({
  brand = 'BEST PROPERTIES',
  links = [],
  active,
  onNavigate,
  cta = 'Find Your Dream Home',
  onCta,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      height: 'var(--nav-height)',
      background: 'var(--brand-navy)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      height: '100%',
      margin: '0 auto',
      padding: '0 var(--pad-container-desktop)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 'var(--weight-black)',
      letterSpacing: '.14em',
      color: 'var(--brand-gold)',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, links.map(l => {
    const on = l === active || hover === l;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(l);
      },
      onMouseEnter: () => setHover(l),
      onMouseLeave: () => setHover(null),
      style: {
        fontSize: 14,
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '.04em',
        color: on ? 'var(--brand-gold)' : 'var(--warm-white)',
        textDecoration: 'none',
        transition: 'color .18s ease'
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

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
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-divider)',
      ...style
    }
  }), items.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t),
      style: {
        position: 'relative',
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        padding: '0 0 14px',
        fontFamily: 'var(--font-display)',
        fontSize: 14,
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: on ? 'var(--brand-gold)' : 'var(--brand-gold-muted)',
        transition: 'color .18s ease'
      }
    }, t, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? 'var(--gradient-accent)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/property/ContactRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const kinds = {
  phone: {
    icon: 'phone',
    color: 'var(--accent-red)'
  },
  email: {
    icon: 'mail',
    color: 'var(--brand-gold)'
  },
  address: {
    icon: 'map-pin',
    color: 'var(--brand-gold)'
  },
  hours: {
    icon: 'clock',
    color: 'var(--brand-gold)'
  }
};
function ContactRow({
  kind = 'phone',
  name,
  value,
  tone = 'gold',
  size = 'md',
  style,
  ...rest
}) {
  const k = kinds[kind] || kinds.phone;
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      alignItems: name ? 'flex-start' : 'center',
      gap: 'var(--gap-icon-text)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: big ? 20 : 17,
    color: k.color,
    style: {
      marginTop: name || kind === 'address' ? 3 : 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, name ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      letterSpacing: '.06em',
      color: 'var(--brand-gold-muted)'
    }
  }, name) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: kind === 'phone' ? big ? 20 : 'var(--size-contact)' : big ? 16 : 14,
      fontWeight: kind === 'phone' ? 'var(--weight-bold)' : 'var(--weight-medium)',
      lineHeight: 1.45,
      color: tone === 'warm' ? 'var(--warm-white)' : 'var(--brand-gold)'
    }
  }, value)));
}
Object.assign(__ds_scope, { ContactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/ContactRow.jsx", error: String((e && e.message) || e) }); }

// components/property/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PropertyCard({
  image,
  imageLabel = 'Property photograph',
  badge,
  label,
  title,
  description,
  details = [],
  price,
  priceNote,
  cta = 'Enquire Now',
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    hoverBorder: true,
    padding: 0,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: image ? 'center/cover no-repeat url(' + image + ')' : 'var(--brand-navy)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !image ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'rgba(216,180,90,.55)'
    }
  }, imageLabel) : null, badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold"
  }, badge)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--brand-gold)',
      lineHeight: 'var(--lh-heading)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 'var(--lh-body)',
      color: 'var(--warm-white)',
      opacity: .82
    }
  }, description) : null, details.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-1)'
    }
  }, details.map(d => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: d.label || d,
    icon: d.icon
  }, d.label || d))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-price)',
      fontWeight: 'var(--weight-black)',
      color: 'var(--warm-white)',
      lineHeight: 1
    }
  }, price), priceNote ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 12,
      color: 'var(--brand-gold-muted)'
    }
  }, priceNote) : null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    onClick: onCta
  }, cta))));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/property/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  rule = true,
  style,
  ...rest
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: center ? 'center' : 'flex-start',
      textAlign: center ? 'center' : 'left',
      maxWidth: 720,
      ...(center ? {
        marginLeft: 'auto',
        marginRight: 'auto'
      } : null),
      ...style
    }
  }), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-caption)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      fontWeight: 'var(--weight-bold)',
      lineHeight: 'var(--lh-heading)',
      color: 'var(--brand-gold)'
    }
  }, title), rule ? /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    variant: "gradient",
    width: 72,
    glow: true,
    style: {
      marginTop: 2
    }
  }) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-1) 0 0',
      fontSize: 16,
      lineHeight: 'var(--lh-body)',
      color: 'var(--warm-white)',
      opacity: .82
    }
  }, body) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/property/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  icon,
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: "var(--brand-gold)"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--size-h2)',
      fontWeight: 'var(--weight-black)',
      color: 'var(--warm-white)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/property/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/BusinessCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ContactRow,
  Divider
} = window.BestPropertiesDesignSystem_20a5e0;

/* 3.5 x 2 in at 200 ppi = 700 x 400 px */
function BusinessCardFront() {
  const d = window.BP_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 700,
      height: 400,
      background: 'var(--brand-navy)',
      display: 'grid',
      gridTemplateColumns: '.82fr 1.18fr',
      boxShadow: 'var(--elev-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '44px 0 44px 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRight: '1px solid var(--border-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      border: '2px solid var(--brand-gold)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 8px/1.4 var(--font-display)',
      letterSpacing: '.1em',
      textAlign: 'center',
      color: 'rgba(216,180,90,.7)'
    }
  }, "LOGO", /*#__PURE__*/React.createElement("br", null), "HERE"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      font: '800 24px/1.15 var(--font-display)',
      letterSpacing: '.1em',
      color: 'var(--brand-gold)'
    }
  }, "BEST", /*#__PURE__*/React.createElement("br", null), "PROPERTIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingRight: 30,
      font: '600 8px/1.7 var(--font-display)',
      letterSpacing: '.24em',
      color: 'var(--brand-gold-muted)'
    }
  }, d.tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, d.contacts.filter(c => c.kind === 'phone').map(c => /*#__PURE__*/React.createElement(ContactRow, _extends({
    key: c.value
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 22px/1.25 var(--font-display)',
      letterSpacing: '.06em',
      color: 'var(--brand-gold)'
    }
  }, "DREAM HOMES", /*#__PURE__*/React.createElement("br", null), "CONSULTANT"), /*#__PURE__*/React.createElement(Divider, {
    variant: "gradient",
    width: 120,
    glow: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    kind: "email",
    value: "bestproperties191@gmail.com"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    kind: "address",
    value: "Shop No. G-97, Ground Floor, Destination Center-1, Nanded City, Pune-411068.",
    tone: "warm"
  }))));
}
function BusinessCardBack() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 700,
      height: 400,
      background: 'var(--brand-navy-deep)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      boxShadow: 'var(--elev-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      border: '2px solid var(--brand-gold)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 8px/1.4 var(--font-display)',
      letterSpacing: '.1em',
      textAlign: 'center',
      color: 'rgba(216,180,90,.7)'
    }
  }, "LOGO", /*#__PURE__*/React.createElement("br", null), "HERE"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 26px/1 var(--font-display)',
      letterSpacing: '.14em',
      color: 'var(--brand-gold)'
    }
  }, "BEST PROPERTIES"), /*#__PURE__*/React.createElement(Divider, {
    variant: "gradient",
    width: 140,
    glow: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 9px/1 var(--font-display)',
      letterSpacing: '.3em',
      color: 'var(--brand-gold-muted)'
    }
  }, "PREMIUM PROPERTIES. TRUSTED GUIDANCE."));
}
Object.assign(window, {
  BusinessCardFront,
  BusinessCardBack
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/BusinessCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/SocialPosts.jsx
try { (() => {
const {
  Badge,
  Divider,
  Icon,
  Tag,
  ContactRow
} = window.BestPropertiesDesignSystem_20a5e0;
function PhotoArea({
  height,
  label,
  radius = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--brand-navy)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(216,180,90,.45)'
    }
  }, label));
}

/* 1080 x 1080, rendered at 540 */
function SocialSquare() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 540,
      height: 540,
      background: 'var(--brand-navy)',
      padding: 36,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--elev-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 15px/1 var(--font-display)',
      letterSpacing: '.14em',
      color: 'var(--brand-gold)'
    }
  }, "BEST PROPERTIES"), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "New Launch")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(PhotoArea, {
    height: 230,
    label: "Villa exterior, daylight",
    radius: 8
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '24px 0 0',
      font: '800 30px/1.15 var(--font-display)',
      color: 'var(--brand-gold)'
    }
  }, "3 BHK Villas in", /*#__PURE__*/React.createElement("br", null), "Nanded City"), /*#__PURE__*/React.createElement(Divider, {
    variant: "gradient",
    width: 80,
    glow: true,
    style: {
      marginTop: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "ruler"
  }, "2,450 sq ft"), /*#__PURE__*/React.createElement(Tag, {
    icon: "trees"
  }, "Private garden")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 10px/1 var(--font-body)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, "Starting at"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: '800 26px/1 var(--font-display)',
      color: 'var(--warm-white)'
    }
  }, "Rs 1.85 Cr")), /*#__PURE__*/React.createElement(ContactRow, {
    kind: "phone",
    value: "7070535343"
  })));
}

/* 1080 x 1920, rendered at 320 x 569 */
function StoryPost() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      height: 569,
      background: 'var(--brand-navy)',
      boxShadow: 'var(--elev-2)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(PhotoArea, {
    height: "100%",
    label: "Interior, natural light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-navy)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 24,
      font: '800 12px/1 var(--font-display)',
      letterSpacing: '.14em',
      color: 'var(--brand-gold)'
    }
  }, "BEST PROPERTIES"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 9px/1 var(--font-display)',
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, "Trusted Real Estate Solutions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      font: '800 26px/1.15 var(--font-display)',
      color: 'var(--brand-gold)'
    }
  }, "Find Your", /*#__PURE__*/React.createElement("br", null), "Dream Home"), /*#__PURE__*/React.createElement(Divider, {
    variant: "gradient",
    width: 64,
    glow: true,
    style: {
      marginTop: 14
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      font: '400 12px/1.6 var(--font-body)',
      color: 'var(--warm-white)',
      opacity: .85
    }
  }, "Villas, apartments and plots across Pune, advised end to end."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    kind: "phone",
    value: "7070535343"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: '0 14px',
      borderRadius: 6,
      background: 'var(--brand-gold)',
      color: 'var(--brand-navy)',
      font: '600 11px/1 var(--font-display)'
    }
  }, "Swipe up ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 12
  }))));
}
Object.assign(window, {
  SocialSquare,
  StoryPost,
  PhotoArea
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/SocialPosts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  ContactRow,
  Input,
  Radio,
  Select,
  SectionHeading,
  Toast,
  Divider
} = window.BestPropertiesDesignSystem_20a5e0;
function ContactScreen() {
  const d = window.BP_DATA;
  const [sent, setSent] = React.useState(false);
  const [intent, setIntent] = React.useState('buy');
  return /*#__PURE__*/React.createElement(Section, {
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: d.tagline,
    title: "Talk to a Best Properties consultant",
    body: "Call either consultant directly, or leave your details and we will call you back within one working day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      marginTop: 40
    }
  }, d.contacts.map((c, i) => /*#__PURE__*/React.createElement(ContactRow, _extends({
    key: i
  }, c, {
    size: "lg",
    tone: c.kind === 'address' ? 'warm' : 'gold'
  })))), /*#__PURE__*/React.createElement(Divider, {
    variant: "subtle",
    style: {
      margin: '32px 0'
    }
  }), /*#__PURE__*/React.createElement(Photo, {
    height: 220,
    label: "Office frontage, Destination Center-1"
  })), /*#__PURE__*/React.createElement(Card, {
    surface: "navy",
    padding: "32px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px/1.2 var(--font-display)',
      color: 'var(--brand-gold)'
    }
  }, "Request a callback"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    icon: "user",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "10-digit mobile number"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "intent",
    label: "Buy",
    checked: intent === 'buy',
    onChange: () => setIntent('buy')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "intent",
    label: "Rent",
    checked: intent === 'rent',
    onChange: () => setIntent('rent')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "intent",
    label: "Invest",
    checked: intent === 'invest',
    onChange: () => setIntent('invest')
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Property type",
    placeholder: "Any",
    options: ['Villa', 'Apartment', 'Independent House', 'Plot', 'Commercial']
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send enquiry"), sent ? /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Enquiry sent",
    message: "Our consultant will call you within one working day."
  }) : null))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DetailScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Badge,
  Button,
  Card,
  ContactRow,
  Divider,
  Icon,
  IconButton,
  Tabs,
  Tag,
  Tooltip,
  PropertyCard
} = window.BestPropertiesDesignSystem_20a5e0;
function DetailScreen({
  onNavigate,
  onEnquire
}) {
  const d = window.BP_DATA;
  const p = d.properties[0];
  const [tab, setTab] = React.useState('Overview');
  return /*#__PURE__*/React.createElement(Section, {
    pad: 56
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('Properties'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--brand-gold-muted)',
      font: '500 13px var(--font-body)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 15
  }), " Back to properties"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.55fr .95fr',
      gap: 32,
      marginTop: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Photo, {
    height: 420,
    label: "Villa exterior, main photograph",
    overlay: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 12,
      marginTop: 12
    }
  }, ['Living room', 'Kitchen', 'Garden', 'Street view'].map(l => /*#__PURE__*/React.createElement(Photo, {
    key: l,
    height: 90,
    label: l,
    overlay: false,
    radius: "var(--radius-md)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Overview', 'Amenities', 'Location', 'Documents'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--warm-white)',
      opacity: .85,
      maxWidth: 620
    }
  }, p.description, " The plot is east-facing with a 20 ft internal road, and the society has a clubhouse, gym and children's play area. Registration and loan documentation are handled by our office."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 24
    }
  }, [{
    label: 'Covered parking',
    icon: 'car'
  }, {
    label: 'Clubhouse',
    icon: 'dumbbell'
  }, {
    label: 'Private garden',
    icon: 'trees'
  }, {
    label: '24x7 security',
    icon: 'shield-check'
  }, {
    label: 'Power backup',
    icon: 'zap'
  }].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t.label,
    icon: t.icon
  }, t.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, p.badge), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      font: '700 28px/1.2 var(--font-display)',
      color: 'var(--brand-gold)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 13,
      color: 'var(--warm-white)',
      opacity: .8
    }
  }, p.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Save"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Save",
    size: 40
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Share"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    label: "Share",
    size: 40
  })))), /*#__PURE__*/React.createElement(Divider, {
    variant: "gradient",
    width: 72,
    glow: true,
    style: {
      margin: '20px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 28px/1 var(--font-display)',
      color: 'var(--warm-white)'
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12,
      color: 'var(--brand-gold-muted)'
    }
  }, p.priceNote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginTop: 22
    }
  }, p.details.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t.label,
    icon: t.icon
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onEnquire
  }, "Book a site visit"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    icon: "phone"
  }, "Request a callback"))), /*#__PURE__*/React.createElement(Card, {
    surface: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-display)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)',
      marginBottom: 18
    }
  }, "Your consultants"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, d.contacts.slice(0, 3).map((c, i) => /*#__PURE__*/React.createElement(ContactRow, _extends({
    key: i
  }, c))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px/1.2 var(--font-display)',
      color: 'var(--brand-gold)',
      marginBottom: 24
    }
  }, "Similar properties"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, d.properties.slice(1, 4).map(x => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: x.title
  }, x, {
    cta: "View details"
  }))))));
}
Object.assign(window, {
  DetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  Divider,
  Icon,
  PropertyCard,
  SectionHeading,
  StatBlock,
  Tag,
  Select,
  Input
} = window.BestPropertiesDesignSystem_20a5e0;
function Hero({
  onNavigate
}) {
  const d = window.BP_DATA;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--brand-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '80px var(--pad-container-desktop) 88px',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1 var(--font-display)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, d.tagline), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      font: '800 48px/1.12 var(--font-display)',
      color: 'var(--brand-gold)',
      maxWidth: 520
    }
  }, "Find a Place You'll Love to Call Home"), /*#__PURE__*/React.createElement(Divider, {
    variant: "gradient",
    width: 96,
    glow: true,
    style: {
      margin: '24px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--warm-white)',
      opacity: .85
    }
  }, "Best Properties advises buyers, tenants and investors across Pune \u2014 from the first site visit to registration."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('Properties')
  }, "Find Your Dream Home"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "phone",
    onClick: () => onNavigate('Contact')
  }, "Talk to a consultant"))), /*#__PURE__*/React.createElement(Photo, {
    height: 440,
    label: "Premium villa exterior"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      bottom: 24,
      right: 24,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Featured"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: '700 24px/1.2 var(--font-display)',
      color: 'var(--brand-gold)'
    }
  }, "Ashokvan Signature Villa"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13,
      color: 'var(--warm-white)',
      opacity: .8
    }
  }, "Nanded City, Pune \u2022 3 BHK")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 28px/1 var(--font-display)',
      color: 'var(--warm-white)'
    }
  }, "Rs 1.85 Cr")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--gradient-accent)'
    }
  }));
}
function SearchBar({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    pad: 40
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "navy",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr auto',
      gap: 16,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Locality",
    icon: "map-pin",
    placeholder: "Nanded City, Sinhagad Road\u2026"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Property type",
    placeholder: "Any",
    options: ['Villa', 'Apartment', 'Independent House', 'Plot', 'Commercial']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Budget",
    placeholder: "Any",
    options: ['Up to 60 L', '60 L – 1 Cr', '1 Cr – 2 Cr', 'Above 2 Cr']
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "search",
    onClick: () => onNavigate('Properties')
  }, "Search")));
}
function HomeScreen({
  onNavigate
}) {
  const d = window.BP_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(SearchBar, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Current listings",
    title: "Premium Properties. Trusted Guidance.",
    body: "A selection of homes and plots we are advising on right now."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconAfter: "arrow-right",
    onClick: () => onNavigate('Properties')
  }, "All properties")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 48
    }
  }, d.properties.slice(0, 3).map(p => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: p.title
  }, p, {
    onCta: () => onNavigate('Contact')
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    height: 380,
    label: "Architectural exterior"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: d.service,
    title: "Your Property Journey Starts Here",
    body: "We work with a small number of clients at a time so every site visit, negotiation and document check gets proper attention."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      marginTop: 40
    }
  }, d.services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "var(--brand-gold)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1.3 var(--font-display)',
      color: 'var(--brand-gold)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--warm-white)',
      opacity: .78
    }
  }, s.body)))))))), /*#__PURE__*/React.createElement(Section, {
    pad: 80
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "navy",
    padding: "48px",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40,
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-display)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)'
    }
  }, d.tagline), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      font: '700 32px/1.2 var(--font-display)',
      color: 'var(--brand-gold)'
    }
  }, "Helping You Find the Right Address")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "phone",
    onClick: () => onNavigate('Contact')
  }, "Request a callback"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PropertiesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Card,
  Checkbox,
  PropertyCard,
  Select,
  Switch,
  Tabs,
  SectionHeading,
  Input
} = window.BestPropertiesDesignSystem_20a5e0;
function PropertiesScreen({
  onNavigate
}) {
  const d = window.BP_DATA;
  const [tab, setTab] = React.useState('All');
  const [verified, setVerified] = React.useState(false);
  const filter = {
    All: null,
    Villas: 'Villa',
    Apartments: 'Apartment',
    Plots: 'Plot'
  }[tab];
  const list = filter ? d.properties.filter(p => p.label.includes(filter)) : d.properties;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    pad: 64
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Properties",
    title: "Homes and plots we are advising on",
    body: "Every listing is visited and verified by a Best Properties consultant before it appears here."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 40,
      marginTop: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "navy",
    style: {
      display: 'grid',
      gap: 20,
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Locality",
    icon: "search",
    placeholder: "Search area"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Budget",
    placeholder: "Any",
    options: ['Up to 60 L', '60 L – 1 Cr', '1 Cr – 2 Cr', 'Above 2 Cr']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Bedrooms",
    placeholder: "Any",
    options: ['1 BHK', '2 BHK', '3 BHK', '4 BHK +']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-display)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)',
      marginBottom: 4
    }
  }, "Status"), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ready to move",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Under construction"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Resale"
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "Verified only",
    checked: verified,
    onChange: e => setVerified(e.target.checked)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true
  }, "Apply filters")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: ['All', 'Villas', 'Apartments', 'Plots'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--brand-gold-muted)'
    }
  }, list.length, " properties"), /*#__PURE__*/React.createElement(Select, {
    options: ['Newest first', 'Price: low to high', 'Price: high to low']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, list.map(p => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: p.title
  }, p, {
    cta: "View details",
    onCta: () => onNavigate('Detail')
  }))))))));
}
Object.assign(window, {
  PropertiesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PropertiesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Navbar,
  Divider,
  Icon,
  ContactRow
} = window.BestPropertiesDesignSystem_20a5e0;
function Photo({
  height = 420,
  label = 'Property photograph',
  radius = 'var(--radius-lg)',
  children,
  overlay = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--brand-navy)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-body)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(216,180,90,.45)'
    }
  }, label), overlay ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-navy)'
    }
  }) : null, children);
}
function Section({
  tone = 'navy',
  pad = 100,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === 'deep' ? 'var(--surface-panel)' : 'var(--surface-base)',
      padding: pad + 'px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 var(--pad-container-desktop)'
    }
  }, children));
}
function Footer() {
  const d = window.BP_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--brand-navy)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 64,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-width)',
      margin: '0 auto',
      padding: '0 var(--pad-container-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1.4fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 20px/1 var(--font-display)',
      letterSpacing: '.14em',
      color: 'var(--brand-gold)'
    }
  }, d.brand), /*#__PURE__*/React.createElement(Divider, {
    variant: "gradient",
    width: 64,
    glow: true,
    style: {
      margin: '16px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-display)',
      letterSpacing: '.22em',
      color: 'var(--brand-gold-muted)'
    }
  }, d.tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--warm-white)',
      opacity: .72,
      maxWidth: 300
    }
  }, "Premium properties. Trusted guidance. Helping families across Pune find the right address.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-display)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)',
      marginBottom: 20
    }
  }, "Explore"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, d.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 14,
      color: 'var(--warm-white)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px/1 var(--font-display)',
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--brand-gold-muted)',
      marginBottom: 20
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, d.contacts.map((c, i) => /*#__PURE__*/React.createElement(ContactRow, _extends({
    key: i
  }, c, {
    tone: c.kind === 'address' ? 'warm' : 'gold'
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid var(--border-divider)',
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 12px var(--font-body)',
      color: 'var(--brand-gold-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Best Properties. All rights reserved."), /*#__PURE__*/React.createElement("span", null, d.service))));
}
function Header({
  active,
  onNavigate,
  onCta
}) {
  return /*#__PURE__*/React.createElement(Navbar, {
    brand: window.BP_DATA.brand,
    links: window.BP_DATA.links,
    active: active,
    onNavigate: onNavigate,
    onCta: onCta
  });
}
Object.assign(window, {
  Photo,
  Section,
  Footer,
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.BP_DATA = {
  brand: 'BEST PROPERTIES',
  tagline: 'TRUSTED REAL ESTATE SOLUTIONS',
  service: 'DREAM HOMES CONSULTANT',
  links: ['Home', 'Properties', 'About Us', 'Services', 'Contact'],
  contacts: [{
    kind: 'phone',
    name: 'Mr. Prashant Kadam',
    value: '7070535343'
  }, {
    kind: 'phone',
    name: 'Mr. Nanasaheb Bhuse',
    value: '9623707172'
  }, {
    kind: 'email',
    value: 'bestproperties191@gmail.com'
  }, {
    kind: 'address',
    value: 'Best Properties, Shop No. G-97, Ground Floor, Destination Center-1, Nanded City, Pune-411068.'
  }],
  services: [{
    icon: 'home',
    title: 'Buying advisory',
    body: 'Shortlisting, site visits and negotiation for homes that match your budget and locality.'
  }, {
    icon: 'key-round',
    title: 'Renting & leasing',
    body: 'Tenant and owner representation for residential and commercial spaces.'
  }, {
    icon: 'file-check-2',
    title: 'Documentation',
    body: 'Agreement, registration and loan paperwork handled end to end.'
  }, {
    icon: 'line-chart',
    title: 'Investment guidance',
    body: 'Locality-level guidance on plots, pre-launch and resale opportunities.'
  }],
  properties: [{
    badge: 'Featured',
    label: 'Villa • Nanded City',
    title: 'Ashokvan Signature Villa',
    description: 'East-facing villa with private garden, covered parking and clubhouse access.',
    price: 'Rs 1.85 Cr',
    priceNote: 'All inclusive',
    details: [{
      label: 'Nanded City',
      icon: 'map-pin'
    }, {
      label: '2,450 sq ft',
      icon: 'ruler'
    }, {
      label: '3 BHK',
      icon: 'bed-double'
    }, {
      label: 'Villa',
      icon: 'building-2'
    }]
  }, {
    label: 'Apartment • Sinhagad Road',
    title: 'Destination Heights',
    description: 'Ready-to-move apartment with river-facing balconies and two-level parking.',
    price: 'Rs 92 L',
    priceNote: 'Negotiable',
    details: [{
      label: 'Sinhagad Road',
      icon: 'map-pin'
    }, {
      label: '1,180 sq ft',
      icon: 'ruler'
    }, {
      label: '2 BHK',
      icon: 'bed-double'
    }, {
      label: 'Apartment',
      icon: 'building'
    }]
  }, {
    badge: 'New Launch',
    label: 'Independent House • Dhayari',
    title: 'Shantiban Residency',
    description: 'Independent house on a 2,000 sq ft plot with scope for a third floor.',
    price: 'Rs 1.32 Cr',
    details: [{
      label: 'Dhayari',
      icon: 'map-pin'
    }, {
      label: '1,900 sq ft',
      icon: 'ruler'
    }, {
      label: '4 BHK',
      icon: 'bed-double'
    }, {
      label: 'House',
      icon: 'home'
    }]
  }, {
    label: 'Plot • Kirkatwadi',
    title: 'Riverside Plot Scheme',
    description: 'NA-sanctioned plots with internal roads, water connection and boundary wall.',
    price: 'Rs 48 L',
    priceNote: 'Per plot',
    details: [{
      label: 'Kirkatwadi',
      icon: 'map-pin'
    }, {
      label: '2,200 sq ft',
      icon: 'ruler'
    }, {
      label: 'Plot',
      icon: 'land-plot'
    }]
  }, {
    label: 'Apartment • Nanded City',
    title: 'Madhuban Enclave',
    description: 'Two-bedroom apartment in a gated township with school and market inside.',
    price: 'Rs 78 L',
    details: [{
      label: 'Nanded City',
      icon: 'map-pin'
    }, {
      label: '960 sq ft',
      icon: 'ruler'
    }, {
      label: '2 BHK',
      icon: 'bed-double'
    }]
  }, {
    label: 'Commercial • Destination Center',
    title: 'Ground-floor Retail Shop',
    description: 'Corner shop with frontage on the main internal road of the complex.',
    price: 'Rs 65 L',
    details: [{
      label: 'Nanded City',
      icon: 'map-pin'
    }, {
      label: '420 sq ft',
      icon: 'ruler'
    }, {
      label: 'Retail',
      icon: 'store'
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ContactRow = __ds_scope.ContactRow;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();

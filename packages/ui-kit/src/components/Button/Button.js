"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonLabel = void 0;
const clsx_1 = __importDefault(require("clsx"));
const Button_module_css_1 = __importDefault(require("./Button.module.css"));
const Text_1 = require("../Text");
const ButtonLabel = (_a) => {
  var { content } = _a,
    rest = __rest(_a, ["content"]);
  return (
    <Text_1.Text as="span" weight="semibold" {...rest}>
      {content}
    </Text_1.Text>
  );
};
exports.ButtonLabel = ButtonLabel;
const Button = (_a) => {
  var {
      label,
      className,
      variant = "primary",
      disabled = false,
      children: _children,
      type = "button",
    } = _a,
    rest = __rest(_a, ["label", "className", "variant", "disabled", "children", "type"]);
  const classes = (0, clsx_1.default)(
    Button_module_css_1.default.button,
    {
      [Button_module_css_1.default["button-primary"]]: variant === "primary",
      [Button_module_css_1.default["button-secondary"]]: variant === "secondary",
      [Button_module_css_1.default["button-tertiary"]]: variant === "tertiary",
    },
    className
  );
  return (
    <button
      disabled={disabled}
      className={classes}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {typeof label === "string" ? <exports.ButtonLabel content={label} /> : label}
    </button>
  );
};
exports.Button = Button;

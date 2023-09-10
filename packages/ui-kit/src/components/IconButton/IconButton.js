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
exports.IconButton = void 0;
const clsx_1 = __importDefault(require("clsx"));
const IconButton_module_css_1 = __importDefault(require("./IconButton.module.css"));
const Button_1 = require("../Button/Button");
const IconButton = (_a) => {
  var { label, icon, className, variant, alignment = "left" } = _a,
    rest = __rest(_a, ["label", "icon", "className", "variant", "alignment"]);
  if (variant === "bare") {
    return (
      <button
        type="button"
        className={(0, clsx_1.default)(
          IconButton_module_css_1.default["bare-icon-button"],
          className
        )}
        {...rest}
      >
        {icon}
      </button>
    );
  }
  return (
    <Button_1.Button
      label={
        <>
          {icon}
          {typeof label === "string" && (
            <Button_1.ButtonLabel
              className={
                IconButton_module_css_1.default[
                  alignment === "right" ? "icon-button-label-reverse" : "icon-button-label"
                ]
              }
              content={label}
            />
          )}
        </>
      }
      variant="secondary"
      className={(0, clsx_1.default)(
        IconButton_module_css_1.default["icon-button"],
        {
          [IconButton_module_css_1.default["icon-button-reverse"]]: alignment === "right",
          [IconButton_module_css_1.default["icon-button-nolabel"]]: !label,
        },
        className
      )}
      {...rest}
    />
  );
};
exports.IconButton = IconButton;

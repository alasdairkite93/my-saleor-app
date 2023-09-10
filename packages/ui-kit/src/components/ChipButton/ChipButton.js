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
exports.ChipButton = void 0;
const clsx_1 = __importDefault(require("clsx"));
const ChipButton_module_css_1 = __importDefault(require("./ChipButton.module.css"));
const ChipButton = (_a) => {
  var { label, active, className } = _a,
    rest = __rest(_a, ["label", "active", "className"]);
  return (
    <button
      type="button"
      className={(0, clsx_1.default)(
        ChipButton_module_css_1.default["chip-button"],
        {
          [ChipButton_module_css_1.default["chip-button-active"]]: active,
        },
        className
      )}
      {...rest}
    >
      {label}
    </button>
  );
};
exports.ChipButton = ChipButton;

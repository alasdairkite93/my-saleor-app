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
exports.Snackbar = void 0;
const clsx_1 = __importDefault(require("clsx"));
const Snackbar_module_css_1 = __importDefault(require("./Snackbar.module.css"));
const Text_1 = require("../Text");
const icons_1 = require("../icons");
const selectIcon = (variant) => {
  switch (variant) {
    case "success":
      return <icons_1.SuccessIcon />;
    case "error":
      return <icons_1.ErrorIcon />;
    default:
      return undefined;
  }
};
const Snackbar = (_a) => {
  var { content, variant, className } = _a,
    rest = __rest(_a, ["content", "variant", "className"]);
  const icon = selectIcon(variant);
  return (
    <div
      className={(0, clsx_1.default)(
        Snackbar_module_css_1.default.snackbar,
        variant && Snackbar_module_css_1.default[`snackbar-${variant}`],
        className
      )}
      {...rest}
    >
      {icon}
      <Text_1.Text
        className={(0, clsx_1.default)({
          [Snackbar_module_css_1.default["snackbar-label-margin"]]: !!icon,
        })}
      >
        {content}
      </Text_1.Text>
    </div>
  );
};
exports.Snackbar = Snackbar;

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
exports.Text = void 0;
const clsx_1 = __importDefault(require("clsx"));
const Text_module_css_1 = __importDefault(require("./Text.module.css"));
const Text = (_a) => {
  var { as = "p", size = "base", color, weight, className } = _a,
    rest = __rest(_a, ["as", "size", "color", "weight", "className"]);
  const classes = (0, clsx_1.default)(
    {
      [Text_module_css_1.default["txt-primary"]]: !color,
      [Text_module_css_1.default["txt-secondary"]]: color === "secondary",
      [Text_module_css_1.default["txt-tertiary"]]: color === "tertiary",
      [Text_module_css_1.default["txt-error"]]: color === "error",
      [Text_module_css_1.default["txt-success"]]: color === "success",
      [Text_module_css_1.default["txt-xs"]]: size === "xs",
      [Text_module_css_1.default["txt-sm"]]: size === "sm",
      [Text_module_css_1.default["txt-md"]]: size === "md",
      [Text_module_css_1.default["txt-base"]]: size === "base",
      [Text_module_css_1.default["txt-lg"]]: size === "lg",
      [Text_module_css_1.default["txt-xl"]]: size === "xl",
      [Text_module_css_1.default["txt-bold"]]: weight === "bold",
      [Text_module_css_1.default["txt-semibold"]]: weight === "semibold",
      [Text_module_css_1.default["txt-regular"]]: weight === "regular",
    },
    className
  );
  const CustomTag = as;
  return <CustomTag className={classes} {...rest} />;
};
exports.Text = Text;

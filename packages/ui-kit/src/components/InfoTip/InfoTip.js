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
exports.InfoTip = void 0;
const clsx_1 = __importDefault(require("clsx"));
const InfoTip_module_css_1 = __importDefault(require("./InfoTip.module.css"));
const Text_1 = require("../Text");
const InfoTip = (_a) => {
  var { content, className, alignment = "left" } = _a,
    rest = __rest(_a, ["content", "className", "alignment"]);
  return (
    <Text_1.Text
      as="div"
      className={(0, clsx_1.default)(
        InfoTip_module_css_1.default.infotip,
        {
          [InfoTip_module_css_1.default["infotip-triangle-left"]]: alignment !== "right",
          [InfoTip_module_css_1.default["infotip-triangle-right"]]: alignment === "right",
        },
        className
      )}
      {...rest}
    >
      {content}
    </Text_1.Text>
  );
};
exports.InfoTip = InfoTip;

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
exports.RemoveButton = void 0;
const clsx_1 = __importDefault(require("clsx"));
const RemoveButton_module_css_1 = __importDefault(require("./RemoveButton.module.css"));
const Button_1 = require("../Button");
const icons_1 = require("../icons");
const RemoveButton = (_a) => {
  var { className } = _a,
    rest = __rest(_a, ["className"]);
  return (
    <Button_1.Button
      label={<icons_1.RemoveIcon />}
      variant="secondary"
      className={(0, clsx_1.default)(RemoveButton_module_css_1.default["remove-button"], className)}
      {...rest}
    />
  );
};
exports.RemoveButton = RemoveButton;

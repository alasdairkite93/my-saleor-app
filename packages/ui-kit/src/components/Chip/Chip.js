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
exports.Chip = void 0;
const clsx_1 = __importDefault(require("clsx"));
const Chip_module_css_1 = __importDefault(require("./Chip.module.css"));
const Button_1 = require("../Button/Button");
const icons_1 = require("../icons");
const Chip = (_a) => {
  var { label, icon, classNames, onClick } = _a,
    rest = __rest(_a, ["label", "icon", "classNames", "onClick"]);
  return (
    <div
      className={(0, clsx_1.default)(
        Chip_module_css_1.default.chip,
        classNames === null || classNames === void 0 ? void 0 : classNames.container
      )}
      {...rest}
    >
      {icon}
      <Button_1.ButtonLabel
        content={label}
        className={(0, clsx_1.default)(
          { [Chip_module_css_1.default["chip-label-margin"]]: !!icon },
          classNames === null || classNames === void 0 ? void 0 : classNames.label
        )}
      />
      <button
        type="button"
        className={(0, clsx_1.default)(
          Chip_module_css_1.default["chip-button"],
          classNames === null || classNames === void 0 ? void 0 : classNames.button
        )}
        onClick={onClick}
      >
        <icons_1.RemoveIcon />
      </button>
    </div>
  );
};
exports.Chip = Chip;

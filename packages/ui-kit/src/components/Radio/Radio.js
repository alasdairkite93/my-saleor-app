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
exports.Radio = void 0;
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const Radio_module_css_1 = __importDefault(require("./Radio.module.css"));
const Label_1 = require("../Label");
exports.Radio = (0, react_1.forwardRef)((_a, ref) => {
  var { label, checked, value, classNames } = _a,
    rest = __rest(_a, ["label", "checked", "value", "classNames"]);
  const generatedId = (0, react_1.useId)();
  const id = (rest === null || rest === void 0 ? void 0 : rest.id) || generatedId;
  return (
    <Label_1.Label
      className={(0, clsx_1.default)(
        Radio_module_css_1.default.label,
        classNames === null || classNames === void 0 ? void 0 : classNames.label
      )}
      htmlFor={id}
    >
      <div
        className={(0, clsx_1.default)(
          Radio_module_css_1.default.radio,
          classNames === null || classNames === void 0 ? void 0 : classNames.container
        )}
      >
        <div className={(0, clsx_1.default)(Radio_module_css_1.default["box"])}>
          <input
            ref={ref}
            type="radio"
            value={value}
            checked={checked}
            id={id}
            className={classNames === null || classNames === void 0 ? void 0 : classNames.input}
            {...rest}
          />
          <div
            className={(0, clsx_1.default)(
              Radio_module_css_1.default["radio-input"],
              classNames === null || classNames === void 0 ? void 0 : classNames.radio
            )}
          />
        </div>
        {label && <div className="w-full flex justify-stretch ml-4">{label}</div>}
      </div>
    </Label_1.Label>
  );
});
exports.Radio.displayName = "Radio";

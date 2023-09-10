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
exports.Select = void 0;
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const Select_module_css_1 = __importDefault(require("./Select.module.css"));
const icons_1 = require("../icons");
const PLACEHOLDER_KEY = "placeholder";
const SelectComponent = (_a, ref) => {
  var { options, classNames, placeholder = "", onChange } = _a,
    rest = __rest(_a, ["options", "classNames", "placeholder", "onChange"]);
  const [showPlaceholder, setShowPlaceholder] = (0, react_1.useState)(!!placeholder);
  const handleChange = (event) => {
    if (event.target.value === PLACEHOLDER_KEY) {
      return;
    }
    setShowPlaceholder(false);
    onChange(event);
  };
  return (
    <div
      className={(0, clsx_1.default)(
        Select_module_css_1.default.container,
        classNames === null || classNames === void 0 ? void 0 : classNames.container
      )}
    >
      <select
        {...rest}
        onChange={handleChange}
        ref={ref}
        className={(0, clsx_1.default)(Select_module_css_1.default.select)}
      >
        {showPlaceholder && (
          <option disabled value="">
            {placeholder}
          </option>
        )}
        {options.map(({ label, value, disabled = false }) => (
          <option value={value} disabled={disabled} key={value}>
            {label}
          </option>
        ))}
      </select>
      <div className={(0, clsx_1.default)(Select_module_css_1.default.icon)}>
        <icons_1.ChevronDownIcon />
      </div>
    </div>
  );
};
exports.Select = (0, react_1.forwardRef)(SelectComponent);

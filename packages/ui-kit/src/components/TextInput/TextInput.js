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
exports.TextInput = void 0;
const clsx_1 = __importDefault(require("clsx"));
const Label_1 = require("../Label");
const Text_1 = require("../Text");
const TextInput_module_css_1 = __importDefault(require("./TextInput.module.css"));
const TextInput = (_a) => {
  var { label, error, required, placeholder, value, classNames = {}, type = "text" } = _a,
    rest = __rest(_a, ["label", "error", "required", "placeholder", "value", "classNames", "type"]);
  const hasError = typeof error === "string";
  return (
    <div
      className={(0, clsx_1.default)(
        TextInput_module_css_1.default["text-input-container"],
        classNames.container
      )}
    >
      <input
        className={(0, clsx_1.default)(
          TextInput_module_css_1.default["text-input"],
          {
            [TextInput_module_css_1.default["text-input-error"]]: hasError,
            [TextInput_module_css_1.default["text-input-nolabel"]]: !label,
          },
          classNames.input
        )}
        placeholder={placeholder}
        value={value}
        required={required}
        spellCheck={false}
        {...rest}
        type={type}
      />
      {label && (
        <Label_1.Label
          className={(0, clsx_1.default)(TextInput_module_css_1.default["text-input-label"], {
            [TextInput_module_css_1.default["text-input-filled-label"]]: value || placeholder,
          })}
        >
          {label}
          {required && "*"}
        </Label_1.Label>
      )}
      {hasError && (
        <Text_1.Text
          size="sm"
          color="error"
          className={TextInput_module_css_1.default["text-input-error-caption"]}
        >
          {error}
        </Text_1.Text>
      )}
    </div>
  );
};
exports.TextInput = TextInput;
exports.TextInput.displayName = "TextInput";

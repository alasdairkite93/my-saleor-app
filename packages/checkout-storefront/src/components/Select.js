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
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const Select = (_a) => {
  var { name } = _a,
    rest = __rest(_a, ["name"]);
  const [field] = (0, formik_1.useField)(name);
  const { handleChange } = (0, useForm_1.useFormContext)();
  return <ui_kit_1.Select {...rest} {...field} onChange={handleChange} />;
};
exports.Select = Select;

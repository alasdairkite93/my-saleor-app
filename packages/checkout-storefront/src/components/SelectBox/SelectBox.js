"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBox = void 0;
const clsx_1 = __importDefault(require("clsx"));
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const formik_1 = require("formik");
const SelectBox = ({ children, className, disabled = false, name, value, id }) => {
  // normally we pass value which is sufficient as an id but in case of doubled forms
  // such as shipping addresses and billing addresses etc. we need to pass a unique id
  const identifier = id || value;
  const { values, handleChange } = (0, useForm_1.useFormContext)();
  const [field] = (0, formik_1.useField)(name);
  const selected = values[name] === value;
  return (
    <div className={(0, clsx_1.default)("select-box", { selected, disabled }, className)}>
      <input
        type="radio"
        {...field}
        onChange={handleChange}
        value={value}
        checked={selected}
        id={identifier}
      />
      <label className="w-full" htmlFor={identifier}>
        {children}
      </label>
    </div>
  );
};
exports.SelectBox = SelectBox;

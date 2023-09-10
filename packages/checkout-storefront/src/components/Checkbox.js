"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const react_1 = __importDefault(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const formik_1 = require("formik");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const Checkbox = ({ name, label }) => {
  const { handleChange } = (0, useForm_1.useFormContext)();
  const [field, { value }] = (0, formik_1.useField)(name);
  return (
    <ui_kit_1.Checkbox
      {...field}
      label={label}
      name={name}
      checked={value}
      onChange={(event) => {
        handleChange(
          Object.assign(Object.assign({}, event), {
            target: Object.assign(Object.assign({}, event.target), { name, value: !value }),
          })
        );
      }}
    />
  );
};
exports.Checkbox = Checkbox;

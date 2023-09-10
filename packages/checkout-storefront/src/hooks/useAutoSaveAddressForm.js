"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoSaveAddressForm = void 0;
const useDebouncedSubmit_1 = require("@/checkout-storefront/hooks/useDebouncedSubmit");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
const useAutoSaveAddressForm = (_a) => {
  var { scope } = _a,
    formProps = __rest(_a, ["scope"]);
  const { setCheckoutUpdateState } = (0, updateStateStore_1.useCheckoutUpdateStateChange)(scope);
  const { initialValues, onSubmit } = formProps;
  const form = (0, useForm_1.useForm)(formProps);
  const { values, validateForm, dirty, handleBlur, handleChange } = form;
  const debouncedSubmit = (0, useDebouncedSubmit_1.useDebouncedSubmit)(onSubmit);
  const formHelpers = (0, lodash_es_1.pick)(form, [
    "setErrors",
    "setStatus",
    "setTouched",
    "setValues",
    "setSubmitting",
    "setFormikState",
    "setFieldValue",
    "setFieldTouched",
    "setFieldError",
    "validateForm",
    "validateField",
    "resetForm",
    "submitForm",
  ]);
  // it'd make sense for onSubmit prop to be optional but formik has ignored this
  // request for forever now https://github.com/jaredpalmer/formik/issues/2675
  // so we're just gonna add a partial submit for guest address form to work
  const partialSubmit = (0, react_1.useCallback)(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        const formErrors = yield validateForm(values);
        if (!(0, useForm_1.hasErrors)(formErrors) && dirty) {
          setCheckoutUpdateState("loading");
          void debouncedSubmit(
            Object.assign(
              Object.assign(Object.assign({}, initialValues), { countryCode: values.countryCode }),
              values
            ),
            formHelpers
          );
        }
      }),
    [
      validateForm,
      values,
      dirty,
      setCheckoutUpdateState,
      debouncedSubmit,
      initialValues,
      formHelpers,
    ]
  );
  const onChange = (event) => {
    handleChange(event);
    void partialSubmit();
  };
  const onBlur = (event) => {
    handleBlur(event);
    void partialSubmit();
  };
  return Object.assign(Object.assign({}, form), {
    handleChange: onChange,
    handleBlur: onBlur,
    handleSubmit: partialSubmit,
  });
};
exports.useAutoSaveAddressForm = useAutoSaveAddressForm;

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
exports.useFormContext = exports.useForm = void 0;
const formik_1 = require("formik");
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
const useForm = (_a) => {
  var { initialDirty = false } = _a,
    formProps = __rest(_a, ["initialDirty"]);
  const form = (0, formik_1.useFormik)(formProps);
  // we do this because in some cases it's not updated properly
  // https://github.com/jaredpalmer/formik/issues/3165
  const [dirty, setDirty] = (0, react_1.useState)(initialDirty);
  const [values, setValues] = (0, react_1.useState)(formProps.initialValues);
  const {
    handleSubmit: handleFormikSubmit,
    handleChange: formikHandleChange,
    setFieldValue: setFormikFieldValue,
  } = form;
  const handleSubmit = (0, react_1.useCallback)(
    (event) => {
      event === null || event === void 0 ? void 0 : event.preventDefault();
      // we do it here because formik doesn't pass props like dirty to onSubmit
      if (dirty) {
        handleFormikSubmit(event);
      }
    },
    [dirty, handleFormikSubmit]
  );
  const handleChange = (0, react_1.useCallback)(
    (event) => {
      const { name, value } = event.target;
      const updatedValues = Object.assign(Object.assign({}, values), { [name]: value });
      setDirty(!(0, lodash_es_1.isEqual)(values, updatedValues));
      setValues(updatedValues);
      formikHandleChange(event);
    },
    [formikHandleChange, values]
  );
  const setFieldValue = (field, value) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (values[field] === value) {
        return;
      }
      yield setFormikFieldValue(field, value);
      setValues(Object.assign(Object.assign({}, values), { [field]: value }));
    });
  return Object.assign(Object.assign({}, form), {
    handleSubmit,
    handleChange,
    values,
    dirty,
    setFieldValue,
  });
};
exports.useForm = useForm;
exports.useFormContext = formik_1.useFormikContext;

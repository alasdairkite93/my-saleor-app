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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const formik_1 = require("formik");
const TextInput = (props) => <formik_1.Field {...props} component={TextInputComponent} />;
exports.TextInput = TextInput;
const TextInputComponent = (_a) => {
  var {
      field,
      form: { touched, errors },
      optional,
    } = _a,
    props = __rest(_a, ["field", "form", "optional"]);
  return (
    <ui_kit_1.TextInput
      required={!optional}
      error={touched[field.name] ? errors[field.name] : undefined}
      {...field}
      {...props}
    />
  );
};

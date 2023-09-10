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
exports.WithoutLabel = exports.Errored = exports.Filled = exports.Basic = void 0;
const TextInput_1 = require("./TextInput");
const utils_1 = require("../../lib/utils");
exports.default = {
  title: "Components/TextInput",
  component: TextInput_1.TextInput,
};
const Template = (_a) => {
  var { value: _value } = _a,
    args = __rest(_a, ["value"]);
  const [inputValue, setInputValue] = (0, utils_1.useStateWithOnChangeHandler)();
  return <TextInput_1.TextInput {...args} value={inputValue} onChange={setInputValue} />;
};
exports.Basic = Template.bind({});
exports.Basic.args = {
  label: "Label",
  value: "",
  required: true,
};
exports.Filled = Template.bind({});
exports.Filled.args = {
  label: "Label",
  value: "Filled value",
  required: true,
};
exports.Errored = Template.bind({});
exports.Errored.args = {
  label: "Label",
  value: "Filled value",
  error: "This is an error mesage for this specific field",
  required: true,
};
exports.WithoutLabel = Template.bind({});
exports.WithoutLabel.args = {
  value: "Filled value",
  placeholder: "Placeholder",
  required: true,
};

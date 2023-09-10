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
exports.WithoutLabel = exports.Checked = exports.Basic = void 0;
const react_1 = require("react");
const Checkbox_1 = require("./Checkbox");
exports.default = {
  title: "Components/Checkbox",
  component: Checkbox_1.Checkbox,
};
const Template = (_a) => {
  var { checked = false } = _a,
    args = __rest(_a, ["checked"]);
  const [enabled, setEnabled] = (0, react_1.useState)(checked);
  return (
    <Checkbox_1.Checkbox
      {...args}
      checked={enabled}
      onChange={(event) => setEnabled(event.target.checked)}
    />
  );
};
exports.Basic = Template.bind({});
exports.Basic.args = {
  label: "Selector Label",
  value: "checkbox",
};
exports.Checked = Template.bind({});
exports.Checked.args = {
  label: "Selector Label",
  checked: true,
};
const TemplateWithoutLabel = (_a) => {
  var { checked } = _a,
    args = __rest(_a, ["checked"]);
  const [enabled, setEnabled] = (0, react_1.useState)(checked);
  (0, react_1.useEffect)(() => {
    setEnabled(checked);
  }, [checked]);
  return (
    <label>
      <Checkbox_1.Checkbox {...args} checked={enabled} onChange={() => setEnabled(!enabled)} />
    </label>
  );
};
exports.WithoutLabel = TemplateWithoutLabel.bind({});
exports.WithoutLabel.args = {
  checked: true,
};

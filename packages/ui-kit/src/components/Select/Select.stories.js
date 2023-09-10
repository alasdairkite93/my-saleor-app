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
exports.Countries = exports.Disabled = exports.Basic = void 0;
const Select_1 = require("./Select");
const utils_1 = require("../../lib/utils");
exports.default = {
  title: "Components/Select",
  component: Select_1.Select,
};
const Template = (_a) => {
  var args = __rest(_a, []);
  const [, setSelectedValue] = (0, utils_1.useStateWithOnChangeHandler)();
  return (
    <div className="w-[440px]">
      <Select_1.Select {...args} onChange={setSelectedValue} />
    </div>
  );
};
const users = [
  { label: "Durward Reynolds", value: "Durward Reynolds", id: "1" },
  { label: "Kenton Towne", value: "Kenton Towne", id: "2" },
  { label: "Therese Wunsch", value: "Therese Wunsch", id: "3" },
  { label: "Benedict Kessler", value: "Benedict Kessler", id: "4" },
  { label: "Katelyn Rohan", value: "Katelyn Rohan", id: "5" },
];
const commonArgs = {
  options: users,
  placeholder: "Select option",
};
exports.Basic = Template.bind({});
exports.Basic.args = commonArgs;
exports.Disabled = Template.bind({});
exports.Disabled.args = Object.assign(Object.assign({}, commonArgs), { disabled: true });
exports.Countries = Template.bind({});
const countries = [
  { label: "Polska", value: "Polska", icon: "🇵🇱", id: "1" },
  { label: "Niemcy", value: "Niemcy", icon: "🇩🇪", id: "2" },
  { label: "USA", value: "USA", icon: "🇺🇸", id: "3" },
  { label: "Francja", value: "Francja", icon: "🇫🇷", id: "4" },
  { label: "Bangladesz", value: "Bangladesz", icon: "🇧🇩", id: "5" },
];
exports.Countries.args = {
  options: countries,
};

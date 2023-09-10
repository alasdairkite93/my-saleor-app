"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Active = exports.Basic = void 0;
const ChipButton_1 = require("./ChipButton");
exports.default = {
  title: "Components/ChipButton",
  component: ChipButton_1.ChipButton,
};
const Template = (args) => <ChipButton_1.ChipButton {...args} />;
exports.Basic = Template.bind({});
exports.Basic.args = {
  label: "English",
};
exports.Active = Template.bind({});
exports.Active.args = {
  label: "English",
  active: true,
};

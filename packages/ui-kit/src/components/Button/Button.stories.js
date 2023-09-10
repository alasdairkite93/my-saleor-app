"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secondary = exports.Primary = void 0;
const Button_1 = require("./Button");
exports.default = {
  title: "Components/Button",
  component: Button_1.Button,
};
const Template = (args) => <Button_1.Button {...args} />;
exports.Primary = Template.bind({});
exports.Primary.args = {
  label: "Button",
  variant: "primary",
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
  label: "Button",
  variant: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
  label: "Button",
  variant: "tertiary",
};

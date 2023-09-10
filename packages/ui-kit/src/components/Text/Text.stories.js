"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XLarge =
  exports.Large =
  exports.Medium =
  exports.Small =
  exports.XSmall =
  exports.Base =
    void 0;
const Text_1 = require("./Text");
exports.default = {
  title: "Components/Text",
  component: Text_1.Text,
};
const Template = (args) => <Text_1.Text {...args} />;
exports.Base = Template.bind({});
exports.Base.args = {
  size: "base",
  children: "Example of medium text paragraph",
};
exports.XSmall = Template.bind({});
exports.XSmall.args = {
  size: "xs",
  children: "Example of small text paragraph",
};
exports.Small = Template.bind({});
exports.Small.args = {
  size: "sm",
  children: "Example of small text paragraph",
};
exports.Medium = Template.bind({});
exports.Medium.args = {
  size: "md",
  children: "Example of medium text paragraph",
};
exports.Large = Template.bind({});
exports.Large.args = {
  size: "lg",
  children: "Example of large text paragraph",
};
exports.XLarge = Template.bind({});
exports.XLarge.args = {
  size: "xl",
  children: "Example of large text paragraph",
};

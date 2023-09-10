"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const addon_actions_1 = require("@storybook/addon-actions");
const RemoveButton_1 = require("./RemoveButton");
exports.default = {
  title: "Components/RemoveButton",
  component: RemoveButton_1.RemoveButton,
};
const Template = (args) => <RemoveButton_1.RemoveButton {...args} />;
exports.Basic = Template.bind({});
exports.Basic.args = {
  onClick: (0, addon_actions_1.action)("onClick"),
};

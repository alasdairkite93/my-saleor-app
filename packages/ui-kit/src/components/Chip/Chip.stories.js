"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithIcon = exports.Basic = void 0;
const addon_actions_1 = require("@storybook/addon-actions");
const Chip_1 = require("./Chip");
const icons_1 = require("../icons");
exports.default = {
  title: "Components/Chip",
  component: Chip_1.Chip,
};
const Template = (args) => <Chip_1.Chip {...args} />;
exports.Basic = Template.bind({});
exports.Basic.args = {
  label: "SAVE10",
  onClick: (0, addon_actions_1.action)("onCloseClick"),
};
exports.WithIcon = Template.bind({});
exports.WithIcon.args = {
  icon: <icons_1.DiscountIcon />,
  label: "SAVE10",
  onClick: (0, addon_actions_1.action)("onCloseClick"),
};

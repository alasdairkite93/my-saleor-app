"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BareWithImage =
  exports.Bare =
  exports.OnlyIcon =
  exports.Alignment =
  exports.Basic =
    void 0;
const IconButton_1 = require("./IconButton");
const icons_1 = require("../icons");
exports.default = {
  title: "Components/IconButton",
  component: IconButton_1.IconButton,
};
const Template = (args) => <IconButton_1.IconButton {...args} />;
exports.Basic = Template.bind({});
exports.Basic.args = {
  icon: <icons_1.DiscountIcon />,
  label: "Button label",
};
exports.Alignment = Template.bind({});
exports.Alignment.args = {
  icon: <icons_1.EditIcon />,
  label: "Button label",
  alignment: "right",
};
exports.OnlyIcon = Template.bind({});
exports.OnlyIcon.args = {
  icon: <icons_1.TrashIcon />,
};
exports.Bare = Template.bind({});
exports.Bare.args = {
  icon: <icons_1.RemoveIcon />,
  variant: "bare",
};
exports.BareWithImage = Template.bind({});
exports.BareWithImage.args = {
  icon: <img src="/plus.svg" alt="Samle img" />,
  variant: "bare",
};

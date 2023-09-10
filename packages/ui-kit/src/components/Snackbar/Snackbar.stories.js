"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Success = void 0;
const Snackbar_1 = require("./Snackbar");
exports.default = {
  title: "Components/Snackbar",
  component: Snackbar_1.Snackbar,
};
const Template = (args) => <Snackbar_1.Snackbar {...args} />;
exports.Success = Template.bind({});
exports.Success.args = {
  content: "Lorem Ipsum dolor sit amet consectetur",
  variant: "success",
};
exports.Error = Template.bind({});
exports.Error.args = {
  content: "Lorem Ipsum dolor sit amet consectetur",
  variant: "error",
};

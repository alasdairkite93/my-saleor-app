"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const Label_1 = require("./Label");
exports.default = {
  title: "Components/Label",
  component: Label_1.Label,
};
const Template = (args) => <Label_1.Label {...args} />;
exports.Basic = Template.bind({});
exports.Basic.args = {
  children: "Label*",
};

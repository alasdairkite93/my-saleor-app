"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicatorOnRight = exports.Basic = void 0;
const InfoTip_1 = require("./InfoTip");
exports.default = {
  title: "Components/InfoTip",
  component: InfoTip_1.InfoTip,
};
const Template = (args) => <InfoTip_1.InfoTip {...args} />;
exports.Basic = Template.bind({});
exports.Basic.args = {
  content: "Lorem Ipsum dolor sit amet consectetur",
};
exports.IndicatorOnRight = Template.bind({});
exports.IndicatorOnRight.args = {
  content: "Lorem Ipsum dolor sit amet consectetur",
  alignment: "right",
};

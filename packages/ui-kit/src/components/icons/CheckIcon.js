"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const CheckIcon = (props) => (
  <SvgContainer_1.SvgContainer size={20} fill="none" {...props}>
    <path d="M5 10L8 13L15 7" stroke="currentColor" strokeWidth="2" />
  </SvgContainer_1.SvgContainer>
);
exports.CheckIcon = CheckIcon;

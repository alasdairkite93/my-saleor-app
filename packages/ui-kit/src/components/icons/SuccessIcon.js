"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const SuccessIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" color="#2C9B2A" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12L10.5 14.5L16 9" stroke="currentColor" strokeWidth="2" />
  </SvgContainer_1.SvgContainer>
);
exports.SuccessIcon = SuccessIcon;

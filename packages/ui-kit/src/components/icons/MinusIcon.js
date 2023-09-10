"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinusIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const MinusIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" {...props}>
    <path d="M17 12L7 12" stroke="currentColor" strokeLinecap="round" />
  </SvgContainer_1.SvgContainer>
);
exports.MinusIcon = MinusIcon;

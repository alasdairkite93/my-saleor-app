"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const BackIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" {...props}>
    <path d="M9.5 8L5 12M5 12L9.5 16M5 12L19 12" stroke="currentColor" />
  </SvgContainer_1.SvgContainer>
);
exports.BackIcon = BackIcon;

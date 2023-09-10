"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const AlertIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" color="#B65757" {...props}>
    <circle cx="12" cy="12" r="9" stroke="#B65757" strokeWidth="2" />
    <path d="M12 12L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 16L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </SvgContainer_1.SvgContainer>
);
exports.AlertIcon = AlertIcon;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const GiftCardIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" {...props}>
    <path
      d="M1 8L1 4H5M1 8L5 4M1 8V12.5M5 4H9.5M9.5 4H23V20H1L1 12.5M9.5 4L1 12.5M4 14H11M4 17H16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgContainer_1.SvgContainer>
);
exports.GiftCardIcon = GiftCardIcon;

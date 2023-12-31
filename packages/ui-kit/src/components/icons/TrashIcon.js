"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrashIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const TrashIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" {...props}>
    <path
      d="M5 5L6 22H18L19 5M5 5H9M5 5H3M19 5H15M19 5H21M9 5L10 2H14L15 5M9 5H15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgContainer_1.SvgContainer>
);
exports.TrashIcon = TrashIcon;

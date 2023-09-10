"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EyeHiddenIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const EyeHiddenIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" {...props}>
    <path
      d="M12 6C5.33333 6 2 12 2 12C2 12 5.33333 18 12 18C18.6667 18 22 12 22 12C22 12 18.6667 6 12 6Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 4L4 20" stroke="currentColor" strokeWidth="1.5" />
  </SvgContainer_1.SvgContainer>
);
exports.EyeHiddenIcon = EyeHiddenIcon;

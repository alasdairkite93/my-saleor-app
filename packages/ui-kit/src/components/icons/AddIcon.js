"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const AddIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" {...props}>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 7C12.5 6.72386 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.72386 11.5 7V11.5H7C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5H11.5V17C11.5 17.2761 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.2761 12.5 17V12.5H17C17.2761 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.2761 11.5 17 11.5H12.5V7Z"
      fill="currentColor"
    />
  </SvgContainer_1.SvgContainer>
);
exports.AddIcon = AddIcon;

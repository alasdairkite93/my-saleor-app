"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveIcon = void 0;
const SvgContainer_1 = require("./SvgContainer");
const RemoveIcon = (props) => (
  <SvgContainer_1.SvgContainer size={24} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6464 17.3536C16.8417 17.5488 17.1583 17.5488 17.3536 17.3536C17.5488 17.1583 17.5488 16.8417 17.3536 16.6464L12.7071 12L17.3536 7.35355C17.5488 7.15829 17.5488 6.84171 17.3536 6.64645C17.1583 6.45118 16.8417 6.45118 16.6464 6.64645L12 11.2929L7.35355 6.64645C7.15829 6.45118 6.84171 6.45118 6.64645 6.64645C6.45118 6.84171 6.45118 7.15829 6.64645 7.35355L11.2929 12L6.64645 16.6464C6.45118 16.8417 6.45118 17.1583 6.64645 17.3536C6.84171 17.5488 7.15829 17.5488 7.35355 17.3536L12 12.7071L16.6464 17.3536Z"
      fill="currentColor"
    />
  </SvgContainer_1.SvgContainer>
);
exports.RemoveIcon = RemoveIcon;

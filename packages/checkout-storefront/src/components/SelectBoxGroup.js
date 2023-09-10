"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBoxGroup = void 0;
const clsx_1 = __importDefault(require("clsx"));
const SelectBoxGroup = ({ label, children, className }) => {
  return (
    <div role="radiogroup" aria-label={label} className={(0, clsx_1.default)(className)}>
      {children}
    </div>
  );
};
exports.SelectBoxGroup = SelectBoxGroup;

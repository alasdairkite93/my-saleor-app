"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseSection = void 0;
const CollapseSection = ({ collapse, children }) => {
  if (collapse) {
    return null;
  }
  return <>{children}</>;
};
exports.CollapseSection = CollapseSection;

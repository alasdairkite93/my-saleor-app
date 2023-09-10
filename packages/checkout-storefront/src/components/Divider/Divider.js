"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const Divider = ({ className }) => {
  const classes = (0, clsx_1.default)("divider", className);
  return <div className={classes} />;
};
exports.Divider = Divider;

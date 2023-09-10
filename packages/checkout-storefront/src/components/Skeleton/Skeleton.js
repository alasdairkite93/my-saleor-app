"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const Skeleton = ({ children, className, variant = "paragraph" }) => {
  const classes = (0, clsx_1.default)(
    "skeleton",
    { "mb-6 w-1/3": variant === "title", "h-3": variant === "paragraph" },
    className
  );
  return <div className={classes}>{children}</div>;
};
exports.Skeleton = Skeleton;

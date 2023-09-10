"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const Title = ({ className, children }) => (
  <ui_kit_1.Text className={(0, clsx_1.default)("mb-2", className)} weight="bold">
    {children}
  </ui_kit_1.Text>
);
exports.Title = Title;

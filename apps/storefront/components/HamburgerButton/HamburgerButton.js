"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.HamburgerButton = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
function HamburgerButton({ active, onClick }) {
  return (
    <button
      type="button"
      onClick={(ev) => onClick(ev)}
      aria-label="Open main menu"
      className={(0, clsx_1.default)(
        "flex-shrink-0 h-6 w-6 cursor-pointer",
        active && "bg-gray-100 rounded-md border-1 shadow-inner"
      )}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}
exports.HamburgerButton = HamburgerButton;

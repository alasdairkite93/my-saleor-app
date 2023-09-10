"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutPriceEntry = void 0;
const react_1 = __importDefault(require("react"));
function CheckoutPriceEntry({ label, value }) {
  return (
    <div className="flex justify-between">
      <dt>{label}</dt>
      <dd className="text-gray-900">{value}</dd>
    </div>
  );
}
exports.CheckoutPriceEntry = CheckoutPriceEntry;
exports.default = CheckoutPriceEntry;

"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryMoneyRow = void 0;
const react_1 = __importDefault(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const Money_1 = require("@/checkout-storefront/components/Money");
const SummaryMoneyRow = (_a) => {
  var { label, children } = _a,
    moneyProps = __rest(_a, ["label", "children"]);
  return (
    <div className="summary-row mb-2">
      <div className="flex flex-row items-center">
        <ui_kit_1.Text color="secondary">{label}</ui_kit_1.Text>
        {children}
      </div>
      <Money_1.Money {...moneyProps} color="secondary" />
    </div>
  );
};
exports.SummaryMoneyRow = SummaryMoneyRow;

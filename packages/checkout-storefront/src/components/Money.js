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
exports.Money = void 0;
const clsx_1 = __importDefault(require("clsx"));
const ui_kit_1 = require("@saleor/ui-kit");
const money_1 = require("@/checkout-storefront/lib/utils/money");
const Money = (_a) => {
  var { money, className, ariaLabel, negative } = _a,
    textProps = __rest(_a, ["money", "className", "ariaLabel", "negative"]);
  const formattedMoney = (0, money_1.getFormattedMoney)(money, negative);
  if (!money) {
    return null;
  }
  return (
    <ui_kit_1.Text
      {...textProps}
      aria-label={ariaLabel}
      className={(0, clsx_1.default)("money", className)}
    >
      {formattedMoney}
    </ui_kit_1.Text>
  );
};
exports.Money = Money;

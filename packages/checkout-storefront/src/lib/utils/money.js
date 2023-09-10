"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedMoney = void 0;
const getFormattedMoney = (money, negative = false) => {
  if (!money) {
    return "";
  }
  const { amount, currency } = money;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(negative ? -amount : amount);
};
exports.getFormattedMoney = getFormattedMoney;

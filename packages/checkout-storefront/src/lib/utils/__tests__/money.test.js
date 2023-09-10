"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const money_1 = require("@/checkout-storefront/lib/utils/money");
describe("getFormattedMoney", () => {
  it("should display proper string for formatted money", () => {
    const money = {
      currency: "GBP",
      amount: 12.4,
    };
    expect((0, money_1.getFormattedMoney)(money)).toEqual("£12.40");
  });
  it("should return empty string for undefined instead of money", () => {
    expect((0, money_1.getFormattedMoney)(undefined)).toEqual("");
  });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/saleor-app-checkout/backend/payments/providers/mollie/utils");
describe("@/saleor-app-checkout/backend/payments/providers/mollie/utils", () => {
  describe("parseAmountToString", () => {
    it("parses integer values to string", () => {
      expect((0, utils_1.parseAmountToString)(10)).toBe("10.00");
      expect((0, utils_1.parseAmountToString)(7)).toBe("7.00");
      expect((0, utils_1.parseAmountToString)(0)).toBe("0.00");
    });
    it("parses float values to string", () => {
      expect((0, utils_1.parseAmountToString)(10.11)).toBe("10.11");
      expect((0, utils_1.parseAmountToString)(8.37)).toBe("8.37");
      expect((0, utils_1.parseAmountToString)(0.021)).toBe("0.02");
    });
    it("parses negative values to string", () => {
      expect((0, utils_1.parseAmountToString)(-10)).toBe("-10.00");
      expect((0, utils_1.parseAmountToString)(-8.37)).toBe("-8.37");
      expect((0, utils_1.parseAmountToString)(-13.123)).toBe("-13.12");
    });
  });
});

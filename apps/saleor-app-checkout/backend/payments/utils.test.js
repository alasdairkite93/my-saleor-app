"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const fast_check_1 = __importDefault(require("fast-check"));
describe("payments/utils", () => {
  it("getIntegerAmountFromSaleor should convert dollars to cents", () => {
    expect((0, utils_1.getIntegerAmountFromSaleor)(123.42)).toEqual(12342);
    expect((0, utils_1.getIntegerAmountFromSaleor)(19.22)).toBe(1922);
    expect((0, utils_1.getIntegerAmountFromSaleor)(10)).toBe(1000);
    expect((0, utils_1.getIntegerAmountFromSaleor)(8.37)).toBe(837);
  });
  it("getSaleorAmountFromInteger should convert cents to dollars", () => {
    expect((0, utils_1.getSaleorAmountFromInteger)(934512)).toEqual(9345.12);
    expect((0, utils_1.getSaleorAmountFromInteger)(1922)).toBe(19.22);
    expect((0, utils_1.getSaleorAmountFromInteger)(1000)).toBe(10);
    expect((0, utils_1.getSaleorAmountFromInteger)(837)).toBe(8.37);
  });
  it("should be idempotent when calling getIntegerAmountFromSaleor on getSaleorAmountFromInteger", () => {
    return fast_check_1.default.assert(
      fast_check_1.default.property(
        fast_check_1.default.integer(),
        (value) =>
          value ===
          (0, utils_1.getIntegerAmountFromSaleor)((0, utils_1.getSaleorAmountFromInteger)(value))
      )
    );
  });
  it("should be idempotent when calling getSaleorAmountFromInteger on getIntegerAmountFromSaleor", () => {
    return fast_check_1.default.assert(
      fast_check_1.default.property(
        fast_check_1.default.integer().map((cents) => cents / 100),
        (value) =>
          value ===
          (0, utils_1.getSaleorAmountFromInteger)((0, utils_1.getIntegerAmountFromSaleor)(value))
      )
    );
  });
});

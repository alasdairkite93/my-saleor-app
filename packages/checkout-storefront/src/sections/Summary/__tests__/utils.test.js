"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixtures_1 = require("@/checkout-storefront/lib/fixtures");
const utils_1 = require("@/checkout-storefront/sections/Summary/utils");
const react_hooks_1 = require("@testing-library/react-hooks");
const utils_2 = require("@/checkout-storefront/__tests__/utils");
describe("useSummaryLineAttributesText", () => {
  it("should return properly formatted string for line with attributes", () => {
    const line = fixtures_1.checkout.lines[0];
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, utils_1.useSummaryLineLineAttributesText)(line),
      {
        wrapper: (0, utils_2.getMockProviders)(),
      }
    );
    expect(hook.current).toEqual("White, 45cm x 45cm, aaaa, 1, 700ml, XS");
  });
  it("should return empty string for line without attributes", () => {
    var _a;
    const line = Object.assign(Object.assign({}, fixtures_1.checkout.lines[0]), {
      variant: Object.assign(
        Object.assign(
          {},
          (_a = fixtures_1.checkout.lines[0]) === null || _a === void 0 ? void 0 : _a.variant
        ),
        { attributes: [] }
      ),
    });
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, utils_1.useSummaryLineLineAttributesText)(line),
      {
        wrapper: (0, utils_2.getMockProviders)(),
      }
    );
    expect(hook.current).toEqual("");
  });
});
describe("isCheckoutLine", () => {
  it("should return true for checkout line", () => {
    const line = fixtures_1.checkout.lines[0];
    expect((0, utils_1.isCheckoutLine)(line)).toEqual(true);
  });
});

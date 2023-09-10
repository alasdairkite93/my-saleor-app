"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fixtures_1 = require("@/checkout-storefront/lib/fixtures");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const items = [
  { name: "one", id: "one" },
  { name: "two", id: "two" },
  { name: "three", id: "three" },
  { name: "four", id: "four" },
];
describe("getById", () => {
  it("should allow filtering only matching elements", () => {
    expect(items.filter((0, common_1.getById)("one"))).toEqual([items[0]]);
  });
});
describe("getByUnmatchingId", () => {
  it("should allow filtering only unmatching elements", () => {
    expect(items.filter((0, common_1.getByUnmatchingId)("two"))).toEqual([
      items[0],
      items[2],
      items[3],
    ]);
  });
});
describe("extractMutationErrors", () => {
  it("should return proper true and filled array for result with api errors", () => {
    const result = {
      data: {
        checkoutShippingAddressUpdate: {
          checkout: null,
          errors: [fixtures_1.apiErrors[0]],
        },
        checkoutBillingAddressUpdate: {
          checkout: null,
          errors: [fixtures_1.apiErrors[1]],
        },
      },
    };
    expect((0, common_1.extractMutationErrors)(result)).toEqual([true, fixtures_1.apiErrors]);
  });
  it("should return false and empty array for result without api errors", () => {
    const result = {
      data: {
        checkoutShippingAddressUpdate: {
          checkout: fixtures_1.checkout,
          errors: [],
        },
        checkoutBillingAddressUpdate: {
          checkout: fixtures_1.checkout,
          errors: [],
        },
      },
    };
    expect((0, common_1.extractMutationErrors)(result)).toEqual([false, []]);
  });
  it("should return true and urql errors array if any", () => {
    const result = {
      error: fixtures_1.urqlError,
      data: {
        checkoutShippingAddressUpdate: {
          checkout: fixtures_1.checkout,
          errors: [],
        },
        checkoutBillingAddressUpdate: {
          checkout: fixtures_1.checkout,
          errors: [],
        },
      },
    };
    expect((0, common_1.extractMutationErrors)(result)).toEqual([true, [fixtures_1.urqlError]]);
  });
});
describe.only("getUrl", () => {
  const compareUrl = (a, b) => {
    expect(new URL(a).toString()).toEqual(new URL(b).toString());
  };
  it("should not modify URL", () => {
    compareUrl((0, url_1.getUrl)({ url: "https://example.com" }).newUrl, "https://example.com");
  });
  it("should add query to the url", () => {
    compareUrl(
      (0, url_1.getUrl)({
        url: "https://example.com",
        query: {
          a: 123,
          b: "aaa",
        },
      }).newUrl,
      "https://example.com?a=123&b=aaa"
    );
  });
  it("should replace and merge fields in query", () => {
    compareUrl(
      (0, url_1.getUrl)({
        url: "https://example.com?test=123&b=cccc",
        query: {
          a: 123,
          b: "aaa",
        },
      }).newUrl,
      "https://example.com?a=123&b=aaa&test=123"
    );
  });
  it("should remove fields from query", () => {
    compareUrl(
      (0, url_1.getUrl)({
        url: "https://example.com?test=123&b=cccc&token=secret",
        query: {
          token: undefined,
        },
      }).newUrl,
      "https://example.com?b=cccc&test=123"
    );
  });
});

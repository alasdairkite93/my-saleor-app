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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const address_1 = require("@/checkout-storefront/lib/fixtures/address");
const lodash_es_1 = require("lodash-es");
describe("getAddressFormDataFromAddress", () => {
  it("should return empty form data for non-existing address", () => {
    expect((0, utils_1.getAddressFormDataFromAddress)(null)).toEqual(
      (0, utils_1.getEmptyAddressFormData)()
    );
  });
  it("should return properly formatted form data from adress", () => {
    const address = address_1.addresses[0];
    expect((0, utils_1.getAddressFormDataFromAddress)(address)).toEqual(
      Object.assign(
        Object.assign({}, (0, lodash_es_1.pick)(address, (0, utils_1.getAllAddressFieldKeys)())),
        { countryCode: address === null || address === void 0 ? void 0 : address.country.code }
      )
    );
  });
});
describe("isMatchingAddress", () => {
  it("should return true for addresses of same id", () => {
    const address = Object.assign(Object.assign({}, address_1.addresses[0]), { id: "some-id" });
    const addressToCompare = Object.assign(Object.assign({}, address_1.addresses[1]), {
      id: "some-id",
    });
    expect((0, utils_1.isMatchingAddress)(address, addressToCompare)).toEqual(true);
  });
  it("should return true for addresses of different id but same data", () => {
    const address = Object.assign(Object.assign({}, address_1.addresses[0]), { id: "some-id" });
    const addressToCompare = Object.assign(Object.assign({}, address_1.addresses[0]), {
      id: "some-other-id",
    });
    expect((0, utils_1.isMatchingAddress)(address, addressToCompare)).toEqual(true);
  });
  it("should return false for different addresses", () => {
    const address = address_1.addresses[0];
    const addressToCompare = address_1.addresses[1];
    expect((0, utils_1.isMatchingAddress)(address, addressToCompare)).toEqual(false);
  });
});
describe("isMatchingAddressFormData", () => {
  it("should return true for address form data with all same data", () => {
    const address = (0, utils_1.getAddressFormDataFromAddress)(address_1.addresses[0]);
    expect((0, utils_1.isMatchingAddressFormData)(address, address)).toEqual(true);
  });
  it("should return true for address form data of different id but same data", () => {
    const address = (0, utils_1.getAddressFormDataFromAddress)(
      Object.assign(Object.assign({}, address_1.addresses[0]), { id: "some-id" })
    );
    const addressToCompare = (0, utils_1.getAddressFormDataFromAddress)(
      Object.assign(Object.assign({}, address_1.addresses[0]), { id: "some-other-id" })
    );
    expect((0, utils_1.isMatchingAddressFormData)(address, addressToCompare)).toEqual(true);
  });
  it("should return false for different addresses", () => {
    const address = (0, utils_1.getAddressFormDataFromAddress)(address_1.addresses[0]);
    const addressToCompare = (0, utils_1.getAddressFormDataFromAddress)(address_1.addresses[1]);
    expect((0, utils_1.isMatchingAddressFormData)(address, addressToCompare)).toEqual(false);
  });
  it("should return true for same addresses, one of which has an id", () => {
    const _a = address_1.addresses[0],
      { id } = _a,
      addressRest = __rest(_a, ["id"]);
    const address = (0, utils_1.getAddressFormDataFromAddress)(Object.assign({ id }, addressRest));
    const addressToCompare = (0, utils_1.getAddressFormDataFromAddress)(addressRest);
    expect((0, utils_1.isMatchingAddressFormData)(address, addressToCompare)).toEqual(true);
  });
});
describe("getOrderedAddressFields", () => {
  it("should return properly ordered fields", () => {
    const unorderedAddressFields = [
      "city",
      "lastName",
      "postalCode",
      "firstName",
      "companyName",
      "cityArea",
      "phone",
    ];
    expect((0, utils_1.getOrderedAddressFields)(unorderedAddressFields)).toEqual([
      "firstName",
      "lastName",
      "companyName",
      "city",
      "postalCode",
      "cityArea",
      "phone",
    ]);
  });
});

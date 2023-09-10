"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("@/checkout-storefront/lib/fixtures/address");
const react_hooks_1 = require("@testing-library/react-hooks");
const wonka_1 = require("wonka");
const utils_1 = require("@/checkout-storefront/__tests__/utils");
const countries_1 = require("@/checkout-storefront/lib/consts/countries");
const useAddressFormUtils_1 = require("@/checkout-storefront/components/AddressForm/useAddressFormUtils");
const mockedSuccessResponse = {
  executeQuery: () =>
    (0, wonka_1.fromValue)({
      data: {
        addressValidationRules: address_1.validationRules,
      },
    }),
};
const mockedFailResponse = {
  executeQuery: () =>
    (0, wonka_1.fromValue)({
      data: {
        addressValidationRules: null,
      },
    }),
};
describe("isRequiredField", () => {
  it("should return true for required field", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useAddressFormUtils_1.useAddressFormUtils)(countries_1.defaultCountry),
      {
        wrapper: (0, utils_1.getMockProviders)({ mockedResponseState: mockedSuccessResponse }),
      }
    );
    expect(hook.current.isRequiredField("city")).toEqual(true);
  });
  it("should return false for not required field", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useAddressFormUtils_1.useAddressFormUtils)(countries_1.defaultCountry),
      {
        wrapper: (0, utils_1.getMockProviders)({ mockedResponseState: mockedSuccessResponse }),
      }
    );
    expect(hook.current.isRequiredField("companyName")).toEqual(false);
  });
  it("should return false for failed validation rules query", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useAddressFormUtils_1.useAddressFormUtils)(countries_1.defaultCountry),
      {
        wrapper: (0, utils_1.getMockProviders)({ mockedResponseState: mockedFailResponse }),
      }
    );
    expect(hook.current.isRequiredField("companyName")).toEqual(false);
  });
});
describe("getFieldLabel", () => {
  it("should return localized field label when available", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useAddressFormUtils_1.useAddressFormUtils)(countries_1.defaultCountry),
      {
        wrapper: (0, utils_1.getMockProviders)({ mockedResponseState: mockedSuccessResponse }),
      }
    );
    expect(hook.current.getFieldLabel("countryArea")).toEqual("Province");
  });
  it("should return unlocalized field label when otherwise unavailable", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useAddressFormUtils_1.useAddressFormUtils)(countries_1.defaultCountry),
      {
        wrapper: (0, utils_1.getMockProviders)({ mockedResponseState: mockedSuccessResponse }),
      }
    );
    expect(hook.current.getFieldLabel("companyName")).toEqual("Company");
  });
  it("should return unlocalized field label for failed validation rules query", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useAddressFormUtils_1.useAddressFormUtils)(countries_1.defaultCountry),
      {
        wrapper: (0, utils_1.getMockProviders)({ mockedResponseState: mockedFailResponse }),
      }
    );
    expect(hook.current.getFieldLabel("countryArea")).toEqual("Country area");
  });
});

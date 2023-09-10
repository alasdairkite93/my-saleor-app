"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_hooks_1 = require("@testing-library/react-hooks");
const fixtures_1 = require("@/checkout-storefront/lib/fixtures");
const utils_1 = require("@/checkout-storefront/__tests__/utils");
const useGetParsedErrors_1 = require("@/checkout-storefront/hooks/useGetParsedErrors");
describe("useGetParsedApiErrors", () => {
  it("should return properly formatted errors from api errors array", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useGetParsedErrors_1.useGetParsedErrors)(),
      {
        wrapper: (0, utils_1.getMockProviders)(),
      }
    );
    const errors = [
      ...fixtures_1.apiErrors,
      {
        code: "PASSWORD_TOO_SHORT",
        message: "This password is not long enough",
        field: "password",
      },
    ];
    expect(hook.current.getParsedApiErrors(errors)).toEqual([
      {
        message: "Required field",
        field: "streetAddress1",
        code: "required",
      },
      {
        message: "Invalid value",
        field: "postalCode",
        code: "invalid",
      },
      {
        message: "Provided password is too short. Minimum length is 8 characters.",
        field: "password",
        code: "passwordTooShort",
      },
    ]);
  });
  it("should return empty array for empty api errors array", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useGetParsedErrors_1.useGetParsedErrors)(),
      {
        wrapper: (0, utils_1.getMockProviders)(),
      }
    );
    expect(hook.current.getParsedApiErrors([])).toEqual([]);
  });
  it("should return proper form errors object from api errors array", () => {
    const { result: hook } = (0, react_hooks_1.renderHook)(
      () => (0, useGetParsedErrors_1.useGetParsedErrors)(),
      {
        wrapper: (0, utils_1.getMockProviders)(),
      }
    );
    const errors = [
      ...fixtures_1.apiErrors,
      {
        code: "PASSWORD_TOO_SHORT",
        message: "This password is not long enough",
        field: "password",
      },
    ];
    expect(hook.current.getFormErrorsFromApiErrors(errors)).toEqual({
      streetAddress1: "Required field",
      postalCode: "Invalid value",
      password: "Provided password is too short. Minimum length is 8 characters.",
    });
  });
});

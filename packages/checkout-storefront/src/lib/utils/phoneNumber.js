"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhoneNumberWithCountryCode =
  exports.usePhoneNumberValidator =
  exports.isValidPhoneNumber =
    void 0;
const useErrorMessages_1 = require("@/checkout-storefront/hooks/useErrorMessages");
const max_1 = require("libphonenumber-js/max");
const react_1 = require("react");
const getPhoneNumberInstance = (phone, countryCode) => {
  try {
    const phoneNumber = (0, max_1.parsePhoneNumberWithError)(phone, countryCode);
    return phoneNumber;
  } catch (error) {
    return null;
  }
};
const isValidPhoneNumber = (phone, countryCode) => {
  var _a;
  return !!((_a = getPhoneNumberInstance(phone, countryCode)) === null || _a === void 0
    ? void 0
    : _a.isValid());
};
exports.isValidPhoneNumber = isValidPhoneNumber;
const usePhoneNumberValidator = (countryCode) => {
  const { errorMessages } = (0, useErrorMessages_1.useErrorMessages)();
  const isValid = (0, react_1.useCallback)(
    (phone) => {
      if (phone === "") {
        return undefined;
      }
      const valid = (0, exports.isValidPhoneNumber)(phone, countryCode);
      return valid ? undefined : errorMessages.invalid;
    },
    [countryCode, errorMessages.invalid]
  );
  return isValid;
};
exports.usePhoneNumberValidator = usePhoneNumberValidator;
const isMissingCountryCallingCode = (phone, countryCode) => {
  const isValidWithoutCountryCode = (0, exports.isValidPhoneNumber)(phone, undefined);
  const isValidWithCountryCode = (0, exports.isValidPhoneNumber)(phone, countryCode);
  return isValidWithCountryCode && !isValidWithoutCountryCode;
};
const getPhoneNumberWithCountryCode = (phone, countryCode) => {
  var _a;
  if (isMissingCountryCallingCode(phone, countryCode)) {
    const callingCode =
      (_a = getPhoneNumberInstance(phone, countryCode)) === null || _a === void 0
        ? void 0
        : _a.countryCallingCode;
    return `+${callingCode}${phone}`;
  }
  return phone;
};
exports.getPhoneNumberWithCountryCode = getPhoneNumberWithCountryCode;

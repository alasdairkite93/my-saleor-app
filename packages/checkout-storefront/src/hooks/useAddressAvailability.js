"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddressAvailability = void 0;
const useAvailableShippingCountries_1 = require("@/checkout-storefront/hooks/useAvailableShippingCountries");
const react_1 = require("react");
const useAddressAvailability = (skipCheck = false) => {
  const { availableShippingCountries } = (0,
  useAvailableShippingCountries_1.useAvailableShippingCountries)();
  const isAvailable = (0, react_1.useCallback)(
    ({ country }) => {
      if (skipCheck) {
        return true;
      }
      return availableShippingCountries.includes(
        country === null || country === void 0 ? void 0 : country.code
      );
    },
    [skipCheck, availableShippingCountries]
  );
  return { isAvailable, availableShippingCountries };
};
exports.useAddressAvailability = useAddressAvailability;

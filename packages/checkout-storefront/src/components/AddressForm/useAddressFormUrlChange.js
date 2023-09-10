"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddressFormUrlChange = void 0;
const useUrlChange_1 = require("@/checkout-storefront/hooks/useUrlChange");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
const useAddressFormUrlChange = (form) => {
  const { values, setFieldValue } = form;
  const { countryCode } = values;
  const hasFilledAnyData = Object.values((0, lodash_es_1.omit)(values, ["id", "countryCode"])).some(
    (value) => !!value
  );
  const handleUrlChange = (0, react_1.useCallback)(
    ({ queryParams: { locale } }) => {
      if (hasFilledAnyData) {
        return;
      }
      const newCountryCode = (0, locale_1.getParsedLocaleData)(locale).countryCode;
      const hasCountryChanged = newCountryCode !== countryCode;
      if (hasCountryChanged) {
        void setFieldValue("countryCode", newCountryCode);
      }
    },
    [countryCode, hasFilledAnyData, setFieldValue]
  );
  (0, useUrlChange_1.useUrlChange)(handleUrlChange);
};
exports.useAddressFormUrlChange = useAddressFormUrlChange;

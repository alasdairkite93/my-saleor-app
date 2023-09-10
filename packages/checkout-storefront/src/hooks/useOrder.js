"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrder = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useLocale_1 = require("@/checkout-storefront/hooks/useLocale");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const useOrder = (id) => {
  const { locale } = (0, useLocale_1.useLocale)();
  const [{ data, fetching: loading }] = (0, graphql_1.useOrderQuery)({
    variables: { languageCode: (0, locale_1.localeToLanguageCode)(locale), id },
  });
  return { order: data === null || data === void 0 ? void 0 : data.order, loading };
};
exports.useOrder = useOrder;

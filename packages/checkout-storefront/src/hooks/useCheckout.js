"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckout = void 0;
const react_1 = require("react");
const graphql_1 = require("@/checkout-storefront/graphql");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const useLocale_1 = require("@/checkout-storefront/hooks/useLocale");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const auth_1 = require("@/checkout-storefront/lib/auth");
const useCheckout = ({ pause = false } = {}) => {
  const id = (0, react_1.useMemo)(() => (0, url_1.extractCheckoutIdFromUrl)(), []);
  const { locale } = (0, useLocale_1.useLocale)();
  const { isAuthenticating } = (0, auth_1.useSaleorAuthContext)();
  const { setLoadingCheckout } = (0, updateStateStore_1.useCheckoutUpdateStateActions)();
  const [{ data, fetching: loading, stale }, refetch] = (0, graphql_1.useCheckoutQuery)({
    variables: { id, languageCode: (0, locale_1.localeToLanguageCode)(locale) },
    pause: pause || isAuthenticating,
  });
  (0, react_1.useEffect)(
    () => setLoadingCheckout(loading || stale),
    [loading, setLoadingCheckout, stale]
  );
  return (0, react_1.useMemo)(
    () => ({
      checkout: data === null || data === void 0 ? void 0 : data.checkout,
      loading: loading || stale,
      refetch,
    }),
    [data === null || data === void 0 ? void 0 : data.checkout, loading, refetch, stale]
  );
};
exports.useCheckout = useCheckout;

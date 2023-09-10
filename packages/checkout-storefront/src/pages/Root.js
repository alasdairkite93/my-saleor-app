"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Root = void 0;
const react_error_boundary_1 = require("react-error-boundary");
const react_intl_1 = require("react-intl");
const urql_1 = require("urql");
const AppConfigProvider_1 = require("@/checkout-storefront/providers/AppConfigProvider");
const PageNotFound_1 = require("@/checkout-storefront/views/PageNotFound");
const react_toastify_1 = require("react-toastify");
const consts_1 = require("../hooks/useAlerts/consts");
const RootViews_1 = require("../views/RootViews/RootViews");
const useLocale_1 = require("../hooks/useLocale");
const regions_1 = require("../lib/regions");
const url_1 = require("../lib/utils/url");
const useUrqlClient_1 = require("@/checkout-storefront/lib/auth/useUrqlClient");
const SaleorAuthProvider_1 = require("@/checkout-storefront/lib/auth/SaleorAuthProvider");
const useSaleorAuthClient_1 = require("@/checkout-storefront/lib/auth/useSaleorAuthClient");
const auth_1 = require("@/checkout-storefront/lib/auth");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const Root = ({ env, saleorApiUrlRegex }) => {
  const { saleorApiUrl } = (0, url_1.getQueryParams)();
  (0, ts_invariant_1.default)(
    saleorApiUrlRegex.test(saleorApiUrl),
    `
Provided saleorApiUrl doesn't match allowed regex!
Provided: ${saleorApiUrl}
Allowed: ${String(saleorApiUrlRegex)}
    `.trim()
  );
  const { locale, messages } = (0, useLocale_1.useLocale)();
  const useSaleorAuthClientProps = (0, useSaleorAuthClient_1.useSaleorAuthClient)({
    saleorApiUrl,
    storage: localStorage,
  });
  const { saleorAuthClient } = useSaleorAuthClientProps;
  const { urqlClient, resetClient } = (0, useUrqlClient_1.useUrqlClient)({
    suspense: true,
    requestPolicy: "cache-first",
    url: saleorApiUrl,
    fetch: saleorAuthClient.fetchWithAuth,
  });
  (0, auth_1.useAuthChange)({
    onSignedOut: () => resetClient(),
    onSignedIn: () => resetClient(),
  });
  if (!saleorApiUrl) {
    console.warn(`Missing "saleorApiUrl" query param!`);
    return null;
  }
  if (!urqlClient) {
    console.warn(`Couldn't create URQL client!`);
    return null;
  }
  return (
    <react_intl_1.IntlProvider
      defaultLocale={regions_1.DEFAULT_LOCALE}
      locale={locale}
      messages={messages}
    >
      <SaleorAuthProvider_1.SaleorAuthProvider {...useSaleorAuthClientProps}>
        <urql_1.Provider value={urqlClient}>
          <AppConfigProvider_1.AppConfigProvider env={env}>
            <div className="app">
              <react_toastify_1.ToastContainer {...consts_1.alertsContainerProps} />
              <react_error_boundary_1.ErrorBoundary FallbackComponent={PageNotFound_1.PageNotFound}>
                <RootViews_1.RootViews />
              </react_error_boundary_1.ErrorBoundary>
            </div>
          </AppConfigProvider_1.AppConfigProvider>
        </urql_1.Provider>
      </SaleorAuthProvider_1.SaleorAuthProvider>
    </react_intl_1.IntlProvider>
  );
};
exports.Root = Root;

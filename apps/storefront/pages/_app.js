"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("styles/globals.css");
const client_1 = require("@apollo/client");
const nextjs_progressbar_1 = __importDefault(require("nextjs-progressbar"));
const react_1 = __importDefault(require("react"));
const DemoBanner_1 = require("@/components/DemoBanner");
const RegionsProvider_1 = require("@/components/RegionsProvider");
const BaseSeo_1 = require("@/components/seo/BaseSeo");
const const_1 = require("@/lib/const");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const useAuthenticatedApolloClient_1 = require("@/lib/auth/useAuthenticatedApolloClient");
const auth_1 = require("@/lib/auth");
function MyApp({ Component, pageProps }) {
  var _a;
  const getLayout = (_a = Component.getLayout) !== null && _a !== void 0 ? _a : (page) => page;
  const useSaleorAuthClientProps = (0, auth_1.useSaleorAuthClient)({
    saleorApiUrl: const_1.API_URI,
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  });
  const { saleorAuthClient } = useSaleorAuthClientProps;
  const { apolloClient, resetClient } = (0,
  useAuthenticatedApolloClient_1.useAuthenticatedApolloClient)(saleorAuthClient.fetchWithAuth);
  (0, auth_1.useAuthChange)({
    onSignedOut: () => resetClient(),
    onSignedIn: () =>
      apolloClient.refetchQueries({
        include: ["User"],
      }),
  });
  return (
    <auth_1.SaleorAuthProvider {...useSaleorAuthClientProps}>
      <client_1.ApolloProvider client={apolloClient}>
        <CheckoutProvider_1.CheckoutProvider>
          <RegionsProvider_1.RegionsProvider>
            <BaseSeo_1.BaseSeo />
            <nextjs_progressbar_1.default color="#5B68E4" options={{ showSpinner: false }} />
            {const_1.DEMO_MODE && <DemoBanner_1.DemoBanner />}
            {getLayout(<Component {...pageProps} />)}
          </RegionsProvider_1.RegionsProvider>
        </CheckoutProvider_1.CheckoutProvider>
      </client_1.ApolloProvider>
    </auth_1.SaleorAuthProvider>
  );
}
exports.default = MyApp;

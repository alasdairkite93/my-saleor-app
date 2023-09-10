"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAppBridgeProvider = exports.useAppContext = void 0;
const client_1 = require("@/saleor-app-checkout/frontend/misc/client");
const createSafeContext_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/misc/createSafeContext")
);
const app_bridge_1 = require("@saleor/app-sdk/app-bridge");
const urql_1 = require("urql");
const react_1 = require("react");
const useSubscribeToIsAuthorized_1 = require("./useSubscribeToIsAuthorized");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
// appBridge instance needs to be created before the first render
// otherwise, we never get the "handshake" event or the token
const appBridge = typeof document === "undefined" ? null : new app_bridge_1.AppBridge();
const [useAppContext, AppContextProvider] = (0, createSafeContext_1.default)();
exports.useAppContext = useAppContext;
const ClientAppBridgeProvider = ({ children }) => {
  const app = appBridge;
  (0, ts_invariant_1.default)(app, "ClientAppBridgeProvider is not available on the server side");
  const isAuthorized = (0, useSubscribeToIsAuthorized_1.useSubscribeToIsAuthorized)(app);
  const { token, saleorApiUrl } = app.getState();
  const client = (0, react_1.useMemo)(() => {
    return (0, client_1.createGraphqlClient)(saleorApiUrl, token);
  }, [saleorApiUrl, token]);
  const appContext = (0, react_1.useMemo)(() => ({ app, isAuthorized }), [app, isAuthorized]);
  return (
    <app_bridge_1.AppBridgeProvider appBridgeInstance={appBridge}>
      <urql_1.Provider value={client}>
        <AppContextProvider value={appContext}>{children}</AppContextProvider>
      </urql_1.Provider>
    </app_bridge_1.AppBridgeProvider>
  );
};
exports.ClientAppBridgeProvider = ClientAppBridgeProvider;

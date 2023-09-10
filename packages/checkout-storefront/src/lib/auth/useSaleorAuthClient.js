"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSaleorAuthClient = void 0;
const SaleorAuthClient_1 = require("./SaleorAuthClient");
const react_1 = require("react");
/**
 * This hook should be used only once per application.
 * @see Use {@link useSaleorAuthContext} for accessing the auth state.
 */
const useSaleorAuthClient = ({ saleorApiUrl, storage, onAuthRefresh }) => {
  const [isAuthenticating, setIsAuthenticating] = (0, react_1.useState)(false);
  const saleorAuthClient = (0, react_1.useMemo)(
    () =>
      new SaleorAuthClient_1.SaleorAuthClient({
        storage,
        saleorApiUrl,
        onAuthRefresh: (value) => {
          setIsAuthenticating(value);
          onAuthRefresh === null || onAuthRefresh === void 0 ? void 0 : onAuthRefresh(value);
        },
      }),
    [storage, saleorApiUrl, onAuthRefresh]
  );
  (0, react_1.useEffect)(
    () => () => {
      saleorAuthClient.cleanup();
    },
    []
  );
  return { saleorAuthClient, isAuthenticating };
};
exports.useSaleorAuthClient = useSaleorAuthClient;

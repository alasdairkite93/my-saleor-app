"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleorAuthProvider = exports.useSaleorAuthContext = void 0;
const createSafeContext_1 = require("@/checkout-storefront/providers/createSafeContext");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const [useSaleorAuthContext, Provider] = (0, createSafeContext_1.createSafeContext)();
exports.useSaleorAuthContext = useSaleorAuthContext;
const SaleorAuthProvider = ({ children, saleorAuthClient, isAuthenticating }) => {
  (0, ts_invariant_1.default)(
    saleorAuthClient,
    "Missing Saleor Auth Client - are you sure you created it using useSaleorAuthClient?"
  );
  const { signIn, signOut, checkoutSignOut, resetPassword } = saleorAuthClient;
  return (
    <Provider value={{ isAuthenticating, signIn, signOut, checkoutSignOut, resetPassword }}>
      {children}
    </Provider>
  );
};
exports.SaleorAuthProvider = SaleorAuthProvider;

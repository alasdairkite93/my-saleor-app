"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutProvider = exports.Provider = exports.useCheckout = void 0;
const router_1 = require("next/router");
const const_1 = require("@/lib/const");
const useLocalStorage_1 = require("@/lib/hooks/useLocalStorage");
const regions_1 = require("@/lib/regions");
const useSafeContext_1 = __importDefault(require("@/lib/useSafeContext"));
const api_1 = require("@/saleor/api");
(_a = (0, useSafeContext_1.default)()), (exports.useCheckout = _a[0]), (exports.Provider = _a[1]);
function CheckoutProvider({ children }) {
  var _a;
  const router = (0, router_1.useRouter)();
  const locale =
    ((_a = router.query.locale) === null || _a === void 0 ? void 0 : _a.toString()) ||
    regions_1.DEFAULT_LOCALE;
  const [checkoutToken, setCheckoutToken] = (0, useLocalStorage_1.useLocalStorage)(
    const_1.CHECKOUT_TOKEN,
    "",
    { sync: true }
  );
  const {
    data,
    loading,
    error: checkoutError,
  } = (0, api_1.useCheckoutByTokenQuery)({
    variables: { checkoutToken, locale: (0, regions_1.localeToEnum)(locale) },
    skip: !checkoutToken || typeof window === "undefined",
  });
  const resetCheckoutToken = () => setCheckoutToken("");
  const providerValues = {
    checkoutToken,
    setCheckoutToken,
    resetCheckoutToken,
    checkout: data === null || data === void 0 ? void 0 : data.checkout,
    loading,
    checkoutError,
  };
  return <exports.Provider value={providerValues}>{children}</exports.Provider>;
}
exports.CheckoutProvider = CheckoutProvider;

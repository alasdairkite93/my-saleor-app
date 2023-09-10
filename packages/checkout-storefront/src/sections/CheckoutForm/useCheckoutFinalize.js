"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckoutFinalize = void 0;
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const usePay_1 = require("@/checkout-storefront/hooks/usePay");
const react_1 = require("react");
const paymentDataStore_1 = require("@/checkout-storefront/state/paymentDataStore");
const useCheckoutFinalize = () => {
  var _a, _b;
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { checkoutPay, loading, error: payError, data: _payData } = (0, usePay_1.usePay)();
  const { paymentMethod, paymentProvider } = (0, paymentDataStore_1.useSelectedPaymentData)();
  (0, react_1.useEffect)(() => {
    // @todo should this show a notification?
    if (payError) {
      console.error(payError);
    }
  }, [payError]);
  const checkoutFinalize = (0, react_1.useCallback)(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        var _c, _d;
        if (!paymentMethod || !paymentProvider) {
          return;
        }
        const result = yield checkoutPay({
          provider: paymentProvider,
          method: paymentMethod,
          checkoutId: checkout === null || checkout === void 0 ? void 0 : checkout.id,
          totalAmount:
            (_d =
              (_c = checkout === null || checkout === void 0 ? void 0 : checkout.totalPrice) ===
                null || _c === void 0
                ? void 0
                : _c.gross) === null || _d === void 0
              ? void 0
              : _d.amount,
        });
        if (!result) {
          console.error("Unexpected empty result!", { result });
          return;
        }
        if ("ok" in result && result.ok === false) {
          // for now api doesn't return errors in some cases
          // const { errors } = result;
          // const parsedErrors = errors.map((error) => ({
          //   code: error,
          // }));
          // showCustomErrors(parsedErrors, "checkoutPay");
        }
      }),
    [
      checkout === null || checkout === void 0 ? void 0 : checkout.id,
      (_b =
        (_a = checkout === null || checkout === void 0 ? void 0 : checkout.totalPrice) === null ||
        _a === void 0
          ? void 0
          : _a.gross) === null || _b === void 0
        ? void 0
        : _b.amount,
      checkoutPay,
      paymentMethod,
      paymentProvider,
    ]
  );
  return {
    checkoutFinalize,
    finalizing: loading,
  };
};
exports.useCheckoutFinalize = useCheckoutFinalize;

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
exports.AdyenDropIn = void 0;
const requests_1 = require("@/checkout-storefront/fetch/requests");
const AppConfigProvider_1 = require("@/checkout-storefront/providers/AppConfigProvider");
const react_1 = require("react");
const useEvent_1 = require("@/checkout-storefront/hooks/useEvent");
const createAdyenCheckout_1 = require("./createAdyenCheckout");
const useCheckoutSubmit_1 = require("../../CheckoutForm/useCheckoutSubmit");
const checkoutValidationStateStore_1 = require("@/checkout-storefront/state/checkoutValidationStateStore");
const useLocale_1 = require("@/checkout-storefront/hooks/useLocale");
const useFetch_1 = require("@/checkout-storefront/hooks/useFetch");
const useAlerts_1 = require("@/checkout-storefront/hooks/useAlerts");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const checkout_common_1 = require("checkout-common");
// fake function just to get the type because can't import it :(
const _hack = (adyenCheckout) => adyenCheckout.create("dropin").mount("#dropin-container");
exports.AdyenDropIn = (0, react_1.memo)(() => {
  const {
    env: { checkoutApiUrl },
    saleorApiUrl,
  } = (0, AppConfigProvider_1.useAppConfig)();
  const { checkout, loading: isCheckoutLoading } = (0, useCheckout_1.useCheckout)();
  const { validating } = (0, checkoutValidationStateStore_1.useCheckoutValidationState)();
  const { allFormsValid, validateAllForms } = (0, useCheckoutSubmit_1.useCheckoutSubmit)();
  const { showCustomErrors } = (0, useAlerts_1.useAlerts)("checkoutPay");
  const [, fetchCreateDropInAdyenPayment] = (0, useFetch_1.useFetch)(
    requests_1.createDropInAdyenPayment,
    {
      skip: true,
    }
  );
  const [, fetchHandleDropInAdyenPaymentDetails] = (0, useFetch_1.useFetch)(
    requests_1.handleDropInAdyenPaymentDetails,
    {
      skip: true,
    }
  );
  const [adyenCheckoutSubmitParams, setAdyenCheckoutSubmitParams] = (0, react_1.useState)(null);
  const onSubmit = (0, useEvent_1.useEvent)((state, component) =>
    __awaiter(void 0, void 0, void 0, function* () {
      component.setStatus("loading");
      console.log(`Calling validateAllForms()`);
      setAdyenCheckoutSubmitParams({ state, component });
      validateAllForms();
    })
  );
  const afterSubmit = (0, react_1.useCallback)(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        if (!validating && !allFormsValid && adyenCheckoutSubmitParams) {
          // validated, failed, let's reset the state
          adyenCheckoutSubmitParams.component.setStatus("ready");
          setAdyenCheckoutSubmitParams(null);
          return;
        }
        if (!allFormsValid || !adyenCheckoutSubmitParams || validating) {
          // not validated yet, or still validating, or not all forms valid
          return;
        }
        const result = yield fetchCreateDropInAdyenPayment({
          checkoutApiUrl,
          saleorApiUrl,
          totalAmount: checkout.totalPrice.gross.amount,
          checkoutId: checkout.id,
          method: "dropin",
          provider: "adyen",
          redirectUrl: window.location.href,
          adyenStateData: adyenCheckoutSubmitParams.state.data,
        });
        if (!result || "message" in result) {
          console.error(result);
          showCustomErrors([
            {
              message:
                (result === null || result === void 0 ? void 0 : result.message) ||
                "Something went wrong…",
            },
          ]);
          adyenCheckoutSubmitParams.component.setStatus("ready");
          return;
        }
        if (result.payment.action) {
          adyenCheckoutSubmitParams.component.handleAction(
            // discrepancy between adyen-api and adyen-web types 🤦‍♂️
            result.payment.action
          );
          return;
        } else {
          return (0, createAdyenCheckout_1.handlePaymentResult)(
            saleorApiUrl,
            result,
            adyenCheckoutSubmitParams.component
          );
        }
      }),
    [
      adyenCheckoutSubmitParams,
      allFormsValid,
      checkout.id,
      checkout.totalPrice.gross.amount,
      checkoutApiUrl,
      fetchCreateDropInAdyenPayment,
      saleorApiUrl,
      showCustomErrors,
      validating,
    ]
  );
  (0, react_1.useEffect)(() => {
    void afterSubmit();
  }, [afterSubmit]);
  const onAdditionalDetails = (0, useEvent_1.useEvent)((state, component) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const result = yield fetchHandleDropInAdyenPaymentDetails({
        saleorApiUrl,
        checkoutApiUrl,
        adyenStateData: state.data,
      });
      if (!result || "message" in result) {
        console.error(result);
        showCustomErrors([
          {
            message:
              (result === null || result === void 0 ? void 0 : result.message) ||
              "Something went wrong…",
          },
        ]);
        component.setStatus("ready");
        return;
      }
      return (0, createAdyenCheckout_1.handlePaymentResult)(saleorApiUrl, result, component);
    })
  );
  const { dropinContainerElRef } = useDropinAdyenElement(
    checkoutApiUrl,
    checkout,
    isCheckoutLoading,
    onSubmit,
    onAdditionalDetails
  );
  return <div ref={dropinContainerElRef} />;
});
exports.AdyenDropIn.displayName = "AdyenDropIn";
function useDropinAdyenElement(
  checkoutApiUrl,
  checkout,
  isCheckoutLoading,
  onSubmit,
  onAdditionalDetails
) {
  var _a, _b;
  const dropinContainerElRef = (0, react_1.useRef)(null);
  const dropinComponentRef = (0, react_1.useRef)(null);
  const adyenCheckoutInstanceRef = (0, react_1.useRef)(null);
  const [adyenCheckoutInstanceCreationStatus, setAdyenCheckoutInstanceCreationStatus] = (0,
  react_1.useState)("IDLE");
  const { saleorApiUrl } = (0, AppConfigProvider_1.useAppConfig)();
  const { locale } = (0, useLocale_1.useLocale)();
  const previousLocale = (0, react_1.useRef)(locale);
  const [adyenSessionResponse] = (0, useFetch_1.useFetch)(requests_1.createDropInAdyenSession, {
    args: {
      checkoutApiUrl,
      saleorApiUrl,
      checkoutId: checkout === null || checkout === void 0 ? void 0 : checkout.id,
      // we send 0 here and update it later inside `onSubmit`
      totalAmount: 0,
      currency:
        (_b =
          (_a = checkout === null || checkout === void 0 ? void 0 : checkout.totalPrice) === null ||
          _a === void 0
            ? void 0
            : _a.gross) === null || _b === void 0
          ? void 0
          : _b.currency,
      provider: "adyen",
      method: "dropin",
      redirectUrl: window.location.href,
    },
    skip: isCheckoutLoading,
  });
  const updateApplePayAmount = (0, react_1.useCallback)(() => {
    var _a;
    if (!adyenCheckoutInstanceRef) {
      return;
    }
    (_a = adyenCheckoutInstanceRef.current) === null || _a === void 0
      ? void 0
      : _a
          .update({
            amount: {
              value: (0, checkout_common_1.getAdyenIntegerAmountFromSaleor)(
                checkout.totalPrice.gross.amount,
                checkout.totalPrice.gross.currency
              ),
              currency: checkout.totalPrice.gross.currency,
            },
            paymentMethodsConfiguration: {
              applepay: {
                amount: {
                  value: (0, checkout_common_1.getAdyenIntegerAmountFromSaleor)(
                    checkout.totalPrice.gross.amount,
                    checkout.totalPrice.gross.currency
                  ),
                  currency: checkout.totalPrice.gross.currency,
                },
              },
            },
          })
          .catch(console.error);
  }, [checkout.totalPrice.gross.amount, checkout.totalPrice.gross.currency]);
  // reset dropin on locale change
  (0, react_1.useEffect)(() => {
    if (previousLocale.current !== locale) {
      if (dropinComponentRef.current) {
        dropinComponentRef.current.unmount();
      }
      setAdyenCheckoutInstanceCreationStatus("IDLE");
    }
    previousLocale.current = locale;
  }, [locale]);
  (0, react_1.useEffect)(() => {
    if (
      !dropinContainerElRef.current ||
      !adyenSessionResponse.data ||
      "message" in adyenSessionResponse.data ||
      adyenCheckoutInstanceCreationStatus === "IN_PROGRESS" ||
      adyenCheckoutInstanceCreationStatus === "DONE"
    ) {
      return;
    }
    setAdyenCheckoutInstanceCreationStatus("IN_PROGRESS");
    (0, createAdyenCheckout_1.createAdyenCheckoutInstance)(adyenSessionResponse.data, {
      onSubmit,
      onAdditionalDetails,
      locale,
    })
      .then((adyenCheckout) => {
        adyenCheckoutInstanceRef.current = adyenCheckout;
        dropinComponentRef.current = adyenCheckout
          .create("dropin", { instantPaymentTypes: ["applepay"] })
          .mount(
            dropinContainerElRef === null || dropinContainerElRef === void 0
              ? void 0
              : dropinContainerElRef.current
          );
        updateApplePayAmount();
        setAdyenCheckoutInstanceCreationStatus("DONE");
      })
      .catch((err) => {
        setAdyenCheckoutInstanceCreationStatus("ERROR");
        console.error(err);
      });
    return () => {
      var _a;
      (_a = dropinComponentRef.current) === null || _a === void 0 ? void 0 : _a.unmount();
    };
  }, [
    adyenCheckoutInstanceCreationStatus,
    adyenSessionResponse.data,
    onAdditionalDetails,
    onSubmit,
    locale,
    updateApplePayAmount,
  ]);
  (0, react_1.useEffect)(() => {
    updateApplePayAmount();
  }, [updateApplePayAmount]);
  return { dropinContainerElRef, adyenCheckoutInstanceRef };
}

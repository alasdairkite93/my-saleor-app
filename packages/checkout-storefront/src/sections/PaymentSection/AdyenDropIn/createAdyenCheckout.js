"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePaymentResult = exports.createAdyenCheckoutInstance = void 0;
const adyen_web_1 = __importDefault(require("@adyen/adyen-web"));
const paymentResponse_1 = require("@adyen/api-library/lib/src/typings/checkout/paymentResponse");
const url_1 = require("@/checkout-storefront/lib/utils/url");
function createAdyenCheckoutInstance(
  adyenSessionResponse,
  { onSubmit, onAdditionalDetails, locale }
) {
  return (0, adyen_web_1.default)({
    locale,
    environment: "test",
    clientKey: adyenSessionResponse.clientKey,
    session: {
      id: adyenSessionResponse.session.id,
      sessionData: adyenSessionResponse.session.sessionData,
    },
    onPaymentCompleted: (result, component) => {
      console.info(result, component);
    },
    onError: (error, component) => {
      console.error(error.name, error.message, error.stack, component);
    },
    onSubmit,
    onAdditionalDetails,
    // Any payment method specific configuration. Find the configuration specific to each payment method: https://docs.adyen.com/payment-methods
    // For example, this is 3D Secure configuration for cards:
    paymentMethodsConfiguration: {
      card: {
        hasHolderName: true,
        holderNameRequired: true,
        billingAddressRequired: false,
      },
      applepay: {
        buttonType: "plain",
        buttonColor: "black",
        onPaymentMethodSelected: (resolve, reject, event) => {
          console.log({ "event.paymentMethod": event.paymentMethod, event });
          resolve(event.paymentMethod);
        },
        onShippingContactSelected: (resolve, reject, event) => {
          console.log({ "event.shippingContact": event.shippingContact, event });
          resolve(event.shippingContact);
        },
        onShippingMethodSelected: (resolve, reject, event) => {
          console.log({ "event.shippingMethod": event.shippingMethod, event });
          resolve(event.shippingMethod);
        },
      },
    },
    analytics: {
      enabled: false,
    },
  });
}
exports.createAdyenCheckoutInstance = createAdyenCheckoutInstance;
function handlePaymentResult(saleorApiUrl, result, component) {
  switch (result.payment.resultCode) {
    // @todo https://docs.adyen.com/online-payments/payment-result-codes
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.AuthenticationFinished:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.Cancelled:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.ChallengeShopper:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.Error:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.IdentifyShopper:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.Pending:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.PresentToShopper:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.Received:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.RedirectShopper:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.Refused: {
      console.error(result);
      component.setStatus("error", {
        message: `${result.payment.resultCode}: ${result.payment.refusalReason}`,
      });
      return;
    }
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.Authorised:
    case paymentResponse_1.PaymentResponse.ResultCodeEnum.Success: {
      component.setStatus("success");
      const domain = new URL(saleorApiUrl).hostname;
      const newUrl = (0, url_1.replaceUrl)({
        query: {
          checkout: undefined,
          order: result.orderId,
          saleorApiUrl,
          // @todo remove `domain`
          // https://github.com/saleor/saleor-dashboard/issues/2387
          // https://github.com/saleor/saleor-app-sdk/issues/87
          domain,
        },
      });
      window.location.href = newUrl;
      return;
    }
  }
}
exports.handlePaymentResult = handlePaymentResult;

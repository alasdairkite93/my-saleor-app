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
exports.stripeWebhookEventToTransactionCreateMutationVariables =
  exports.checkoutSessionToTransactionCreateMutationVariables =
  exports.getPaymentMethodFromPaymentIntent =
  exports.getLatestChargeFromPaymentIntent =
  exports.verifyStripeEventSignature =
  exports.STRIPE_PAYMENT_PREFIX =
    void 0;
const stripeClient_1 = require("@/saleor-app-checkout/backend/payments/providers/stripe/stripeClient");
const utils_1 = require("@/saleor-app-checkout/backend/payments/utils");
const checkout_common_1 = require("checkout-common");
/**
 * https://stripe.com/docs/webhooks
 */
exports.STRIPE_PAYMENT_PREFIX = "stripe";
const verifyStripeEventSignature = ({ saleorApiUrl, body, signature, secret }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const stripeClient = yield (0, stripeClient_1.getStripeClient)(saleorApiUrl);
    return stripeClient.webhooks.constructEvent(body, signature, secret);
  });
exports.verifyStripeEventSignature = verifyStripeEventSignature;
const getPaymentIntentFromCheckoutSession = ({ saleorApiUrl, checkoutSession }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!checkoutSession.payment_intent) {
      return null;
    }
    if (typeof checkoutSession.payment_intent === "object") {
      return checkoutSession.payment_intent;
    }
    const stripeClient = yield (0, stripeClient_1.getStripeClient)(saleorApiUrl);
    return stripeClient.paymentIntents.retrieve(checkoutSession.payment_intent);
  });
const getLatestChargeFromPaymentIntent = (paymentIntent) => {
  var _a, _b;
  // https://stripe.com/docs/api/payment_intents/object#payment_intent_object-charges
  // This list only contains the latest charge
  // even if there were previously multiple unsuccessful charges.
  return (_b =
    (_a = paymentIntent === null || paymentIntent === void 0 ? void 0 : paymentIntent.charges) ===
      null || _a === void 0
      ? void 0
      : _a.data) === null || _b === void 0
    ? void 0
    : _b[0];
};
exports.getLatestChargeFromPaymentIntent = getLatestChargeFromPaymentIntent;
const getPaymentMethodFromPaymentIntent = (paymentIntent) => {
  var _a, _b;
  return (_b =
    (_a = (0, exports.getLatestChargeFromPaymentIntent)(paymentIntent)) === null || _a === void 0
      ? void 0
      : _a.payment_method_details) === null || _b === void 0
    ? void 0
    : _b.type;
};
exports.getPaymentMethodFromPaymentIntent = getPaymentMethodFromPaymentIntent;
const checkoutSessionToTransactionCreateMutationVariables = ({
  saleorApiUrl,
  eventType,
  checkoutSession,
}) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const paymentIntent = yield getPaymentIntentFromCheckoutSession({
      saleorApiUrl,
      checkoutSession,
    });
    const method = (0, exports.getPaymentMethodFromPaymentIntent)(paymentIntent);
    const charge = (0, exports.getLatestChargeFromPaymentIntent)(paymentIntent);
    if (
      // Occurs when a payment intent using a delayed payment method fails.
      eventType === "checkout.session.async_payment_failed" ||
      // Occurs when a Checkout Session is expired.
      eventType === "checkout.session.expired"
    ) {
      return {
        id: (_a = checkoutSession.metadata) === null || _a === void 0 ? void 0 : _a.orderId,
        transaction: {
          status: checkoutSession.status || "unknown",
          reference: checkoutSession.id,
          type: `${exports.STRIPE_PAYMENT_PREFIX}-${method || "(unknown-payment-method)"}`,
          availableActions: [],
        },
        transactionEvent: {
          status: "FAILURE",
          name: eventType,
        },
      };
    }
    if (
      // Occurs when a Checkout Session has been successfully completed.
      eventType === "checkout.session.completed" ||
      // Occurs when a payment intent using a delayed payment method finally succeeds.
      eventType === "checkout.session.async_payment_succeeded"
    ) {
      if (
        !(charge === null || charge === void 0 ? void 0 : charge.currency) ||
        !(charge === null || charge === void 0 ? void 0 : charge.amount)
      ) {
        // @todo ?
        return null;
      }
      const getAmount = (0, utils_1.getTransactionAmountGetter)({
        authorized: undefined,
        charged: (0, utils_1.getSaleorAmountFromInteger)(charge.amount),
        voided: undefined,
        refunded: undefined,
      });
      return {
        id: (_b = checkoutSession.metadata) === null || _b === void 0 ? void 0 : _b.orderId,
        transaction: {
          status: checkoutSession.status || "unknown",
          reference: checkoutSession.id,
          type: `${exports.STRIPE_PAYMENT_PREFIX}-${method || "(unknown-payment-method)"}`,
          amountAuthorized: undefined,
          amountCharged: {
            amount: getAmount("charged"),
            currency: charge.currency.toUpperCase(),
          },
          availableActions: ["REFUND"],
        },
        transactionEvent: {
          status: "SUCCESS",
          name: eventType,
        },
      };
    }
    return (0, checkout_common_1.assertUnreachable)(eventType);
  });
exports.checkoutSessionToTransactionCreateMutationVariables =
  checkoutSessionToTransactionCreateMutationVariables;
const stripeWebhookEventToTransactionCreateMutationVariables = ({ saleorApiUrl, event }) => {
  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_failed":
    case "checkout.session.async_payment_succeeded":
    case "checkout.session.expired":
      return (0, exports.checkoutSessionToTransactionCreateMutationVariables)({
        saleorApiUrl,
        eventType: event.type,
        checkoutSession: event.data.object,
      });
    default:
      return null;
  }
};
exports.stripeWebhookEventToTransactionCreateMutationVariables =
  stripeWebhookEventToTransactionCreateMutationVariables;

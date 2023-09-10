"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
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
exports.StripeCreditCardSection = exports.STRIPE_GATEWAY = void 0;
const react_stripe_js_1 = require("@stripe/react-stripe-js");
const pure_1 = require("@stripe/stripe-js/pure");
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const RegionsProvider_1 = require("@/components/RegionsProvider");
const paths_1 = require("@/lib/paths");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const api_1 = require("@/saleor/api");
const CompleteCheckoutButton_1 = require("../CompleteCheckoutButton");
exports.STRIPE_GATEWAY = "saleor.payments.stripe";
function StripeCardForm({ checkout }) {
  var _a;
  const stripe = (0, react_stripe_js_1.useStripe)();
  const elements = (0, react_stripe_js_1.useElements)();
  const { formatPrice } = (0, RegionsProvider_1.useRegions)();
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const { resetCheckoutToken } = (0, CheckoutProvider_1.useCheckout)();
  const [checkoutPaymentCreateMutation] = (0, api_1.useCheckoutPaymentCreateMutation)();
  const [checkoutCompleteMutation] = (0, api_1.useCheckoutCompleteMutation)();
  const [isPaymentProcessing, setIsPaymentProcessing] = (0, react_1.useState)(false);
  const totalPrice = (_a = checkout.totalPrice) === null || _a === void 0 ? void 0 : _a.gross;
  const payLabel = `Pay ${formatPrice(totalPrice)}`;
  const redirectToOrderDetailsPage = () => {
    resetCheckoutToken();
    void router.push(paths.order.$url());
  };
  const handleSubmit = (event) =>
    __awaiter(this, void 0, void 0, function* () {
      var _b, _c, _d, _e, _f;
      event.preventDefault();
      setIsPaymentProcessing(true);
      if (elements === null || stripe === null) {
        setIsPaymentProcessing(false);
        return;
      }
      const cardElement = elements.getElement(react_stripe_js_1.CardElement);
      if (!cardElement) {
        console.error("Card element not initialized");
        setIsPaymentProcessing(false);
        return;
      }
      // Create Stripe payment
      const paymentMethodResult = yield stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: checkout.billingAddress
          ? {
              email: checkout.email || "",
              phone: checkout.billingAddress.phone || "",
              name: `${checkout.billingAddress.firstName} ${checkout.billingAddress.lastName}`,
              address: {
                line1: checkout.billingAddress.streetAddress1,
                city: checkout.billingAddress.city,
                country: checkout.billingAddress.country.code,
                postal_code: checkout.billingAddress.postalCode,
              },
            }
          : undefined,
      });
      if (paymentMethodResult.error || !paymentMethodResult.paymentMethod) {
        console.error("[error]", paymentMethodResult.error);
        setIsPaymentProcessing(false);
        return;
      }
      // Send Stripe payment data to the Saleor
      const { errors: paymentCreateErrors } = yield checkoutPaymentCreateMutation({
        variables: {
          checkoutToken: checkout.token,
          paymentInput: {
            gateway: "saleor.payments.stripe",
            amount: (_b = checkout.totalPrice) === null || _b === void 0 ? void 0 : _b.gross.amount,
            token: paymentMethodResult.paymentMethod.id,
          },
        },
      });
      if (paymentCreateErrors) {
        console.error(paymentCreateErrors);
        setIsPaymentProcessing(false);
        return;
      }
      // Try to complete the checkout
      const { data: completeData, errors: completeErrors } = yield checkoutCompleteMutation({
        variables: {
          checkoutToken: checkout.token,
        },
      });
      if (completeErrors) {
        console.error("complete errors:", completeErrors);
        setIsPaymentProcessing(false);
        return;
      }
      let order =
        (_c =
          completeData === null || completeData === void 0
            ? void 0
            : completeData.checkoutComplete) === null || _c === void 0
          ? void 0
          : _c.order;
      // Additional payment action is needed (ex. 3D Secure)
      if (
        (_d =
          completeData === null || completeData === void 0
            ? void 0
            : completeData.checkoutComplete) === null || _d === void 0
          ? void 0
          : _d.confirmationNeeded
      ) {
        // Parse data for the Stripe
        const confirmationData = JSON.parse(
          ((_e =
            completeData === null || completeData === void 0
              ? void 0
              : completeData.checkoutComplete) === null || _e === void 0
            ? void 0
            : _e.confirmationData) || ""
        );
        // Execute additional action at Stripe
        const stripeConfirmationResponse = yield stripe.confirmCardPayment(
          confirmationData.client_secret,
          {
            payment_method: paymentMethodResult.paymentMethod.id,
          }
        );
        if (stripeConfirmationResponse.error) {
          console.error("Stripe payment confirmation error: ", stripeConfirmationResponse.error);
          setIsPaymentProcessing(false);
          return;
        }
        // Try to complete checkout
        const { data: confirmedCompleteData, errors: confirmedCompleteErrors } =
          yield checkoutCompleteMutation({
            variables: {
              checkoutToken: checkout.token,
            },
          });
        if (confirmedCompleteErrors) {
          console.error(
            "Errors during checkout completion after the confirmation: ",
            confirmedCompleteErrors
          );
          setIsPaymentProcessing(false);
          return;
        }
        order =
          (_f =
            confirmedCompleteData === null || confirmedCompleteData === void 0
              ? void 0
              : confirmedCompleteData.checkoutComplete) === null || _f === void 0
            ? void 0
            : _f.order;
      }
      // If there are no errors during payment and confirmation, order should be created
      if (order) {
        redirectToOrderDetailsPage();
      } else {
        console.error("Order was not created");
      }
    });
  return (
    <form method="post" onSubmit={handleSubmit}>
      <react_stripe_js_1.CardElement />
      <CompleteCheckoutButton_1.CompleteCheckoutButton
        isProcessing={isPaymentProcessing}
        isDisabled={!stripe || !elements || isPaymentProcessing}
      >
        {payLabel}
      </CompleteCheckoutButton_1.CompleteCheckoutButton>
    </form>
  );
}
function StripeCreditCardSection({ checkout }) {
  var _a;
  const stripeGateway = checkout.availablePaymentGateways.find(
    (gateway) => gateway.id === exports.STRIPE_GATEWAY
  );
  const stripeApiKey =
    (_a =
      stripeGateway === null || stripeGateway === void 0
        ? void 0
        : stripeGateway.config.find((conf) => conf.field === "api_key")) === null || _a === void 0
      ? void 0
      : _a.value;
  if (!stripeApiKey) {
    return (
      <div className="py-8">
        <h3 className="text-lg font-medium text-gray-900">Payment Details</h3>
        <p>Stripe cannot be initialized - missing configuration</p>
      </div>
    );
  }
  const stripePromise = (0, pure_1.loadStripe)(stripeApiKey);
  return (
    <div className="py-8">
      <react_stripe_js_1.Elements stripe={stripePromise}>
        <StripeCardForm checkout={checkout} />
      </react_stripe_js_1.Elements>
    </div>
  );
}
exports.StripeCreditCardSection = StripeCreditCardSection;
exports.default = StripeCreditCardSection;

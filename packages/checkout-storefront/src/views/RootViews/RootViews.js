"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootViews = void 0;
const Checkout_1 = require("@/checkout-storefront/views/Checkout");
const OrderConfirmation_1 = require("@/checkout-storefront/views/OrderConfirmation");
const react_1 = require("react");
const DummyPayment_1 = require("../DummyPayment/DummyPayment");
const messages_1 = require("./messages");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const RootViews = () => {
  const orderId = (0, url_1.getQueryParams)().orderId;
  const dummyPayment = (0, url_1.getQueryParams)().dummyPayment;
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  if (orderId) {
    if (dummyPayment) {
      return (
        <react_1.Suspense
          fallback={
            <div className="h-screen w-screen flex items-center justify-center">
              <span className="text-text-secondary">
                {formatMessage(messages_1.rootViewsMessages.loadingWithDots)}
              </span>
            </div>
          }
        >
          <DummyPayment_1.DummyPayment />
        </react_1.Suspense>
      );
    }
    return (
      <react_1.Suspense fallback={<OrderConfirmation_1.OrderConfirmationSkeleton />}>
        <OrderConfirmation_1.OrderConfirmation orderId={orderId} />
      </react_1.Suspense>
    );
  }
  return (
    <react_1.Suspense fallback={<Checkout_1.CheckoutSkeleton />}>
      <Checkout_1.Checkout />
    </react_1.Suspense>
  );
};
exports.RootViews = RootViews;

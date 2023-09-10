"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const PageHeader_1 = require("@/checkout-storefront/sections/PageHeader");
const Summary_1 = require("@/checkout-storefront/sections/Summary");
const CheckoutForm_1 = require("@/checkout-storefront/sections/CheckoutForm");
const react_1 = require("react");
const react_error_boundary_1 = require("react-error-boundary");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const EmptyCartPage_1 = require("../EmptyCartPage");
const PageNotFound_1 = require("../PageNotFound");
const auth_1 = require("@/checkout-storefront/lib/auth");
const CheckoutSkeleton_1 = require("@/checkout-storefront/views/Checkout/CheckoutSkeleton");
const Checkout = () => {
  const { checkout, loading } = (0, useCheckout_1.useCheckout)();
  const { isAuthenticating } = (0, auth_1.useSaleorAuthContext)();
  const isCheckoutInvalid = !loading && !checkout && !isAuthenticating;
  const isInitiallyAuthenticating = isAuthenticating && !checkout;
  const isEmptyCart = checkout && !checkout.lines.length;
  return isCheckoutInvalid ? (
    <PageNotFound_1.PageNotFound />
  ) : isInitiallyAuthenticating ? (
    <CheckoutSkeleton_1.CheckoutSkeleton />
  ) : (
    <react_error_boundary_1.ErrorBoundary FallbackComponent={PageNotFound_1.PageNotFound}>
      <div className="page">
        <PageHeader_1.PageHeader />
        <div className="page-content">
          {isEmptyCart ? (
            <EmptyCartPage_1.EmptyCartPage />
          ) : (
            <>
              <react_1.Suspense fallback={<CheckoutForm_1.CheckoutFormSkeleton />}>
                <CheckoutForm_1.CheckoutForm />
              </react_1.Suspense>
              <div className="page-divider" />
              <react_1.Suspense fallback={<Summary_1.SummarySkeleton />}>
                <Summary_1.Summary {...checkout} />
              </react_1.Suspense>
            </>
          )}
        </div>
      </div>
    </react_error_boundary_1.ErrorBoundary>
  );
};
exports.Checkout = Checkout;

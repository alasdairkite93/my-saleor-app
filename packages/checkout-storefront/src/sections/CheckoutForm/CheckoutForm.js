"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutForm = void 0;
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const Contact_1 = require("@/checkout-storefront/sections/Contact");
const DeliveryMethods_1 = require("@/checkout-storefront/sections/DeliveryMethods");
const react_1 = require("react");
const Button_1 = require("@/checkout-storefront/components/Button");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const ContactSkeleton_1 = require("@/checkout-storefront/sections/Contact/ContactSkeleton");
const DeliveryMethodsSkeleton_1 = require("@/checkout-storefront/sections/DeliveryMethods/DeliveryMethodsSkeleton");
const AddressSectionSkeleton_1 = require("@/checkout-storefront/components/AddressSectionSkeleton");
const useCheckoutSubmit_1 = require("@/checkout-storefront/sections/CheckoutForm/useCheckoutSubmit");
const commonMessages_1 = require("@/checkout-storefront/lib/commonMessages");
const messages_1 = require("./messages");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const CollapseSection_1 = require("@/checkout-storefront/sections/CheckoutForm/CollapseSection");
const components_1 = require("@/checkout-storefront/components");
const UserShippingAddressSection_1 = require("@/checkout-storefront/sections/UserShippingAddressSection");
const GuestShippingAddressSection_1 = require("@/checkout-storefront/sections/GuestShippingAddressSection");
const UserBillingAddressSection_1 = require("@/checkout-storefront/sections/UserBillingAddressSection");
const PaymentSection_1 = require("@/checkout-storefront/sections/PaymentSection");
const GuestBillingAddressSection_1 = require("@/checkout-storefront/sections/GuestBillingAddressSection");
const useFetchPaymentMethods_1 = require("@/checkout-storefront/hooks/useFetchPaymentMethods");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const CheckoutForm = () => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { user } = (0, useUser_1.useUser)();
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { passwordResetToken } = (0, url_1.getQueryParams)();
  const [showOnlyContact, setShowOnlyContact] = (0, react_1.useState)(!!passwordResetToken);
  const { handleSubmit, isProcessing } = (0, useCheckoutSubmit_1.useCheckoutSubmit)();
  const { availablePaymentProviders } = (0, useFetchPaymentMethods_1.useFetchPaymentMethods)();
  const shouldShowPayButton = availablePaymentProviders.some(
    (provider) => provider && provider !== "adyen"
  );
  return (
    <div className="checkout-form-container">
      <div className="checkout-form">
        <react_1.Suspense fallback={<ContactSkeleton_1.ContactSkeleton />}>
          <Contact_1.Contact setShowOnlyContact={setShowOnlyContact} />
        </react_1.Suspense>
        <>
          {(checkout === null || checkout === void 0 ? void 0 : checkout.isShippingRequired) && (
            <react_1.Suspense fallback={<AddressSectionSkeleton_1.AddressSectionSkeleton />}>
              <components_1.Divider />
              <CollapseSection_1.CollapseSection collapse={showOnlyContact}>
                <div className="section" data-testid="shippingAddressSection">
                  {user ? (
                    <UserShippingAddressSection_1.UserShippingAddressSection />
                  ) : (
                    <GuestShippingAddressSection_1.GuestShippingAddressSection />
                  )}
                </div>
              </CollapseSection_1.CollapseSection>
            </react_1.Suspense>
          )}
          <react_1.Suspense fallback={<DeliveryMethodsSkeleton_1.DeliveryMethodsSkeleton />}>
            <DeliveryMethods_1.DeliveryMethods collapsed={showOnlyContact} />
          </react_1.Suspense>
          <CollapseSection_1.CollapseSection collapse={showOnlyContact}>
            <PaymentSection_1.PaymentSection>
              {user ? (
                <UserBillingAddressSection_1.UserBillingAddressSection />
              ) : (
                <GuestBillingAddressSection_1.GuestBillingAddressSection />
              )}
            </PaymentSection_1.PaymentSection>
          </CollapseSection_1.CollapseSection>
        </>
      </div>
      {shouldShowPayButton &&
        !showOnlyContact &&
        (isProcessing ? (
          <Button_1.Button
            className="pay-button"
            disabled
            ariaLabel={formatMessage(messages_1.checkoutFormLabels.pay)}
            label={formatMessage(commonMessages_1.commonMessages.processing)}
          />
        ) : (
          <Button_1.Button
            ariaLabel={formatMessage(messages_1.checkoutFormLabels.pay)}
            label={formatMessage(messages_1.checkoutFormMessages.pay)}
            className="pay-button"
            onClick={handleSubmit}
            data-testid="pay-button"
          />
        ))}
    </div>
  );
};
exports.CheckoutForm = CheckoutForm;

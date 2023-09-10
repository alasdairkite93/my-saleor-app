"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutFormSkeleton = void 0;
const react_1 = __importDefault(require("react"));
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const Contact_1 = require("@/checkout-storefront/sections/Contact");
const DeliveryMethods_1 = require("@/checkout-storefront/sections/DeliveryMethods");
const PaymentSection_1 = require("@/checkout-storefront/sections/PaymentSection");
const components_1 = require("@/checkout-storefront/components");
const AddressSectionSkeleton_1 = require("@/checkout-storefront/components/AddressSectionSkeleton");
const messages_1 = require("./messages");
const CheckoutFormSkeleton = () => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  return (
    <div className="checkout-form-container">
      <div className="checkout-form">
        <Contact_1.ContactSkeleton />
        <components_1.Divider />
        <AddressSectionSkeleton_1.AddressSectionSkeleton />
        <components_1.Divider />
        <DeliveryMethods_1.DeliveryMethodsSkeleton />
        <components_1.Divider />
        <PaymentSection_1.PaymentSectionSkeleton />
      </div>
      <components_1.Button
        disabled
        ariaLabel={formatMessage(messages_1.checkoutFormLabels.pay)}
        label={formatMessage(messages_1.checkoutFormMessages.pay)}
        className="pay-button"
      />
    </div>
  );
};
exports.CheckoutFormSkeleton = CheckoutFormSkeleton;

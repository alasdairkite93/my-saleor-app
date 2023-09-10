"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverySection = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const Section_1 = require("./Section");
const messages_1 = require("@/checkout-storefront/sections/DeliveryMethods/messages");
const isShipping = (deliveryMethod) =>
  (deliveryMethod === null || deliveryMethod === void 0 ? void 0 : deliveryMethod.__typename) ===
  "ShippingMethod";
const DeliverySection = ({ deliveryMethod }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const getDeliveryEstimateText = () => {
    const { minimumDeliveryDays: min, maximumDeliveryDays: max } = deliveryMethod;
    if (!min || !max) {
      return undefined;
    }
    return formatMessage(messages_1.deliveryMethodsMessages.businessDays, {
      min: min.toString(),
      max: max.toString(),
    });
  };
  return (
    <Section_1.Section title={formatMessage(messages_1.deliveryMethodsMessages.deliveryMethod)}>
      {!isShipping(deliveryMethod) ? (
        <ui_kit_1.Text color="secondary">
          {formatMessage(messages_1.deliveryMethodsMessages.shippingMethodNotApplicable)}
        </ui_kit_1.Text>
      ) : (
        <>
          <ui_kit_1.Text>{deliveryMethod.name}</ui_kit_1.Text>
          <ui_kit_1.Text>{getDeliveryEstimateText()}</ui_kit_1.Text>
        </>
      )}
    </Section_1.Section>
  );
};
exports.DeliverySection = DeliverySection;

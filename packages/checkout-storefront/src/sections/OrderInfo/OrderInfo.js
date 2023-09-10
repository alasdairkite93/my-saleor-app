"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInfo = void 0;
const Address_1 = require("@/checkout-storefront/components/Address");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const messages_1 = require("@/checkout-storefront/sections/Contact/messages");
const messages_2 = require("@/checkout-storefront/sections/UserBillingAddressSection/messages");
const messages_3 = require("@/checkout-storefront/sections/UserShippingAddressSection/messages");
const ui_kit_1 = require("@saleor/ui-kit");
const DeliverySection_1 = require("./DeliverySection");
const PaymentSection_1 = require("./PaymentSection");
const Section_1 = require("./Section");
const OrderInfo = ({ order }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { id, deliveryMethod, shippingAddress, billingAddress, userEmail } = order;
  return (
    <section className="lg:w-1/2 border border-border-secondary rounded-lg pt-5 px-4">
      <PaymentSection_1.PaymentSection orderId={id} />
      <DeliverySection_1.DeliverySection deliveryMethod={deliveryMethod} />
      <Section_1.Section title={formatMessage(messages_1.contactMessages.contact)}>
        <ui_kit_1.Text>{userEmail}</ui_kit_1.Text>
      </Section_1.Section>
      {shippingAddress && (
        <Section_1.Section title={formatMessage(messages_3.shippingMessages.shippingAddress)}>
          <Address_1.Address address={shippingAddress} />
        </Section_1.Section>
      )}
      {billingAddress && (
        <Section_1.Section title={formatMessage(messages_2.billingMessages.billingAddress)}>
          <Address_1.Address address={billingAddress} />
        </Section_1.Section>
      )}
    </section>
  );
};
exports.OrderInfo = OrderInfo;

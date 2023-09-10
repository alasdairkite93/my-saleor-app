"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentSectionLabels =
  exports.paymentMethodsMessages =
  exports.paymentSectionMessages =
    void 0;
const react_intl_1 = require("react-intl");
exports.paymentSectionMessages = (0, react_intl_1.defineMessages)({
  paymentProviders: {
    defaultMessage: "Payment providers",
    id: "PaymentSection/messages/8YE5b7",
    description: "payment providers",
  },
});
exports.paymentMethodsMessages = (0, react_intl_1.defineMessages)({
  creditCard: {
    defaultMessage: "Credit card",
    id: "PaymentSection/messages/im88Fe",
    description: "credit card",
  },
  applePay: {
    defaultMessage: "Apple Pay",
    id: "PaymentSection/messages/p7Zg+S",
    description: "apple pay",
  },
  paypal: {
    defaultMessage: "PayPal",
    id: "PaymentSection/messages/jdRifS",
    description: "paypal",
  },
  dropin: {
    defaultMessage: "Drop in",
    id: "PaymentSection/messages/bFYz7Q",
    description: "dropin",
  },
  dummy: {
    defaultMessage: "Dummy",
    id: "PaymentSection/messages/xXCQ+K",
    description: "dummy payment method",
  },
});
exports.paymentSectionLabels = (0, react_intl_1.defineMessages)({
  paymentProviders: {
    defaultMessage: "payment providers",
    id: "PaymentSection/messages/FK5Bg/",
    description: "payment providers accessibility label",
  },
});

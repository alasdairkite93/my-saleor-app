"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutFormLabels = exports.checkoutFormMessages = void 0;
const react_intl_1 = require("react-intl");
exports.checkoutFormMessages = (0, react_intl_1.defineMessages)({
  pay: {
    defaultMessage: "Pay",
    id: "CheckoutForm/messages/jLJToZ",
    description: "pay",
  },
  missingFieldsInShippingAddress: {
    defaultMessage: "There are certain fields in shipping address form that are missing or invalid",
    id: "CheckoutForm/messages/guvzy3",
    description: "missing fields in shipping address",
  },
  missingFieldsInBillingAddress: {
    defaultMessage: "There are certain fields in billing form that are missing or invalid",
    id: "CheckoutForm/messages/+qM8r0",
    description: "missing fields in billing address",
  },
});
exports.checkoutFormLabels = (0, react_intl_1.defineMessages)({
  pay: {
    defaultMessage: "pay",
    id: "CheckoutForm/messages/UDs7fN",
    description: "pay accessibility label",
  },
});

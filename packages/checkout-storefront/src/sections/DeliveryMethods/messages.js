"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryMethodsLabels = exports.deliveryMethodsMessages = void 0;
const react_intl_1 = require("react-intl");
exports.deliveryMethodsMessages = (0, react_intl_1.defineMessages)({
  businessDays: {
    defaultMessage: "{min}-{max} business days",
    id: "DeliveryMethods/messages/DGFTo/",
    description: "business days",
  },
  deliveryMethods: {
    defaultMessage: "Delivery methods",
    id: "DeliveryMethods/messages/U/hMpC",
    description: "delivery methods",
  },
  deliveryMethod: {
    defaultMessage: "Delivery method",
    id: "DeliveryMethods/messages/ZHOxoA",
    description: "delivery method",
  },
  shippingMethodNotApplicable: {
    defaultMessage: "Not applicable",
    id: "DeliveryMethods/messages/TitWRN",
    description: "shipping method not applicable",
  },
  noShippingAddressMessage: {
    defaultMessage: "Please fill in shipping address to see available shipping methods",
    id: "DeliveryMethods/messages/927KCY",
    description: "no shipping address message",
  },
});
exports.deliveryMethodsLabels = (0, react_intl_1.defineMessages)({
  deliveryMethods: {
    defaultMessage: "delivery methods",
    id: "DeliveryMethods/messages/IPzOnb",
    description: "delivery methods accessibility label",
  },
});

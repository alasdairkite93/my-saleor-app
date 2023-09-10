"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPrivateSettings =
  exports.defaultPublicSettings =
  exports.defaultCustomizationSettings =
  exports.defaultPaymentProviderSettings =
  exports.defaultActiveChannelPaymentProviders =
    void 0;
exports.defaultActiveChannelPaymentProviders = {
  applePay: "",
  creditCard: "",
  paypal: "",
  dropin: "",
  dummy: "dummy",
};
exports.defaultPaymentProviderSettings = {
  mollie: {
    apiKey: "",
    profileId: "",
  },
  adyen: {
    merchantAccount: "",
    clientKey: "",
    apiKey: "",
    hmac: "",
    password: "",
    username: "",
  },
  stripe: {
    publishableKey: "",
    secretKey: "",
    webhookSecret: "",
  },
  dummy: {
    dummyKey: "",
  },
};
exports.defaultCustomizationSettings = {
  branding: {
    buttonBgColorPrimary: "#394052",
    buttonBgColorHover: "#FAFAFA",
    borderColorPrimary: "#394052",
    errorColor: "#B65757",
    successColor: "#2C9B2A",
    buttonTextColor: "#ffffff",
    textColor: "#000000",
    logoUrl: "",
  },
  productSettings: {
    lowStockThreshold: "",
  },
};
exports.defaultPublicSettings = {
  customizations: exports.defaultCustomizationSettings,
  channelActivePaymentProviders: {},
};
exports.defaultPrivateSettings = {
  paymentProviders: exports.defaultPaymentProviderSettings,
};

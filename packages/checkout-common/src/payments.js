"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProviders = exports.adyenProviderSettingIDs = exports.PaymentMethods = void 0;
exports.PaymentMethods = ["creditCard", "applePay", "paypal", "dropin", "dummy"];
exports.adyenProviderSettingIDs = [
  "merchantAccount",
  "hmac",
  "username",
  "password",
  "apiKey",
  "clientKey",
];
exports.PaymentProviders = ["mollie", "adyen", "stripe", "dummy"];

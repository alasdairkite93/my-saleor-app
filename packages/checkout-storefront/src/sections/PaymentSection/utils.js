"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParsedPaymentProviders = exports.getParsedPaymentMethods = void 0;
const getParsedPaymentMethods = (activePaymentProvidersByChannel) => {
  if (!activePaymentProvidersByChannel) {
    return [];
  }
  return Object.entries(activePaymentProvidersByChannel)
    .filter(([, paymentProviderId]) => !!paymentProviderId)
    .map(([paymentMethodId]) => paymentMethodId);
};
exports.getParsedPaymentMethods = getParsedPaymentMethods;
const getParsedPaymentProviders = (activePaymentProvidersByChannel) => {
  if (!activePaymentProvidersByChannel) {
    return [];
  }
  return Object.values(activePaymentProvidersByChannel).filter(
    (paymentProviderId) => !!paymentProviderId
  );
};
exports.getParsedPaymentProviders = getParsedPaymentProviders;

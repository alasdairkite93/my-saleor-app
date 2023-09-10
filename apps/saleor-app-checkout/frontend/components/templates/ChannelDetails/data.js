"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormDefaultValues = exports.getActivePaymentProvider = void 0;
const getActivePaymentProvider = (paymentOption) => {
  var _a;
  return (
    ((_a = paymentOption.availableProviders.find((provider) => {
      var _a;
      return (
        provider.id ===
        ((_a = paymentOption.activeProvider) === null || _a === void 0 ? void 0 : _a.id)
      );
    })) === null || _a === void 0
      ? void 0
      : _a.id) || ""
  );
};
exports.getActivePaymentProvider = getActivePaymentProvider;
const getFormDefaultValues = (channelPaymentOptions) =>
  channelPaymentOptions === null || channelPaymentOptions === void 0
    ? void 0
    : channelPaymentOptions.paymentOptions.reduce(
        (values, paymentOption) =>
          Object.assign(Object.assign({}, values), {
            [paymentOption.id]: (0, exports.getActivePaymentProvider)(paymentOption),
          }),
        {}
      );
exports.getFormDefaultValues = getFormDefaultValues;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChannelPaymentOptions =
  exports.useChannelPaymentOptionsList =
  exports.usePaymentProviderSettings =
  exports.useCustomizationSettings =
    void 0;
const utils_1 = require("@/saleor-app-checkout/utils");
const fields_1 = require("@/saleor-app-checkout/config/fields");
const useCustomizationSettings = (settingsValues) =>
  (0, fields_1.useCustomizations)().map((customization) =>
    Object.assign(Object.assign({}, customization), {
      settings: customization.settings.map((setting) =>
        Object.assign(Object.assign({}, setting), {
          value: settingsValues[customization.id][setting.id],
        })
      ),
    })
  );
exports.useCustomizationSettings = useCustomizationSettings;
const usePaymentProviderSettings = (settingsValues) =>
  (0, fields_1.usePaymentProviders)().map((provider) =>
    Object.assign(Object.assign({}, provider), {
      settings: provider.settings.map((setting) =>
        Object.assign(Object.assign({}, setting), {
          value: settingsValues[provider.id][setting.id],
        })
      ),
    })
  );
exports.usePaymentProviderSettings = usePaymentProviderSettings;
const useChannelPaymentOptionsList = (channels, activePaymentProviders) => {
  const paymentMethods = (0, fields_1.usePaymentMethods)();
  const paymentProviders = (0, fields_1.usePaymentProviders)();
  const dummyPaymentProvider = (0, fields_1.useDummyPaymentProvider)();
  return channels.map((channel) => ({
    id: channel.id,
    channel: channel,
    paymentOptions: paymentMethods.map((method) => {
      var _a;
      const methodProviders = method.id === "dummy" ? [dummyPaymentProvider] : paymentProviders;
      const activeProvider =
        (((_a =
          activePaymentProviders === null || activePaymentProviders === void 0
            ? void 0
            : activePaymentProviders[channel.id]) === null || _a === void 0
          ? void 0
          : _a[method.id]) &&
          (0, utils_1.findById)(methodProviders, activePaymentProviders[channel.id][method.id])) ||
        null;
      return {
        id: method.id,
        method,
        availableProviders: methodProviders,
        activeProvider,
      };
    }),
  }));
};
exports.useChannelPaymentOptionsList = useChannelPaymentOptionsList;
const useChannelPaymentOptions = (channels, activePaymentProviders, channelId) =>
  (0, exports.useChannelPaymentOptionsList)(channels, activePaymentProviders).find(
    (channelPayments) => channelPayments.channel.id === channelId
  );
exports.useChannelPaymentOptions = useChannelPaymentOptions;

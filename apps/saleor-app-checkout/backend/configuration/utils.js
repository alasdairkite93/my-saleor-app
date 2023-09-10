"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeChannelsWithPaymentProvidersSettings = void 0;
const defaults_1 = require("@/saleor-app-checkout/config/defaults");
const mergeChannelsWithPaymentProvidersSettings = (settings, channels) =>
  (channels === null || channels === void 0
    ? void 0
    : channels.reduce((assignedSettings, channel) => {
        const channelSettings =
          assignedSettings[channel.id] || defaults_1.defaultActiveChannelPaymentProviders;
        return Object.assign(Object.assign({}, assignedSettings), {
          [channel.id]: channelSettings,
        });
      }, settings.channelActivePaymentProviders)) || settings.channelActivePaymentProviders;
exports.mergeChannelsWithPaymentProvidersSettings = mergeChannelsWithPaymentProvidersSettings;

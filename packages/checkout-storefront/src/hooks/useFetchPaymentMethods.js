"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchPaymentMethods = void 0;
const fetch_1 = require("../fetch");
const AppConfigProvider_1 = require("../providers/AppConfigProvider");
const utils_1 = require("../sections/PaymentSection/utils");
const useCheckout_1 = require("./useCheckout");
const useFetch_1 = require("./useFetch/useFetch");
const useFetchPaymentMethods = () => {
  const {
    checkout: {
      channel: { id: channelId },
    },
  } = (0, useCheckout_1.useCheckout)();
  const {
    env: { checkoutApiUrl },
    saleorApiUrl,
  } = (0, AppConfigProvider_1.useAppConfig)();
  const [{ data: activePaymentProvidersByChannel, loading }] = (0, useFetch_1.useFetch)(
    fetch_1.getPaymentMethods,
    {
      args: { channelId, checkoutApiUrl, saleorApiUrl },
      skip: !channelId,
    }
  );
  const availablePaymentMethods = (0, utils_1.getParsedPaymentMethods)(
    activePaymentProvidersByChannel
  );
  const availablePaymentProviders = (0, utils_1.getParsedPaymentProviders)(
    activePaymentProvidersByChannel
  );
  return {
    activePaymentProvidersByChannel,
    availablePaymentMethods,
    availablePaymentProviders,
    loading,
  };
};
exports.useFetchPaymentMethods = useFetchPaymentMethods;

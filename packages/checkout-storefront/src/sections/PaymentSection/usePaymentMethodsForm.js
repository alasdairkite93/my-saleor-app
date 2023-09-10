"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaymentMethodsForm = void 0;
const fetch_1 = require("@/checkout-storefront/fetch");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const paymentDataStore_1 = require("@/checkout-storefront/state/paymentDataStore");
const AppConfigProvider_1 = require("@/checkout-storefront/providers/AppConfigProvider");
const react_1 = require("react");
const utils_1 = require("@/checkout-storefront/sections/PaymentSection/utils");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFetch_1 = require("@/checkout-storefront/hooks/useFetch");
const lodash_es_1 = require("lodash-es");
const usePaymentMethodsForm = () => {
  const { setPaymentData } = (0, paymentDataStore_1.usePaymentDataActions)();
  const {
    checkout: {
      channel: { id: channelId },
    },
  } = (0, useCheckout_1.useCheckout)();
  const {
    env: { checkoutApiUrl },
    saleorApiUrl,
  } = (0, AppConfigProvider_1.useAppConfig)();
  const [{ data: allPaymentOptions, loading }] = (0, useFetch_1.useFetch)(
    fetch_1.getPaymentMethods,
    {
      args: { channelId, checkoutApiUrl, saleorApiUrl },
      skip: !channelId,
    }
  );
  const availablePaymentMethods = (0, utils_1.getParsedPaymentMethods)(allPaymentOptions);
  const firstAvailableMethod = availablePaymentMethods[0];
  const form = (0, useForm_1.useForm)({
    initialValues: { selectedMethodId: firstAvailableMethod },
    onSubmit: ({ selectedMethodId }) => {
      if (!selectedMethodId || !allPaymentOptions) {
        return;
      }
      setPaymentData({
        paymentMethod: selectedMethodId,
        paymentProvider: allPaymentOptions[selectedMethodId],
      });
    },
  });
  const {
    values: { selectedMethodId },
    setFieldValue,
    handleSubmit,
  } = form;
  (0, react_1.useEffect)(() => {
    if (loading) {
      return;
    }
    if (allPaymentOptions && !availablePaymentMethods.length) {
      throw new Error("No available payment providers");
    } else if (!selectedMethodId && firstAvailableMethod) {
      void setFieldValue("selectedMethodId", firstAvailableMethod);
    }
  }, [
    allPaymentOptions,
    availablePaymentMethods.length,
    firstAvailableMethod,
    loading,
    selectedMethodId,
    setFieldValue,
  ]);
  (0, react_1.useEffect)(() => {
    handleSubmit();
  }, [handleSubmit, selectedMethodId]);
  const availablePaymentProviders = allPaymentOptions
    ? (0, lodash_es_1.uniq)(Object.values(allPaymentOptions))
    : [];
  return {
    form,
    availablePaymentMethods,
    availablePaymentProviders,
  };
};
exports.usePaymentMethodsForm = usePaymentMethodsForm;

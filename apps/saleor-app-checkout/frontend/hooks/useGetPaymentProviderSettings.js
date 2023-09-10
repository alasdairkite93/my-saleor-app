"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetPaymentProviderSettings = void 0;
const react_1 = require("react");
const ClientAppBridgeProvider_1 = require("../components/elements/AppProvider/ClientAppBridgeProvider");
const fetch_1 = require("../fetch");
const useAuthData_1 = require("./useAuthData");
const useFetch_1 = require("./useFetch");
const usePrivateSettings_1 = require("./usePrivateSettings");
const useGetPaymentProviderSettings = (optionalProps) => {
  const { isAuthorized } = (0, useAuthData_1.useAuthData)();
  const { privateSettings, setPrivateSettings } = (0, usePrivateSettings_1.usePrivateSettings)();
  const { app } = (0, ClientAppBridgeProvider_1.useAppContext)();
  const domain = app.getState().domain;
  // @todo use `saleorApiUrl`
  const saleorApiUrl = `https://${domain}/graphql/`;
  const [{ data, loading, error }] = (0, useFetch_1.useFetch)(
    fetch_1.requestGetPaymentProviderSettings,
    Object.assign(Object.assign({ skip: !isAuthorized }, optionalProps), {
      args: Object.assign(
        Object.assign(
          {},
          optionalProps === null || optionalProps === void 0 ? void 0 : optionalProps.args
        ),
        { saleorApiUrl, token: app.getState().token }
      ),
    })
  );
  (0, react_1.useEffect)(() => {
    if (data === null || data === void 0 ? void 0 : data.data) {
      setPrivateSettings(
        Object.assign(Object.assign({}, privateSettings), {
          paymentProviders: Object.assign(
            Object.assign({}, privateSettings.paymentProviders),
            data.data
          ),
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data === null || data === void 0 ? void 0 : data.data]);
  return {
    loading,
    error: error,
    data: privateSettings.paymentProviders,
  };
};
exports.useGetPaymentProviderSettings = useGetPaymentProviderSettings;

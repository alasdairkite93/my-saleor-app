"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentProviderDetails_1 = __importDefault(
  require("frontend/components/templates/PaymentProviderDetails")
);
const router_1 = require("next/router");
const utils_1 = require("@/saleor-app-checkout/frontend/utils");
const data_1 = require("@/saleor-app-checkout/frontend/data");
const ErrorDetails_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/templates/ErrorDetails")
);
const react_intl_1 = require("react-intl");
const errorMessages_1 = require("@/saleor-app-checkout/frontend/misc/errorMessages");
const useGetPaymentProviderSettings_1 = require("@/saleor-app-checkout/frontend/hooks/useGetPaymentProviderSettings");
const useSetPaymentProviderSettings_1 = require("@/saleor-app-checkout/frontend/hooks/useSetPaymentProviderSettings");
const ClientAppBridgeProvider_1 = require("@/saleor-app-checkout/frontend/components/elements/AppProvider/ClientAppBridgeProvider");
const PaymentProvider = () => {
  const router = (0, router_1.useRouter)();
  const { paymentProviderId, channelId } = router.query;
  const intl = (0, react_intl_1.useIntl)();
  const getPaymentProviderSettings = (0,
  useGetPaymentProviderSettings_1.useGetPaymentProviderSettings)();
  const [setPaymentProviderSettings, setPaymentProviderSettingsRequest] = (0,
  useSetPaymentProviderSettings_1.useSetPaymentProviderSettings)();
  const paymentProviders = (0, data_1.usePaymentProviderSettings)(getPaymentProviderSettings.data);
  const { app } = (0, ClientAppBridgeProvider_1.useAppContext)();
  const domain = app.getState().domain;
  // @todo use `saleorApiUrl`
  const saleorApiUrl = `https://${domain}/graphql/`;
  const token = app.getState().token;
  const paymentProvider = paymentProviders.find(
    (paymentMethod) => paymentMethod.id === paymentProviderId
  );
  const handleCancel = () => {
    router.back();
  };
  const handleSubmit = (data) => {
    void setPaymentProviderSettingsRequest(
      Object.assign(Object.assign({}, data), { saleorApiUrl, token })
    );
  };
  const errors = [
    ...(0, utils_1.getCommonErrors)(getPaymentProviderSettings.error),
    ...(0, utils_1.getCommonErrors)(setPaymentProviderSettings.error),
  ];
  if (!paymentProvider) {
    return (
      <ErrorDetails_1.default
        error={intl.formatMessage(errorMessages_1.notFoundMessages.paymentProviderNotFound)}
      />
    );
  }
  return (
    <PaymentProviderDetails_1.default
      selectedPaymentProvider={paymentProvider}
      channelId={channelId === null || channelId === void 0 ? void 0 : channelId.toString()}
      saveButtonBarState="default"
      loading={getPaymentProviderSettings.loading || setPaymentProviderSettings.loading}
      errors={errors}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};
exports.default = PaymentProvider;

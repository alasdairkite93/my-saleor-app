"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomizations =
  exports.useSectionsCustomization =
  exports.useBrandingCustomization =
  exports.usePaymentProviders =
  exports.useDummyPaymentProvider =
  exports.useStripePaymentProvider =
  exports.useAdyenPaymentProvider =
  exports.useMolliePaymentProvider =
  exports.usePaymentMethods =
  exports.fields =
    void 0;
const react_intl_1 = require("react-intl");
const customization_1 = require("./messages/customization");
const paymentMethods_1 = require("./messages/paymentMethods");
const paymentProviders_1 = require("./messages/paymentProviders");
const utils_1 = require("./utils");
const CreditCard_1 = __importDefault(require("@material-ui/icons/CreditCard"));
const Apple_1 = __importDefault(require("@material-ui/icons/Apple"));
const PayPal_1 = __importDefault(require("./icons/PayPal"));
const Mollie_1 = __importDefault(require("./icons/Mollie"));
const Adyen_1 = __importDefault(require("./icons/Adyen"));
const Stripe_1 = __importDefault(require("./icons/Stripe"));
const Dummy_1 = __importDefault(require("./icons/Dummy"));
const paymentMethods = [
  {
    id: "creditCard",
    logo: CreditCard_1.default,
  },
  {
    id: "applePay",
    logo: Apple_1.default,
  },
  {
    id: "paypal",
    logo: PayPal_1.default,
  },
  {
    id: "dummy",
    logo: Dummy_1.default,
  },
];
const molliePaymentProvider = [
  {
    id: "profileId",
    type: "string",
    encrypt: false,
  },
  {
    id: "apiKey",
    type: "string",
    encrypt: true,
  },
];
const adyenPaymentProvider = [
  {
    id: "merchantAccount",
    type: "string",
    encrypt: false,
  },
  {
    id: "apiKey",
    type: "string",
    encrypt: true,
  },
  {
    id: "hmac",
    type: "string",
    encrypt: true,
  },
  {
    id: "username",
    type: "string",
    encrypt: true,
  },
  {
    id: "password",
    type: "string",
    encrypt: true,
  },
  {
    id: "clientKey",
    type: "string",
    encrypt: false,
  },
];
const stripePaymentProvider = [
  {
    id: "publishableKey",
    type: "string",
    encrypt: false,
  },
  {
    id: "secretKey",
    type: "string",
    encrypt: true,
  },
  {
    id: "webhookSecret",
    type: "string",
    encrypt: true,
  },
];
const brandingCustomization = [
  {
    id: "buttonBgColorPrimary",
    type: "color",
  },
  {
    id: "buttonBgColorHover",
    type: "color",
  },
  {
    id: "borderColorPrimary",
    type: "color",
  },
  {
    id: "errorColor",
    type: "color",
  },
  {
    id: "successColor",
    type: "color",
  },
  {
    id: "buttonTextColor",
    type: "color",
  },
  {
    id: "textColor",
    type: "color",
  },
  {
    id: "logoUrl",
    type: "image",
  },
];
const sectionsCustomization = [
  {
    id: "lowStockThreshold",
    type: "string",
  },
];
const channelActivePaymentProvidersFields = {
  anyChannel: paymentMethods,
};
const customizationsFields = {
  branding: brandingCustomization,
  productSettings: sectionsCustomization,
};
const paymentProviderFields = {
  mollie: molliePaymentProvider,
  adyen: adyenPaymentProvider,
  stripe: stripePaymentProvider,
  dummy: {},
};
exports.fields = {
  channelActivePaymentProviders: channelActivePaymentProvidersFields,
  customizations: customizationsFields,
  paymentProviders: paymentProviderFields,
};
const usePaymentMethods = () => {
  const intl = (0, react_intl_1.useIntl)();
  return (0, utils_1.withNames)(intl, paymentMethods_1.paymentMethodsMessages, paymentMethods);
};
exports.usePaymentMethods = usePaymentMethods;
const useMolliePaymentProvider = () => {
  const intl = (0, react_intl_1.useIntl)();
  return {
    id: "mollie",
    label: intl.formatMessage(paymentProviders_1.paymentProvidersMessages.mollie),
    logo: Mollie_1.default,
    settings: (0, utils_1.withLabels)(
      intl,
      paymentProviders_1.molliePaymentProviderMessages,
      molliePaymentProvider
    ),
  };
};
exports.useMolliePaymentProvider = useMolliePaymentProvider;
const useAdyenPaymentProvider = () => {
  const intl = (0, react_intl_1.useIntl)();
  return {
    id: "adyen",
    label: intl.formatMessage(paymentProviders_1.paymentProvidersMessages.adyen),
    logo: Adyen_1.default,
    settings: (0, utils_1.withLabels)(
      intl,
      paymentProviders_1.adyenPaymentProviderMessages,
      adyenPaymentProvider
    ),
  };
};
exports.useAdyenPaymentProvider = useAdyenPaymentProvider;
const useStripePaymentProvider = () => {
  const intl = (0, react_intl_1.useIntl)();
  return {
    id: "stripe",
    label: intl.formatMessage(paymentProviders_1.paymentProvidersMessages.stripe),
    logo: Stripe_1.default,
    settings: (0, utils_1.withLabels)(
      intl,
      paymentProviders_1.stripePaymentProviderMessages,
      stripePaymentProvider
    ),
  };
};
exports.useStripePaymentProvider = useStripePaymentProvider;
const useDummyPaymentProvider = () => {
  const intl = (0, react_intl_1.useIntl)();
  return {
    id: "dummy",
    label: intl.formatMessage(paymentProviders_1.paymentProvidersMessages.dummy),
    settings: [],
  };
};
exports.useDummyPaymentProvider = useDummyPaymentProvider;
const usePaymentProviders = () => [
  (0, exports.useMolliePaymentProvider)(),
  (0, exports.useAdyenPaymentProvider)(),
  (0, exports.useStripePaymentProvider)(),
];
exports.usePaymentProviders = usePaymentProviders;
const useBrandingCustomization = () => {
  const intl = (0, react_intl_1.useIntl)();
  return {
    id: "branding",
    label: intl.formatMessage(customization_1.customizationMessages.branding),
    settings: (0, utils_1.withLabels)(
      intl,
      customization_1.brandingCustomizationMessages,
      brandingCustomization
    ),
  };
};
exports.useBrandingCustomization = useBrandingCustomization;
const useSectionsCustomization = () => {
  const intl = (0, react_intl_1.useIntl)();
  return {
    id: "productSettings",
    label: intl.formatMessage(customization_1.customizationMessages.productSettings),
    settings: (0, utils_1.withLabels)(
      intl,
      customization_1.sectionsCustomizationMessages,
      sectionsCustomization
    ),
  };
};
exports.useSectionsCustomization = useSectionsCustomization;
const useCustomizations = () => [
  (0, exports.useBrandingCustomization)(),
  (0, exports.useSectionsCustomization)(),
];
exports.useCustomizations = useCustomizations;

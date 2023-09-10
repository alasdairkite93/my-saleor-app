"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const core_1 = require("@material-ui/core");
const routes_1 = require("routes");
const commonMessages_1 = require("@/saleor-app-checkout/frontend/misc/commonMessages");
const AppLayout_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppLayout")
);
const AppSavebar_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppSavebar")
);
const data_1 = require("./data");
const errors_1 = require("@/saleor-app-checkout/frontend/misc/errors");
const ErrorAlert_1 = __importDefault(require("../../elements/ErrorAlert"));
const fields_1 = require("@/saleor-app-checkout/config/fields");
const PaymentProviderDetailsSettings_1 = __importDefault(
  require("./PaymentProviderDetailsSettings")
);
const messages_1 = require("./messages");
const react_intl_1 = require("react-intl");
const react_hook_form_1 = require("react-hook-form");
const react_1 = require("react");
const PaymentProviderDetails = ({
  selectedPaymentProvider,
  channelId,
  saveButtonBarState,
  loading,
  errors,
  onCancel,
  onSubmit,
}) => {
  const router = (0, router_1.useRouter)();
  const intl = (0, react_intl_1.useIntl)();
  const paymentProviders = (0, fields_1.usePaymentProviders)();
  const { encryptedSettings, publicSettings, hasEncryptedSettings, hasPublicSettings } = (0,
  data_1.extractSettingsData)(selectedPaymentProvider);
  const flatSettings = Object.fromEntries(
    selectedPaymentProvider.settings.map((setting) => [setting.id, setting.value])
  );
  const formMethods = (0, react_hook_form_1.useForm)({
    shouldUnregister: true,
    defaultValues: flatSettings,
  });
  const { control, handleSubmit: handleSubmitForm, formState, reset: resetForm } = formMethods;
  (0, react_1.useEffect)(() => {
    resetForm((0, data_1.getFormDefaultValues)(selectedPaymentProvider)); // Update values on subpage change as the same form is used
  }, [selectedPaymentProvider, resetForm]);
  const onBackClick = () => {
    if (channelId) {
      void router.push({
        pathname: routes_1.channelPath,
        query: {
          channelId: channelId,
        },
      });
    } else {
      void router.push(routes_1.channelListPath);
    }
  };
  const onPaymentProviderClick = (paymentProvider) => {
    if (channelId) {
      void router.push({
        pathname: routes_1.paymentProviderPath,
        query: {
          paymentProviderId: paymentProvider.id,
          channelId,
        },
      });
    } else {
      void router.push({
        pathname: routes_1.paymentProviderPath,
        query: {
          paymentProviderId: paymentProvider.id,
        },
      });
    }
  };
  const handleSubmit = (flattedOptions) => {
    const changedEntries = Object.entries(flattedOptions).filter(
      ([key]) => formState.dirtyFields[key]
    );
    onSubmit({
      [selectedPaymentProvider.id]: Object.fromEntries(changedEntries),
    });
  };
  return (
    <form method="post">
      <react_hook_form_1.FormProvider {...formMethods}>
        <AppLayout_1.default
          title={intl.formatMessage(commonMessages_1.sectionMessages.settings)}
          onBackClick={onBackClick}
          items={paymentProviders}
          selectedItem={selectedPaymentProvider}
          loading={loading}
          onItemClick={onPaymentProviderClick}
        >
          <ErrorAlert_1.default
            errors={errors}
            getErrorMessage={(error, intl) =>
              error.code ? (0, errors_1.getMetadataErrorMessage)(error.code, intl) : error.message
            }
          />
          <core_1.Card>
            {loading && (
              <PaymentProviderDetailsSettings_1.default
                settings={encryptedSettings}
                showHeader={true}
                loading={true}
              />
            )}
            {!loading && hasEncryptedSettings && (
              <PaymentProviderDetailsSettings_1.default
                settings={encryptedSettings}
                description={intl.formatMessage(messages_1.messages.encryptedSettingNotice)}
                showHeader={true}
                formControl={control}
              />
            )}
            {!loading && hasPublicSettings && (
              <>
                {hasEncryptedSettings && <core_1.Divider />}
                <PaymentProviderDetailsSettings_1.default
                  settings={publicSettings}
                  description={intl.formatMessage(messages_1.messages.publicSettingNotice)}
                  showHeader={!hasEncryptedSettings}
                  formControl={control}
                />
              </>
            )}
          </core_1.Card>
        </AppLayout_1.default>
        <AppSavebar_1.default
          disabled={loading || !formState.isDirty}
          state={saveButtonBarState}
          onCancel={onCancel}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmitForm(handleSubmit)}
        />
      </react_hook_form_1.FormProvider>
    </form>
  );
};
exports.default = PaymentProviderDetails;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const macaw_ui_1 = require("@saleor/macaw-ui");
const icons_1 = require("@material-ui/icons");
const router_1 = require("next/router");
const react_intl_1 = require("react-intl");
const core_1 = require("@material-ui/core");
const styles_1 = require("./styles");
const routes_1 = require("routes");
const messages_1 = require("./messages");
const AppLayout_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppLayout")
);
const utils_1 = require("@/saleor-app-checkout/frontend/utils");
const Skeleton_1 = __importDefault(require("@material-ui/lab/Skeleton"));
const AppSavebar_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppSavebar")
);
const react_hook_form_1 = require("react-hook-form");
const data_1 = require("./data");
const react_1 = require("react");
const errors_1 = require("@/saleor-app-checkout/frontend/misc/errors");
const ErrorAlert_1 = __importDefault(require("../../elements/ErrorAlert"));
const fields_1 = require("@/saleor-app-checkout/config/fields");
const ChannelDetails = ({
  channelPaymentOptions,
  channels,
  saveButtonBarState,
  loading,
  errors,
  onCancel,
  onSubmit,
}) => {
  const paymentProviders = (0, fields_1.usePaymentProviders)();
  const router = (0, router_1.useRouter)();
  const classes = (0, styles_1.useStyles)();
  const { actions } = (0, macaw_ui_1.useOffsettedListWidths)();
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState,
    reset: resetForm,
  } = (0, react_hook_form_1.useForm)({
    shouldUnregister: true, // Legacy fields from different subpage using the same form might be still present, this should unregister them
  });
  (0, react_1.useEffect)(() => {
    resetForm((0, data_1.getFormDefaultValues)(channelPaymentOptions)); // Update values on subpage change as the same form is used
  }, [channelPaymentOptions, resetForm]);
  const onBackClick = () => {
    void router.push(routes_1.channelListPath);
  };
  const onSettingsClick = () => {
    void router.push({
      pathname: routes_1.paymentProviderPath,
      query: {
        channelId: channelPaymentOptions.channel.id,
        paymentProviderId: paymentProviders[0].id,
      },
    });
  };
  const onChannelClick = (channel) => {
    void router.push({
      pathname: routes_1.channelPath,
      query: { channelId: channel.id },
    });
  };
  const handleSubmit = (flattenedSettings) => {
    const settingsWithValues = Object.entries(flattenedSettings).reduce(
      (prev, [key, value]) =>
        Object.assign(Object.assign({}, prev), value !== "" && { [key]: value }),
      {}
    );
    onSubmit({
      [channelPaymentOptions.channel.id]: settingsWithValues,
    });
  };
  return (
    <form method="post">
      <AppLayout_1.default
        title={channelPaymentOptions.channel.name}
        onBackClick={onBackClick}
        onSettingsClick={onSettingsClick}
        items={(0, utils_1.mapNodesToItems)(channels)}
        selectedItem={(0, utils_1.mapNodeToItem)(channelPaymentOptions.channel)}
        loading={loading}
        onItemClick={onChannelClick}
      >
        <ErrorAlert_1.default
          errors={errors}
          getErrorMessage={(error, intl) =>
            error.code ? (0, errors_1.getMetadataErrorMessage)(error.code, intl) : error.message
          }
        />
        <core_1.Typography variant="subtitle1">
          <react_intl_1.FormattedMessage {...messages_1.messages.selectPaymentMethods} />
        </core_1.Typography>
        {loading ? (
          <Skeleton_1.default className={classes.skeleton} />
        ) : (
          channelPaymentOptions.paymentOptions.map((paymentOption, paymentOptionIdx) => (
            <core_1.Accordion
              key={paymentOption.method.id}
              className={classes.paymentOption}
              elevation={0}
            >
              <core_1.AccordionSummary
                expandIcon={<icons_1.ExpandMore />}
                className={classes.paymentOptionExpander}
              >
                {paymentOption.method.logo && (
                  <div className={classes.paymentOptionLogo}>
                    <paymentOption.method.logo />
                  </div>
                )}
                <core_1.Typography variant="subtitle2">
                  {paymentOption.method.name}
                </core_1.Typography>
              </core_1.AccordionSummary>
              <core_1.AccordionDetails className={classes.paymentOptionDetails}>
                <macaw_ui_1.OffsettedList gridTemplate={["1fr", actions(1)]}>
                  <react_hook_form_1.Controller
                    key={paymentOption.id}
                    name={paymentOption.id}
                    control={control}
                    defaultValue={(0, data_1.getActivePaymentProvider)(paymentOption)}
                    render={({ field }) => (
                      <macaw_ui_1.OffsettedListBody>
                        {paymentOption.availableProviders.map((provider) => (
                          <macaw_ui_1.OffsettedListItem
                            key={provider.id}
                            className={classes.paymentMethod}
                          >
                            <macaw_ui_1.OffsettedListItemCell>
                              {provider.logo ? (
                                <provider.logo className={classes.paymentMethodLogo} />
                              ) : (
                                provider.label
                              )}
                            </macaw_ui_1.OffsettedListItemCell>
                            <macaw_ui_1.OffsettedListItemCell padding="action">
                              <core_1.Switch
                                name={(0, utils_1.flattenSettingId)(
                                  "channelActivePaymentProviders",
                                  paymentOptionIdx,
                                  provider.id
                                )}
                                checked={field.value === provider.id}
                                onChange={() =>
                                  field.onChange({
                                    target: {
                                      name: paymentOption.id,
                                      value: field.value === provider.id ? "" : provider.id,
                                    },
                                  })
                                }
                                onBlur={field.onBlur}
                              />
                            </macaw_ui_1.OffsettedListItemCell>
                          </macaw_ui_1.OffsettedListItem>
                        ))}
                      </macaw_ui_1.OffsettedListBody>
                    )}
                  />
                </macaw_ui_1.OffsettedList>
              </core_1.AccordionDetails>
            </core_1.Accordion>
          ))
        )}
      </AppLayout_1.default>
      <AppSavebar_1.default
        disabled={loading || !formState.isDirty}
        state={saveButtonBarState}
        onCancel={onCancel}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmitForm(handleSubmit)}
      />
    </form>
  );
};
exports.default = ChannelDetails;

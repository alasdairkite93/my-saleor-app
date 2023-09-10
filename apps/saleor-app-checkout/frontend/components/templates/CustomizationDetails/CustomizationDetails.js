"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const AppNavigation_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppNavigation")
);
const AppSavebar_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/AppSavebar")
);
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const macaw_ui_1 = require("@saleor/macaw-ui");
const styles_1 = require("./styles");
const react_intl_1 = require("react-intl");
const react_hook_form_1 = require("react-hook-form");
const messages_1 = require("./messages");
const Setting_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/Setting")
);
const utils_1 = require("@/saleor-app-checkout/frontend/utils");
const Skeleton_1 = __importDefault(require("@material-ui/lab/Skeleton"));
const errors_1 = require("@/saleor-app-checkout/frontend/misc/errors");
const ErrorAlert_1 = __importDefault(require("../../elements/ErrorAlert"));
const CheckoutPreviewFrame_1 = __importDefault(require("../../elements/CheckoutPreviewFrame"));
const data_1 = require("./data");
const react_1 = require("react");
const lodash_es_1 = require("lodash-es");
const CustomizationDetails = ({
  options,
  checkoutUrl,
  loading,
  saveButtonBarState,
  errors,
  onCancel,
  onSubmit,
}) => {
  const intl = (0, react_intl_1.useIntl)();
  const classes = (0, styles_1.useStyles)();
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState,
    watch,
  } = (0, react_hook_form_1.useForm)();
  const [files, setFiles] = (0, react_1.useState)();
  const previewSettings = (0, data_1.useSettingsFromValues)(options, watch);
  const [previewUrl, setPreviewUrl] = (0, react_1.useState)(checkoutUrl);
  const handleFileChange = (optionId, settingId, event) => {
    const inputFiles = event.target.files;
    if (inputFiles === null || inputFiles === void 0 ? void 0 : inputFiles.length) {
      setFiles(
        Object.assign(Object.assign({}, files), {
          [optionId]: {
            [settingId]: inputFiles[0],
          },
        })
      );
    }
  };
  const handleSubmit = (flattenedValues) =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield onSubmit(
        (0, utils_1.unflattenSettings)("customizations", flattenedValues, options),
        files,
        (0, utils_1.unflattenValue)("customizationsCheckoutUrl", flattenedValues)
      );
      setFiles(undefined);
    });
  return (
    <form method="post">
      <AppNavigation_1.default />
      <div className={classes.root}>
        <macaw_ui_1.OffsettedList gridTemplate={["1fr"]} className={classes.optionList}>
          <macaw_ui_1.OffsettedListBody>
            {options.map((option, optionIdx) => {
              var _a;
              return (
                <core_1.Accordion key={option.id} className={classes.option} elevation={0}>
                  <core_1.AccordionSummary
                    data-testid={`customization-details-tab-${option.id}`}
                    expandIcon={<icons_1.ExpandMore />}
                    className={classes.optionExpander}
                  >
                    <core_1.Typography variant="body1">{option.label}</core_1.Typography>
                  </core_1.AccordionSummary>
                  <core_1.AccordionDetails className={classes.optionDetails}>
                    <div className={classes.optionDetailsContent}>
                      {loading ? (
                        <Skeleton_1.default className={classes.optionSkeleton} />
                      ) : (_a = option.settings) === null || _a === void 0 ? (
                        void 0
                      ) : (
                        _a.map(({ id, type, label, value }) => (
                          <react_hook_form_1.Controller
                            key={id}
                            name={(0, utils_1.flattenSettingId)("customizations", optionIdx, id)}
                            control={control}
                            defaultValue={value}
                            render={({ field }) => (
                              <Setting_1.default
                                name={field.name}
                                type={type}
                                label={label}
                                value={type === "image" ? value : field.value}
                                onChange={field.onChange}
                                onFileChange={(event) => handleFileChange(option.id, id, event)}
                                onBlur={field.onBlur}
                              />
                            )}
                          />
                        ))
                      )}
                    </div>
                  </core_1.AccordionDetails>
                </core_1.Accordion>
              );
            })}
          </macaw_ui_1.OffsettedListBody>
        </macaw_ui_1.OffsettedList>
        <div className={classes.design}>
          <ErrorAlert_1.default
            errors={errors}
            getErrorMessage={(error, intl) =>
              error.code ? (0, errors_1.getMetadataErrorMessage)(error.code, intl) : error.message
            }
          />
          <core_1.Typography variant="subtitle1">
            <react_intl_1.FormattedMessage {...messages_1.messages.customizationPreview} />
          </core_1.Typography>
          <div className={classes.designPreview}>
            {loading ? (
              <Skeleton_1.default className={classes.designSkeleton} />
            ) : (
              <>
                <react_hook_form_1.Controller
                  name={"customizationsCheckoutUrl"}
                  control={control}
                  defaultValue={checkoutUrl}
                  render={({ field }) => (
                    <core_1.TextField
                      name={field.name}
                      value={field.value}
                      label={intl.formatMessage(messages_1.messages.checkoutUrl)}
                      data-testid="checkout-url-input"
                      className={classes.designUrlInput}
                      onChange={(event) => {
                        field.onChange(event);
                        (0, lodash_es_1.debounce)(() => setPreviewUrl(event.target.value), 1000)();
                      }}
                      onBlur={field.onBlur}
                    />
                  )}
                />
                {previewUrl && (0, data_1.isValidHttpUrl)(previewUrl) ? (
                  <CheckoutPreviewFrame_1.default
                    checkoutUrl={previewUrl}
                    settings={previewSettings}
                    className={classes.designPreviewFrame}
                  />
                ) : (
                  <core_1.Typography variant="body1" className={classes.designNoPreview}>
                    <react_intl_1.FormattedMessage {...messages_1.messages.noCheckoutUrl} />
                  </core_1.Typography>
                )}
              </>
            )}
          </div>
        </div>
      </div>
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
exports.default = CustomizationDetails;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const VerticalSpacer_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/VerticalSpacer")
);
const react_intl_1 = require("react-intl");
const styles_1 = require("./styles");
const react_hook_form_1 = require("react-hook-form");
const messages_1 = require("./messages");
const Setting_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/elements/Setting")
);
const Skeleton_1 = __importDefault(require("@material-ui/lab/Skeleton"));
const macaw_ui_1 = require("@saleor/macaw-ui");
const PaymentProviderDetailsSettings = ({
  settings,
  showHeader,
  description,
  loading = false,
  formControl,
}) => {
  const classes = (0, styles_1.useStyles)();
  const { resetField, setValue } = (0, react_hook_form_1.useFormContext)();
  return (
    <core_1.CardContent>
      {showHeader && (
        <>
          <core_1.Typography variant="body1">
            <react_intl_1.FormattedMessage {...messages_1.messages.paymentProviderSettings} />
          </core_1.Typography>
          <VerticalSpacer_1.default />
        </>
      )}
      <div className={classes.settings}>
        {description && (
          <>
            <core_1.Typography variant="body2" className={classes.settingsDescription}>
              {description}
            </core_1.Typography>
            <VerticalSpacer_1.default />
          </>
        )}
        {loading ? (
          <Skeleton_1.default className={classes.skeleton} />
        ) : (
          settings.map(({ id, type, label, value, encrypt }) => (
            <react_hook_form_1.Controller
              key={id}
              name={id}
              control={formControl}
              defaultValue={value}
              render={({ field, fieldState }) => (
                <div className={classes.formLine}>
                  <Setting_1.default
                    name={field.name}
                    type={type}
                    label={label}
                    value={field.value}
                    onChange={field.onChange}
                    defaultValue={value}
                    clearValue={() => setValue(field.name, "")}
                    resetValue={() => resetField(field.name)}
                    onBlur={field.onBlur}
                    encrypted={encrypt}
                  />
                  {fieldState.isDirty && (
                    <macaw_ui_1.Button variant="tertiary" onClick={() => resetField(field.name)}>
                      Reset
                    </macaw_ui_1.Button>
                  )}
                </div>
              )}
            />
          ))
        )}
      </div>
    </core_1.CardContent>
  );
};
exports.default = PaymentProviderDetailsSettings;

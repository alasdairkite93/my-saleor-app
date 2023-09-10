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
exports.SignIn = void 0;
const Button_1 = require("@/checkout-storefront/components/Button");
const PasswordInput_1 = require("@/checkout-storefront/components/PasswordInput");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const react_1 = __importDefault(require("react"));
const TextInput_1 = require("@/checkout-storefront/components/TextInput");
const commonMessages_1 = require("@/checkout-storefront/lib/commonMessages");
const useSignInForm_1 = require("@/checkout-storefront/sections/SignIn/useSignInForm");
const usePasswordResetRequest_1 = require("@/checkout-storefront/sections/SignIn/usePasswordResetRequest");
const messages_1 = require("@/checkout-storefront/sections/Contact/messages");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const SignInFormContainer_1 = require("@/checkout-storefront/sections/Contact/SignInFormContainer");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const useErrorMessages_1 = require("@/checkout-storefront/hooks/useErrorMessages");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const SignIn = ({ onSectionChange, onSignInSuccess, onEmailChange, email: initialEmail }) => {
  const {
    checkout: { email: checkoutEmail },
  } = (0, useCheckout_1.useCheckout)();
  const { errorMessages } = (0, useErrorMessages_1.useErrorMessages)();
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const form = (0, useSignInForm_1.useSignInForm)({
    onSuccess: onSignInSuccess,
    initialEmail: initialEmail || checkoutEmail || "",
  });
  const {
    values: { email },
    handleChange,
    setErrors,
    setTouched,
    isSubmitting,
  } = form;
  const { onPasswordResetRequest, passwordResetSent } = (0,
  usePasswordResetRequest_1.usePasswordResetRequest)({
    email,
    shouldAbort: () =>
      __awaiter(void 0, void 0, void 0, function* () {
        // @todo we'll use validateField once we fix it because
        // https://github.com/jaredpalmer/formik/issues/1755
        const isValid = yield (0, common_1.isValidEmail)(email);
        if (!isValid) {
          yield setTouched({ email: true });
          setErrors({ email: errorMessages.emailInvalid });
          return true;
        }
        setErrors({});
        return false;
      }),
  });
  return (
    <SignInFormContainer_1.SignInFormContainer
      title={formatMessage(messages_1.contactMessages.signIn)}
      redirectSubtitle={formatMessage(messages_1.contactMessages.newCustomer)}
      redirectButtonLabel={formatMessage(messages_1.contactMessages.guestCheckout)}
      onSectionChange={onSectionChange}
    >
      <FormProvider_1.FormProvider form={form}>
        <TextInput_1.TextInput
          name="email"
          label={formatMessage(messages_1.contactMessages.email)}
          onChange={(event) => {
            handleChange(event);
            onEmailChange(event.target.value);
          }}
        />
        <PasswordInput_1.PasswordInput
          name="password"
          label={formatMessage(messages_1.contactMessages.password)}
        />
        <div className="actions">
          <Button_1.Button
            disabled={isSubmitting}
            ariaLabel={formatMessage(messages_1.contactLabels.sendResetLink)}
            variant="tertiary"
            label={formatMessage(
              passwordResetSent
                ? messages_1.contactMessages.resend
                : messages_1.contactMessages.forgotPassword
            )}
            className="ml-1 mr-4"
            onClick={onPasswordResetRequest}
          />
          <Button_1.Button
            type="submit"
            disabled={isSubmitting}
            ariaLabel={formatMessage(messages_1.contactLabels.signIn)}
            label={formatMessage(
              isSubmitting
                ? commonMessages_1.commonMessages.processing
                : messages_1.contactMessages.signIn
            )}
          />
        </div>
      </FormProvider_1.FormProvider>
    </SignInFormContainer_1.SignInFormContainer>
  );
};
exports.SignIn = SignIn;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPassword = void 0;
const Button_1 = require("@/checkout-storefront/components/Button");
const PasswordInput_1 = require("@/checkout-storefront/components/PasswordInput");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const messages_1 = require("../Contact/messages");
const react_1 = __importDefault(require("react"));
const SignInFormContainer_1 = require("../Contact/SignInFormContainer");
const useResetPasswordForm_1 = require("@/checkout-storefront/sections/ResetPassword/useResetPasswordForm");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const ResetPassword = ({ onSectionChange, onResetPasswordSuccess }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const form = (0, useResetPasswordForm_1.useResetPasswordForm)({
    onSuccess: onResetPasswordSuccess,
  });
  return (
    <SignInFormContainer_1.SignInFormContainer
      title={formatMessage(messages_1.contactMessages.resetPassword)}
      redirectSubtitle={formatMessage(messages_1.contactMessages.rememberedYourPassword)}
      redirectButtonLabel={formatMessage(messages_1.contactMessages.signIn)}
      onSectionChange={onSectionChange}
      subtitle={formatMessage(messages_1.contactMessages.providePassword)}
    >
      <FormProvider_1.FormProvider form={form}>
        <PasswordInput_1.PasswordInput
          name="password"
          label={formatMessage(messages_1.contactMessages.password)}
        />
        <div className="mt-4 actions">
          <Button_1.Button
            ariaLabel={formatMessage(messages_1.contactLabels.resetPassword)}
            label={formatMessage(messages_1.contactMessages.resetPassword)}
            type="submit"
          />
        </div>
      </FormProvider_1.FormProvider>
    </SignInFormContainer_1.SignInFormContainer>
  );
};
exports.ResetPassword = ResetPassword;

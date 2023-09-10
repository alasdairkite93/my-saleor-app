"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestUser = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const PasswordInput_1 = require("@/checkout-storefront/components/PasswordInput");
const SignInFormContainer_1 = require("../Contact/SignInFormContainer");
const Checkbox_1 = require("@/checkout-storefront/components/Checkbox");
const TextInput_1 = require("@/checkout-storefront/components/TextInput");
const messages_1 = require("../Contact/messages");
const useGuestUserForm_1 = require("@/checkout-storefront/sections/GuestUser/useGuestUserForm");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const GuestUser = ({ onSectionChange, onEmailChange, email: initialEmail }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const form = (0, useGuestUserForm_1.useGuestUserForm)({ initialEmail });
  const { handleChange } = form;
  const { createAccount } = form.values;
  return (
    <SignInFormContainer_1.SignInFormContainer
      title={formatMessage(messages_1.contactMessages.contact)}
      redirectSubtitle={formatMessage(messages_1.contactMessages.haveAccount)}
      redirectButtonLabel={formatMessage(messages_1.contactMessages.signIn)}
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
        <Checkbox_1.Checkbox
          name="createAccount"
          label={formatMessage(messages_1.contactMessages.wantToCreateAccount)}
          data-testid={"createAccountCheckbox"}
          classNames={{ container: "!mb-0" }}
        />
        {createAccount && (
          <div className="mt-2">
            <PasswordInput_1.PasswordInput
              name="password"
              label={formatMessage(messages_1.contactMessages.passwordWithRequirements)}
            />
          </div>
        )}
      </FormProvider_1.FormProvider>
    </SignInFormContainer_1.SignInFormContainer>
  );
};
exports.GuestUser = GuestUser;

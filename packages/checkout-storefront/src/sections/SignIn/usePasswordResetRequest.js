"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePasswordResetRequest = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useAlerts_1 = require("@/checkout-storefront/hooks/useAlerts");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const useSubmit_1 = require("@/checkout-storefront/hooks/useSubmit/useSubmit");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const messages_1 = require("@/checkout-storefront/sections/Contact/messages");
const react_1 = require("react");
const usePasswordResetRequest = ({ email, shouldAbort }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { showSuccess } = (0, useAlerts_1.useAlerts)();
  const [, requestPasswordReset] = (0, graphql_1.useRequestPasswordResetMutation)();
  const [passwordResetSent, setPasswordResetSent] = (0, react_1.useState)(false);
  const onSubmit = (0, useSubmit_1.useSubmit)({
    scope: "requestPasswordReset",
    onSubmit: requestPasswordReset,
    shouldAbort,
    onSuccess: () => {
      setPasswordResetSent(true);
      showSuccess(formatMessage(messages_1.contactMessages.linkSent, { email }));
    },
    parse: ({ channel }) => ({ email, redirectUrl: (0, locale_1.getCurrentHref)(), channel }),
  });
  (0, react_1.useEffect)(() => {
    setPasswordResetSent(false);
  }, [email]);
  return {
    onPasswordResetRequest: () => {
      void onSubmit();
    },
    passwordResetSent,
  };
};
exports.usePasswordResetRequest = usePasswordResetRequest;

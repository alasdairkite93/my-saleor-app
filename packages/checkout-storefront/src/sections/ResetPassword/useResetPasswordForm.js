"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResetPasswordForm = void 0;
const useErrorMessages_1 = require("@/checkout-storefront/hooks/useErrorMessages");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const auth_1 = require("@/checkout-storefront/lib/auth");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const yup_1 = require("yup");
const useResetPasswordForm = ({ onSuccess }) => {
  const { errorMessages } = (0, useErrorMessages_1.useErrorMessages)();
  const { resetPassword } = (0, auth_1.useSaleorAuthContext)();
  const validationSchema = (0, yup_1.object)({
    password: (0, yup_1.string)().required(errorMessages.required),
  });
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    onSubmit: resetPassword,
    scope: "resetPassword",
    parse: ({ password }) => {
      const { passwordResetEmail, passwordResetToken } = (0, url_1.getQueryParams)();
      return { password, email: passwordResetEmail || "", token: passwordResetToken || "" };
    },
    onSuccess: () => {
      (0, url_1.clearQueryParams)("passwordResetToken", "passwordResetEmail");
      onSuccess();
    },
  });
  const initialValues = { password: "" };
  const form = (0, useForm_1.useForm)({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return form;
};
exports.useResetPasswordForm = useResetPasswordForm;

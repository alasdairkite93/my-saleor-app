"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSignInForm = void 0;
const useErrorMessages_1 = require("@/checkout-storefront/hooks/useErrorMessages");
const useGetParsedErrors_1 = require("@/checkout-storefront/hooks/useGetParsedErrors");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const yup_1 = require("yup");
const auth_1 = require("@/checkout-storefront/lib/auth");
const useSignInForm = ({ onSuccess, initialEmail }) => {
  const { getParsedApiError } = (0, useGetParsedErrors_1.useGetParsedErrors)();
  const { errorMessages } = (0, useErrorMessages_1.useErrorMessages)();
  const { signIn } = (0, auth_1.useSaleorAuthContext)();
  const validationSchema = (0, yup_1.object)({
    password: (0, yup_1.string)().required(errorMessages.required),
    email: (0, yup_1.string)().email(errorMessages.emailInvalid).required(errorMessages.required),
  });
  const defaultFormData = {
    email: initialEmail,
    password: "",
  };
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    onSubmit: signIn,
    scope: "signIn",
    onSuccess,
    parse: (formData) => formData,
    onError: ({ errors, formHelpers: { setErrors } }) => {
      const parsedErrors = errors.reduce((result, error) => {
        const { code, field } = error;
        const parsedError = getParsedApiError(error);
        if (code === "INVALID_CREDENTIALS" && field === "email") {
          //  api will attribute invalid credentials error to
          // email but we'd rather highlight both fields
          return Object.assign(Object.assign({}, result), {
            email: parsedError.message,
            password: "",
          });
        }
        if (code === "INACTIVE") {
          // we don't really want to show anything here
          return result;
        }
        return Object.assign(Object.assign({}, result), { [field]: parsedError.message });
      }, {});
      setErrors(parsedErrors);
    },
  });
  const form = (0, useForm_1.useForm)({
    initialValues: defaultFormData,
    onSubmit,
    validationSchema,
  });
  return form;
};
exports.useSignInForm = useSignInForm;

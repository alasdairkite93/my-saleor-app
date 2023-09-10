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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGuestUserForm = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const useCheckoutFormValidationTrigger_1 = require("@/checkout-storefront/hooks/useCheckoutFormValidationTrigger");
const react_1 = require("react");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const useCheckoutEmailUpdate_1 = require("@/checkout-storefront/sections/GuestUser/useCheckoutEmailUpdate");
const yup_1 = require("yup");
const useErrorMessages_1 = require("@/checkout-storefront/hooks/useErrorMessages");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const messages_1 = require("@/checkout-storefront/sections/SignIn/messages");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const useGuestUserForm = ({ initialEmail }) => {
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { user } = (0, useUser_1.useUser)();
  const shouldUserRegister = (0, updateStateStore_1.useUserRegisterState)();
  const { setShouldRegisterUser, setSubmitInProgress } = (0,
  updateStateStore_1.useCheckoutUpdateStateActions)();
  const { errorMessages } = (0, useErrorMessages_1.useErrorMessages)();
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { setCheckoutUpdateState: setRegisterState } = (0,
  updateStateStore_1.useCheckoutUpdateStateChange)("userRegister");
  const [, userRegister] = (0, graphql_1.useUserRegisterMutation)();
  const [userRegisterDisabled, setUserRegistrationDisabled] = (0, react_1.useState)(false);
  const { setCheckoutUpdateState } = (0, updateStateStore_1.useCheckoutUpdateStateChange)(
    "checkoutEmailUpdate"
  );
  const validationSchema = (0, yup_1.object)({
    email: (0, yup_1.string)().email(errorMessages.invalid).required(errorMessages.required),
    password: (0, yup_1.string)().min(
      8,
      formatMessage(messages_1.passwordMessages.passwordAtLeastCharacters)
    ),
  });
  const defaultFormData = {
    email: initialEmail || checkout.email || "",
    password: "",
    createAccount: false,
  };
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)(
    (0, react_1.useMemo)(
      () => ({
        scope: "userRegister",
        onSubmit: userRegister,
        onStart: () => setShouldRegisterUser(false),
        shouldAbort: ({ formData, formHelpers: { validateForm } }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            const errors = yield validateForm(formData);
            return (0, useForm_1.hasErrors)(errors);
          }),
        parse: ({ email, password, channel }) => ({
          input: {
            email,
            password,
            channel,
            redirectUrl: (0, locale_1.getCurrentHref)(),
          },
        }),
        onError: ({ errors }) => {
          setSubmitInProgress(false);
          const hasAccountForCurrentEmail = errors.some(({ code }) => code === "UNIQUE");
          if (hasAccountForCurrentEmail) {
            setUserRegistrationDisabled(true);
            // @todo this logic will be removed once new register flow is implemented
            setTimeout(() => setRegisterState("success"), 100);
          }
        },
        onSuccess: () => setUserRegistrationDisabled(true),
      }),
      [setRegisterState, setShouldRegisterUser, setSubmitInProgress, userRegister]
    )
  );
  const form = (0, useForm_1.useForm)({
    initialValues: defaultFormData,
    onSubmit,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    initialTouched: { email: true },
  });
  const {
    values: { email, createAccount },
    handleSubmit,
    handleChange,
  } = form;
  (0, useCheckoutFormValidationTrigger_1.useCheckoutFormValidationTrigger)({
    scope: "guestUser",
    form,
  });
  (0, react_1.useEffect)(() => {
    setUserRegistrationDisabled(false);
  }, [email]);
  (0, react_1.useEffect)(() => {
    if (!shouldUserRegister || user || !createAccount || userRegisterDisabled) {
      return;
    }
    void handleSubmit();
  }, [createAccount, handleSubmit, shouldUserRegister, user, userRegisterDisabled]);
  (0, useCheckoutEmailUpdate_1.useCheckoutEmailUpdate)({ email });
  // since we use debounced submit, set update
  // state as "loading" right away
  const onChange = (event) =>
    __awaiter(void 0, void 0, void 0, function* () {
      handleChange(event);
      const error = yield (0, common_1.isValidEmail)(event.target.value);
      if (!error) {
        setCheckoutUpdateState("loading");
      }
    });
  return Object.assign(Object.assign({}, form), { handleChange: onChange });
};
exports.useGuestUserForm = useGuestUserForm;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoCodeAdd = void 0;
const Button_1 = require("@/checkout-storefront/components/Button");
const TextInput_1 = require("@/checkout-storefront/components/TextInput");
const graphql_1 = require("@/checkout-storefront/graphql");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const messages_1 = require("./messages");
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const PromoCodeAdd = ({ className }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const [, checkoutAddPromoCode] = (0, graphql_1.useCheckoutAddPromoCodeMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    scope: "checkoutAddPromoCode",
    onSubmit: checkoutAddPromoCode,
    parse: ({ promoCode, languageCode, checkoutId }) => ({
      promoCode,
      checkoutId,
      languageCode,
    }),
    onSuccess: ({ formHelpers: { resetForm } }) => resetForm(),
  });
  const form = (0, useForm_1.useForm)({
    onSubmit,
    initialValues: { promoCode: "" },
  });
  const {
    values: { promoCode },
  } = form;
  const showApplyButton = promoCode.length > 0;
  return (
    <FormProvider_1.FormProvider form={form}>
      <div className={(0, clsx_1.default)("relative px-4 pt-4", className)}>
        <TextInput_1.TextInput
          optional
          name="promoCode"
          label={formatMessage(messages_1.summaryMessages.addDiscount)}
        />
        {showApplyButton && (
          <Button_1.Button
            className="absolute right-7 top-7"
            variant="tertiary"
            ariaLabel={formatMessage(messages_1.summaryLabels.apply)}
            label={formatMessage(messages_1.summaryMessages.apply)}
            type="submit"
          />
        )}
      </div>
    </FormProvider_1.FormProvider>
  );
};
exports.PromoCodeAdd = PromoCodeAdd;

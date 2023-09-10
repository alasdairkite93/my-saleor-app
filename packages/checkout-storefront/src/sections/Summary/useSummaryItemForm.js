"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSummaryItemForm = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const useSubmit_1 = require("@/checkout-storefront/hooks/useSubmit/useSubmit");
const useSummaryItemForm = ({ line }) => {
  const [, updateLines] = (0, graphql_1.useCheckoutLinesUpdateMutation)();
  const [, deleteLines] = (0, graphql_1.useCheckoutLineDeleteMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    scope: "checkoutLinesUpdate",
    onSubmit: updateLines,
    parse: ({ quantity, languageCode, checkoutId }) => ({
      languageCode,
      checkoutId,
      lines: [
        {
          quantity: Number(quantity),
          variantId: line.variant.id,
        },
      ],
    }),
    onError: ({ formData: { quantity }, formHelpers: { setFieldValue } }) => {
      setFieldValue("quantity", quantity);
    },
  });
  const form = (0, useForm_1.useForm)({
    onSubmit,
    initialValues: { quantity: line.quantity.toString() },
  });
  const onLineDelete = (0, useSubmit_1.useSubmit)({
    scope: "checkoutLinesDelete",
    onSubmit: deleteLines,
    parse: ({ languageCode, checkoutId }) => ({ languageCode, checkoutId, lineId: line.id }),
  });
  return { form, onLineDelete };
};
exports.useSummaryItemForm = useSummaryItemForm;

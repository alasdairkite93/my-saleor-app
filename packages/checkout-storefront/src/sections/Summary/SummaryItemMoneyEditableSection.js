"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryItemMoneyEditableSection = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const TextInput_1 = require("@/checkout-storefront/components/TextInput");
const components_1 = require("@/checkout-storefront/components");
const SummaryItemMoneyInfo_1 = require("@/checkout-storefront/sections/Summary/SummaryItemMoneyInfo");
const messages_1 = require("./messages");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const useSummaryItemForm_1 = require("@/checkout-storefront/sections/Summary/useSummaryItemForm");
const react_1 = require("react");
const SummaryItemMoneyEditableSection = ({ line }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { form, onLineDelete } = (0, useSummaryItemForm_1.useSummaryItemForm)({ line });
  const {
    handleBlur,
    setFieldValue,
    handleSubmit,
    isSubmitting,
    values: { quantity: quantityString },
  } = form;
  const quantity = (0, react_1.useMemo)(() => parseInt(quantityString), [quantityString]);
  const handleQuantityInputBlur = (event) => {
    handleBlur(event);
    if (quantity === line.quantity) {
      return;
    }
    const isQuantityValid = !Number.isNaN(quantity) && quantity >= 0;
    if (quantityString === "" || !isQuantityValid) {
      void setFieldValue("quantity", String(line.quantity));
      return;
    }
    if (quantity === 0) {
      void onLineDelete();
      return;
    }
    void handleSubmit();
  };
  return (
    <div className="flex flex-col items-end h-20 relative -top-2">
      <div className="flex flex-row items-baseline">
        <ui_kit_1.Text size="xs" className="mr-2">
          {formatMessage(messages_1.summaryMessages.quantity)}:
        </ui_kit_1.Text>
        <FormProvider_1.FormProvider form={form}>
          <TextInput_1.TextInput
            onBlur={handleQuantityInputBlur}
            name="quantity"
            classNames={{ container: "!w-13 !mb-0", input: "text-center !h-8" }}
            label=""
          />
        </FormProvider_1.FormProvider>
      </div>
      {isSubmitting ? (
        <div className="flex flex-col items-end mt-3 w-full">
          <components_1.Skeleton className="w-full" />
          <components_1.Skeleton className="w-2/3" />
        </div>
      ) : (
        <SummaryItemMoneyInfo_1.SummaryItemMoneyInfo {...line} classNames={{ container: "mt-1" }} />
      )}
    </div>
  );
};
exports.SummaryItemMoneyEditableSection = SummaryItemMoneyEditableSection;

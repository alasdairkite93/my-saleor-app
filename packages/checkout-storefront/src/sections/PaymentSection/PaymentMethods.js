"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethods = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const SelectBoxGroup_1 = require("@/checkout-storefront/components/SelectBoxGroup");
const SelectBox_1 = require("@/checkout-storefront/components/SelectBox");
const ui_kit_1 = require("@saleor/ui-kit");
const messages_1 = require("./messages");
const usePaymentMethodsForm_1 = require("@/checkout-storefront/sections/PaymentSection/usePaymentMethodsForm");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const AdyenDropIn_1 = require("@/checkout-storefront/sections/PaymentSection/AdyenDropIn/AdyenDropIn");
const PaymentMethods = () => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { form, availablePaymentMethods, availablePaymentProviders } = (0,
  usePaymentMethodsForm_1.usePaymentMethodsForm)();
  const showAdyenDropin = availablePaymentProviders.includes("adyen");
  return showAdyenDropin ? (
    <AdyenDropIn_1.AdyenDropIn />
  ) : (
    <FormProvider_1.FormProvider form={form}>
      <SelectBoxGroup_1.SelectBoxGroup
        label={formatMessage(messages_1.paymentSectionLabels.paymentProviders)}
        className="flex flex-row gap-2 mb-8"
      >
        {availablePaymentMethods.map((paymentMethodId) => (
          <SelectBox_1.SelectBox
            key={paymentMethodId}
            className="shrink"
            name="selectedMethodId"
            value={paymentMethodId}
          >
            <ui_kit_1.Text>
              {formatMessage(messages_1.paymentMethodsMessages[paymentMethodId])}
            </ui_kit_1.Text>
          </SelectBox_1.SelectBox>
        ))}
      </SelectBoxGroup_1.SelectBoxGroup>
    </FormProvider_1.FormProvider>
  );
};
exports.PaymentMethods = PaymentMethods;

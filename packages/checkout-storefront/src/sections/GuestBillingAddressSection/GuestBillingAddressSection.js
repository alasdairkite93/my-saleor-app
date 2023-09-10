"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestBillingAddressSection = void 0;
const AddressForm_1 = require("@/checkout-storefront/components/AddressForm");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const useGuestBillingAddressForm_1 = require("@/checkout-storefront/sections/GuestBillingAddressSection/useGuestBillingAddressForm");
const react_1 = __importStar(require("react"));
const messages_1 = require("@/checkout-storefront/sections/UserBillingAddressSection/messages");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const AddressSectionSkeleton_1 = require("@/checkout-storefront/components/AddressSectionSkeleton");
const useBillingSameAsShippingForm_1 = require("@/checkout-storefront/sections/GuestBillingAddressSection/useBillingSameAsShippingForm");
const components_1 = require("@/checkout-storefront/components");
const GuestBillingAddressSection = () => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const {
    checkout: { isShippingRequired },
  } = (0, useCheckout_1.useCheckout)();
  const billingSameAsShippingForm = (0,
  useBillingSameAsShippingForm_1.useBillingSameAsShippingForm)({ autoSave: true });
  const {
    values: { billingSameAsShipping },
  } = billingSameAsShippingForm;
  // we want to avoid validating this form on "pay" click when it's not visible
  const form = (0, useGuestBillingAddressForm_1.useGuestBillingAddressForm)({
    skipValidation: billingSameAsShipping,
  });
  const { handleBlur, handleChange } = form;
  return (
    <react_1.Suspense fallback={<AddressSectionSkeleton_1.AddressSectionSkeleton />}>
      {isShippingRequired && (
        <FormProvider_1.FormProvider form={billingSameAsShippingForm}>
          <components_1.Checkbox
            classNames={{ container: "!mb-0" }}
            name="billingSameAsShipping"
            label={formatMessage(messages_1.billingMessages.useShippingAsBilling)}
            data-testid={"useShippingAsBillingCheckbox"}
          />
        </FormProvider_1.FormProvider>
      )}
      {!billingSameAsShipping && (
        <FormProvider_1.FormProvider form={form}>
          <AddressForm_1.AddressForm
            title={formatMessage(messages_1.billingMessages.billingAddress)}
            fieldProps={{
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </FormProvider_1.FormProvider>
      )}
    </react_1.Suspense>
  );
};
exports.GuestBillingAddressSection = GuestBillingAddressSection;

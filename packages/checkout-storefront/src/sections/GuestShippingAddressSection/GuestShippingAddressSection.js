"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestShippingAddressSection = void 0;
const AddressForm_1 = require("@/checkout-storefront/components/AddressForm");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const messages_1 = require("@/checkout-storefront/sections/UserShippingAddressSection/messages");
const useAvailableShippingCountries_1 = require("@/checkout-storefront/hooks/useAvailableShippingCountries");
const useGuestShippingAddressForm_1 = require("@/checkout-storefront/sections/GuestShippingAddressSection/useGuestShippingAddressForm");
const react_1 = __importDefault(require("react"));
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const GuestShippingAddressSection = () => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { availableShippingCountries } = (0,
  useAvailableShippingCountries_1.useAvailableShippingCountries)();
  const form = (0, useGuestShippingAddressForm_1.useGuestShippingAddressForm)();
  const { handleChange, handleBlur } = form;
  return (
    <FormProvider_1.FormProvider form={form}>
      <AddressForm_1.AddressForm
        title={formatMessage(messages_1.shippingMessages.shippingAddress)}
        availableCountries={availableShippingCountries}
        fieldProps={{
          onChange: handleChange,
          onBlur: handleBlur,
        }}
      />
    </FormProvider_1.FormProvider>
  );
};
exports.GuestShippingAddressSection = GuestShippingAddressSection;

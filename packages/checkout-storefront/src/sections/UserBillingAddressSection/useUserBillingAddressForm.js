"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserBillingAddressForm = void 0;
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const graphql_1 = require("@/checkout-storefront/graphql");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const useAddressListForm_1 = require("@/checkout-storefront/sections/AddressList/useAddressListForm");
const useUserBillingAddressForm = () => {
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { billingAddress } = checkout;
  const { user } = (0, useUser_1.useUser)();
  const [, checkoutBillingAddressUpdate] = (0, graphql_1.useCheckoutBillingAddressUpdateMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    scope: "checkoutBillingUpdate",
    onSubmit: checkoutBillingAddressUpdate,
    shouldAbort: ({ formData: { addressList, selectedAddressId } }) =>
      (0, utils_1.isMatchingAddress)(
        billingAddress,
        addressList.find((0, common_1.getById)(selectedAddressId))
      ),
    parse: ({ languageCode, checkoutId, selectedAddressId, addressList }) => ({
      languageCode,
      checkoutId,
      validationRules: (0, utils_1.getAddressValidationRulesVariables)(),
      billingAddress: (0, utils_1.getAddressInputDataFromAddress)(
        addressList.find((0, utils_1.getByMatchingAddress)({ id: selectedAddressId }))
      ),
    }),
  });
  const { form, userAddressActions } = (0, useAddressListForm_1.useAddressListForm)({
    onSubmit,
    defaultAddress: user === null || user === void 0 ? void 0 : user.defaultBillingAddress,
    checkoutAddress: checkout.billingAddress,
  });
  return { form, userAddressActions };
};
exports.useUserBillingAddressForm = useUserBillingAddressForm;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserShippingAddressForm = void 0;
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const graphql_1 = require("@/checkout-storefront/graphql");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const useAddressListForm_1 = require("@/checkout-storefront/sections/AddressList/useAddressListForm");
const react_1 = require("react");
const useUserShippingAddressForm = () => {
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { shippingAddress } = checkout;
  const { user } = (0, useUser_1.useUser)();
  const [, checkoutShippingAddressUpdate] = (0,
  graphql_1.useCheckoutShippingAddressUpdateMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)(
    (0, react_1.useMemo)(
      () => ({
        scope: "checkoutShippingUpdate",
        onSubmit: checkoutShippingAddressUpdate,
        shouldAbort: ({ formData: { addressList, selectedAddressId } }) =>
          (0, utils_1.isMatchingAddress)(
            shippingAddress,
            addressList.find((0, common_1.getById)(selectedAddressId))
          ),
        parse: ({ languageCode, checkoutId, selectedAddressId, addressList }) => ({
          languageCode,
          checkoutId,
          validationRules: (0, utils_1.getAddressValidationRulesVariables)(),
          shippingAddress: (0, utils_1.getAddressInputDataFromAddress)(
            addressList.find((0, utils_1.getByMatchingAddress)({ id: selectedAddressId }))
          ),
        }),
        onSuccess: ({ formHelpers: { resetForm }, formData }) => resetForm({ values: formData }),
      }),
      [checkoutShippingAddressUpdate, shippingAddress]
    )
  );
  const { form, userAddressActions } = (0, useAddressListForm_1.useAddressListForm)({
    onSubmit,
    defaultAddress: user === null || user === void 0 ? void 0 : user.defaultShippingAddress,
    checkoutAddress: shippingAddress,
  });
  return { form, userAddressActions };
};
exports.useUserShippingAddressForm = useUserShippingAddressForm;

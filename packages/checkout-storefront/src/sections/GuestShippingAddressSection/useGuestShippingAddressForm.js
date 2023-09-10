"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGuestShippingAddressForm = void 0;
const useAddressFormUrlChange_1 = require("@/checkout-storefront/components/AddressForm/useAddressFormUrlChange");
const graphql_1 = require("@/checkout-storefront/graphql");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const lodash_es_1 = require("lodash-es");
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const useCheckoutFormValidationTrigger_1 = require("@/checkout-storefront/hooks/useCheckoutFormValidationTrigger");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useAddressFormSchema_1 = require("@/checkout-storefront/components/AddressForm/useAddressFormSchema");
const useAutoSaveAddressForm_1 = require("@/checkout-storefront/hooks/useAutoSaveAddressForm");
const react_1 = require("react");
const useGuestShippingAddressForm = () => {
  const {
    checkout: { shippingAddress },
  } = (0, useCheckout_1.useCheckout)();
  const validationSchema = (0, useAddressFormSchema_1.useAddressFormSchema)();
  const [, checkoutShippingAddressUpdate] = (0,
  graphql_1.useCheckoutShippingAddressUpdateMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)(
    (0, react_1.useMemo)(
      () => ({
        scope: "checkoutShippingUpdate",
        onSubmit: checkoutShippingAddressUpdate,
        parse: (_a) => {
          var { languageCode, checkoutId } = _a,
            rest = __rest(_a, ["languageCode", "checkoutId"]);
          return {
            languageCode,
            checkoutId,
            shippingAddress: (0, utils_1.getAddressInputData)(
              (0, lodash_es_1.omit)(rest, "channel")
            ),
            validationRules: (0, utils_1.getAddressValidationRulesVariables)({ autoSave: true }),
          };
        },
      }),
      [checkoutShippingAddressUpdate]
    )
  );
  const form = (0, useAutoSaveAddressForm_1.useAutoSaveAddressForm)({
    onSubmit,
    initialValues: (0, utils_1.getAddressFormDataFromAddress)(shippingAddress),
    validationSchema,
    scope: "checkoutShippingUpdate",
  });
  (0, useAddressFormUrlChange_1.useAddressFormUrlChange)(form);
  (0, useCheckoutFormValidationTrigger_1.useCheckoutFormValidationTrigger)({
    form,
    scope: "shippingAddress",
  });
  return form;
};
exports.useGuestShippingAddressForm = useGuestShippingAddressForm;

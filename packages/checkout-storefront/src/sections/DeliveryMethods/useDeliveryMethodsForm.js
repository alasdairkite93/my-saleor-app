"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeliveryMethodsForm = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useDebouncedSubmit_1 = require("@/checkout-storefront/hooks/useDebouncedSubmit");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const react_1 = require("react");
const useDeliveryMethodsForm = () => {
  var _a, _b, _c;
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { shippingMethods, shippingAddress, deliveryMethod } = checkout;
  const [, updateDeliveryMethod] = (0, graphql_1.useCheckoutDeliveryMethodUpdateMutation)();
  const { setCheckoutUpdateState } = (0, updateStateStore_1.useCheckoutUpdateStateChange)(
    "checkoutDeliveryMethodUpdate"
  );
  const previousShippingCountry = (0, react_1.useRef)(
    (_a =
      shippingAddress === null || shippingAddress === void 0 ? void 0 : shippingAddress.country) ===
      null || _a === void 0
      ? void 0
      : _a.code
  );
  const getAutoSetMethod = (0, react_1.useCallback)(() => {
    if (!shippingMethods.length) {
      return;
    }
    const cheapestMethod = shippingMethods.reduce(
      (resultMethod, currentMethod) =>
        currentMethod.price.amount < resultMethod.price.amount ? currentMethod : resultMethod,
      shippingMethods[0]
    );
    return cheapestMethod;
  }, [shippingMethods]);
  const defaultFormData = {
    selectedMethodId:
      (deliveryMethod === null || deliveryMethod === void 0 ? void 0 : deliveryMethod.id) ||
      ((_b = getAutoSetMethod()) === null || _b === void 0 ? void 0 : _b.id),
  };
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)(
    (0, react_1.useMemo)(
      () => ({
        scope: "checkoutDeliveryMethodUpdate",
        onSubmit: updateDeliveryMethod,
        shouldAbort: ({ formData: { selectedMethodId } }) => {
          var _a;
          return (
            !selectedMethodId ||
            selectedMethodId ===
              ((_a = checkout.deliveryMethod) === null || _a === void 0 ? void 0 : _a.id)
          );
        },
        parse: ({ selectedMethodId, languageCode, checkoutId }) => ({
          deliveryMethodId: selectedMethodId,
          languageCode,
          checkoutId,
        }),
        onError: ({ formData: { selectedMethodId }, formHelpers: { setValues } }) => {
          setValues({ selectedMethodId });
        },
      }),
      [
        (_c = checkout.deliveryMethod) === null || _c === void 0 ? void 0 : _c.id,
        updateDeliveryMethod,
      ]
    )
  );
  const debouncedSubmit = (0, useDebouncedSubmit_1.useDebouncedSubmit)(onSubmit);
  const form = (0, useForm_1.useForm)({
    initialValues: defaultFormData,
    onSubmit: debouncedSubmit,
    initialDirty: true,
  });
  const {
    setFieldValue,
    values: { selectedMethodId },
    handleSubmit,
    handleChange,
  } = form;
  (0, react_1.useEffect)(() => {
    handleSubmit();
  }, [handleSubmit, selectedMethodId]);
  (0, react_1.useEffect)(() => {
    var _a, _b, _c;
    const hasShippingCountryChanged =
      ((_a =
        shippingAddress === null || shippingAddress === void 0
          ? void 0
          : shippingAddress.country) === null || _a === void 0
        ? void 0
        : _a.code) !== previousShippingCountry.current;
    const hasValidMethodSelected =
      selectedMethodId && shippingMethods.some((0, common_1.getById)(selectedMethodId));
    if (hasValidMethodSelected) {
      return;
    }
    void setFieldValue(
      "selectedMethodId",
      (_b = getAutoSetMethod()) === null || _b === void 0 ? void 0 : _b.id
    );
    if (hasShippingCountryChanged) {
      previousShippingCountry.current =
        (_c =
          shippingAddress === null || shippingAddress === void 0
            ? void 0
            : shippingAddress.country) === null || _c === void 0
          ? void 0
          : _c.code;
    }
  }, [
    shippingAddress,
    shippingMethods,
    getAutoSetMethod,
    selectedMethodId,
    setFieldValue,
    form.values.selectedMethodId,
  ]);
  const onChange = (event) => {
    setCheckoutUpdateState("loading");
    handleChange(event);
  };
  return Object.assign(Object.assign({}, form), { handleChange: onChange });
};
exports.useDeliveryMethodsForm = useDeliveryMethodsForm;

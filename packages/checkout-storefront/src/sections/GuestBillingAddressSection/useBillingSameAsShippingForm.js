"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBillingSameAsShippingForm = void 0;
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const graphql_1 = require("@/checkout-storefront/graphql");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const react_1 = require("react");
const useBillingSameAsShippingForm = (
  { autoSave, onSetBillingSameAsShipping } = { autoSave: false }
) => {
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { billingAddress, shippingAddress, isShippingRequired } = checkout;
  const previousShippingAddress = (0, react_1.useRef)(shippingAddress);
  const previousIsShippingRequired = (0, react_1.useRef)(isShippingRequired);
  const [, checkoutBillingAddressUpdate] = (0, graphql_1.useCheckoutBillingAddressUpdateMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    scope: "checkoutBillingUpdate",
    onSubmit: checkoutBillingAddressUpdate,
    parse: ({ languageCode, checkoutId, billingAddress }) => ({
      languageCode,
      checkoutId,
      billingAddress: (0, utils_1.getAddressInputDataFromAddress)(billingAddress),
      validationRules: (0, utils_1.getAddressValidationRulesVariables)({ autoSave }),
    }),
    onSuccess: ({ formData, formHelpers: { resetForm }, result }) => {
      var _a, _b, _c;
      resetForm({
        values: Object.assign(Object.assign({}, formData), {
          billingAddress:
            (_c =
              (_b =
                (_a = result === null || result === void 0 ? void 0 : result.data) === null ||
                _a === void 0
                  ? void 0
                  : _a.checkoutBillingAddressUpdate) === null || _b === void 0
                ? void 0
                : _b.checkout) === null || _c === void 0
              ? void 0
              : _c.billingAddress,
        }),
      });
    },
  });
  const getInitialShippingAsBillingValue = (0, react_1.useCallback)(() => {
    if (!checkout.isShippingRequired) {
      return false;
    }
    return !billingAddress || (0, utils_1.isMatchingAddress)(shippingAddress, billingAddress);
  }, [shippingAddress, billingAddress, checkout.isShippingRequired]);
  const initialValues = {
    billingSameAsShipping: getInitialShippingAsBillingValue(),
    billingAddress: billingAddress,
  };
  const previousBillingSameAsShipping = (0, react_1.useRef)(initialValues.billingSameAsShipping);
  const form = (0, useForm_1.useForm)({
    onSubmit,
    initialValues,
    initialDirty: true,
  });
  const {
    values: { billingSameAsShipping },
    setFieldValue,
    handleSubmit,
    handleChange,
  } = form;
  const onChange = (event) => {
    if (event.target.name === "billingSameAsShipping") {
      previousBillingSameAsShipping.current = billingSameAsShipping;
    }
    handleChange(event);
  };
  // handle "billing same as shipping" checkbox value changes
  (0, react_1.useEffect)(() => {
    const handleBillingSameAsShippingChanged = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        const hasBillingSameAsShippingChangedToTrue =
          billingSameAsShipping && !previousBillingSameAsShipping.current;
        const hasBillingSameAsShippingChangedToFalse =
          !billingSameAsShipping && previousBillingSameAsShipping.current;
        if (hasBillingSameAsShippingChangedToFalse) {
          previousBillingSameAsShipping.current = false;
          // autosave means it's geust form and we want to show empty form
          // and clear all the fields in api
          if (autoSave) {
            setFieldValue("billingAddress", (0, utils_1.getEmptyAddress)());
          }
          return;
        }
        if (!hasBillingSameAsShippingChangedToTrue) {
          return;
        }
        previousBillingSameAsShipping.current = true;
        setFieldValue("billingAddress", shippingAddress);
        if (typeof onSetBillingSameAsShipping === "function") {
          onSetBillingSameAsShipping(shippingAddress);
        }
      });
    void handleBillingSameAsShippingChanged();
  }, [
    autoSave,
    billingSameAsShipping,
    handleSubmit,
    onSetBillingSameAsShipping,
    setFieldValue,
    shippingAddress,
  ]);
  // once billing address in api and form don't match, submit
  (0, react_1.useEffect)(() => {
    if (
      form.values.billingAddress &&
      !(0, utils_1.isMatchingAddress)(billingAddress, form.values.billingAddress)
    ) {
      handleSubmit();
    }
  }, [billingAddress, form.values.billingAddress, handleSubmit]);
  // when shipping address changes in the api, set it as billing address
  (0, react_1.useEffect)(() => {
    const handleShippingAddressChanged = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        const hasShippingAddressChanged = !(0, utils_1.isMatchingAddressData)(
          shippingAddress,
          previousShippingAddress.current
        );
        if (!hasShippingAddressChanged) {
          return;
        }
        previousShippingAddress.current = shippingAddress;
        if (billingSameAsShipping) {
          setFieldValue("billingAddress", shippingAddress);
        }
      });
    void handleShippingAddressChanged();
  }, [billingSameAsShipping, handleSubmit, setFieldValue, shippingAddress]);
  (0, react_1.useEffect)(() => {
    if (!isShippingRequired && previousIsShippingRequired) {
      void setFieldValue("billingSameAsShipping", false);
    }
  }, [isShippingRequired, setFieldValue]);
  return Object.assign(Object.assign({}, form), { handleChange: onChange });
};
exports.useBillingSameAsShippingForm = useBillingSameAsShippingForm;

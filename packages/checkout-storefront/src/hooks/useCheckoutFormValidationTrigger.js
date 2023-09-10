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
exports.useCheckoutFormValidationTrigger = void 0;
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const checkoutValidationStateStore_1 = require("@/checkout-storefront/state/checkoutValidationStateStore");
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const react_1 = require("react");
// tells forms to validate once the pay button is clicked
const useCheckoutFormValidationTrigger = ({ scope, form, skip = false }) => {
  const { setSubmitInProgress } = (0, updateStateStore_1.useCheckoutUpdateStateActions)();
  const { setValidationState } = (0, checkoutValidationStateStore_1.useCheckoutValidationActions)();
  const { validating } = (0, checkoutValidationStateStore_1.useCheckoutValidationState)();
  const { values, validateForm, setTouched } = form;
  const handleGlobalValidationTrigger = (0, react_1.useCallback)(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        if (validating) {
          const formErrors = yield validateForm(values);
          if (!(0, useForm_1.hasErrors)(formErrors)) {
            setValidationState(scope, "valid");
            return;
          }
          yield setTouched(
            Object.keys(formErrors).reduce(
              (result, key) => Object.assign(Object.assign({}, result), { [key]: true }),
              {}
            )
          );
          setSubmitInProgress(false);
          setValidationState(scope, "invalid");
        }
      }),
    [scope, setSubmitInProgress, setTouched, setValidationState, validateForm, validating, values]
  );
  (0, react_1.useEffect)(() => {
    if (!skip) {
      void handleGlobalValidationTrigger();
    }
  }, [handleGlobalValidationTrigger, skip]);
};
exports.useCheckoutFormValidationTrigger = useCheckoutFormValidationTrigger;

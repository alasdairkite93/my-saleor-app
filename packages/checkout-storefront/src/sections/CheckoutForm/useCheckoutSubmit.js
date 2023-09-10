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
exports.useCheckoutSubmit = void 0;
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const checkoutValidationStateStore_1 = require("@/checkout-storefront/state/checkoutValidationStateStore");
const react_1 = require("react");
const useCheckoutFinalize_1 = require("@/checkout-storefront/sections/CheckoutForm/useCheckoutFinalize");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const useCheckoutSubmit = () => {
  const { user } = (0, useUser_1.useUser)();
  const { validateAllForms } = (0, checkoutValidationStateStore_1.useCheckoutValidationActions)();
  const { validating, validationState } = (0,
  checkoutValidationStateStore_1.useCheckoutValidationState)();
  const { updateState, loadingCheckout, submitInProgress } = (0,
  updateStateStore_1.useCheckoutUpdateState)();
  const { setShouldRegisterUser, setSubmitInProgress } = (0,
  updateStateStore_1.useCheckoutUpdateStateActions)();
  const { checkoutFinalize, finalizing } = (0, useCheckoutFinalize_1.useCheckoutFinalize)();
  const submitInitialize = (0, react_1.useCallback)(() => {
    setSubmitInProgress(true);
    setShouldRegisterUser(true);
    // only guest forms should be validated here
    if (!user) {
      validateAllForms();
    }
  }, [setShouldRegisterUser, setSubmitInProgress, user, validateAllForms]);
  const updateStateValues = Object.values(updateState);
  const anyRequestsInProgress =
    updateStateValues.some((status) => status === "loading") || loadingCheckout;
  const finishedApiChangesWithNoError =
    !anyRequestsInProgress && updateStateValues.every((status) => status === "success");
  const allFormsValid =
    !validating && Object.values(validationState).every((value) => value === "valid");
  const handleSubmit = (0, react_1.useCallback)(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        if (submitInProgress && finishedApiChangesWithNoError && allFormsValid) {
          void checkoutFinalize();
          return;
        }
        if (!validating && !anyRequestsInProgress) {
          setSubmitInProgress(false);
        }
      }),
    [
      submitInProgress,
      finishedApiChangesWithNoError,
      allFormsValid,
      anyRequestsInProgress,
      checkoutFinalize,
      setSubmitInProgress,
      validating,
    ]
  );
  (0, react_1.useEffect)(() => void handleSubmit(), [handleSubmit]);
  return {
    handleSubmit: submitInitialize,
    isProcessing: (submitInProgress && anyRequestsInProgress) || finalizing,
    validateAllForms,
    allFormsValid,
  };
};
exports.useCheckoutSubmit = useCheckoutSubmit;

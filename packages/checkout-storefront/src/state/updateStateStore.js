"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckoutUpdateStateChange =
  exports.useCheckoutUpdateStateActions =
  exports.useUserRegisterState =
  exports.useCheckoutUpdateState =
    void 0;
const zustand_1 = __importDefault(require("zustand"));
const shallow_1 = __importDefault(require("zustand/shallow"));
const react_1 = require("react");
const lodash_es_1 = require("lodash-es");
const useCheckoutUpdateStateStore = (0, zustand_1.default)((set) => ({
  shouldRegisterUser: false,
  submitInProgress: false,
  loadingCheckout: false,
  updateState: {
    checkoutShippingUpdate: "success",
    checkoutCustomerAttach: "success",
    checkoutBillingUpdate: "success",
    checkoutAddPromoCode: "success",
    checkoutDeliveryMethodUpdate: "success",
    checkoutLinesUpdate: "success",
    checkoutEmailUpdate: "success",
    userRegister: "success",
    resetPassword: "success",
    signIn: "success",
    requestPasswordReset: "success",
    checkoutLinesDelete: "success",
    userAddressCreate: "success",
    userAddressDelete: "success",
    userAddressUpdate: "success",
  },
  actions: {
    setSubmitInProgress: (submitInProgress) => set({ submitInProgress }),
    setShouldRegisterUser: (shouldRegisterUser) =>
      set({
        shouldRegisterUser,
      }),
    setLoadingCheckout: (loading) => set({ loadingCheckout: loading }),
    setUpdateState: (0, lodash_es_1.memoize)(
      (scope) => (status) =>
        set((state) => ({
          updateState: Object.assign(Object.assign({}, state.updateState), { [scope]: status }),
          // checkout will reload right after, this ensures there
          // are no rerenders in between where there's no state updating
          // also we might not need this once we get better caching
          loadingCheckout: status === "success" || state.loadingCheckout,
        }))
    ),
  },
}));
const useCheckoutUpdateState = () => {
  const { updateState, loadingCheckout, submitInProgress } = useCheckoutUpdateStateStore(
    ({ updateState, loadingCheckout, submitInProgress }) => ({
      updateState,
      loadingCheckout,
      submitInProgress,
    }),
    shallow_1.default
  );
  return { updateState, loadingCheckout, submitInProgress };
};
exports.useCheckoutUpdateState = useCheckoutUpdateState;
const useUserRegisterState = () => {
  const shouldUserRegister = useCheckoutUpdateStateStore((state) => state.shouldRegisterUser);
  return (0, react_1.useMemo)(() => shouldUserRegister, [shouldUserRegister]);
};
exports.useUserRegisterState = useUserRegisterState;
const useCheckoutUpdateStateActions = () =>
  useCheckoutUpdateStateStore(({ actions }) => (0, lodash_es_1.omit)(actions, "setUpdateState"));
exports.useCheckoutUpdateStateActions = useCheckoutUpdateStateActions;
const useCheckoutUpdateStateChange = (scope) =>
  useCheckoutUpdateStateStore(({ actions: { setUpdateState } }) => ({
    setCheckoutUpdateState: setUpdateState(scope),
  }));
exports.useCheckoutUpdateStateChange = useCheckoutUpdateStateChange;

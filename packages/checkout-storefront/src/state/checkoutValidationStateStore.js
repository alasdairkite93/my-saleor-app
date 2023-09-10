"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckoutValidationState = exports.useCheckoutValidationActions = void 0;
const zustand_1 = __importDefault(require("zustand"));
const shallow_1 = __importDefault(require("zustand/shallow"));
const useCheckoutValidationStateStore = (0, zustand_1.default)((set) => ({
  validating: false,
  validationState: { shippingAddress: "valid", guestUser: "valid", billingAddress: "valid" },
  actions: {
    validateAllForms: () => set({ validating: true }),
    setValidating: (validating) => set({ validating }),
    setValidationState: (scope, status) =>
      set((state) => ({
        validationState: Object.assign(Object.assign({}, state.validationState), {
          [scope]: status,
        }),
        validating: false,
      })),
  },
}));
const useCheckoutValidationActions = () =>
  useCheckoutValidationStateStore((state) => state.actions);
exports.useCheckoutValidationActions = useCheckoutValidationActions;
const useCheckoutValidationState = () =>
  useCheckoutValidationStateStore(
    ({ validating, validationState }) => ({ validating, validationState }),
    shallow_1.default
  );
exports.useCheckoutValidationState = useCheckoutValidationState;

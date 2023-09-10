"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaymentDataActions = exports.useSelectedPaymentData = void 0;
const zustand_1 = __importDefault(require("zustand"));
const usePaymentDataStore = (0, zustand_1.default)((set) => ({
  paymentMethod: null,
  paymentProvider: null,
  actions: {
    setPaymentData: ({ paymentMethod, paymentProvider }) => set({ paymentMethod, paymentProvider }),
  },
}));
const useSelectedPaymentData = () =>
  usePaymentDataStore(({ paymentMethod, paymentProvider }) => ({
    paymentMethod,
    paymentProvider,
  }));
exports.useSelectedPaymentData = useSelectedPaymentData;
const usePaymentDataActions = () => usePaymentDataStore((state) => state.actions);
exports.usePaymentDataActions = usePaymentDataActions;

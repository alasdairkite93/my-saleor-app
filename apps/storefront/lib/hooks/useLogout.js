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
exports.useLogout = void 0;
const router_1 = require("next/router");
const paths_1 = require("@/lib/paths");
const CheckoutProvider_1 = require("../providers/CheckoutProvider");
const auth_1 = require("@/lib/auth");
const useLogout = () => {
  const { signOut } = (0, auth_1.useSaleorAuthContext)();
  const { resetCheckoutToken } = (0, CheckoutProvider_1.useCheckout)();
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const onLogout = () =>
    __awaiter(void 0, void 0, void 0, function* () {
      signOut();
      resetCheckoutToken();
      void router.push(paths.$url());
    });
  return onLogout;
};
exports.useLogout = useLogout;
exports.default = exports.useLogout;

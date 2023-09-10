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
exports.useCheckoutEmailUpdate = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useDebouncedSubmit_1 = require("@/checkout-storefront/hooks/useDebouncedSubmit");
const useSubmit_1 = require("@/checkout-storefront/hooks/useSubmit/useSubmit");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const react_1 = require("react");
const useCheckoutEmailUpdate = ({ email }) => {
  const [, updateEmail] = (0, graphql_1.useCheckoutEmailUpdateMutation)();
  const previousEmail = (0, react_1.useRef)(email);
  const onSubmit = (0, useSubmit_1.useSubmit)(
    (0, react_1.useMemo)(
      () => ({
        scope: "checkoutEmailUpdate",
        onSubmit: updateEmail,
        shouldAbort: ({ formData: { email } }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            // @todo we'll use validateField once we fix it because
            // https://github.com/jaredpalmer/formik/issues/1755
            const isValid = yield (0, common_1.isValidEmail)(email);
            return !isValid;
          }),
        parse: ({ languageCode, checkoutId, email }) => ({ languageCode, checkoutId, email }),
      }),
      [updateEmail]
    )
  );
  const debouncedSubmit = (0, useDebouncedSubmit_1.useDebouncedSubmit)(onSubmit);
  (0, react_1.useEffect)(() => {
    const hasEmailChanged = email !== previousEmail.current;
    if (hasEmailChanged) {
      previousEmail.current = email;
      void debouncedSubmit({ email });
    }
  }, [debouncedSubmit, email]);
};
exports.useCheckoutEmailUpdate = useCheckoutEmailUpdate;

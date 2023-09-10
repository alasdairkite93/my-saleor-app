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
exports.useSubmit = void 0;
const useAlerts_1 = require("@/checkout-storefront/hooks/useAlerts");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useLocale_1 = require("@/checkout-storefront/hooks/useLocale");
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const react_1 = require("react");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const useSubmit = ({
  onSuccess,
  onError,
  onStart,
  onSubmit,
  onAbort,
  scope,
  shouldAbort,
  parse,
  hideAlerts = false,
}) => {
  const { setCheckoutUpdateState } = (0, updateStateStore_1.useCheckoutUpdateStateChange)(scope);
  const { showErrors } = (0, useAlerts_1.useAlerts)(scope);
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const localeData = (0, useLocale_1.useLocale)();
  const handleSubmit = (0, react_1.useCallback)(
    (formData = {}, formHelpers) =>
      __awaiter(void 0, void 0, void 0, function* () {
        const callbackProps = { formData, formHelpers };
        if (typeof onStart === "function") {
          onStart(callbackProps);
        }
        const shouldAbortSubmit =
          typeof shouldAbort === "function" ? yield shouldAbort(callbackProps) : false;
        if (shouldAbortSubmit) {
          if (typeof onAbort === "function") {
            setCheckoutUpdateState("success");
            onAbort(callbackProps);
          }
          return { hasErrors: false, errors: [] };
        }
        const commonData = {
          languageCode: (0, locale_1.localeToLanguageCode)(localeData.locale),
          channel: checkout.channel.slug,
          checkoutId: checkout.id,
        };
        const result = yield onSubmit(
          parse(Object.assign(Object.assign({}, formData), commonData))
        );
        const [hasErrors, errors] = (0, common_1.extractMutationErrors)(result);
        if (!hasErrors) {
          typeof onSuccess === "function" &&
            onSuccess(Object.assign(Object.assign({}, callbackProps), { result }));
          setCheckoutUpdateState("success");
          return { hasErrors, errors };
        }
        typeof onError === "function" &&
          onError(Object.assign(Object.assign({}, callbackProps), { errors }));
        setCheckoutUpdateState("error");
        if (!hideAlerts) {
          showErrors(errors);
        }
        return { hasErrors, errors };
      }),
    [
      onStart,
      shouldAbort,
      localeData.locale,
      checkout.channel.slug,
      checkout.id,
      onSubmit,
      parse,
      onError,
      setCheckoutUpdateState,
      hideAlerts,
      onAbort,
      onSuccess,
      showErrors,
    ]
  );
  return handleSubmit;
};
exports.useSubmit = useSubmit;

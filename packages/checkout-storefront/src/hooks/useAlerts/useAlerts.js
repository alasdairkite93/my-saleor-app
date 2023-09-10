"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAlerts = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const react_toastify_1 = require("react-toastify");
const lodash_es_1 = require("lodash-es");
const utils_1 = require("../useFormattedMessages/utils");
const ui_kit_1 = require("@saleor/ui-kit");
const react_1 = require("react");
const messages_1 = require("@/checkout-storefront/hooks/useAlerts/messages");
const useGetParsedErrors_1 = require("@/checkout-storefront/hooks/useGetParsedErrors");
function useAlerts(globalScope) {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { getParsedApiErrors } = (0, useGetParsedErrors_1.useGetParsedErrors)();
  const getMessageKey = ({ scope, field, code }, { error } = { error: false }) => {
    const keyBase = `${scope}-${field}-${code}`;
    return (0, lodash_es_1.camelCase)(error ? `${keyBase}-error` : keyBase);
  };
  const getErrorMessage = (0, react_1.useCallback)(
    ({ code, field, scope }) => {
      const messageKey = getMessageKey({ code, field, scope }, { error: true });
      try {
        const fullMessage = formatMessage(messages_1.apiErrorMessages[messageKey]);
        return fullMessage;
      } catch (e) {
        (0, utils_1.warnAboutMissingTranslation)(messageKey);
        return formatMessage(messages_1.apiErrorMessages.somethingWentWrong);
      }
    },
    [formatMessage]
  );
  const getParsedAlert = (0, react_1.useCallback)(
    (data, type) => {
      const { scope, field, code } = data;
      return {
        id: (0, lodash_es_1.camelCase)(`${scope}-${field}-${code}`),
        message: getErrorMessage({ scope, code, field }),
        type,
      };
    },
    [getErrorMessage]
  );
  const showAlert = (0, react_1.useCallback)((_a) => {
    var { message, type = "error" } = _a,
      rest = __rest(_a, ["message", "type"]);
    return (0, react_toastify_1.toast)(
      <ui_kit_1.Text>{message}</ui_kit_1.Text>,
      Object.assign({ type }, rest)
    );
  }, []);
  const showDefaultAlert = (0, react_1.useCallback)(
    (alertErrorData, { type } = { type: "error" }) => {
      const parsedAlert = getParsedAlert(alertErrorData, type);
      showAlert(parsedAlert);
    },
    [showAlert, getParsedAlert]
  );
  const showErrors = (0, react_1.useCallback)(
    (errors, scope = globalScope) =>
      getParsedApiErrors(errors).forEach((error) =>
        showDefaultAlert(Object.assign(Object.assign({}, error), { scope }))
      ),
    [getParsedApiErrors, showDefaultAlert, globalScope]
  );
  const showCustomErrors = (0, react_1.useCallback)(
    (errors, scope = globalScope) => {
      const parsedErrors = errors.map((error) =>
        Object.assign({ field: "", message: "", code: "" }, error)
      );
      parsedErrors.forEach(({ field, message, code }) => {
        if (message) {
          showAlert({ message });
        } else if (field && code) {
          showDefaultAlert({ scope, field, code: code });
        }
      });
    },
    [globalScope, showAlert, showDefaultAlert]
  );
  const showSuccess = (0, react_1.useCallback)(
    (message) => {
      showAlert({ message, type: "success" });
    },
    [showAlert]
  );
  return { showErrors, showCustomErrors, showSuccess };
}
exports.useAlerts = useAlerts;

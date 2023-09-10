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
exports.useDummyPaymentForm = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const AppConfigProvider_1 = require("@/checkout-storefront/providers/AppConfigProvider");
const react_toastify_1 = require("react-toastify");
const fetch_1 = require("../../fetch");
const ui_kit_1 = require("@saleor/ui-kit");
const messages_1 = require("@/checkout-storefront/views/DummyPayment/messages");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const utils_1 = require("@/checkout-storefront/views/DummyPayment/utils");
const useFetch_1 = require("@/checkout-storefront/hooks/useFetch");
const showError = (text) =>
  (0, react_toastify_1.toast)(<ui_kit_1.Text>{text}</ui_kit_1.Text>, { type: "error" });
const useDummyPaymentForm = ({ initialValues }) => {
  var _a;
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const orderId = (_a = (0, url_1.getQueryParams)().orderId) !== null && _a !== void 0 ? _a : "";
  const [, pay] = (0, useFetch_1.useFetch)(fetch_1.dummyPay);
  const {
    env: { checkoutApiUrl },
    saleorApiUrl,
  } = (0, AppConfigProvider_1.useAppConfig)();
  const dummyPay = (formData) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const result = yield pay({
          orderId,
          checkoutApiUrl,
          saleorApiUrl,
          amountCharged: formData,
        });
        if (result && result.ok) {
          window.location.href = (0, utils_1.getOrderConfirmationUrl)();
        }
        if (result && !result.ok) {
          showError(result.error);
        }
      } catch (e) {
        const error =
          typeof e === "string" ? e : formatMessage(messages_1.dummyPaymentMessages.error);
        showError(error);
      }
    });
  const form = (0, useForm_1.useForm)({
    onSubmit: dummyPay,
    initialValues,
    initialDirty: true,
  });
  return form;
};
exports.useDummyPaymentForm = useDummyPaymentForm;

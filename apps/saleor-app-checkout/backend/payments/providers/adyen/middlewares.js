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
exports.isAdyenWebhookHmacValid =
  exports.isAdyenWebhookAuthenticated =
  exports.isAdyenNotification =
  exports.withAdyenWebhookCredentials =
    void 0;
const checkout_common_1 = require("checkout-common");
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const response_1 = require("retes/response");
const utils_1 = require("./utils");
const validator_1 = require("./validator");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const errors_1 = require("../../errors");
const withAdyenWebhookCredentials = (handler) => (request) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const [error, settings] = yield (0, unpackErrors_1.unpackPromise)(
      (0, settings_1.getPrivateSettings)({
        saleorApiUrl: request.params.saleorApiUrl,
        obfuscateEncryptedData: false,
      })
    );
    if (error) {
      console.error("Cannot fetch Adyen API configuration", error);
      return response_1.Response.InternalServerError("Cannot fetch Adyen API configuration");
    }
    const {
      paymentProviders: { adyen },
    } = settings;
    const missingKeys = checkout_common_1.adyenProviderSettingIDs.filter((key) => !adyen[key]);
    if (missingKeys.length > 0) {
      const error = new errors_1.MissingPaymentProviderSettingsError("adyen", missingKeys);
      console.error(error);
      return response_1.Response.InternalServerError({ error: error.message });
    }
    return handler(
      Object.assign(Object.assign({}, request), {
        context: Object.assign(Object.assign({}, request.context), adyen),
      })
    );
  });
exports.withAdyenWebhookCredentials = withAdyenWebhookCredentials;
const isAdyenNotificationShape = (params) => {
  return (
    typeof (params === null || params === void 0 ? void 0 : params.live) === "string" &&
    Array.isArray(params === null || params === void 0 ? void 0 : params.notificationItems)
  );
};
const isAdyenNotification = (handler) => (request) => {
  if (isAdyenNotificationShape(request.params)) {
    return handler(request);
  }
  console.warn("Invalid notification made to Adyen webhook handler", request);
  return response_1.Response.BadRequest();
};
exports.isAdyenNotification = isAdyenNotification;
const isAdyenWebhookAuthenticated = (handler) => (request) => {
  const { username, password } = request.context;
  if (typeof request.headers.authorization !== "string") {
    return response_1.Response.Unauthorized();
  }
  if (!(0, utils_1.verifyBasicAuth)(username, password, request.headers.authorization)) {
    console.warn("Unauthenticated request to Adyen webhook handler", request);
    return response_1.Response.Unauthorized();
  }
  return handler(request);
};
exports.isAdyenWebhookAuthenticated = isAdyenWebhookAuthenticated;
const isAdyenWebhookHmacValid = (handler) => (request) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { hmac } = request.context;
    const params = request.params;
    // https://docs.adyen.com/development-resources/webhooks/understand-notifications#notification-structure
    // notificationItem will always contain a single item for HTTP POST
    const notificationRequestItem =
      (_b =
        (_a = params === null || params === void 0 ? void 0 : params.notificationItems) === null ||
        _a === void 0
          ? void 0
          : _a[0]) === null || _b === void 0
        ? void 0
        : _b.NotificationRequestItem;
    if (!notificationRequestItem) {
      console.error("Invalid call from adyen - no NotificationRequestItem");
      return response_1.Response.BadRequest(
        "NotificationRequestItem is not present in the request"
      );
    }
    // first validate the origin
    const [validationError, isValid] = yield (0, unpackErrors_1.unpackPromise)(
      (0, validator_1.validateHmac)(notificationRequestItem, hmac)
    );
    if (!isValid || validationError) {
      console.error("Invalid hmac in Adyen webhook request", validationError || request);
      return response_1.Response.Unauthorized();
    }
    return handler(request);
  });
exports.isAdyenWebhookHmacValid = isAdyenWebhookHmacValid;

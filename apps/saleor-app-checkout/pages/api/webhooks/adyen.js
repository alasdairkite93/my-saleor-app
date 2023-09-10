"use strict";
// https://docs.adyen.com/development-resources/webhooks
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
const createTransaction_1 = require("@/saleor-app-checkout/backend/payments/createTransaction");
const adyen_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen");
const getOrderTransactions_1 = require("@/saleor-app-checkout/backend/payments/getOrderTransactions");
const updateTransaction_1 = require("@/saleor-app-checkout/backend/payments/updateTransaction");
const adapter_1 = require("retes/adapter");
const response_1 = require("retes/response");
const middlewares_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/middlewares");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const getOrderIdFromNotification_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/getOrderIdFromNotification");
const handler = (request) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { apiKey } = request.context;
    const notificationItem =
      (_c =
        (_b = (_a = request.params) === null || _a === void 0 ? void 0 : _a.notificationItems) ===
          null || _b === void 0
          ? void 0
          : _b[0]) === null || _c === void 0
        ? void 0
        : _c.NotificationRequestItem;
    const saleorApiUrl = request.params.saleorApiUrl;
    const [error] = yield (0, unpackErrors_1.unpackPromise)(
      notificationHandler({ saleorApiUrl, notification: notificationItem, apiKey })
    );
    if (error) {
      console.warn("Error while saving Adyen notification");
      // Silent error - return OK, so Adyen won't send the webhook again
    }
    return response_1.Response.OK("[accepted]");
  });
exports.default = (0, adapter_1.toNextHandler)([
  middlewares_1.withAdyenWebhookCredentials,
  middlewares_1.isAdyenWebhookAuthenticated,
  middlewares_1.isAdyenNotification,
  middlewares_1.isAdyenWebhookHmacValid,
  handler,
]);
function notificationHandler({ saleorApiUrl, notification, apiKey }) {
  return __awaiter(this, void 0, void 0, function* () {
    // Get order id from webhook metadata
    const orderId = yield (0, getOrderIdFromNotification_1.getOrderIdFromNotification)(
      notification,
      apiKey
    );
    if (!orderId) {
      console.log("Order id not found");
      return;
    }
    // Get order transactions and run deduplication
    // https://docs.adyen.com/development-resources/webhooks/best-practices#handling-duplicates
    const transactions = yield (0, getOrderTransactions_1.getOrderTransactions)(saleorApiUrl, {
      id: orderId,
    });
    const duplicate = (0, adyen_1.isNotificationDuplicate)(transactions, notification);
    if (duplicate) {
      console.log("Ignored duplicated Adyen notification", notification);
      return;
    }
    // Check if originalReference exists, if it does append a new event
    if (notification.originalReference) {
      const transaction = transactions.find(
        ({ reference }) => reference === notification.originalReference
      );
      if (!transaction) {
        throw new Error("originalReference does not exist in transactions");
      }
      const data = (0, adyen_1.getUpdatedTransactionData)(transaction, notification);
      yield (0, updateTransaction_1.updateTransaction)(saleorApiUrl, data);
    } else {
      const data = (0, adyen_1.getNewTransactionData)(orderId, notification);
      if (!data) {
        return;
      }
      yield (0, createTransaction_1.createTransaction)(saleorApiUrl, data);
    }
  });
}

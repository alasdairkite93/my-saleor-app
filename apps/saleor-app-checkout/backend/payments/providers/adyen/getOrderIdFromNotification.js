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
exports.getOrderIdFromAdditionalData =
  exports.getOrderId =
  exports.getOrderIdFromNotification =
    void 0;
const api_library_1 = require("@adyen/api-library");
const getOrderIdFromNotification = (notification, apiKey) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { additionalData } = notification;
    if (!additionalData) {
      return;
    }
    return (0, exports.getOrderId)(additionalData, apiKey);
  });
exports.getOrderIdFromNotification = getOrderIdFromNotification;
const getOrderId = (additionalData, apiKey) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const paymentLinkId = additionalData.paymentLinkId;
    if (!paymentLinkId) {
      // webhooks from drop-in don't have paymentLinkId
      return (0, exports.getOrderIdFromAdditionalData)(additionalData);
    }
    const client = new api_library_1.Client({
      apiKey,
      environment: "TEST", // TODO: Choose environment dynamically in Dashboard
    });
    const checkout = new api_library_1.CheckoutAPI(client);
    try {
      const { metadata } = yield checkout.getPaymentLinks(paymentLinkId);
      return metadata === null || metadata === void 0 ? void 0 : metadata.orderId;
    } catch (e) {
      // INFO: checkout.getPaymentLinks method fails randomly
      // it's possible to get notification metadata directly from notification itself (undocumented)
      console.warn("checkout.getPaymentLinks failed");
      return (0, exports.getOrderIdFromAdditionalData)(additionalData);
    }
  });
exports.getOrderId = getOrderId;
const getOrderIdFromAdditionalData = (additionalData) => {
  return "metadata.orderId" in additionalData ? additionalData["metadata.orderId"] : null;
};
exports.getOrderIdFromAdditionalData = getOrderIdFromAdditionalData;

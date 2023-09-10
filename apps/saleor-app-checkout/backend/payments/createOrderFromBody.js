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
exports.createOrderFromBodyOrId = void 0;
const createOrder_1 = require("./createOrder");
const getOrderDetails_1 = require("./getOrderDetails");
const errors_1 = require("./errors");
const createOrderFromBodyOrId = (saleorApiUrl, body) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const provider = body.provider;
    if ("checkoutId" in body) {
      const data = yield (0, createOrder_1.createOrder)({
        saleorApiUrl,
        checkoutId: body.checkoutId,
        totalAmount: body.totalAmount,
      });
      if ("errors" in data) {
        throw new errors_1.KnownPaymentError(provider, data.errors);
      }
      return data.data;
    } else if ("orderId" in body) {
      const data = yield (0, getOrderDetails_1.getOrderDetails)(saleorApiUrl, { id: body.orderId });
      if ("errors" in data) {
        throw new errors_1.KnownPaymentError(provider, data.errors);
      }
      return data.data;
    }
    throw new errors_1.KnownPaymentError(provider, ["MISSING_CHECKOUT_OR_ORDER_ID"]);
  });
exports.createOrderFromBodyOrId = createOrderFromBodyOrId;

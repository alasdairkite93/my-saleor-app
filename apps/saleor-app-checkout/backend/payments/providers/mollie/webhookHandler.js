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
exports.verifyPayment = exports.MOLLIE_PAYMENT_PREFIX = void 0;
const api_client_1 = require("@mollie/api-client");
const utils_1 = require("./utils");
const utils_2 = require("../../utils");
exports.MOLLIE_PAYMENT_PREFIX = "mollie";
const verifyPayment = ({ saleorApiUrl, id }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const mollieClient = yield (0, utils_1.getMollieClient)(saleorApiUrl);
    const { status, amountCaptured, amountRefunded, metadata, method, amount } =
      yield mollieClient.orders.get(id);
    const type = `${exports.MOLLIE_PAYMENT_PREFIX}-${method || "(unknown-payment-method)"}`;
    const reference = id;
    const eventName = (0, utils_1.getMollieEventName)(status);
    const getAmount = (0, utils_2.getTransactionAmountGetter)({
      authorized: amount === null || amount === void 0 ? void 0 : amount.value,
      voided: undefined,
      refunded:
        amountRefunded === null || amountRefunded === void 0 ? void 0 : amountRefunded.value,
      charged: amountCaptured === null || amountCaptured === void 0 ? void 0 : amountCaptured.value,
    });
    if (
      status === api_client_1.OrderStatus.created ||
      status === api_client_1.OrderStatus.pending
    ) {
      return {
        id: metadata.orderId,
        transaction: {
          status,
          reference,
          availableActions: ["VOID"],
          type,
        },
        transactionEvent: {
          status: "PENDING",
          name: eventName,
        },
      };
    }
    if (
      status === api_client_1.OrderStatus.canceled ||
      status === api_client_1.OrderStatus.expired
    ) {
      return {
        id: metadata.orderId,
        transaction: {
          status,
          reference,
          type,
          availableActions: [],
        },
        transactionEvent: {
          status: "FAILURE",
          name: eventName,
        },
      };
    }
    if (status === api_client_1.OrderStatus.authorized) {
      return {
        id: metadata.orderId,
        transaction: {
          status,
          reference: id,
          type,
          amountAuthorized: {
            amount: getAmount("authorized"),
            currency: amount.currency,
          },
          availableActions: ["CHARGE"],
        },
        transactionEvent: {
          status: "PENDING",
          name: eventName,
        },
      };
    }
    if (status === api_client_1.OrderStatus.paid) {
      if (amountRefunded) {
        // Order was refunded in Mollie dashboard
        return {
          id: metadata.orderId,
          transaction: {
            status,
            reference: id,
            type,
            amountRefunded: {
              amount: getAmount("refunded"),
              currency: amountRefunded.currency,
            },
            amountCharged: {
              amount: getAmount("charged"),
              currency:
                (_a =
                  amountCaptured === null || amountCaptured === void 0
                    ? void 0
                    : amountCaptured.currency) !== null && _a !== void 0
                  ? _a
                  : amountRefunded.currency,
            },
            amountAuthorized: {
              amount: getAmount("authorized"),
              currency: amount.currency,
            },
            availableActions: [],
          },
          transactionEvent: {
            status: "FAILURE",
            name: (0, utils_1.getMollieEventName)("payment refunded"),
          },
        };
      }
      return {
        id: metadata.orderId,
        transaction: {
          status,
          reference: id,
          type,
          amountAuthorized: {
            amount: getAmount("authorized"),
            currency: amount.currency,
          },
          amountCharged: amountCaptured && {
            amount: getAmount("charged"),
            currency: amountCaptured.currency,
          },
          availableActions: ["REFUND"],
        },
        transactionEvent: {
          status: "SUCCESS",
          name: eventName,
        },
      };
    }
  });
exports.verifyPayment = verifyPayment;

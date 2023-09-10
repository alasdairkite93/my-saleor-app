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
exports.handleMolieRefund = void 0;
const utils_1 = require("@/saleor-app-checkout/backend/payments/providers/mollie/utils");
const api_client_1 = require("@mollie/api-client");
const utils_2 = require("@/saleor-app-checkout/backend/payments/utils");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const updateTransaction_1 = require("../../updateTransaction");
function handleMolieRefund({ saleorApiUrl, refund, transaction }) {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    const mollieClient = yield (0, utils_1.getMollieClient)(saleorApiUrl);
    const { id, amount, currency } = refund;
    if (!(transaction === null || transaction === void 0 ? void 0 : transaction.id)) {
      throw new Error("Transaction id was not provided");
    }
    const order = yield mollieClient.orders.get(id);
    const payments = yield order.getPayments();
    const payment = payments.find(
      (payment) => payment.status === api_client_1.PaymentStatus.paid && payment.isRefundable()
    );
    if (!payment) {
      throw new Error("Couldn't find Mollie payment to refund");
    }
    const transactionActions = (0, utils_2.getActionsAfterRefund)(transaction, amount);
    const [refundError, mollieRefund] = yield (0, unpackErrors_1.unpackPromise)(
      mollieClient.payments_refunds.create({
        paymentId: payment === null || payment === void 0 ? void 0 : payment.id,
        amount: {
          value: String(amount),
          currency,
        },
      })
    );
    const updateSucceeded = yield (0, updateTransaction_1.updateTransaction)(saleorApiUrl, {
      id: transaction.id,
      transaction: {
        availableActions: transactionActions,
      },
      transactionEvent: {
        status: refundError ? "FAILURE" : "PENDING",
        name: (0, utils_1.getMollieEventName)("refund requested"),
        reference:
          (_a = refundError === null || refundError === void 0 ? void 0 : refundError.message) !==
            null && _a !== void 0
            ? _a
            : mollieRefund === null || mollieRefund === void 0
            ? void 0
            : mollieRefund.id,
      },
    });
    if (!updateSucceeded) {
      throw new Error("Transaction couldn't be updated in Saleor");
    }
  });
}
exports.handleMolieRefund = handleMolieRefund;

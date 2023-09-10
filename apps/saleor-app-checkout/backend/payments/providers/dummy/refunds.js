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
exports.handleDummyRefund = exports.DUMMY_PAYMENT_TYPE = void 0;
const updateTransaction_1 = require("../../updateTransaction");
const utils_1 = require("../../utils");
exports.DUMMY_PAYMENT_TYPE = "dummy-payment";
const handleDummyRefund = ({ saleorApiUrl, refund, transaction }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!(transaction === null || transaction === void 0 ? void 0 : transaction.id)) {
      throw new Error("Transaction id was not provided");
    }
    const { amount, currency } = refund;
    const transactionActions = (0, utils_1.getActionsAfterRefund)(transaction, amount);
    const getAmount = (0, utils_1.getTransactionAmountGetter)({
      charged: transaction.chargedAmount.amount,
      refunded: amount,
      authorized: 0,
      voided: 0,
    });
    // Create "pending" event
    yield (0, updateTransaction_1.updateTransaction)(saleorApiUrl, {
      id: transaction.id,
      transaction: {
        availableActions: transactionActions,
      },
      transactionEvent: {
        status: "PENDING",
        name: "Refund requested",
      },
    });
    // Create "completed" event + update transaction amounts
    yield (0, updateTransaction_1.updateTransaction)(saleorApiUrl, {
      id: transaction.id,
      transaction: {
        availableActions: transactionActions,
        amountRefunded: {
          amount: getAmount("refunded"),
          currency,
        },
        amountCharged: {
          amount: getAmount("charged"),
          currency,
        },
      },
      transactionEvent: {
        status: "SUCCESS",
        name: "Refund completed",
      },
    });
  });
exports.handleDummyRefund = handleDummyRefund;

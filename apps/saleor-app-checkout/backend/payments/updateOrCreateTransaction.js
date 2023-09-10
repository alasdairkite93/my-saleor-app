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
exports.updateOrCreateTransaction = void 0;
const createTransaction_1 = require("./createTransaction");
const getOrderTransactions_1 = require("./getOrderTransactions");
const updateTransaction_1 = require("./updateTransaction");
function findTransactionInOrder({ saleorApiUrl, reference, orderId }) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!reference) return null;
    try {
      const orderTransactions = yield (0, getOrderTransactions_1.getOrderTransactions)(
        saleorApiUrl,
        { id: orderId }
      );
      if (orderTransactions.length) {
        return orderTransactions.find((transaction) => transaction.reference === reference);
      }
    } catch (e) {
      console.error("Error while finding transaction in order", e);
    }
  });
}
function updateOrCreateTransaction({ saleorApiUrl, orderId, transactionData }) {
  return __awaiter(this, void 0, void 0, function* () {
    const reference = transactionData.transaction.reference;
    const existingTransaction = yield findTransactionInOrder({ saleorApiUrl, reference, orderId });
    if (existingTransaction) {
      console.info(`Transaction ${existingTransaction.id} updated`, transactionData);
      return (0, updateTransaction_1.updateTransaction)(
        saleorApiUrl,
        Object.assign(Object.assign({}, transactionData), { id: existingTransaction.id })
      );
    }
    console.info("Transaction created", transactionData);
    return (0,
    createTransaction_1.createTransaction)(saleorApiUrl, Object.assign({}, transactionData));
  });
}
exports.updateOrCreateTransaction = updateOrCreateTransaction;

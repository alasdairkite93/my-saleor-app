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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAdyenRefund = void 0;
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const updateTransaction_1 = require("../../updateTransaction");
const utils_1 = require("../../utils");
const utils_2 = require("./utils");
function handleAdyenRefund({ saleorApiUrl, refund, transaction }) {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    const { id, amount, currency } = refund;
    const { checkout, config } = yield (0, utils_2.getAdyenClient)(saleorApiUrl);
    (0,
    ts_invariant_1.default)(transaction === null || transaction === void 0 ? void 0 : transaction.id, "Transaction id is missing");
    const transactionActions = (0, utils_1.getActionsAfterRefund)(transaction, amount);
    const [refundError, refundResult] = yield (0, unpackErrors_1.unpackPromise)(
      checkout.refunds(id, {
        amount: {
          currency,
          value: (0, utils_1.getIntegerAmountFromSaleor)(amount),
        },
        merchantAccount: config.merchantAccount,
      })
    );
    const updateSucceeded = yield (0, updateTransaction_1.updateTransaction)(saleorApiUrl, {
      id: transaction.id,
      transaction: {
        availableActions: transactionActions,
      },
      transactionEvent: {
        status: refundError ? "FAILURE" : "PENDING",
        name: "REQUEST_REFUND",
        reference:
          (_a = refundError === null || refundError === void 0 ? void 0 : refundError.message) !==
            null && _a !== void 0
            ? _a
            : refundResult === null || refundResult === void 0
            ? void 0
            : refundResult.pspReference,
      },
    });
    if (!updateSucceeded) {
      console.error("Transaction status couldn't be updated in Saleor");
      throw new Error("Transaction couldn't be updated in Saleor");
    }
  });
}
exports.handleAdyenRefund = handleAdyenRefund;

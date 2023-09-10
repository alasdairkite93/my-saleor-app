"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
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
exports.transactionActionRequestWebhook =
  exports.config =
  exports.SALEOR_WEBHOOK_TRANSACTION_ENDPOINT =
    void 0;
const Sentry = __importStar(require("@sentry/nextjs"));
const graphql_1 = require("@/saleor-app-checkout/graphql");
const mollie_1 = require("@/saleor-app-checkout/backend/payments/providers/mollie");
const adyen_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen");
const response_1 = require("retes/response");
const getTransactionProcessedEvents_1 = require("@/saleor-app-checkout/backend/payments/getTransactionProcessedEvents");
const updateTransactionProcessedEvents_1 = require("@/saleor-app-checkout/backend/payments/updateTransactionProcessedEvents");
const utils_1 = require("@/saleor-app-checkout/backend/payments/utils");
const refunds_1 = require("@/saleor-app-checkout/backend/payments/providers/dummy/refunds");
const next_1 = require("@saleor/app-sdk/handlers/next");
const saleorApp_1 = require("@/saleor-app-checkout/config/saleorApp");
exports.SALEOR_WEBHOOK_TRANSACTION_ENDPOINT = "api/webhooks/saleor/transaction-action-request";
exports.config = {
  api: {
    bodyParser: false,
  },
};
exports.transactionActionRequestWebhook = new next_1.SaleorAsyncWebhook({
  name: "Checkout app payment notifications",
  webhookPath: "api/webhooks/saleor/transaction-action-request",
  asyncEvent: "TRANSACTION_ACTION_REQUEST",
  apl: saleorApp_1.saleorApp.apl,
  subscriptionQueryAst: graphql_1.TransactionActionRequestSubscriptionDocument,
});
const handler = (req, res, context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {
      authData: { saleorApiUrl },
      payload: { transaction, action },
    } = context;
    console.log("Start processing Saleor transaction action", action, transaction);
    if (
      !(transaction === null || transaction === void 0 ? void 0 : transaction.type) ||
      !(action === null || action === void 0 ? void 0 : action.amount)
    ) {
      console.warn(
        "Received webhook call without transaction data",
        transaction === null || transaction === void 0 ? void 0 : transaction.type,
        action === null || action === void 0 ? void 0 : action.amount
      );
      return response_1.Response.BadRequest({
        success: false,
        message: "Missing transaction data",
      });
    }
    const { "saleor-signature": payloadSignature } = req.headers;
    if (!payloadSignature) {
      console.warn("Missing Saleor signature");
      return response_1.Response.BadRequest({ success: false, message: "Missing signature" });
    }
    const processedEvents = yield (0,
    getTransactionProcessedEvents_1.getTransactionProcessedEvents)(saleorApiUrl, {
      id: transaction.id,
    });
    const eventProcessed = processedEvents.some((signature) => signature === payloadSignature);
    if (eventProcessed) {
      console.log("Event already processed");
      return response_1.Response.OK({ success: true, message: "Event already processed" });
    }
    const transactionReversal = {
      id: transaction.reference,
      amount: action.amount,
      currency: transaction.authorizedAmount.currency,
    };
    try {
      if (action.actionType === "REFUND") {
        if ((0, utils_1.isMollieTransaction)(transaction)) {
          yield (0, mollie_1.handleMolieRefund)({
            saleorApiUrl,
            refund: transactionReversal,
            transaction,
          });
        }
        if ((0, utils_1.isAdyenTransaction)(transaction)) {
          yield (0, adyen_1.handleAdyenRefund)({
            saleorApiUrl,
            refund: transactionReversal,
            transaction,
          });
        }
        if ((0, utils_1.isDummyTransaction)(transaction)) {
          yield (0, refunds_1.handleDummyRefund)({
            saleorApiUrl,
            refund: Object.assign(Object.assign({}, transactionReversal), { id: transaction.id }),
            transaction,
          });
        }
      }
      if (action.actionType === "VOID") {
        if ((0, utils_1.isMollieTransaction)(transaction)) {
          // TODO: Handle Mollie void payment
        }
        if ((0, utils_1.isAdyenTransaction)(transaction)) {
          // TODO: Handle Adyen void payment
        }
      }
    } catch (err) {
      console.error(err);
      Sentry.captureException(err);
      return res.status(500).json({
        success: false,
        message: "Error while processing event",
      });
    }
    yield (0, updateTransactionProcessedEvents_1.updateTransactionProcessedEvents)(saleorApiUrl, {
      id: transaction.id,
      input: JSON.stringify([...processedEvents, payloadSignature]),
    });
    console.log("Refund processing complete");
    return res.status(200).json({ success: true });
  });
exports.default = exports.transactionActionRequestWebhook.createHandler(handler);

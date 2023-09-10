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
const Sentry = __importStar(require("@sentry/nextjs"));
const mollie_1 = require("@/saleor-app-checkout/backend/payments/providers/mollie");
const updateOrCreateTransaction_1 = require("@/saleor-app-checkout/backend/payments/updateOrCreateTransaction");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const auth_1 = require("@/saleor-app-checkout/backend/auth");
const errors_1 = require("@/saleor-app-checkout/backend/payments/errors");
/**
  Webhooks endpoint for mollie payment gateway.
  It's called after any change in the payment (paid, expired, failed, refunded, etc.)
  https://docs.mollie.com/overview/webhooks
*/
function handler(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id || typeof id !== "string") {
      res.status(400).json({ error: "Invalid request body" });
      return;
    }
    const [saleorApiUrlError, saleorApiUrl] = (0, unpackErrors_1.unpackThrowable)(() =>
      (0, auth_1.getSaleorApiUrlFromRequest)(req)
    );
    if (saleorApiUrlError) {
      Sentry.captureException(saleorApiUrlError);
      res.status(400).json({ message: saleorApiUrlError.message });
      return;
    }
    const [paymentError, paymentData] = yield (0, unpackErrors_1.unpackPromise)(
      (0, mollie_1.verifyPayment)({ saleorApiUrl, id })
    );
    if (paymentError) {
      console.error(paymentError);
      if (paymentError instanceof errors_1.MissingPaymentProviderSettingsError) {
        res.status(500).json({ error: paymentError.message });
        return;
      }
      Sentry.captureException(paymentError);
      res.status(500).json({ error: "error while validating payment" });
      return;
    }
    // Save transaction id from mollie in Saleor
    // Check if transaction was already created in Saleor
    // If status of that transaction changed, update transaction in Saleor
    if (paymentData) {
      yield (0, updateOrCreateTransaction_1.updateOrCreateTransaction)({
        saleorApiUrl,
        orderId: paymentData.id,
        transactionData: paymentData,
      });
      res.status(200).send("ok");
      return;
    }
  });
}
exports.default = handler;

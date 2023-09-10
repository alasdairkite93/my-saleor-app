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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Sentry = __importStar(require("@sentry/nextjs"));
const getOrderIdFromNotification_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/getOrderIdFromNotification");
const utils_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/utils");
const utils_2 = require("@/saleor-app-checkout/backend/utils");
const utils_3 = require("@/saleor-app-checkout/utils");
const checkout_common_1 = require("checkout-common");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const auth_1 = require("@/saleor-app-checkout/backend/auth");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const parseAndValidateBody = (0, utils_3.createParseAndValidateBody)(
  checkout_common_1.postDropInAdyenPaymentsDetailsBody
);
const DropInAdyenPaymentsDetailsHandler = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (req.method !== "POST") {
      res.status(405).send({ message: "Only POST requests allowed" });
      return;
    }
    const [error, body] = parseAndValidateBody(req.body);
    if (error) {
      console.error(error, req.body);
      res.status(400).send({ message: "Invalid JSON" });
      return;
    }
    const [saleorApiUrlError, saleorApiUrl] = (0, unpackErrors_1.unpackThrowable)(() =>
      (0, auth_1.getSaleorApiUrlFromRequest)(req)
    );
    if (saleorApiUrlError) {
      res.status(400).json({ message: saleorApiUrlError.message });
      return;
    }
    try {
      const { checkout } = yield (0, utils_1.getAdyenClient)(saleorApiUrl);
      const payment = yield checkout.paymentsDetails(body.adyenStateData);
      const orderId = (0, getOrderIdFromNotification_1.getOrderIdFromAdditionalData)(
        payment.additionalData || {}
      );
      (0,
      ts_invariant_1.default)(orderId, "orderId should be set at this point. Please file a bug report.");
      return res.status(200).json({ payment, orderId });
    } catch (err) {
      console.error(err);
      Sentry.captureException(err);
      return res.status(500).json({ message: "adyen" });
    }
  });
exports.default = (0, utils_2.allowCors)(DropInAdyenPaymentsDetailsHandler);

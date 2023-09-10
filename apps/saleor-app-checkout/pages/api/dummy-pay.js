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
const updateOrCreateTransaction_1 = require("@/saleor-app-checkout/backend/payments/updateOrCreateTransaction");
const utils_1 = require("@/saleor-app-checkout/backend/utils");
const utils_2 = require("@/saleor-app-checkout/utils");
const yup = __importStar(require("yup"));
const auth_1 = require("@/saleor-app-checkout/backend/auth");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const refunds_1 = require("@/saleor-app-checkout/backend/payments/providers/dummy/refunds");
const dummyPayBodySchema = yup.object({
  orderId: yup.string().required(),
  amountCharged: yup.object({
    amount: yup.number().required(),
    currency: yup.string().required(),
  }),
});
const parseAndValidateBody = (0, utils_2.createParseAndValidateBody)(dummyPayBodySchema);
const handler = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const [error, body] = parseAndValidateBody(req.body);
    if (error) {
      console.error(error, req.body);
      res.status(400).send({ ok: false, error: "Invalid JSON" });
      return;
    }
    const [saleorApiUrlError, saleorApiUrl] = (0, unpackErrors_1.unpackThrowable)(() =>
      (0, auth_1.getSaleorApiUrlFromRequest)(req)
    );
    if (saleorApiUrlError) {
      res.status(400).json({ message: saleorApiUrlError.message });
      return;
    }
    const { orderId, amountCharged } = body;
    const transactionData = {
      id: orderId,
      transaction: {
        type: refunds_1.DUMMY_PAYMENT_TYPE,
        status: "complete",
        amountCharged,
        availableActions: ["REFUND"],
      },
      transactionEvent: {
        status: "SUCCESS",
        name: "Charged",
      },
    };
    yield (0,
    updateOrCreateTransaction_1.updateOrCreateTransaction)({ saleorApiUrl, orderId: transactionData.id, transactionData });
    res.status(200).send({ ok: true });
  });
exports.default = (0, utils_1.allowCors)(handler);

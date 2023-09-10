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
const utils_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/utils");
const updateTransaction_1 = require("@/saleor-app-checkout/backend/payments/updateTransaction");
const consts_1 = require("@/saleor-app-checkout/mocks/consts");
const adyen_1 = require("@/saleor-app-checkout/mocks/fixtures/adyen");
const adyen_2 = __importDefault(require("@/saleor-app-checkout/pages/api/webhooks/adyen"));
const test_utils_1 = require("@/saleor-app-checkout/test-utils");
const response_1 = require("retes/response");
const getOrderTransactions_1 = require("@/saleor-app-checkout/backend/payments/getOrderTransactions");
const createTransaction_1 = require("@/saleor-app-checkout/backend/payments/createTransaction");
const saleor_1 = require("@/saleor-app-checkout/mocks/fixtures/saleor");
const utils_2 = require("@/saleor-app-checkout/backend/payments/utils");
jest.mock("@/saleor-app-checkout/backend/payments/updateTransaction");
jest.mock("@/saleor-app-checkout/backend/payments/createTransaction");
jest.mock("@/saleor-app-checkout/backend/payments/getOrderTransactions");
const mockedGetOrderTransactions = getOrderTransactions_1.getOrderTransactions;
const getReqHeaders = () => {
  return {
    authorization: `Basic ${(0, utils_1.encodeBasicAuth)(
      consts_1.testingVars.adyenWebhookUsername,
      consts_1.testingVars.adyenWebhookPassword
    )}`,
  };
};
describe("/api/webhooks/adyen", () => {
  const context = (0, test_utils_1.setupRecording)();
  beforeEach(() => {
    (0, test_utils_1.setupPollyMiddleware)(context.polly.server);
  });
  it("rejects requests with invalid basic auth", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = {
        authorization: "Basic invalid_auth",
      };
      req.body = (0, adyen_1.getPaymentRequest)();
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(response_1.Response.Unauthorized().status);
    }));
  it("rejects requests with no body", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = getReqHeaders();
      req.body = {};
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(response_1.Response.BadRequest().status);
    }));
  it("rejects request with no hmac", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("error");
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = getReqHeaders();
      req.body = (0, adyen_1.getPaymentRequest)(null);
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(response_1.Response.Unauthorized().status);
    }));
  it("rejects requests with invalid hmac", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = getReqHeaders();
      req.body = (0, adyen_1.getPaymentRequest)("invalid_hmac");
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(response_1.Response.Unauthorized().status);
    }));
  it("create new payment if it was firstly authorized", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("warn"); // checkout.getPaymentLinks fails
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = getReqHeaders();
      req.body = (0, adyen_1.getPaymentRequest)();
      mockedGetOrderTransactions.mockResolvedValueOnce([]);
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(200);
      expect(res._getData()).toBe("[accepted]"); // adyen requires this response content
      expect(createTransaction_1.createTransaction).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          id: expect.any(String),
          transactionEvent: {
            name: "AUTHORISATION",
            status: "SUCCESS",
            reference: expect.any(String),
          },
          transaction: {
            status: "AUTHORISATION",
            type: "adyen-mc",
            reference: "LD65H2FVNXSKGK82",
            availableActions: ["VOID", "CHARGE"],
            amountAuthorized: {
              amount: (0, utils_2.getSaleorAmountFromInteger)(adyen_1.ADYEN_TRANSACTION_AMOUNT),
              currency: adyen_1.ADYEN_TRANSACTION_CURRENCY,
            },
          },
        })
      );
    }));
  it("create new payment if it was firstly captured", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("warn"); // checkout.getPaymentLinks fails
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = getReqHeaders();
      req.body = (0, adyen_1.getFirstPaymentCapture)();
      mockedGetOrderTransactions.mockResolvedValueOnce([]);
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(200);
      expect(res._getData()).toBe("[accepted]"); // adyen requires this response content
      expect(createTransaction_1.createTransaction).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          id: expect.any(String),
          transactionEvent: {
            name: "CAPTURE",
            status: "SUCCESS",
            reference: expect.any(String),
          },
          transaction: {
            status: "CAPTURE",
            type: "adyen-mc",
            reference: "LD65H2FVNXSKGK82",
            availableActions: ["REFUND"],
            amountAuthorized: {
              amount: 0,
              currency: adyen_1.ADYEN_TRANSACTION_CURRENCY,
            },
            amountCharged: {
              amount: (0, utils_2.getSaleorAmountFromInteger)(adyen_1.ADYEN_TRANSACTION_AMOUNT),
              currency: adyen_1.ADYEN_TRANSACTION_CURRENCY,
            },
          },
        })
      );
    }));
  it("updates payment when it was captured", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("warn"); // checkout.getPaymentLinks fails
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = getReqHeaders();
      req.body = (0, adyen_1.getPaymentCapture)();
      mockedGetOrderTransactions.mockResolvedValueOnce([
        (0, saleor_1.prepareSaleorTransaction)(
          "authorized",
          (0, utils_2.getSaleorAmountFromInteger)(adyen_1.ADYEN_TRANSACTION_AMOUNT),
          adyen_1.ADYEN_TRANSACTION_CURRENCY,
          { reference: adyen_1.ADYEN_ORIGINAL_REFERENCE, id: adyen_1.ADYEN_ORDER_ID }
        ),
      ]);
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(200);
      expect(res._getData()).toBe("[accepted]"); // adyen requires this response content
      expect(updateTransaction_1.updateTransaction).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          id: expect.any(String),
          transaction: {
            status: "CAPTURE",
            availableActions: ["REFUND"],
            amountAuthorized: {
              amount: 0,
              currency: adyen_1.ADYEN_TRANSACTION_CURRENCY,
            },
            amountCharged: {
              amount: (0, utils_2.getSaleorAmountFromInteger)(adyen_1.ADYEN_TRANSACTION_AMOUNT),
              currency: adyen_1.ADYEN_TRANSACTION_CURRENCY,
            },
          },
          transactionEvent: {
            name: "CAPTURE",
            status: "SUCCESS",
            reference: expect.any(String),
          },
        })
      );
    }));
  it("adds refund to Saleor when status changes to REFUND", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("warn"); // checkout.getPaymentLinks fails
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.headers = getReqHeaders();
      req.body = (0, adyen_1.getPaymentRefund)();
      mockedGetOrderTransactions.mockResolvedValueOnce([
        (0, saleor_1.prepareSaleorTransaction)(
          "charged",
          (0, utils_2.getSaleorAmountFromInteger)(adyen_1.ADYEN_TRANSACTION_AMOUNT),
          adyen_1.ADYEN_TRANSACTION_CURRENCY,
          { reference: adyen_1.ADYEN_ORIGINAL_REFERENCE, id: adyen_1.ADYEN_ORDER_ID }
        ),
      ]);
      yield (0, adyen_2.default)(req, res);
      expect(res.statusCode).toBe(200);
      expect(res._getData()).toBe("[accepted]"); // adyen requires this response content
      expect(updateTransaction_1.updateTransaction).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          id: expect.any(String),
          transaction: {
            status: "REFUND",
            availableActions: [],
            amountRefunded: {
              amount: (0, utils_2.getSaleorAmountFromInteger)(adyen_1.ADYEN_TRANSACTION_AMOUNT),
              currency: adyen_1.ADYEN_TRANSACTION_CURRENCY,
            },
            amountCharged: {
              amount: 0,
              currency: adyen_1.ADYEN_TRANSACTION_CURRENCY,
            },
          },
          transactionEvent: {
            name: "REFUND",
            status: "SUCCESS",
            reference: expect.any(String),
          },
        })
      );
    }));
});

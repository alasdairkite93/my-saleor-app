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
const saleor_1 = require("@/saleor-app-checkout/mocks/fixtures/saleor");
const transaction_action_request_1 = __importStar(
  require("@/saleor-app-checkout/pages/api/webhooks/saleor/transaction-action-request")
);
const const_1 = require("@saleor/app-sdk/const");
const response_1 = require("retes/response");
const next_test_api_route_handler_1 = require("next-test-api-route-handler");
const getTransactionProcessedEvents_1 = require("@/saleor-app-checkout/backend/payments/getTransactionProcessedEvents");
const updateTransactionProcessedEvents_1 = require("@/saleor-app-checkout/backend/payments/updateTransactionProcessedEvents");
const test_utils_1 = require("@/saleor-app-checkout/test-utils");
const handler = transaction_action_request_1.default;
handler.config = transaction_action_request_1.config;
jest.mock("@saleor/app-sdk/middleware", () =>
  Object.assign(
    Object.assign({ __esModule: true }, jest.requireActual("@saleor/app-sdk/middleware")),
    { withWebhookSignatureVerified: jest.fn((_) => (handler) => (req) => handler(req)) }
  )
);
jest.mock("@/saleor-app-checkout/backend/payments/getTransactionProcessedEvents", () => ({
  __esModule: true,
  getTransactionProcessedEvents: jest.fn().mockResolvedValue([]),
}));
jest.mock("@/saleor-app-checkout/backend/payments/updateTransactionProcessedEvents");
const mockedGetTransactionProcessedEvents =
  getTransactionProcessedEvents_1.getTransactionProcessedEvents;
const REQUEST_SIGNATURE = "valid_signature";
const getReqHeaders = (saleorDomainHeader) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return {
      "Content-Type": "application/json",
      [const_1.SALEOR_DOMAIN_HEADER]: saleorDomainHeader,
      "saleor-signature": REQUEST_SIGNATURE,
      "saleor-event": "transaction_action_request",
    };
  });
describe("Saleor TRANSACTION_ACTION_REQUEST webhook handler", () => {
  it("Rejects requests without transaction data", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("warn");
      yield (0, next_test_api_route_handler_1.testApiHandler)({
        handler,
        params: {
          saleorApiUrl: "https://saleor-api-host.saleor.localhost:8000/graphql/",
        },
        test: ({ fetch }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch({
              method: "POST",
              body: JSON.stringify(saleor_1.transactionActionRequest.missingData),
              headers: yield getReqHeaders("saleor-api-host.saleor.localhost:8000"),
            });
            expect(res.status).toBe(response_1.Response.BadRequest().status);
            yield expect(res.json()).resolves.toStrictEqual({
              success: false,
              message: expect.any(String),
            });
          }),
      });
    }));
  it("Ignores events that were already processed", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockedGetTransactionProcessedEvents.mockResolvedValueOnce([REQUEST_SIGNATURE]);
      yield (0, next_test_api_route_handler_1.testApiHandler)({
        handler,
        url: "?saleorApiUrl=https://saleor-api-host.saleor.localhost:8000/graphql/",
        test: ({ fetch }) =>
          __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch({
              method: "POST",
              body: JSON.stringify(saleor_1.transactionActionRequest.adyenRefund),
              headers: yield getReqHeaders("saleor-api-host.saleor.localhost:8000"),
            });
            expect(res.status).toBe(200);
            expect(mockedGetTransactionProcessedEvents).toHaveBeenCalled();
            yield expect(res.json()).resolves.toStrictEqual({
              success: true,
              message: expect.any(String),
            });
          }),
      });
      jest.restoreAllMocks();
    }));
  describe("Transaction refund handling", () => {
    // TODO: Fix Polly.js request recording
    it.skip("Refunds transactions in Mollie", () =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield (0, next_test_api_route_handler_1.testApiHandler)({
          handler,
          test: ({ fetch }) =>
            __awaiter(void 0, void 0, void 0, function* () {
              var _a;
              const res = yield fetch({
                method: "POST",
                body: JSON.stringify(saleor_1.transactionActionRequest.mollieRefund),
                headers: yield getReqHeaders("saleor-api-host.saleor.localhost:8000"),
              });
              expect(res.status).toBe(200);
              yield expect(res.json()).resolves.toStrictEqual({
                success: true,
              });
              expect(
                updateTransactionProcessedEvents_1.updateTransactionProcessedEvents
              ).toHaveBeenCalledWith({
                id:
                  (_a = saleor_1.transactionActionRequest.mollieRefund.transaction) === null ||
                  _a === void 0
                    ? void 0
                    : _a.id,
                input: JSON.stringify([REQUEST_SIGNATURE]),
              });
            }),
        });
      }));
    // TODO: Fix Polly.js request recording
    it.skip("Refunds transactions in Adyen", () =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield (0, next_test_api_route_handler_1.testApiHandler)({
          handler,
          test: ({ fetch }) =>
            __awaiter(void 0, void 0, void 0, function* () {
              var _b;
              const res = yield fetch({
                method: "POST",
                body: JSON.stringify(saleor_1.transactionActionRequest.adyenRefund),
                headers: yield getReqHeaders("saleor-api-host.saleor.localhost:8000"),
              });
              expect(res.status).toBe(200);
              yield expect(res.json()).resolves.toStrictEqual({
                success: true,
              });
              expect(
                updateTransactionProcessedEvents_1.updateTransactionProcessedEvents
              ).toHaveBeenCalledWith({
                id:
                  (_b = saleor_1.transactionActionRequest.adyenRefund.transaction) === null ||
                  _b === void 0
                    ? void 0
                    : _b.id,
                input: JSON.stringify([REQUEST_SIGNATURE]),
              });
            }),
        });
      }));
  });
  describe("Transaction void handling", () => {
    it.skip("Voids transactions in Mollie", () => {});
    it.skip("Void transactions in Adyen", () => {});
  });
});

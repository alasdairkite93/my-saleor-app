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
const saleor_1 = require("@/saleor-app-checkout/mocks/fixtures/saleor");
const mollie_1 = __importDefault(require("@/saleor-app-checkout/pages/api/webhooks/mollie"));
const test_utils_1 = require("@/saleor-app-checkout/test-utils");
describe("/api/webhooks/mollie", () => {
  const context = (0, test_utils_1.setupRecording)();
  beforeEach(() => (0, test_utils_1.setupPollyMiddleware)(context.polly.server));
  afterEach(() => context.polly.flush());
  it("handles invalid (empty) requests payments", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {};
      yield (0, mollie_1.default)(req, res);
      expect(res.statusCode).toBe(400);
    }));
  it("handles requests with invalid orderId", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("error");
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {
        id: "invalid_id",
      };
      yield (0, mollie_1.default)(req, res);
      expect(res.statusCode).toBe(500);
    }));
  it("handles request with completed payment", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("info");
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {
        id: saleor_1.mollieCompletedOrderId,
      };
      yield (0, mollie_1.default)(req, res);
      expect(res.statusCode).toBe(200);
    }));
});

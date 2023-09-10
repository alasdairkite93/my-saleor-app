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
const pay_1 = __importDefault(require("@/saleor-app-checkout/pages/api/pay"));
const test_utils_1 = require("@/saleor-app-checkout/test-utils");
const mollie_1 = require("@/saleor-app-checkout/backend/payments/providers/mollie");
const adyen_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen");
const createOrder_1 = require("@/saleor-app-checkout/backend/payments/createOrder");
const updatePaymentMetafield_1 = require("@/saleor-app-checkout/backend/payments/updatePaymentMetafield");
const verifySession_1 = require("@/saleor-app-checkout/backend/payments/providers/mollie/verifySession");
const verifySession_2 = require("@/saleor-app-checkout/backend/payments/providers/adyen/verifySession");
jest.mock("@/saleor-app-checkout/backend/payments/createOrder");
jest.mock("@/saleor-app-checkout/backend/payments/providers/mollie");
jest.mock("@/saleor-app-checkout/backend/payments/providers/adyen");
jest.mock("@/saleor-app-checkout/backend/payments/updatePaymentMetafield");
jest.mock("@/saleor-app-checkout/backend/payments/providers/adyen/verifySession");
jest.mock("@/saleor-app-checkout/backend/payments/providers/mollie/verifySession");
jest.mock("@mollie/api-client");
jest.mock("urql");
const mockedCreateOrder = createOrder_1.createOrder;
const mockedCreateMolliePayment = mollie_1.createMolliePayment;
const mockedCreateAdyenPayment = adyen_1.createAdyenCheckoutPaymentLinks;
const mockedUpdatePaymentMetafield = updatePaymentMetafield_1.updatePaymentMetafield;
const mockedVerifyAdyenSession = verifySession_2.verifyAdyenSession;
const mockReuseExistingAdyenSession = verifySession_2.reuseExistingAdyenSession;
const mockedVerifyMollieSession = verifySession_1.verifyMollieSession;
const mockReuseExistingMollieSession = verifySession_1.reuseExistingMollieSession;
describe("/api/pay", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("rejects when wrong request method is used", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { req, res } = (0, test_utils_1.mockRequest)("GET");
      yield (0, pay_1.default)(req, res);
      expect(res.statusCode).toBe(405);
    }));
  it("throws an error if incorrect provider is passed", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {
        checkoutId: "id",
        provider: "unknown",
        method: "creditCard",
        totalAmount: 100,
      };
      yield (0, pay_1.default)(req, res);
      expect(mockedCreateOrder).not.toHaveBeenCalled();
      expect(mockedCreateMolliePayment).not.toHaveBeenCalled();
      const data = res._getJSONData();
      expect(res.statusCode).toBe(400);
      expect(data.ok).toBe(false);
      expect(data.errors.length).toBe(1);
      expect(data.errors[0]).toBe("UNKNOWN_PROVIDER");
    }));
  it("accepts and processes new payment: mollie", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const mockOrderData = {};
      mockedCreateOrder.mockResolvedValueOnce({ data: mockOrderData });
      mockedCreateMolliePayment.mockResolvedValueOnce({
        url: "mollie-redirect-url",
        id: "test-id",
      });
      mockedUpdatePaymentMetafield.mockResolvedValueOnce(true);
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {
        checkoutId: "id",
        provider: "mollie",
        method: "creditCard",
        totalAmount: 100,
        redirectUrl: "example.com",
        checkoutApiUrl: "http://localhost:3000",
      };
      req.headers = {
        host: "app.com",
      };
      yield (0, pay_1.default)(req, res);
      expect(mockedCreateOrder).toHaveBeenCalledWith({
        checkoutId: "id",
        saleorApiUrl: process.env.NEXT_PUBLIC_SALEOR_API_URL,
        totalAmount: 100,
      });
      expect(mockedCreateOrder).toHaveBeenCalledTimes(1);
      expect(mockedCreateMolliePayment).toHaveBeenCalledWith({
        order: mockOrderData,
        method: "creditCard",
        redirectUrl: "example.com",
        appUrl: "http://app.com",
        saleorApiUrl: process.env.NEXT_PUBLIC_SALEOR_API_URL,
      });
      expect(mockedCreateMolliePayment).toHaveBeenCalledTimes(1);
      const data = res._getJSONData();
      expect(res.statusCode).toBe(200);
      expect(data.ok).toBe(true);
      expect(data.provider).toBe("mollie");
      expect(data.data.paymentUrl).toBe("mollie-redirect-url");
    }));
  it("accepts and reuses existing payment session: mollie", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const mockOrderData = {
        privateMetafield: JSON.stringify({
          provider: "mollie",
          session: "session-id-1",
          method: "creditCard",
        }),
      };
      mockedCreateOrder.mockResolvedValueOnce({ data: mockOrderData });
      mockedVerifyMollieSession.mockResolvedValueOnce({
        status: "created",
        url: "mollie-redirect-url",
      });
      mockReuseExistingMollieSession.mockResolvedValueOnce({
        ok: true,
        provider: "mollie",
        data: { paymentUrl: "mollie-redirect-url" },
      });
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {
        checkoutId: "id",
        provider: "mollie",
        method: "creditCard",
        totalAmount: 100,
        redirectUrl: "example.com",
        checkoutApiUrl: "http://localhost:3000",
      };
      req.headers = {
        host: "app.com",
      };
      yield (0, pay_1.default)(req, res);
      expect(mockedCreateOrder).toHaveBeenCalledWith({
        checkoutId: "id",
        saleorApiUrl: process.env.NEXT_PUBLIC_SALEOR_API_URL,
        totalAmount: 100,
      });
      expect(mockedCreateOrder).toHaveBeenCalledTimes(1);
      expect(mockedCreateMolliePayment).not.toHaveBeenCalled();
      expect(mockedUpdatePaymentMetafield).not.toHaveBeenCalled();
      const data = res._getJSONData();
      expect(res.statusCode).toBe(200);
      expect(data.ok).toBe(true);
      expect(data.provider).toBe("mollie");
      expect(data.data.paymentUrl).toBe("mollie-redirect-url");
    }));
  it("accepts and processes new payment: adyen", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const mockOrderData = {
        privateMetafield: JSON.stringify({
          provider: "adyen",
          session: "session-id-2",
          method: "creditCard",
        }),
      };
      mockedCreateOrder.mockResolvedValueOnce({ data: mockOrderData });
      mockedCreateAdyenPayment.mockResolvedValueOnce({
        url: "adyen-redirect-url",
        id: "test-id",
      });
      mockedUpdatePaymentMetafield.mockResolvedValueOnce(true);
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {
        checkoutId: "id",
        provider: "adyen",
        method: "creditCard",
        totalAmount: 100,
        redirectUrl: "example.com",
        checkoutApiUrl: "http://localhost:3000",
      };
      yield (0, pay_1.default)(req, res);
      expect(mockedCreateOrder).toHaveBeenCalledWith({
        checkoutId: "id",
        saleorApiUrl: process.env.NEXT_PUBLIC_SALEOR_API_URL,
        totalAmount: 100,
      });
      expect(mockedCreateOrder).toHaveBeenCalledTimes(1);
      expect(mockedCreateAdyenPayment).toHaveBeenCalledWith({
        appUrl: "http://",
        method: "creditCard",
        order: {
          privateMetafield: '{"provider":"adyen","session":"session-id-2","method":"creditCard"}',
        },
        redirectUrl: "example.com",
        saleorApiUrl: process.env.NEXT_PUBLIC_SALEOR_API_URL,
      });
      expect(mockedCreateAdyenPayment).toHaveBeenCalledTimes(1);
      const data = res._getJSONData();
      expect(res.statusCode).toBe(200);
      expect(data.ok).toBe(true);
      expect(data.provider).toBe("adyen");
      expect(data.data.paymentUrl).toBe("adyen-redirect-url");
    }));
  it("accepts and reuses existing payment session: adyen", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const mockOrderData = {
        privateMetafield: JSON.stringify({
          provider: "adyen",
          session: "session-id-2",
          method: "creditCard",
        }),
      };
      mockReuseExistingAdyenSession.mockResolvedValueOnce({
        ok: true,
        provider: "adyen",
        data: { paymentUrl: "adyen-redirect-url" },
      });
      mockedCreateOrder.mockResolvedValueOnce({ data: mockOrderData });
      mockedVerifyAdyenSession.mockResolvedValueOnce({
        status: 0,
        url: "adyen-redirect-url",
      });
      const { req, res } = (0, test_utils_1.mockRequest)("POST");
      req.body = {
        checkoutId: "id",
        provider: "adyen",
        method: "creditCard",
        totalAmount: 100,
        redirectUrl: "example.com",
        checkoutApiUrl: "http://localhost:3000",
      };
      req.headers = {
        host: "app.com",
      };
      yield (0, pay_1.default)(req, res);
      expect(mockedCreateOrder).toHaveBeenCalledWith({
        checkoutId: "id",
        saleorApiUrl: process.env.NEXT_PUBLIC_SALEOR_API_URL,
        totalAmount: 100,
      });
      expect(mockedCreateOrder).toHaveBeenCalledTimes(1);
      expect(mockedCreateAdyenPayment).not.toHaveBeenCalled();
      expect(mockedUpdatePaymentMetafield).not.toHaveBeenCalled();
      const data = res._getJSONData();
      expect(res.statusCode).toBe(200);
      expect(data.ok).toBe(true);
      expect(data.provider).toBe("adyen");
      expect(data.data.paymentUrl).toBe("adyen-redirect-url");
    }));
});

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
const middlewares_1 = require("@/saleor-app-checkout/backend/middlewares");
const const_1 = require("@saleor/app-sdk/const");
const TEST_SALEOR_URL = process.env.NEXT_PUBLIC_SALEOR_API_URL;
const TEST_SALEOR_DOMAIN = new URL(TEST_SALEOR_URL).hostname;
jest.mock("@/saleor-app-checkout/backend/utils.ts");
const mockRequest = {
  params: {},
  url: "",
  // @ts-expect-error Expects IncomingMessage, but object will do fine
  body: {},
  host: TEST_SALEOR_DOMAIN,
  method: "POST",
  context: {},
  headers: {},
};
describe("withSaleorDomainMatch", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("handles missing Saleor domain in query", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const handler = jest.fn();
      const result = yield (0, middlewares_1.withSaleorDomainMatch)(handler)(
        Object.assign(Object.assign({}, mockRequest), {
          headers: {
            [const_1.SALEOR_DOMAIN_HEADER]: TEST_SALEOR_DOMAIN,
          },
        })
      );
      expect(result.body).toHaveProperty("success", false);
      expect(result.body).toHaveProperty("message");
      expect(result.status).toBe(400);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("handles missing Saleor domain in headers", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const handler = jest.fn();
      const result = yield (0, middlewares_1.withSaleorDomainMatch)(handler)(
        Object.assign(Object.assign({}, mockRequest), {
          params: Object.assign(Object.assign({}, mockRequest.params), {
            saleorApiUrl: TEST_SALEOR_URL,
          }),
        })
      );
      expect(result.body).toHaveProperty("success", false);
      expect(result.body).toHaveProperty("message");
      expect(result.status).toBe(400);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("handles empty Saleor domain in headers", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const handler = jest.fn();
      const result = yield (0, middlewares_1.withSaleorDomainMatch)(handler)(
        Object.assign(Object.assign({}, mockRequest), {
          headers: {
            [const_1.SALEOR_DOMAIN_HEADER]: "",
          },
          params: Object.assign(Object.assign({}, mockRequest.params), {
            saleorApiUrl: TEST_SALEOR_URL,
          }),
        })
      );
      expect(result.body).toHaveProperty("success", false);
      expect(result.body).toHaveProperty("message");
      expect(result.status).toBe(400);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("handles mismatched Saleor domain in headers", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const handler = jest.fn();
      const result = yield (0, middlewares_1.withSaleorDomainMatch)(handler)(
        Object.assign(Object.assign({}, mockRequest), {
          headers: {
            [const_1.SALEOR_DOMAIN_HEADER]: "some-other-comain.com",
          },
          params: Object.assign(Object.assign({}, mockRequest.params), {
            saleorApiUrl: TEST_SALEOR_URL,
          }),
        })
      );
      expect(result.body).toHaveProperty("success", false);
      expect(result.body).toHaveProperty("message");
      expect(result.status).toBe(400);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("handles correct Saleor domain in request", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const handler = jest.fn();
      yield (0, middlewares_1.withSaleorDomainMatch)(handler)(
        Object.assign(Object.assign({}, mockRequest), {
          headers: {
            [const_1.SALEOR_DOMAIN_HEADER]: TEST_SALEOR_DOMAIN,
          },
          params: Object.assign(Object.assign({}, mockRequest.params), {
            saleorApiUrl: TEST_SALEOR_URL,
          }),
        })
      );
      expect(handler).toHaveBeenCalled();
    }));
});

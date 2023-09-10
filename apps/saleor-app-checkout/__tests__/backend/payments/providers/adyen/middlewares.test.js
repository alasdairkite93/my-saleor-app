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
const middlewares_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/middlewares");
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const response_1 = require("retes/response");
const validator_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/validator");
const test_utils_1 = require("@/saleor-app-checkout/test-utils");
jest.mock("@/saleor-app-checkout/backend/configuration/settings");
jest.mock("@/saleor-app-checkout/backend/payments/providers/adyen/validator");
const mockedGetPrivateSettings = settings_1.getPrivateSettings;
const mockedValidateHmac = validator_1.validateHmac;
const TEST_REQUEST_DOMAIN = "vercel.com";
const TEST_ADYEN_PASSWORD = "password";
const TEST_ADYEN_USERNAME = "adyen_webhook";
const mockRequest = {
  params: {
    saleorApiUrl: "https://saleor-api-host.saleor.localhost:8000/graphql/",
    live: "false",
    notificationItems: [],
  },
  url: "",
  // @ts-expect-error Expects IncomingMessage, but object will do fine
  body: {},
  host: TEST_REQUEST_DOMAIN,
  method: "POST",
  context: {},
  headers: {},
};
const adyenConfig = {
  hmac: "123",
  apiKey: "123",
  password: TEST_ADYEN_PASSWORD,
  username: TEST_ADYEN_USERNAME,
  clientKey: "123",
  merchantAccount: "Saleor",
};
const requestWithNotification = Object.assign(Object.assign({}, mockRequest), {
  context: Object.assign({}, adyenConfig),
  params: Object.assign(Object.assign({}, mockRequest.params), {
    live: "false",
    notificationItems: [
      {
        NotificationRequestItem: {
          additionalData: {
            hmacSignature: "123",
          },
        },
      },
    ],
  }),
});
const mockPrivateSettings = (returnMockedSettings = true) => {
  if (!returnMockedSettings) {
    mockedGetPrivateSettings.mockResolvedValueOnce({
      paymentProviders: {
        adyen: {},
        mollie: {},
        stripe: {},
        dummy: {},
      },
    });
  }
  return mockedGetPrivateSettings.mockResolvedValueOnce({
    paymentProviders: {
      adyen: {
        hmac: "123",
        apiKey: "123",
        password: TEST_ADYEN_PASSWORD,
        username: TEST_ADYEN_USERNAME,
        clientKey: "123",
        merchantAccount: "Saleor",
      },
      mollie: {},
      stripe: {},
      dummy: {},
    },
  });
};
const handler = jest.fn(() => response_1.Response.OK("[accepted]"));
afterEach(() => {
  jest.clearAllMocks();
  handler.mockClear();
});
describe("withAdyenWebhookCredentials", () => {
  it("returns an error if it cannot fetch Adyen configuration", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("error");
      mockedGetPrivateSettings.mockRejectedValueOnce("Error while making request");
      const res = yield (0, middlewares_1.withAdyenWebhookCredentials)(handler)(mockRequest);
      expect(res.status).toBe(response_1.Response.InternalServerError().status);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("returns an error if it has missing Adyen configuration", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      (0, test_utils_1.disableConsole)("error");
      mockPrivateSettings(false);
      const res = yield (0, middlewares_1.withAdyenWebhookCredentials)(handler)(mockRequest);
      expect(res.status).toBe(response_1.Response.InternalServerError().status);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("passes Adyen configuration as request context", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockedGetPrivateSettings.mockResolvedValueOnce({
        paymentProviders: {
          adyen: adyenConfig,
          mollie: {},
          stripe: {},
          dummy: {},
        },
      });
      yield (0, middlewares_1.withAdyenWebhookCredentials)(handler)(mockRequest);
      expect(handler).toHaveBeenCalledWith(
        Object.assign(Object.assign({}, mockRequest), {
          context: Object.assign(Object.assign({}, mockRequest.context), adyenConfig),
        })
      );
    }));
});
describe("isAdyenNotification middleware", () => {
  it("rejects invalid request shape", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield (0, middlewares_1.isAdyenNotification)(handler)(
        Object.assign(Object.assign({}, mockRequest), { params: {} })
      );
      expect(res.status).toBe(response_1.Response.BadRequest().status);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("calls handler if request has correct shape", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield (0, middlewares_1.isAdyenNotification)(handler)(requestWithNotification);
      expect(handler).toHaveBeenCalledTimes(1);
    }));
});
describe("isAdyenWebhookAuthenticated middleware", () => {
  it("returns error when request is missing auth header", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockPrivateSettings();
      const res = yield (0, middlewares_1.isAdyenWebhookAuthenticated)(handler)(mockRequest);
      expect(res.status).toBe(response_1.Response.Unauthorized().status);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("returns an error when authorization token is invalid", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockPrivateSettings();
      const res = yield (0, middlewares_1.isAdyenWebhookAuthenticated)(handler)(
        Object.assign(Object.assign({}, mockRequest), {
          headers: {
            authorization: "Basic invalid_key",
          },
        })
      );
      expect(res.status).toBe(response_1.Response.Unauthorized().status);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("passes request when authorization header is valid", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockPrivateSettings();
      const authToken = Buffer.from(
        TEST_ADYEN_USERNAME + ":" + TEST_ADYEN_PASSWORD,
        "ascii"
      ).toString("base64");
      const request = Object.assign(Object.assign({}, mockRequest), {
        context: adyenConfig,
        headers: {
          authorization: `Basic ${authToken}`,
        },
      });
      yield (0, middlewares_1.isAdyenWebhookAuthenticated)(handler)(request);
      expect(handler).toHaveBeenCalled();
      expect(handler).toHaveBeenCalledWith(request);
    }));
});
describe("isAdyenWebhookHmacValid middleware", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });
  it("returns an error if notificationRequestItem is not present", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield (0, middlewares_1.isAdyenWebhookHmacValid)(handler)(mockRequest);
      expect(res.status).toBe(response_1.Response.BadRequest().status);
      expect(handler).not.toHaveBeenCalled();
    }));
  it("returns an error if hmacSignature is not present uin request", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockedValidateHmac.mockRejectedValueOnce("Error - header not present");
      const res = yield (0, middlewares_1.isAdyenWebhookHmacValid)(handler)(
        requestWithNotification
      );
      expect(res.status).toBe(response_1.Response.Unauthorized().status);
      expect(handler).not.toHaveBeenCalled();
      expect(mockedValidateHmac).toHaveBeenCalledWith(expect.anything(), adyenConfig.hmac);
    }));
  it("returns an error when hmac in request is invalid", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockedValidateHmac.mockResolvedValueOnce(false);
      const res = yield (0, middlewares_1.isAdyenWebhookHmacValid)(handler)(
        requestWithNotification
      );
      expect(res.status).toBe(response_1.Response.Unauthorized().status);
      expect(handler).not.toHaveBeenCalled();
      expect(mockedValidateHmac).toHaveBeenCalledWith(expect.anything(), adyenConfig.hmac);
    }));
  it("passes request when hmac is valid", () =>
    __awaiter(void 0, void 0, void 0, function* () {
      mockedValidateHmac.mockResolvedValueOnce(true);
      yield (0, middlewares_1.isAdyenWebhookHmacValid)(handler)(requestWithNotification);
      expect(handler).toHaveBeenCalled();
      expect(mockedValidateHmac).toHaveBeenCalledWith(expect.anything(), adyenConfig.hmac);
    }));
});

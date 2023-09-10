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
const createOrderFromBody_1 = require("@/saleor-app-checkout/backend/payments/createOrderFromBody");
const errors_1 = require("@/saleor-app-checkout/backend/payments/errors");
const adyen_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen");
const verifySession_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/verifySession");
const createPayment_1 = require("@/saleor-app-checkout/backend/payments/providers/dummy/createPayment");
const mollie_1 = require("@/saleor-app-checkout/backend/payments/providers/mollie");
const verifySession_2 = require("@/saleor-app-checkout/backend/payments/providers/mollie/verifySession");
const createPayment_2 = require("@/saleor-app-checkout/backend/payments/providers/stripe/createPayment");
const verifySession_3 = require("@/saleor-app-checkout/backend/payments/providers/stripe/verifySession");
const updatePaymentMetafield_1 = require("@/saleor-app-checkout/backend/payments/updatePaymentMetafield");
const utils_1 = require("@/saleor-app-checkout/backend/utils");
const utils_2 = require("@/saleor-app-checkout/utils");
const checkout_common_1 = require("checkout-common");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const auth_1 = require("@/saleor-app-checkout/backend/auth");
const reuseExistingSession = (saleorApiUrl, { orderId, provider, method, privateMetafield }) => {
  const payment = JSON.parse(privateMetafield);
  if (payment.provider !== provider || payment.method !== method || !payment.session) {
    return;
  }
  const params = {
    payment,
    orderId,
    provider,
    method,
    privateMetafield,
  };
  switch (payment.provider) {
    case "mollie":
      return (0, verifySession_2.reuseExistingMollieSession)(saleorApiUrl, params);
    case "adyen":
      return (0, verifySession_1.reuseExistingAdyenSession)(saleorApiUrl, params);
    case "stripe":
      return (0, verifySession_3.reuseExistingStripeSession)(saleorApiUrl, params);
    case "dummy":
      return undefined;
    default:
      (0, checkout_common_1.assertUnreachable)(payment.provider);
  }
};
const getPaymentResponse = ({ saleorApiUrl, body, appUrl }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!checkout_common_1.PaymentProviders.includes(body.provider)) {
      throw new errors_1.KnownPaymentError(body.provider, ["UNKNOWN_PROVIDER"]);
    }
    if (!checkout_common_1.PaymentMethods.includes(body.method)) {
      throw new errors_1.KnownPaymentError(body.provider, ["UNKNOWN_METHOD"]);
    }
    const order = yield (0, createOrderFromBody_1.createOrderFromBodyOrId)(saleorApiUrl, body);
    if (order.privateMetafield) {
      const existingSessionResponse = yield reuseExistingSession(saleorApiUrl, {
        orderId: order.id,
        privateMetafield: order.privateMetafield,
        provider: body.provider,
        method: body.method,
      });
      if (existingSessionResponse) {
        return existingSessionResponse;
      }
    }
    const [paymentUrlError, data] = yield (0, unpackErrors_1.unpackPromise)(
      getPaymentUrlIdForProvider({ saleorApiUrl, body, order, appUrl })
    );
    if (paymentUrlError) {
      console.error(paymentUrlError);
      throw new errors_1.UnknownPaymentError(body.provider, paymentUrlError, order);
    }
    const { id, url } = data;
    if (!url) {
      throw new errors_1.MissingUrlError(body.provider, order);
    }
    const response = {
      ok: true,
      provider: body.provider,
      orderId: order.id,
      data: {
        paymentUrl: url,
      },
    };
    const payment = {
      provider: body.provider,
      method: body.method,
      session: id,
    };
    yield (0,
    updatePaymentMetafield_1.updatePaymentMetafield)({ saleorApiUrl, orderId: order.id, payment });
    return response;
  });
const handler = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.debug("Pay endpoint called");
    if (req.method !== "POST") {
      res.status(405).send({ message: "Only POST requests allowed" });
      return;
    }
    const [saleorApiUrlError, saleorApiUrl] = (0, unpackErrors_1.unpackThrowable)(() =>
      (0, auth_1.getSaleorApiUrlFromRequest)(req)
    );
    if (saleorApiUrlError) {
      res.status(400).json({ message: saleorApiUrlError.message });
      return;
    }
    const [error, body] =
      typeof req.body === "string" ? (0, utils_2.safeJsonParse)(req.body) : [null, req.body];
    if (error) {
      console.error(error, req.body);
      res.status(400).send({ message: "Invalid JSON" });
      return;
    }
    try {
      const appUrl = (0, utils_1.getBaseUrl)(req);
      const response = yield getPaymentResponse({ saleorApiUrl, body, appUrl });
      return res.status(200).json(response);
    } catch (err) {
      if (err instanceof errors_1.KnownPaymentError) {
        return res.status(400).json({
          ok: false,
          provider: err.provider,
          errors: err.errors,
        });
      }
      console.error(err);
      Sentry.captureException(err);
      if (err instanceof errors_1.UnknownPaymentError) {
        return res.status(500).json({
          ok: false,
          provider: err.provider,
          orderId: (_a = err.order) === null || _a === void 0 ? void 0 : _a.id,
        });
      }
      if (err instanceof errors_1.MissingUrlError) {
        return res
          .status(503)
          .json({
            ok: false,
            provider: err.provider,
            orderId: (_b = err.order) === null || _b === void 0 ? void 0 : _b.id,
          });
      }
      return res.status(500).json({ ok: false, provider: body.provider });
    }
  });
const getPaymentUrlIdForProvider = ({ saleorApiUrl, body, order, appUrl }) => {
  const createPaymentData = {
    saleorApiUrl,
    order,
    redirectUrl: body.redirectUrl,
    method: body.method,
    appUrl,
  };
  switch (body.provider) {
    case "mollie":
      return (0, mollie_1.createMolliePayment)(createPaymentData);
    case "adyen":
      return (0, adyen_1.createAdyenCheckoutPaymentLinks)(createPaymentData);
    case "stripe":
      return (0, createPayment_2.createStripePayment)(createPaymentData);
    case "dummy":
      const url = new URL(body.redirectUrl);
      url.searchParams.set("order", order.id);
      url.searchParams.set("dummyPayment", "true");
      url.searchParams.set("saleorApiUrl", saleorApiUrl);
      const domain = url.hostname;
      // @todo remove `domain`
      // https://github.com/saleor/saleor-dashboard/issues/2387
      // https://github.com/saleor/saleor-app-sdk/issues/87
      url.searchParams.set("domain", domain);
      return (0, createPayment_1.createDummyPayment)(
        Object.assign(Object.assign({}, createPaymentData), { redirectUrl: url.toString() })
      );
    default:
      (0, checkout_common_1.assertUnreachable)(body.provider);
  }
};
exports.default = (0, utils_1.allowCors)(handler);

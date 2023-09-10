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
var __asyncValues =
  (this && this.__asyncValues) ||
  function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
      i;
    return m
      ? m.call(o)
      : ((o = typeof __values === "function" ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb("next"),
        verb("throw"),
        verb("return"),
        (i[Symbol.asyncIterator] = function () {
          return this;
        }),
        i);
    function verb(n) {
      i[n] =
        o[n] &&
        function (v) {
          return new Promise(function (resolve, reject) {
            (v = o[n](v)), settle(resolve, reject, v.done, v.value);
          });
        };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({ value: v, done: d });
      }, reject);
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const Sentry = __importStar(require("@sentry/nextjs"));
const updateOrCreateTransaction_1 = require("@/saleor-app-checkout/backend/payments/updateOrCreateTransaction");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const stripeClient_1 = require("@/saleor-app-checkout/backend/payments/providers/stripe/stripeClient");
const webhookHandler_1 = require("@/saleor-app-checkout/backend/payments/providers/stripe/webhookHandler");
const auth_1 = require("@/saleor-app-checkout/backend/auth");
const errors_1 = require("@/saleor-app-checkout/backend/payments/errors");
// https://github.com/vercel/next.js/discussions/12517#discussioncomment-2929922
function buffer(readable) {
  var readable_1, readable_1_1;
  var e_1, _a;
  return __awaiter(this, void 0, void 0, function* () {
    const chunks = [];
    try {
      for (
        readable_1 = __asyncValues(readable);
        (readable_1_1 = yield readable_1.next()), !readable_1_1.done;

      ) {
        const chunk = readable_1_1.value;
        chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (readable_1_1 && !readable_1_1.done && (_a = readable_1.return))
          yield _a.call(readable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return Buffer.concat(chunks);
  });
}
const stripeWebhook = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    console.debug("stripeWebhook handler called");
    const [saleorApiUrlError, saleorApiUrl] = (0, unpackErrors_1.unpackThrowable)(() =>
      (0, auth_1.getSaleorApiUrlFromRequest)(req)
    );
    if (saleorApiUrlError) {
      res.status(400).json({ message: saleorApiUrlError.message });
      return;
    }
    const sig = req.headers["stripe-signature"];
    if (typeof sig !== "string") {
      return res.status(400).json({ message: '"stripe-signature" header is missing' });
    }
    const [stripeSecretsError, stripeSecrets] = yield (0, unpackErrors_1.unpackPromise)(
      (0, stripeClient_1.getStripeSecrets)(saleorApiUrl)
    );
    if (stripeSecretsError) {
      console.error(stripeSecretsError);
      if (stripeSecretsError instanceof errors_1.MissingPaymentProviderSettingsError) {
        res.status(500).json({ error: stripeSecretsError.message });
        return;
      }
      Sentry.captureException(stripeSecretsError);
      res.status(500).json({ error: "getStripeSecrets failed" });
      return;
    }
    const body = yield buffer(req);
    const [verifyStripeEventSignatureError, event] = yield (0, unpackErrors_1.unpackPromise)(
      (0, webhookHandler_1.verifyStripeEventSignature)({
        saleorApiUrl,
        body,
        signature: sig,
        secret: stripeSecrets.webhookSecret,
      })
    );
    if (verifyStripeEventSignatureError || !event) {
      console.error(verifyStripeEventSignatureError);
      Sentry.captureException(verifyStripeEventSignatureError);
      return res
        .status(500)
        .json({
          message:
            verifyStripeEventSignatureError === null || verifyStripeEventSignatureError === void 0
              ? void 0
              : verifyStripeEventSignatureError.message,
        });
    }
    const transactionData = yield (0,
    webhookHandler_1.stripeWebhookEventToTransactionCreateMutationVariables)({
      saleorApiUrl,
      event,
    });
    if (transactionData === null || transactionData === void 0 ? void 0 : transactionData.id) {
      const id = transactionData.id;
      yield (0, updateOrCreateTransaction_1.updateOrCreateTransaction)({
        saleorApiUrl,
        orderId: id,
        transactionData: Object.assign(Object.assign({}, transactionData), { id }),
      });
    }
    return res.status(204).end();
  });
exports.default = stripeWebhook;
exports.config = {
  api: {
    // required for verification of the signature
    bodyParser: false,
  },
};

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
exports.reuseExistingStripeSession = exports.verifyStripeSession = void 0;
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const checkout_common_1 = require("checkout-common");
const stripeClient_1 = require("./stripeClient");
const verifyStripeSession = ({ saleorApiUrl, session }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {
      paymentProviders: { stripe },
    } = yield (0, settings_1.getPrivateSettings)({ saleorApiUrl, obfuscateEncryptedData: false });
    (0, ts_invariant_1.default)(stripe.publishableKey, "Publishable key not defined");
    (0, ts_invariant_1.default)(stripe.secretKey, "Secret key not defined");
    const stripeClient = yield (0, stripeClient_1.getStripeClient)(saleorApiUrl);
    const { status, url } = yield stripeClient.checkout.sessions.retrieve(session);
    return { status, url };
  });
exports.verifyStripeSession = verifyStripeSession;
const reuseExistingStripeSession = (saleorApiUrl, { payment, orderId }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, exports.verifyStripeSession)({
      saleorApiUrl,
      session: payment.session,
    });
    if (!session.status || !session.url) {
      return;
    }
    switch (session.status) {
      case "expired":
        return {
          ok: false,
          provider: payment.provider,
          orderId,
          errors: ["EXPIRED"],
        };
      case "complete":
        return {
          ok: false,
          provider: payment.provider,
          orderId,
          errors: ["ALREADY_PAID"],
        };
      case "open":
        return {
          ok: true,
          provider: payment.provider,
          orderId,
          data: {
            paymentUrl: session.url,
          },
        };
      default:
        (0, checkout_common_1.assertUnreachable)(session.status);
    }
  });
exports.reuseExistingStripeSession = reuseExistingStripeSession;

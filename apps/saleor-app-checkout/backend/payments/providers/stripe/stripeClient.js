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
exports.getStripeSecrets = exports.getStripeClient = void 0;
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const stripe_1 = __importDefault(require("stripe"));
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const errors_1 = require("../../errors");
function getStripeClient(saleorApiUrl) {
  return __awaiter(this, void 0, void 0, function* () {
    const { secretKey } = yield (0, exports.getStripeSecrets)(saleorApiUrl);
    const stripeClient = new stripe_1.default(secretKey, {
      // Stripe API Version; required value
      apiVersion: "2022-08-01",
      typescript: true,
      httpClient: stripe_1.default.createFetchHttpClient(),
    });
    return stripeClient;
  });
}
exports.getStripeClient = getStripeClient;
const getStripeSecrets = (saleorApiUrl) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {
      paymentProviders: { stripe },
    } = yield (0, settings_1.getPrivateSettings)({ saleorApiUrl, obfuscateEncryptedData: false });
    const missingKeys = [
      !stripe.publishableKey && "publishableKey",
      !stripe.secretKey && "secretKey",
      !stripe.webhookSecret && "webhookSecret",
    ].filter((x) => typeof x === "string");
    if (missingKeys.length > 0) {
      throw new errors_1.MissingPaymentProviderSettingsError("stripe", missingKeys);
    }
    // redundant check for TypeScript
    (0, ts_invariant_1.default)(stripe.publishableKey, "Publishable key not defined");
    (0, ts_invariant_1.default)(stripe.secretKey, "Secret key not defined");
    (0, ts_invariant_1.default)(stripe.webhookSecret, "Webhook Secret key not defined");
    return {
      publishableKey: stripe.publishableKey,
      secretKey: stripe.secretKey,
      webhookSecret: stripe.webhookSecret,
    };
  });
exports.getStripeSecrets = getStripeSecrets;

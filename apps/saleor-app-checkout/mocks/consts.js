"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingVars = void 0;
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const constants_1 = require("../constants");
exports.testingVars = {
  mollieKey: process.env.TEST_MOLLIE_KEY,
  mollieProfileId: process.env.TEST_MOLLIE_PROFILE_ID,
  adyenMerchantAccount: process.env.TEST_ADYEN_MERCHANT_ACCOUNT,
  adyenClientKey: process.env.TEST_ADYEN_CLIENT_KEY,
  adyenApiKey: process.env.TEST_ADYEN_API_KEY,
  adyenHmac: process.env.TEST_ADYEN_HMAC,
  adyenWebhookPassword: process.env.TEST_ADYEN_WEBHOOK_PASSWORD,
  adyenWebhookUsername: process.env.TEST_ADYEN_WEBHOOK_USERNAME,
  stripeSecretKey: process.env.TEST_STRIPE_SECRET_KEY,
  stripeWebhookSecret: process.env.TEST_STRIPE_WEBHOOK_SECRET,
  stripePublishableKey: process.env.TEST_STRIPE_PUBLISHABLE_KEY,
};
if (constants_1.IS_TEST) {
  (0, ts_invariant_1.default)(exports.testingVars.mollieKey, "TEST_MOLLIE_KEY is not defined");
  (0, ts_invariant_1.default)(
    exports.testingVars.mollieProfileId,
    "TEST_MOLLIE_PROFILE_ID is not defined"
  );
  (0, ts_invariant_1.default)(
    exports.testingVars.adyenMerchantAccount,
    "TEST_ADYEN_MERCHANT_ACCOUNT is not defined"
  );
  (0, ts_invariant_1.default)(
    exports.testingVars.adyenClientKey,
    "TEST_ADYEN_CLIENT_KEY is not defined"
  );
  (0, ts_invariant_1.default)(exports.testingVars.adyenApiKey, "TEST_ADYEN_API_KEY is not defined");
  (0, ts_invariant_1.default)(exports.testingVars.adyenHmac, "TEST_ADYEN_HMAC is not defined");
  (0, ts_invariant_1.default)(
    exports.testingVars.adyenWebhookPassword,
    "TEST_ADYEN_WEBHOOK_PASSWORD is not defined"
  );
  (0, ts_invariant_1.default)(
    exports.testingVars.adyenWebhookUsername,
    "TEST_ADYEN_WEBHOOK_USERNAME is not defined"
  );
  (0, ts_invariant_1.default)(
    exports.testingVars.stripeSecretKey,
    "TEST_STRIPE_SECRET_KEY is not defined"
  );
  (0, ts_invariant_1.default)(
    exports.testingVars.stripeWebhookSecret,
    "TEST_STRIPE_WEBHOOK_SECRET is not defined"
  );
  (0, ts_invariant_1.default)(
    exports.testingVars.stripePublishableKey,
    "TEST_STRIPE_PUBLISHABLE_KEY is not defined"
  );
}

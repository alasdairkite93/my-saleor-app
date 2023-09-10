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
exports.reuseExistingAdyenSession = exports.verifyAdyenSession = void 0;
const api_library_1 = require("@adyen/api-library");
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const verifyAdyenSession = (saleorApiUrl, session) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {
      paymentProviders: { adyen },
    } = yield (0, settings_1.getPrivateSettings)({ saleorApiUrl, obfuscateEncryptedData: false });
    if (!adyen.apiKey) {
      throw "API key not defined";
    }
    // TODO: Remove hardcoded environment value
    // https://app.clickup.com/t/2549495/SALEOR-7263
    const client = new api_library_1.Client({
      apiKey: adyen.apiKey,
      environment: "TEST",
    });
    const checkout = new api_library_1.CheckoutAPI(client);
    const { status, url } = yield checkout.getPaymentLinks(session);
    return { status, url };
  });
exports.verifyAdyenSession = verifyAdyenSession;
const reuseExistingAdyenSession = (saleorApiUrl, { payment, orderId }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, exports.verifyAdyenSession)(saleorApiUrl, payment.session);
    const StatusEnum = api_library_1.Types.checkout.PaymentLinkResponse.StatusEnum;
    if (session.status === StatusEnum.Active) {
      return {
        ok: true,
        provider: payment.provider,
        orderId,
        data: {
          paymentUrl: session.url,
        },
      };
    } else if (
      // Session was successfully completed but Saleor has not yet registered the payment
      [StatusEnum.Completed, StatusEnum.PaymentPending].includes(session.status)
    ) {
      return {
        ok: false,
        provider: payment.provider,
        orderId,
        errors: ["ALREADY_PAID"],
      };
    } else {
      return;
    }
  });
exports.reuseExistingAdyenSession = reuseExistingAdyenSession;

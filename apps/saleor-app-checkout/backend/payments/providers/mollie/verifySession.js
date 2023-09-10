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
exports.reuseExistingMollieSession = exports.verifyMollieSession = void 0;
const api_client_1 = require("@mollie/api-client");
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const utils_1 = require("./utils");
const verifyMollieSession = ({ saleorApiUrl, session }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const {
      paymentProviders: { mollie },
    } = yield (0, settings_1.getPrivateSettings)({ saleorApiUrl, obfuscateEncryptedData: false });
    if (!mollie.apiKey) {
      throw "API key not defined";
    }
    const client = yield (0, utils_1.getMollieClient)(saleorApiUrl);
    const { status, _links } = yield client.orders.get(session);
    return { status, url: (_a = _links.checkout) === null || _a === void 0 ? void 0 : _a.href };
  });
exports.verifyMollieSession = verifyMollieSession;
const reuseExistingMollieSession = (saleorApiUrl, { payment, orderId }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, exports.verifyMollieSession)({
      saleorApiUrl,
      session: payment.session,
    });
    if (session.status === api_client_1.OrderStatus.created && session.url) {
      return {
        ok: true,
        provider: payment.provider,
        orderId,
        data: {
          paymentUrl: session.url,
        },
      };
    } else if (
      [
        api_client_1.OrderStatus.authorized,
        api_client_1.OrderStatus.completed,
        api_client_1.OrderStatus.paid,
        api_client_1.OrderStatus.pending,
        api_client_1.OrderStatus.shipping,
      ].includes(session.status)
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
exports.reuseExistingMollieSession = reuseExistingMollieSession;

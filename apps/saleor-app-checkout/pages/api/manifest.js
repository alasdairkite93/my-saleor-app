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
const constants_1 = require("../../constants");
const package_json_1 = require("../../package.json");
const transaction_action_request_1 = require("@/saleor-app-checkout/pages/api/webhooks/saleor/transaction-action-request");
const next_1 = require("@saleor/app-sdk/handlers/next");
const handler = (0, next_1.createManifestHandler)({
  manifestFactory(context) {
    return __awaiter(this, void 0, void 0, function* () {
      const { appBaseUrl } = context;
      return {
        id: "saleor.checkout.app",
        version: package_json_1.version,
        name: constants_1.appName,
        about: "Saleor checkout app to quickly configure and customize checkout in your store.",
        permissions: ["HANDLE_PAYMENTS", "HANDLE_CHECKOUTS", "MANAGE_ORDERS", "MANAGE_CHECKOUTS"],
        appUrl: appBaseUrl,
        dataPrivacyUrl: `${appBaseUrl}/data-privacy`,
        supportUrl: `${appBaseUrl}/support`,
        tokenTargetUrl: `${appBaseUrl}/api/register`,
        webhooks: [
          transaction_action_request_1.transactionActionRequestWebhook.getWebhookManifest(
            appBaseUrl
          ),
        ],
      };
    });
  },
});
exports.default = handler;

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
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const utils_1 = require("@/saleor-app-checkout/backend/utils");
const auth_1 = require("@/saleor-app-checkout/backend/auth");
const unpackErrors_1 = require("@/saleor-app-checkout/utils/unpackErrors");
const handler = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    console.debug("Active payment providers called");
    const [saleorApiUrlError, saleorApiUrl] = (0, unpackErrors_1.unpackThrowable)(() =>
      (0, auth_1.getSaleorApiUrlFromRequest)(req)
    );
    if (saleorApiUrlError) {
      res.status(400).json({ message: saleorApiUrlError.message });
      return;
    }
    const providersSettings = yield (0, settings_1.getActivePaymentProvidersSettings)(saleorApiUrl);
    res.status(200).json(providersSettings);
  });
exports.default = (0, utils_1.allowCors)(handler);

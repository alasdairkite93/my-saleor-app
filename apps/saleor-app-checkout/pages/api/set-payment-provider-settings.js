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
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const utils_1 = require("@/saleor-app-checkout/backend/utils");
const lodash_es_1 = require("lodash-es");
const next_1 = require("@saleor/app-sdk/handlers/next");
const saleorApp_1 = require("@/saleor-app-checkout/config/saleorApp");
const handler = (request, res, ctx) =>
  __awaiter(void 0, void 0, void 0, function* () {
    console.debug("Payment provider settings");
    const {
      authData: { saleorApiUrl },
    } = ctx;
    const data = request.body;
    if (!data) {
      return res.status(400).json({
        error: {
          message: "Submitted data is incorrect",
        },
      });
    }
    try {
      const settings = yield (0, settings_1.getPrivateSettings)({
        saleorApiUrl,
        obfuscateEncryptedData: false,
      });
      const newSettings = JSON.parse(data);
      const updatedSettings = yield (0, settings_1.setPrivateSettings)(
        saleorApiUrl,
        Object.assign(Object.assign({}, settings), {
          paymentProviders: (0, lodash_es_1.merge)(settings.paymentProviders, newSettings),
        })
      );
      return res.status(200).json({
        data: updatedSettings.paymentProviders,
      });
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      return res.status(500).json({ error });
    }
  });
exports.default = (0, utils_1.allowCors)(
  (0, next_1.createProtectedHandler)(handler, saleorApp_1.saleorApp.apl, ["HANDLE_PAYMENTS"])
);

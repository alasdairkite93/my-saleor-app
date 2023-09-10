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
exports.CheckoutVercelAPL = void 0;
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const getAuthDataFromEnvVariables = () => {
  const NEXT_PUBLIC_SALEOR_API_URL = process.env.NEXT_PUBLIC_SALEOR_API_URL;
  (0, ts_invariant_1.default)(NEXT_PUBLIC_SALEOR_API_URL, "Missing NEXT_PUBLIC_SALEOR_API_URL!");
  const SALEOR_APP_TOKEN = process.env.SALEOR_APP_TOKEN;
  (0, ts_invariant_1.default)(SALEOR_APP_TOKEN, "Missing SALEOR_APP_TOKEN!");
  const SALEOR_APP_ID = process.env.SALEOR_APP_ID;
  (0, ts_invariant_1.default)(SALEOR_APP_ID, "Missing SALEOR_APP_ID!");
  const SALEOR_APP_JWKS = process.env.SALEOR_APP_JWKS;
  (0, ts_invariant_1.default)(SALEOR_APP_JWKS, "Missing SALEOR_APP_JWKS!");
  const domain = new URL(NEXT_PUBLIC_SALEOR_API_URL).hostname;
  return {
    saleorApiUrl: NEXT_PUBLIC_SALEOR_API_URL,
    token: SALEOR_APP_TOKEN,
    appId: SALEOR_APP_ID,
    jwks: SALEOR_APP_JWKS,
    domain,
  };
};
class CheckoutVercelAPL {
  get(saleorApiUrl) {
    return __awaiter(this, void 0, void 0, function* () {
      const authData = getAuthDataFromEnvVariables();
      if (saleorApiUrl !== authData.saleorApiUrl) {
        console.log(
          `Saleor API URL mismatch. Requested AuthData for ${saleorApiUrl}, and environment is configured for ${authData.saleorApiUrl}.`
        );
        return;
      }
      return authData;
    });
  }
  set(_authData) {
    return __awaiter(this, void 0, void 0, function* () {
      console.log(
        `CheckoutVercelAPL: Not setting auth data for domain because CheckoutVercelAPL is used.`
      );
      // do nothing
    });
  }
  delete(_domain) {
    return __awaiter(this, void 0, void 0, function* () {
      console.log(
        `CheckoutVercelAPL: Not deleting auth data for domain because CheckoutVercelAPL is used.`
      );
      // do nothing
    });
  }
  getAll() {
    return __awaiter(this, void 0, void 0, function* () {
      return [getAuthDataFromEnvVariables()];
    });
  }
  isReady() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        getAuthDataFromEnvVariables();
        return { ready: true };
      } catch (err) {
        return {
          ready: false,
          error: err,
        };
      }
    });
  }
  isConfigured() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        getAuthDataFromEnvVariables();
        return { configured: true };
      } catch (err) {
        return {
          configured: false,
          error: err,
        };
      }
    });
  }
}
exports.CheckoutVercelAPL = CheckoutVercelAPL;

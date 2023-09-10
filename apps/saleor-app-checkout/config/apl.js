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
exports.set = exports.apl = exports.get = void 0;
const APL_1 = require("@saleor/app-sdk/APL");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const promises_1 = __importDefault(require("fs/promises"));
const unpackErrors_1 = require("../utils/unpackErrors");
const checkoutVercelApl_1 = require("./checkoutVercelApl");
const getAPL = () => {
  switch (process.env.APL) {
    case "upstash":
      const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
      const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
      (0, ts_invariant_1.default)(UPSTASH_REDIS_REST_URL, "Missing UPSTASH_REDIS_REST_URL!");
      (0, ts_invariant_1.default)(UPSTASH_REDIS_REST_TOKEN, "Missing UPSTASH_REDIS_REST_TOKEN!");
      return new APL_1.UpstashAPL({
        restURL: UPSTASH_REDIS_REST_URL,
        restToken: UPSTASH_REDIS_REST_TOKEN,
      });
    case "file":
      void printFileAplWarning();
      return new APL_1.FileAPL();
    case "saleor-cloud":
      const REST_APL_ENDPOINT = process.env.REST_APL_ENDPOINT;
      const REST_APL_TOKEN = process.env.REST_APL_TOKEN;
      (0, ts_invariant_1.default)(REST_APL_ENDPOINT, "Missing REST_APL_ENDPOINT!");
      (0, ts_invariant_1.default)(REST_APL_TOKEN, "Missing REST_APL_TOKEN!");
      return new APL_1.SaleorCloudAPL({
        resourceUrl: REST_APL_ENDPOINT,
        token: REST_APL_TOKEN,
      });
    case "vercel":
      return new checkoutVercelApl_1.CheckoutVercelAPL();
    default:
      (0, ts_invariant_1.default)(
        false,
        `Unsupported APL env variable: ${
          process.env.APL || "(no value)"
        }. Use one of the supported values: "upstash", "file", "vercel".`
      );
  }
};
const get = (saleorApiUrl) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const authData = yield exports.apl.get(saleorApiUrl);
    (0,
    ts_invariant_1.default)(authData, `No auth data found for given host: ${saleorApiUrl}. Is the app installed and configured?`);
    return authData;
  });
exports.get = get;
exports.apl = getAPL();
const set = (authData) => {
  return exports.apl.set(authData);
};
exports.set = set;
function printFileAplWarning() {
  return __awaiter(this, void 0, void 0, function* () {
    const Underscore = "\x1b[4m";
    const FgYellow = "\x1b[33m";
    const Reset = "\x1b[0m";
    const h = (text) => `${FgYellow}${Underscore}${text}${Reset}`;
    const c = (text) => `${FgYellow}${text}${Reset}`;
    if (process.env.VERCEL) {
      console.warn(
        // prettier-ignore
        `
${h('WARNING!')} Looks like you're trying to use the "file" APL while deploying to Vercel.
This is not recommended, as the file APL is not persistent and will be lost on every deployment.
Please, set ${c('APL=vercel')}, ${c('NEXT_PUBLIC_SALEOR_API_URL')}, ${c('SALEOR_APP_ID')}, ${c('SALEOR_APP_JWKS')} and ${c('SALEOR_APP_TOKEN')} env variables in Vercel configuration.
`.trim()
      );
      return;
    }
    const [_authTokenError, authToken] = yield (0, unpackErrors_1.unpackPromise)(
      promises_1.default.readFile(".auth_token", "utf-8")
    );
    const NEXT_PUBLIC_SALEOR_API_URL = process.env.NEXT_PUBLIC_SALEOR_API_URL;
    if (authToken || NEXT_PUBLIC_SALEOR_API_URL) {
      console.warn(
        // prettier-ignore
        `
${h('WARNING!')} Looks like you're using the deprecated \`.auth_token\` file or the deprecated NEXT_PUBLIC_SALEOR_API_URL env variable.
Please remove them, create \`.saleor-app-auth.json\` file and add the following JSON to it:
${c(`{`)}
${c(`  "token": "(your application\'s auth token)",`)}
${c(`  "domain": "${NEXT_PUBLIC_SALEOR_API_URL || "(your Saleor GraphQL API URL)"}"`)}
${c(`}`)}
${Reset}
`.trim()
      );
    }
  });
}

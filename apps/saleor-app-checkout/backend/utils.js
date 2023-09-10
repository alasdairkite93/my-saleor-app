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
exports.getBaseUrl = exports.allowCors = void 0;
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const constants_1 = require("../constants");
const allowCors = (fn) => (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
    return fn(req, res);
  });
exports.allowCors = allowCors;
const getBaseUrl = (req) => {
  if (
    constants_1.debugEnvVars === null || constants_1.debugEnvVars === void 0
      ? void 0
      : constants_1.debugEnvVars.appUrl
  ) {
    console.debug("Using DEBUG_APP_URL: ", constants_1.debugEnvVars.appUrl);
    return constants_1.debugEnvVars.appUrl;
  }
  const { host = "", "x-forwarded-proto": forwardedProtocol = "http" } = req.headers;
  const protocol = forwardedProtocol.includes(",") ? "http" : forwardedProtocol; // proxy can have value http,https
  (0, ts_invariant_1.default)(typeof host === "string", "host is not a string");
  (0, ts_invariant_1.default)(typeof protocol === "string", "protocol is not a string");
  return `${protocol}://${host}`;
};
exports.getBaseUrl = getBaseUrl;

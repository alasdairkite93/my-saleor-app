"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSaleorApiUrlFromRequest = void 0;
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const getSaleorApiUrlFromRequest = (req) => {
  const saleorApiUrl = req.query.saleorApiUrl;
  (0, ts_invariant_1.default)(
    saleorApiUrl && typeof saleorApiUrl === "string",
    "saleorApiUrl is required"
  );
  return saleorApiUrl;
};
exports.getSaleorApiUrlFromRequest = getSaleorApiUrlFromRequest;

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
exports.withSaleorDomainMatch = void 0;
const response_1 = require("retes/response");
const middleware_1 = require("@saleor/app-sdk/middleware");
const const_1 = require("@saleor/app-sdk/const");
const withSaleorDomainMatch = (handler) =>
  (0, middleware_1.withSaleorDomainPresent)((request) =>
    __awaiter(void 0, void 0, void 0, function* () {
      var _a;
      const saleorApiUrl = request.params.saleorApiUrl;
      if (!saleorApiUrl || typeof saleorApiUrl !== "string") {
        return response_1.Response.BadRequest({
          success: false,
          message: `Missing saleorApiUrl query param!`,
        });
      }
      const domain = new URL(saleorApiUrl).host;
      if (domain !== request.headers[const_1.SALEOR_DOMAIN_HEADER]) {
        return response_1.Response.BadRequest({
          success: false,
          message: `Invalid ${const_1.SALEOR_DOMAIN_HEADER} header: ${domain} != ${
            ((_a = request.headers[const_1.SALEOR_DOMAIN_HEADER]) === null || _a === void 0
              ? void 0
              : _a.toString()) || "(no value)"
          }`,
        });
      }
      return handler(request);
    })
  );
exports.withSaleorDomainMatch = withSaleorDomainMatch;

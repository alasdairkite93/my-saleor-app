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
exports.updateTransaction = void 0;
const saleorGraphqlClient_1 = require("@/saleor-app-checkout/backend/saleorGraphqlClient");
const graphql_1 = require("@/saleor-app-checkout/graphql");
const Apl = __importStar(require("@/saleor-app-checkout/config/apl"));
const updateTransaction = (saleorApiUrl, args) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const authData = yield Apl.get(saleorApiUrl);
    const client = (0, saleorGraphqlClient_1.getClientForAuthData)(authData);
    // @todo handle errors
    const { data, error: _error } = yield client
      .mutation(graphql_1.TransactionUpdateDocument, args)
      .toPromise();
    if (
      ((_b =
        (_a = data === null || data === void 0 ? void 0 : data.transactionUpdate) === null ||
        _a === void 0
          ? void 0
          : _a.transaction) === null || _b === void 0
        ? void 0
        : _b.id) &&
      data.transactionUpdate.errors.length === 0
    ) {
      return true;
    }
    return false;
  });
exports.updateTransaction = updateTransaction;

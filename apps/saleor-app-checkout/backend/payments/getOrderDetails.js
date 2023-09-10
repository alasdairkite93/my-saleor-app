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
exports.getOrderDetails = void 0;
const saleorGraphqlClient_1 = require("@/saleor-app-checkout/backend/saleorGraphqlClient");
const Apl = __importStar(require("@/saleor-app-checkout/config/apl"));
const graphql_1 = require("@/saleor-app-checkout/graphql");
const getOrderDetails = (saleorApiUrl, { id }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const authData = yield Apl.get(saleorApiUrl);
    const client = (0, saleorGraphqlClient_1.getClientForAuthData)(authData);
    const { data, error } = yield client.query(graphql_1.OrderDetailsDocument, { id }).toPromise();
    if (error) {
      throw error;
    }
    if (!(data === null || data === void 0 ? void 0 : data.order)) {
      return {
        errors: ["ORDER_DOES_NOT_EXIST"],
      };
    }
    if (process.env.DEMO_MODE) {
      return {
        data: Object.assign(Object.assign({}, data.order), { userEmail: "checkout@example.com" }),
      };
    }
    return { data: data.order };
  });
exports.getOrderDetails = getOrderDetails;

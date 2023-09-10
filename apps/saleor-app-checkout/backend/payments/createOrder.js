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
exports.createOrder = void 0;
const saleorGraphqlClient_1 = require("@/saleor-app-checkout/backend/saleorGraphqlClient");
const graphql_1 = require("@/saleor-app-checkout/graphql");
const Apl = __importStar(require("@/saleor-app-checkout/config/apl"));
const createOrder = ({ saleorApiUrl, checkoutId, totalAmount }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const authData = yield Apl.get(saleorApiUrl);
    const client = (0, saleorGraphqlClient_1.getClientForAuthData)(authData);
    // Start by checking if total amount is correct
    const checkout = yield client
      .query(graphql_1.CheckoutDocument, {
        id: checkoutId,
      })
      .toPromise();
    if (checkout.error) {
      throw checkout.error;
    }
    if (!((_a = checkout.data) === null || _a === void 0 ? void 0 : _a.checkout)) {
      return {
        errors: ["CHECKOUT_NOT_FOUND"],
      };
    }
    if (
      ((_c = (_b = checkout.data) === null || _b === void 0 ? void 0 : _b.checkout) === null ||
      _c === void 0
        ? void 0
        : _c.totalPrice.gross.amount) !== totalAmount
    ) {
      return {
        errors: ["TOTAL_AMOUNT_MISMATCH"],
      };
    }
    const { data, error } = yield client
      .mutation(graphql_1.OrderCreateDocument, {
        id: checkoutId,
      })
      .toPromise();
    if (error) {
      throw error;
    }
    if (
      !((_d = data === null || data === void 0 ? void 0 : data.orderCreateFromCheckout) === null ||
      _d === void 0
        ? void 0
        : _d.order)
    ) {
      return {
        errors: ((_e = data === null || data === void 0 ? void 0 : data.orderCreateFromCheckout) ===
          null || _e === void 0
          ? void 0
          : _e.errors.map((e) => e.code)) || ["COULD_NOT_CREATE_ORDER_FROM_CHECKOUT"],
      };
    }
    if (process.env.DEMO_MODE) {
      return {
        data: Object.assign(Object.assign({}, data.orderCreateFromCheckout.order), {
          userEmail: "checkout@example.com",
        }),
      };
    }
    return { data: data.orderCreateFromCheckout.order };
  });
exports.createOrder = createOrder;

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
exports.getMollieEventName =
  exports.getLines =
  exports.getShippingLines =
  exports.getDiscountLines =
  exports.parseAmountToString =
  exports.getMollieClient =
    void 0;
const api_client_1 = __importStar(require("@mollie/api-client"));
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const errors_1 = require("../../errors");
const getMollieClient = (saleorApiUrl) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const metadata = yield (0, settings_1.getPrivateSettings)({
      saleorApiUrl,
      obfuscateEncryptedData: false,
    });
    const apiKey = metadata.paymentProviders.mollie.apiKey;
    if (!apiKey) {
      throw new errors_1.MissingPaymentProviderSettingsError("mollie", ["apiKey"]);
    }
    return (0, api_client_1.default)({
      apiKey,
    });
  });
exports.getMollieClient = getMollieClient;
const parseAmountToString = (amount, negative = false) => {
  const value = amount.toFixed(2).toString();
  return negative ? "-" + value : value;
};
exports.parseAmountToString = parseAmountToString;
const getProductType = (line) => {
  if (!line.variant) {
    return undefined;
  }
  const { isDigital, kind } = line.variant.product.productType;
  if (isDigital || kind === "GIFT_CARD") {
    return api_client_1.OrderLineType.digital;
  }
  if (kind === "NORMAL") {
    return api_client_1.OrderLineType.physical;
  }
};
const getDiscountLines = (discounts) =>
  discounts
    ? discounts.map((discount) => ({
        name: discount.name || "Discount",
        quantity: 1,
        vatRate: "0.00",
        vatAmount: {
          currency: discount.amount.currency,
          value: "0.00",
        },
        unitPrice: {
          currency: discount.amount.currency,
          value: (0, exports.parseAmountToString)(discount.amount.amount, true),
        },
        totalAmount: {
          currency: discount.amount.currency,
          value: (0, exports.parseAmountToString)(discount.amount.amount, true),
        },
        type: api_client_1.OrderLineType.discount,
      }))
    : [];
exports.getDiscountLines = getDiscountLines;
const getShippingLines = (data) => [
  {
    name: data.shippingMethodName || "Shipping",
    quantity: 1,
    vatRate: (0, exports.parseAmountToString)(data.shippingTaxRate * 100),
    vatAmount: {
      currency: data.shippingPrice.tax.currency,
      value: (0, exports.parseAmountToString)(data.shippingPrice.tax.amount),
    },
    unitPrice: {
      currency: data.shippingPrice.gross.currency,
      value: (0, exports.parseAmountToString)(data.shippingPrice.gross.amount),
    },
    totalAmount: {
      currency: data.shippingPrice.gross.currency,
      value: (0, exports.parseAmountToString)(data.shippingPrice.gross.amount),
    },
    type: api_client_1.OrderLineType.shipping_fee,
  },
];
exports.getShippingLines = getShippingLines;
const getLines = (lines) =>
  lines.map((line) => ({
    name: line.productName + " - " + line.variantName,
    quantity: line.quantity,
    vatRate: (0, exports.parseAmountToString)(line.taxRate * 100),
    vatAmount: {
      currency: line.totalPrice.tax.currency,
      value: (0, exports.parseAmountToString)(line.totalPrice.tax.amount),
    },
    unitPrice: {
      currency: line.unitPrice.gross.currency,
      value: (0, exports.parseAmountToString)(line.unitPrice.gross.amount),
    },
    totalAmount: {
      currency: line.totalPrice.gross.currency,
      value: (0, exports.parseAmountToString)(line.totalPrice.gross.amount),
    },
    type: getProductType(line),
  }));
exports.getLines = getLines;
const getMollieEventName = (status) => {
  return `Mollie status update: ${status}`;
};
exports.getMollieEventName = getMollieEventName;

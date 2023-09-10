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
exports.createMolliePayment = void 0;
const utils_1 = require("@/saleor-app-checkout/backend/payments/utils");
const utils_2 = require("./utils");
const createMolliePayment = ({ saleorApiUrl, order, redirectUrl, appUrl }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const discountLines = (0, utils_2.getDiscountLines)(order.discounts);
    const shippingLines = (0, utils_2.getShippingLines)(order);
    const lines = (0, utils_2.getLines)(order.lines);
    const mollieClient = yield (0, utils_2.getMollieClient)(saleorApiUrl);
    const mollieData = yield mollieClient.orders.create({
      orderNumber: order.number,
      webhookUrl: `${appUrl}/api/webhooks/mollie?saleorApiUrl=${encodeURIComponent(saleorApiUrl)}`,
      locale: "en_US",
      redirectUrl: (0, utils_1.formatRedirectUrl)({ saleorApiUrl, redirectUrl, orderId: order.id }),
      metadata: {
        orderId: order.id,
      },
      lines: [...discountLines, ...shippingLines, ...lines],
      billingAddress: {
        city: order.billingAddress.city,
        country: order.billingAddress.country.code,
        email: order.userEmail,
        givenName: order.billingAddress.firstName,
        familyName: order.billingAddress.lastName,
        postalCode: order.billingAddress.postalCode,
        streetAndNumber: order.billingAddress.streetAddress1,
        organizationName:
          (_a = order.billingAddress) === null || _a === void 0 ? void 0 : _a.companyName,
      },
      amount: {
        value: (0, utils_2.parseAmountToString)(order.total.gross.amount),
        currency: order.total.gross.currency,
      },
      shippingAddress: order.shippingAddress
        ? {
            city: order.shippingAddress.city,
            country: order.shippingAddress.country.code,
            email: order.userEmail,
            givenName: order.shippingAddress.firstName,
            familyName: order.shippingAddress.lastName,
            postalCode: order.shippingAddress.postalCode,
            streetAndNumber: order.shippingAddress.streetAddress1,
            organizationName: order.shippingAddress.companyName,
          }
        : undefined,
    });
    return {
      url: (_b = mollieData._links.checkout) === null || _b === void 0 ? void 0 : _b.href,
      id: mollieData.id,
    };
  });
exports.createMolliePayment = createMolliePayment;

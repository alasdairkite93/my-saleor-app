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
exports.createAdyenCheckoutPayment =
  exports.createAdyenCheckoutSession =
  exports.createAdyenCheckoutPaymentLinks =
  exports.orderToAdyenRequest =
    void 0;
const utils_1 = require("@/saleor-app-checkout/backend/payments/utils");
const utils_2 = require("./utils");
const paymentRequest_1 = require("@adyen/api-library/lib/src/typings/checkout/paymentRequest");
const orderToAdyenRequest = ({ order, returnUrl, merchantAccount }) => {
  var _a, _b, _c;
  const total = order.total.gross;
  return {
    amount: {
      currency: total.currency,
      value: (0, utils_1.getIntegerAmountFromSaleor)(total.amount),
    },
    reference: order.number || order.id,
    returnUrl,
    merchantAccount,
    countryCode: (_a = order.billingAddress) === null || _a === void 0 ? void 0 : _a.country.code,
    metadata: {
      orderId: order.id,
    },
    lineItems: (0, utils_2.getLineItems)(order.lines),
    shopperEmail: order.userEmail,
    shopperName: order.billingAddress
      ? {
          firstName: order.billingAddress.firstName,
          lastName: order.billingAddress.lastName,
        }
      : undefined,
    shopperLocale: "EN",
    telephoneNumber:
      ((_b = order.shippingAddress) === null || _b === void 0 ? void 0 : _b.phone) ||
      ((_c = order.billingAddress) === null || _c === void 0 ? void 0 : _c.phone) ||
      undefined,
    billingAddress: order.billingAddress
      ? {
          city: order.billingAddress.city,
          country: order.billingAddress.country.code,
          street: order.billingAddress.streetAddress1,
          houseNumberOrName: order.billingAddress.streetAddress2,
          postalCode: order.billingAddress.postalCode,
          stateOrProvince: order.billingAddress.countryArea,
        }
      : undefined,
    deliveryAddress: order.shippingAddress
      ? {
          city: order.shippingAddress.city,
          country: order.shippingAddress.country.code,
          street: order.shippingAddress.streetAddress1,
          houseNumberOrName: order.shippingAddress.streetAddress2,
          postalCode: order.shippingAddress.postalCode,
          stateOrProvince: order.shippingAddress.countryArea,
        }
      : undefined,
  };
};
exports.orderToAdyenRequest = orderToAdyenRequest;
const createAdyenCheckoutPaymentLinks = ({ saleorApiUrl, order, redirectUrl }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { config, checkout } = yield (0, utils_2.getAdyenClient)(saleorApiUrl);
    return checkout.paymentLinks(
      (0, exports.orderToAdyenRequest)({
        order,
        merchantAccount: config.merchantAccount,
        returnUrl: (0, utils_1.formatRedirectUrl)({ saleorApiUrl, redirectUrl, orderId: order.id }),
      })
    );
  });
exports.createAdyenCheckoutPaymentLinks = createAdyenCheckoutPaymentLinks;
const createAdyenCheckoutSession = (
  saleorApiUrl,
  { currency, totalAmount, checkoutId, redirectUrl }
) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { config, checkout } = yield (0, utils_2.getAdyenClient)(saleorApiUrl);
    const session = yield checkout.sessions({
      merchantAccount: config.merchantAccount,
      amount: {
        currency: currency,
        value: (0, utils_1.getIntegerAmountFromSaleor)(totalAmount),
      },
      // @todo is this correct? `orderId: checkoutId`
      returnUrl: (0, utils_1.formatRedirectUrl)({ saleorApiUrl, redirectUrl, orderId: checkoutId }),
      reference: checkoutId,
    });
    return {
      session,
      clientKey: config.clientKey,
    };
  });
exports.createAdyenCheckoutSession = createAdyenCheckoutSession;
const createAdyenCheckoutPayment = ({ saleorApiUrl, order, redirectUrl, adyenStateData }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { config, checkout } = yield (0, utils_2.getAdyenClient)(saleorApiUrl);
    const adyenRequest = (0, exports.orderToAdyenRequest)({
      merchantAccount: config.merchantAccount,
      order,
      returnUrl: (0, utils_1.formatRedirectUrl)({ saleorApiUrl, redirectUrl, orderId: order.id }),
    });
    const payment = yield checkout.payments(
      Object.assign(Object.assign({}, adyenRequest), {
        paymentMethod: adyenStateData.paymentMethod,
        browserInfo: (_a = adyenStateData.browserInfo) !== null && _a !== void 0 ? _a : undefined,
        shopperInteraction: paymentRequest_1.PaymentRequest.ShopperInteractionEnum.Ecommerce,
      })
    );
    return {
      payment,
      clientKey: config.clientKey,
    };
  });
exports.createAdyenCheckoutPayment = createAdyenCheckoutPayment;

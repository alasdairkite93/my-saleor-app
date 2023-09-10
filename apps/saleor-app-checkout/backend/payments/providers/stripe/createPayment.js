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
exports.createStripePayment = void 0;
const utils_1 = require("../../utils");
const stripeClient_1 = require("./stripeClient");
const createStripePayment = ({ saleorApiUrl, order, redirectUrl, appUrl: _appUrl, method }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const stripeClient = yield (0, stripeClient_1.getStripeClient)(saleorApiUrl);
    const stripeCheckoutCustomer = yield createStripeCustomerFromOrder(stripeClient, order);
    const stripePaymentMethod = saleorPaymentMethodIdToStripePaymentMethodId(method);
    const stripeCheckoutSession = yield stripeClient.checkout.sessions.create({
      line_items: [
        ...order.lines.map(saleorLineToStripeLine),
        ...order.discounts.map(saleorDiscountToStripeLine),
        saleorOrderShippingToStripeLine(order),
      ],
      // @todo
      locale: "en",
      payment_method_types: stripePaymentMethod ? [stripePaymentMethod] : undefined,
      customer: stripeCheckoutCustomer.id,
      mode: "payment",
      cancel_url: (0, utils_1.formatRedirectUrl)({ saleorApiUrl, redirectUrl, orderId: order.id }),
      success_url: (0, utils_1.formatRedirectUrl)({ saleorApiUrl, redirectUrl, orderId: order.id }),
      metadata: {
        orderId: order.id,
      },
    });
    return {
      url: stripeCheckoutSession.url,
      id: stripeCheckoutSession.id,
    };
  });
exports.createStripePayment = createStripePayment;
const saleorLineToStripeLine = (line) => {
  var _a;
  return {
    price_data: {
      currency: line.unitPrice.gross.currency.toUpperCase(),
      unit_amount: (0, utils_1.getIntegerAmountFromSaleor)(line.unitPrice.gross.amount),
      product_data: {
        name: line.productName + "-" + line.variantName,
        images: ((_a = line.thumbnail) === null || _a === void 0 ? void 0 : _a.url)
          ? [line.thumbnail.url]
          : [],
      },
    },
    quantity: line.quantity,
  };
};
const saleorDiscountToStripeLine = (discount) => {
  return {
    price_data: {
      currency: discount.amount.currency.toUpperCase(),
      unit_amount: (0, utils_1.getIntegerAmountFromSaleor)(discount.amount.amount),
      product_data: {
        name: "Discount " + (discount.name || ""),
        images: [],
      },
    },
    quantity: 1,
  };
};
const saleorOrderShippingToStripeLine = (order) => {
  return {
    quantity: 1,
    price_data: {
      currency: order.shippingPrice.gross.currency.toUpperCase(),
      unit_amount: (0, utils_1.getIntegerAmountFromSaleor)(order.shippingPrice.gross.amount),
      product_data: {
        name: "Shipping " + (order.shippingMethodName || ""),
        images: [],
      },
    },
  };
};
const saleorPaymentMethodIdToStripePaymentMethodId = (paymentMethodId) => {
  switch (paymentMethodId) {
    case "creditCard":
      return "card";
    case "applePay":
      // @todo https://github.com/saleor/react-storefront/issues/390
      return null;
    case "paypal":
      // @todo https://github.com/saleor/react-storefront/issues/390
      return null;
    case "dropin":
      return null;
    case "dummy":
      return null;
  }
};
const createStripeCustomerFromOrder = (stripeClient, order) => {
  var _a, _b, _c, _d, _e, _f;
  const name = [
    (_a = order.billingAddress) === null || _a === void 0 ? void 0 : _a.firstName.trim(),
    (_b = order.billingAddress) === null || _b === void 0 ? void 0 : _b.lastName.trim(),
  ]
    .filter(Boolean)
    .join(" ");
  return stripeClient.customers.create({
    email: (_c = order.userEmail) !== null && _c !== void 0 ? _c : undefined,
    name,
    address: order.billingAddress
      ? {
          city: order.billingAddress.city,
          country: order.billingAddress.country.code,
          line1: order.billingAddress.streetAddress1,
          line2: order.billingAddress.streetAddress2,
          postal_code: order.billingAddress.postalCode,
          state: order.billingAddress.countryArea,
        }
      : null,
    phone:
      ((_d = order.billingAddress) === null || _d === void 0 ? void 0 : _d.phone) ||
      ((_e = order.shippingAddress) === null || _e === void 0 ? void 0 : _e.phone) ||
      undefined,
    shipping: order.shippingAddress
      ? {
          name: order.shippingAddress.firstName + " " + order.shippingAddress.lastName,
          phone: (_f = order.shippingAddress.phone) !== null && _f !== void 0 ? _f : undefined,
          address: {
            city: order.shippingAddress.city,
            country: order.shippingAddress.country.code,
            line1: order.shippingAddress.streetAddress1,
            line2: order.shippingAddress.streetAddress2,
            postal_code: order.shippingAddress.postalCode,
            state: order.shippingAddress.countryArea,
          },
        }
      : null,
  });
};

"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyPay =
  exports.handleDropInAdyenPaymentDetails =
  exports.createDropInAdyenPayment =
  exports.createDropInAdyenSession =
  exports.getOrderPaymentStatus =
  exports.getAppConfig =
  exports.pay =
  exports.getPaymentMethods =
    void 0;
const urlJoin_1 = require("./urlJoin");
const getPaymentMethods = ({ saleorApiUrl, checkoutApiUrl, channelId }) =>
  fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "active-payment-providers", channelId) +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString()
  );
exports.getPaymentMethods = getPaymentMethods;
const pay = (_a) => {
  var { checkoutApiUrl, saleorApiUrl } = _a,
    body = __rest(_a, ["checkoutApiUrl", "saleorApiUrl"]);
  return fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "pay") +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString(),
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );
};
exports.pay = pay;
const getAppConfig = ({ saleorApiUrl, checkoutApiUrl }) =>
  fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "customization-settings") +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString()
  );
exports.getAppConfig = getAppConfig;
const getOrderPaymentStatus = ({ saleorApiUrl, orderId, checkoutApiUrl }) =>
  fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "payment-status", orderId) +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString()
  );
exports.getOrderPaymentStatus = getOrderPaymentStatus;
const createDropInAdyenSession = (_a) => {
  var { saleorApiUrl, checkoutApiUrl } = _a,
    body = __rest(_a, ["saleorApiUrl", "checkoutApiUrl"]);
  return fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "drop-in", "adyen", "sessions") +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString(),
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );
};
exports.createDropInAdyenSession = createDropInAdyenSession;
const createDropInAdyenPayment = (_a) => {
  var { saleorApiUrl, checkoutApiUrl } = _a,
    body = __rest(_a, ["saleorApiUrl", "checkoutApiUrl"]);
  return fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "drop-in", "adyen", "payments") +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString(),
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );
};
exports.createDropInAdyenPayment = createDropInAdyenPayment;
const handleDropInAdyenPaymentDetails = (_a) => {
  var { saleorApiUrl, checkoutApiUrl } = _a,
    body = __rest(_a, ["saleorApiUrl", "checkoutApiUrl"]);
  return fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "drop-in", "adyen", "payments", "details") +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString(),
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );
};
exports.handleDropInAdyenPaymentDetails = handleDropInAdyenPaymentDetails;
const dummyPay = (_a) => {
  var { checkoutApiUrl, saleorApiUrl } = _a,
    body = __rest(_a, ["checkoutApiUrl", "saleorApiUrl"]);
  return fetch(
    (0, urlJoin_1.urlJoinTrailingSlash)(checkoutApiUrl, "dummy-pay") +
      `?` +
      new URLSearchParams({ saleorApiUrl }).toString(),
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );
};
exports.dummyPay = dummyPay;

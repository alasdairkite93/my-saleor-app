"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderConfirmationUrl = void 0;
const getOrderConfirmationUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete("dummyPayment");
  return url.href;
};
exports.getOrderConfirmationUrl = getOrderConfirmationUrl;

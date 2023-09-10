"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSaleorAmountFromInteger =
  exports.getIntegerAmountFromSaleor =
  exports.isDummyTransaction =
  exports.isAdyenTransaction =
  exports.isMollieTransaction =
  exports.getActionsAfterRefund =
  exports.getTransactionAmountGetterAsMoney =
  exports.getTransactionAmountGetter =
  exports.formatRedirectUrl =
    void 0;
const currency_js_1 = __importDefault(require("currency.js"));
const adyen_1 = require("./providers/adyen");
const refunds_1 = require("./providers/dummy/refunds");
const mollie_1 = require("./providers/mollie");
const formatRedirectUrl = ({ saleorApiUrl, redirectUrl, orderId }) => {
  const url = new URL(redirectUrl);
  url.searchParams.set("order", orderId);
  url.searchParams.set("saleorApiUrl", saleorApiUrl);
  const domain = url.hostname;
  // @todo remove `domain`
  // https://github.com/saleor/saleor-dashboard/issues/2387
  // https://github.com/saleor/saleor-app-sdk/issues/87
  url.searchParams.set("domain", domain);
  return url.toString();
};
exports.formatRedirectUrl = formatRedirectUrl;
const notNegative = (number) => (number < 0 ? 0 : number);
const getTransactionAmountGetter = (amounts) => {
  var _a, _b, _c, _d;
  const charged =
    (_a = amounts === null || amounts === void 0 ? void 0 : amounts.charged) !== null &&
    _a !== void 0
      ? _a
      : 0;
  const authorized =
    (_b = amounts === null || amounts === void 0 ? void 0 : amounts.authorized) !== null &&
    _b !== void 0
      ? _b
      : 0;
  const refunded =
    (_c = amounts === null || amounts === void 0 ? void 0 : amounts.refunded) !== null &&
    _c !== void 0
      ? _c
      : 0;
  const voided =
    (_d = amounts === null || amounts === void 0 ? void 0 : amounts.voided) !== null &&
    _d !== void 0
      ? _d
      : 0;
  return (type) => {
    switch (type) {
      case "refunded":
        return (0, currency_js_1.default)(refunded).value;
      case "voided":
        return (0, currency_js_1.default)(voided).value;
      case "charged":
        return notNegative(
          (0, currency_js_1.default)(charged).subtract(refunded).subtract(voided).value
        );
      case "authorized":
        return notNegative(
          (0, currency_js_1.default)(authorized)
            .subtract(charged)
            .subtract(refunded)
            .subtract(voided).value
        );
    }
  };
};
exports.getTransactionAmountGetter = getTransactionAmountGetter;
const getTransactionAmountGetterAsMoney = (amounts) => (type) =>
  (0, currency_js_1.default)((0, exports.getTransactionAmountGetter)(amounts)(type));
exports.getTransactionAmountGetterAsMoney = getTransactionAmountGetterAsMoney;
const getActionsAfterRefund = (transaction, refundAmount) => {
  const getTransactionAmount = (0, exports.getTransactionAmountGetter)({
    voided:
      transaction === null || transaction === void 0 ? void 0 : transaction.voidedAmount.amount,
    charged:
      transaction === null || transaction === void 0 ? void 0 : transaction.chargedAmount.amount,
    refunded:
      transaction === null || transaction === void 0 ? void 0 : transaction.refundedAmount.amount,
    authorized:
      transaction === null || transaction === void 0 ? void 0 : transaction.authorizedAmount.amount,
  });
  const transactionActions = [];
  if (getTransactionAmount("charged") < Number(refundAmount)) {
    // Some money in transaction was not refunded
    transactionActions.push("REFUND");
  }
  if (Number(refundAmount) > getTransactionAmount("charged")) {
    // Refunded more than charged
    throw new Error("Cannot refund more than charged in transaction");
  }
  return transactionActions;
};
exports.getActionsAfterRefund = getActionsAfterRefund;
const isMollieTransaction = (transaction) => {
  return transaction.type.includes(mollie_1.MOLLIE_PAYMENT_PREFIX);
};
exports.isMollieTransaction = isMollieTransaction;
const isAdyenTransaction = (transaction) => {
  return transaction.type.includes(adyen_1.ADYEN_PAYMENT_PREFIX);
};
exports.isAdyenTransaction = isAdyenTransaction;
const isDummyTransaction = (transaction) => {
  return transaction.type.includes(refunds_1.DUMMY_PAYMENT_TYPE);
};
exports.isDummyTransaction = isDummyTransaction;
// Some payment methods expect the amount to be in cents (integers)
// Saleor provides and expects the amount to be in dollars (decimal format / floats)
const getIntegerAmountFromSaleor = (dollars) => Number.parseInt((dollars * 100).toFixed(0), 10);
exports.getIntegerAmountFromSaleor = getIntegerAmountFromSaleor;
// Some payment methods expect the amount to be in cents (integers)
// Saleor provides and expects the amount to be in dollars (decimal format / floats)
const getSaleorAmountFromInteger = (cents) => Number.parseFloat((cents / 100).toFixed(2));
exports.getSaleorAmountFromInteger = getSaleorAmountFromInteger;

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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionAmountFromAdyen =
  exports.isNotificationCurrencyMatchingTransaction =
  exports.isNotificationAmountValid =
  exports.nonNegative =
  exports.getNotificationStatus =
  exports.verifyBasicAuth =
  exports.encodeBasicAuth =
  exports.createEventUniqueKey =
  exports.getLineItems =
  exports.getAdyenClient =
  exports.mapAvailableActions =
    void 0;
const settings_1 = require("@/saleor-app-checkout/backend/configuration/settings");
const api_library_1 = require("@adyen/api-library");
const currency_js_1 = __importDefault(require("currency.js"));
const utils_1 = require("../../utils");
const consts_1 = require("./consts");
const checkout_common_1 = require("checkout-common");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const OperationsEnum = api_library_1.Types.notification.NotificationRequestItem.OperationsEnum;
const EventCodeEnum = api_library_1.Types.notification.NotificationRequestItem.EventCodeEnum;
const mapAvailableActions = (operations) => {
  if (!operations) return [];
  return operations.map((operation) => {
    switch (operation) {
      case OperationsEnum.Capture:
        return "CHARGE";
      case OperationsEnum.Refund:
        return "REFUND";
      case OperationsEnum.Cancel:
        return "VOID";
      default:
        throw "OperationsEnum out of bounds";
    }
  });
};
exports.mapAvailableActions = mapAvailableActions;
const getAdyenClient = (saleorApiUrl) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const _a = (yield (0, settings_1.getPrivateSettings)({
        saleorApiUrl,
        obfuscateEncryptedData: false,
      })).paymentProviders.adyen,
      { apiKey, merchantAccount, clientKey } = _a,
      restAdyenSettings = __rest(_a, ["apiKey", "merchantAccount", "clientKey"]);
    (0, ts_invariant_1.default)(apiKey, "API key not defined");
    (0, ts_invariant_1.default)(merchantAccount, "Missing merchant account configuration");
    const client = new api_library_1.Client({
      apiKey: apiKey,
      environment: "TEST",
    });
    const checkout = new api_library_1.CheckoutAPI(client);
    return {
      client,
      checkout,
      config: Object.assign(Object.assign({}, restAdyenSettings), {
        clientKey,
        apiKey,
        merchantAccount,
      }),
    };
  });
exports.getAdyenClient = getAdyenClient;
const getLineItems = (lines) =>
  lines.map((line) => {
    var _a, _b, _c;
    return {
      description: line.productName + " - " + line.variantName,
      quantity: line.quantity,
      taxPercentage: line.taxRate * 100,
      taxAmount: (0, checkout_common_1.getAdyenIntegerAmountFromSaleor)(
        line.totalPrice.tax.amount,
        line.totalPrice.tax.currency
      ),
      amountExcludingTax: (0, checkout_common_1.getAdyenIntegerAmountFromSaleor)(
        line.totalPrice.net.amount,
        line.totalPrice.net.currency
      ),
      amountIncludingTax: (0, checkout_common_1.getAdyenIntegerAmountFromSaleor)(
        line.totalPrice.gross.amount,
        line.totalPrice.gross.currency
      ),
      id: line.id,
      imageUrl: (_a = line.thumbnail) === null || _a === void 0 ? void 0 : _a.url,
      itemCategory:
        (_c = (_b = line.variant) === null || _b === void 0 ? void 0 : _b.product.category) ===
          null || _c === void 0
          ? void 0
          : _c.name,
    };
  });
exports.getLineItems = getLineItems;
const createEventUniqueKey = (event) => [event.name, event.reference].join();
exports.createEventUniqueKey = createEventUniqueKey;
const encodeBasicAuth = (username, password) => {
  return Buffer.from(username + ":" + password, "ascii").toString("base64");
};
exports.encodeBasicAuth = encodeBasicAuth;
const verifyBasicAuth = (username, password, token) => {
  const credentials = (0, exports.encodeBasicAuth)(username, password);
  return token === `Basic ${credentials}`;
};
exports.verifyBasicAuth = verifyBasicAuth;
const getNotificationStatus = (notification) => {
  const { eventCode, success } = notification;
  if (
    consts_1.failedEvents.has(eventCode) ||
    success === api_library_1.Types.notification.NotificationRequestItem.SuccessEnum.False
  ) {
    return "FAILURE";
  }
  return "SUCCESS";
};
exports.getNotificationStatus = getNotificationStatus;
const nonNegative = (amount) => (amount <= 0 ? 0 : amount);
exports.nonNegative = nonNegative;
const getCurrencyFromTransaction = (transaction) => {
  var _a, _b, _c, _d;
  if (!transaction) {
    return undefined;
  }
  const currencies = [
    (_a = transaction === null || transaction === void 0 ? void 0 : transaction.refundedAmount) ===
      null || _a === void 0
      ? void 0
      : _a.currency,
    (_b = transaction === null || transaction === void 0 ? void 0 : transaction.voidedAmount) ===
      null || _b === void 0
      ? void 0
      : _b.currency,
    (_c = transaction === null || transaction === void 0 ? void 0 : transaction.chargedAmount) ===
      null || _c === void 0
      ? void 0
      : _c.currency,
    (_d =
      transaction === null || transaction === void 0 ? void 0 : transaction.authorizedAmount) ===
      null || _d === void 0
      ? void 0
      : _d.currency,
  ];
  // find first existing currency
  return currencies.find((item) => typeof item === "string");
};
const isNotificationAmountValid = (notification) => {
  var _a, _b;
  if (
    typeof ((_a =
      notification === null || notification === void 0 ? void 0 : notification.amount) === null ||
    _a === void 0
      ? void 0
      : _a.currency) !== "string" ||
    typeof ((_b =
      notification === null || notification === void 0 ? void 0 : notification.amount) === null ||
    _b === void 0
      ? void 0
      : _b.value) !== "number"
  ) {
    return false;
  }
  return true;
};
exports.isNotificationAmountValid = isNotificationAmountValid;
const isNotificationCurrencyMatchingTransaction = (notificationCurrency, transaction) => {
  const transactionCurrency = getCurrencyFromTransaction(transaction);
  if (!transactionCurrency) {
    // Transaction is not created or doesn't have amounts set yet
    return true;
  }
  return notificationCurrency === transactionCurrency;
};
exports.isNotificationCurrencyMatchingTransaction = isNotificationCurrencyMatchingTransaction;
const getTransactionAmountFromAdyen = (notification, transaction) => {
  var _a, _b, _c, _d;
  const getTransactionAmount = (0, utils_1.getTransactionAmountGetterAsMoney)({
    voided:
      (_a = transaction === null || transaction === void 0 ? void 0 : transaction.voidedAmount) ===
        null || _a === void 0
        ? void 0
        : _a.amount,
    charged:
      (_b = transaction === null || transaction === void 0 ? void 0 : transaction.chargedAmount) ===
        null || _b === void 0
        ? void 0
        : _b.amount,
    refunded:
      (_c =
        transaction === null || transaction === void 0 ? void 0 : transaction.refundedAmount) ===
        null || _c === void 0
        ? void 0
        : _c.amount,
    authorized:
      (_d =
        transaction === null || transaction === void 0 ? void 0 : transaction.authorizedAmount) ===
        null || _d === void 0
        ? void 0
        : _d.amount,
  });
  if (
    notification.success ===
    api_library_1.Types.notification.NotificationRequestItem.SuccessEnum.False
  ) {
    return {};
  }
  if (!(0, exports.isNotificationAmountValid)(notification)) {
    console.error("(Adyen webhook) Notification without amount or currency");
    throw new Error("Notification doesn't contain amount or currency");
  }
  const notificationAmount = (0, currency_js_1.default)(
    (0, checkout_common_1.getSaleorAmountFromAdyenInteger)(
      notification.amount.value,
      notification.amount.currency
    )
  );
  if (
    !(0, exports.isNotificationCurrencyMatchingTransaction)(
      notification.amount.currency,
      transaction
    )
  ) {
    console.error("(Adyen webhook) Mistmatch between notification and transaction currency");
    throw new Error("Mismatch between notification and transaction currency");
  }
  switch (notification.eventCode) {
    case EventCodeEnum.Pending:
      return {};
    case EventCodeEnum.Authorisation:
    case EventCodeEnum.AuthorisationAdjustment:
      return {
        amountAuthorized: {
          amount: notificationAmount.value,
          currency: notification.amount.currency,
        },
      };
    case EventCodeEnum.Capture:
      return {
        amountAuthorized: {
          // Payment can be partially captured
          amount: (0, exports.nonNegative)(
            getTransactionAmount("authorized").subtract(notificationAmount).value
          ),
          currency: notification.amount.currency,
        },
        amountCharged: {
          amount: notificationAmount.value,
          currency: notification.amount.currency,
        },
      };
    case EventCodeEnum.Cancellation:
      const authorizedAmount = getTransactionAmount("authorized").value;
      return {
        amountAuthorized: {
          amount: 0,
          currency: notification.amount.currency,
        },
        amountVoided: {
          amount: authorizedAmount > 0 ? authorizedAmount : notificationAmount,
          currency: notification.amount.currency,
        },
      };
    // Capture -> Authorized
    case EventCodeEnum.CaptureFailed:
      // This event is send after EventCodeEnum.Authorized, we need to reverse it back to Authorized state
      // https://docs.adyen.com/online-payments/capture/failure-reasons
      return {
        amountAuthorized: {
          amount: getTransactionAmount("authorized").add(notificationAmount).value,
          currency: notification.amount.currency,
        },
        amountCharged: {
          amount: 0,
          currency: notification.amount.currency,
        },
      };
    // Charged -> Refund / Chargeback
    case EventCodeEnum.Refund:
    case EventCodeEnum.RefundWithData:
    case EventCodeEnum.Chargeback:
    // Chargeback is a refund issued by 3rd party
    case EventCodeEnum.SecondChargeback:
      // 2nd Chargeback is issued after it was reversed (ChargebackReversed)
      return {
        amountRefunded: {
          amount: getTransactionAmount("refunded").add(notificationAmount).value,
          currency: notification.amount.currency,
        },
        amountCharged: {
          amount: (0, exports.nonNegative)(
            getTransactionAmount("charged").subtract(notificationAmount).value
          ),
          currency: notification.amount.currency,
        },
      };
    // Refund / Chargeback -> Charged
    case EventCodeEnum.RefundedReversed:
    case EventCodeEnum.ChargebackReversed:
    case EventCodeEnum.VoidPendingRefund:
    case EventCodeEnum.RefundFailed:
      // This event is send after EventCodeEnum.Refund, we need to reverse it back to Charged state
      // https://docs.adyen.com/online-payments/capture/failure-reasons
      return {
        amountRefunded: {
          amount: (0, exports.nonNegative)(
            getTransactionAmount("refunded").subtract(notificationAmount).value
          ),
          currency: notification.amount.currency,
        },
        amountCharged: {
          amount: getTransactionAmount("charged").add(notificationAmount).value,
          currency: notification.amount.currency,
        },
      };
    case EventCodeEnum.CancelOrRefund:
      const additionalData =
        notification === null || notification === void 0 ? void 0 : notification.additionalData;
      const isCanceled =
        (additionalData === null || additionalData === void 0
          ? void 0
          : additionalData["modification.action"]) !== "refund";
      if (isCanceled) {
        const authorizedAmount = getTransactionAmount("authorized").value;
        return {
          amountAuthorized: {
            amount: 0,
            currency: notification.amount.currency,
          },
          amountVoided: {
            amount: authorizedAmount > 0 ? authorizedAmount : notificationAmount.value,
            currency: notification.amount.currency,
          },
        };
      } else {
        // isRefund
        return {
          amountCharged: {
            amount: (0, exports.nonNegative)(
              getTransactionAmount("charged").subtract(notificationAmount).value
            ),
            currency: notification.amount.currency,
          },
          amountRefunded: {
            amount: notificationAmount.value,
            currency: notification.amount.currency,
          },
        };
      }
    default:
      return {};
  }
};
exports.getTransactionAmountFromAdyen = getTransactionAmountFromAdyen;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/utils");
const utils_2 = require("@/saleor-app-checkout/backend/payments/utils");
const saleor_1 = require("@/saleor-app-checkout/mocks/fixtures/saleor");
const test_utils_1 = require("@/saleor-app-checkout/test-utils");
const api_library_1 = require("@adyen/api-library");
const EventCodeEnum = api_library_1.Types.notification.NotificationRequestItem.EventCodeEnum;
const SuccessEnum = api_library_1.Types.notification.NotificationRequestItem.SuccessEnum;
describe("nonNegative", () => {
  it("returns value if more than 0", () => {
    expect((0, utils_1.nonNegative)(10)).toBe(10);
    expect((0, utils_1.nonNegative)(10.21)).toBe(10.21);
  });
  it("returns 0 if value is less than 0", () => {
    expect((0, utils_1.nonNegative)(-1)).toBe(0);
    expect((0, utils_1.nonNegative)(-21.11)).toBe(0);
    expect((0, utils_1.nonNegative)(-0.21)).toBe(0);
    expect((0, utils_1.nonNegative)(-0)).toBe(0);
  });
});
describe("createEventUniqueKey", () => {
  it("creates the same key for single event", () => {
    const event = {
      reference: "ref123",
      name: "event",
    };
    const key1 = (0, utils_1.createEventUniqueKey)(event);
    const key2 = (0, utils_1.createEventUniqueKey)(event);
    expect(key1).toEqual(key2);
  });
  it("creates different keys for different events", () => {
    const event1 = {
      reference: "ref123",
      name: "event1",
    };
    const event2 = {
      reference: "ref123",
      name: "event2",
    };
    const key1 = (0, utils_1.createEventUniqueKey)(event1);
    const key2 = (0, utils_1.createEventUniqueKey)(event2);
    expect(key1).not.toEqual(key2);
  });
});
describe("getSaleorAmountFromInteger", () => {
  it("parses integer into float value", () => {
    expect((0, utils_2.getSaleorAmountFromInteger)(1922)).toBe(19.22);
    expect((0, utils_2.getSaleorAmountFromInteger)(1000)).toBe(10);
    expect((0, utils_2.getSaleorAmountFromInteger)(837)).toBe(8.37);
  });
});
describe("getIntegerAmountFromSaleor", () => {
  it("parses float into integer value", () => {
    expect((0, utils_2.getIntegerAmountFromSaleor)(19.22)).toBe(1922);
    expect((0, utils_2.getIntegerAmountFromSaleor)(10)).toBe(1000);
    expect((0, utils_2.getIntegerAmountFromSaleor)(8.37)).toBe(837);
  });
});
describe("getTransactionAmountFromAdyen", () => {
  const DEFAULT_CURRENCY = "EUR";
  const prepareAdyenNotification = (amount, eventCode) => ({
    amount: {
      currency: DEFAULT_CURRENCY,
      value: amount,
    },
    eventCode,
    pspReference: "OPERATION ID",
    success: SuccessEnum.True,
    additionalData: {},
    eventDate: new Date().toString(),
    merchantReference: "ORDER",
    merchantAccountCode: "Saleor",
    reason: "reason",
    operations: [],
    paymentMethod: "visa",
    originalReference: "PAYMENT ID",
  });
  it("returns nothing when notification is failed", () => {
    const notification = Object.assign(
      Object.assign({}, prepareAdyenNotification(1200, EventCodeEnum.Authorisation)),
      { success: SuccessEnum.False }
    );
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, null);
    expect(result).toStrictEqual({});
  });
  it("returns nothing if payment is pending", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.Pending);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, null);
    expect(result).toStrictEqual({});
  });
  it("throws an error if amount is missing", () => {
    const notification = Object.assign(
      Object.assign({}, prepareAdyenNotification(1200, EventCodeEnum.Authorisation)),
      { amount: undefined }
    );
    expect(() => {
      return (0, utils_1.getTransactionAmountFromAdyen)(
        // @ts-expect-error We check for runtime errors that TypeScript will complain about
        notification,
        null
      );
    }).toThrow();
  });
  it("throws an error if transaction and notification currencies don't match", () => {
    (0, test_utils_1.disableConsole)("error");
    const notification = Object.assign(
      Object.assign({}, prepareAdyenNotification(1200, EventCodeEnum.Capture)),
      {
        amount: {
          currency: "PLN",
          value: 1200,
        },
      }
    );
    const transaction = (0, saleor_1.prepareSaleorTransaction)("authorized", 12.0, "EUR");
    expect(() => {
      return (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    }).toThrow();
  });
  it("returns amounts when new transaction was authorized", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.Authorisation);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, null);
    expect(result).toStrictEqual({
      amountAuthorized: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when new transaction was captured", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.Capture);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, null);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
      amountAuthorized: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when existing transaction was captured", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.Capture);
    const transaction = (0, saleor_1.prepareSaleorTransaction)(
      "authorized",
      12.0,
      DEFAULT_CURRENCY
    );
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
      amountAuthorized: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when existing transaction was partially captured", () => {
    const notification = prepareAdyenNotification(1000, EventCodeEnum.Capture);
    const transaction = (0, saleor_1.prepareSaleorTransaction)(
      "authorized",
      12.0,
      DEFAULT_CURRENCY
    );
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 10.0,
        currency: DEFAULT_CURRENCY,
      },
      amountAuthorized: {
        amount: 2.0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction was cancelled", () => {
    // amount from notification doesn't matter - it has to be always fully voided (all or nothing)
    const notification = prepareAdyenNotification(0, EventCodeEnum.Cancellation);
    const transaction = (0, saleor_1.prepareSaleorTransaction)(
      "authorized",
      12.0,
      DEFAULT_CURRENCY
    );
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountVoided: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
      amountAuthorized: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction capture failed", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.CaptureFailed);
    const transaction = (0, saleor_1.prepareSaleorTransaction)("charged", 12.0, DEFAULT_CURRENCY);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
      amountAuthorized: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction was fully refunded", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.Refund);
    const transaction = (0, saleor_1.prepareSaleorTransaction)("charged", 12.0, DEFAULT_CURRENCY);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
      amountRefunded: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction was partialy refunded", () => {
    const notification = prepareAdyenNotification(1000, EventCodeEnum.Refund);
    const transaction = (0, saleor_1.prepareSaleorTransaction)("charged", 12.0, DEFAULT_CURRENCY);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 2.0,
        currency: DEFAULT_CURRENCY,
      },
      amountRefunded: {
        amount: 10.0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction was chargebacked", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.Chargeback);
    const transaction = (0, saleor_1.prepareSaleorTransaction)("charged", 12.0, DEFAULT_CURRENCY);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
      amountRefunded: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction refund failed", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.RefundFailed);
    const transaction = (0, saleor_1.prepareSaleorTransaction)("refunded", 12.0, DEFAULT_CURRENCY);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
      amountRefunded: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction partial refund fails", () => {
    const notification = prepareAdyenNotification(1000, EventCodeEnum.RefundFailed);
    const transaction = Object.assign(
      Object.assign({}, (0, saleor_1.prepareSaleorTransaction)("refunded", 10.0, DEFAULT_CURRENCY)),
      (0, saleor_1.prepareSaleorTransaction)("charged", 2.0, DEFAULT_CURRENCY)
    );
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
      amountRefunded: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction chargeback was reversed", () => {
    const notification = prepareAdyenNotification(1200, EventCodeEnum.ChargebackReversed);
    const transaction = (0, saleor_1.prepareSaleorTransaction)("refunded", 12.0, DEFAULT_CURRENCY);
    const result = (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction);
    expect(result).toStrictEqual({
      amountCharged: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
      amountRefunded: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
  it("returns amounts when transaction was canceled or refunded (unspecified)", () => {
    const notificationRefund = Object.assign(
      Object.assign({}, prepareAdyenNotification(1200, EventCodeEnum.CancelOrRefund)),
      {
        additionalData: {
          "modification.action": "refund",
        },
      }
    );
    const transactionRefund = (0, saleor_1.prepareSaleorTransaction)(
      "charged",
      12.0,
      DEFAULT_CURRENCY
    );
    const resultRefund = (0, utils_1.getTransactionAmountFromAdyen)(
      notificationRefund,
      transactionRefund
    );
    expect(resultRefund).toStrictEqual({
      amountCharged: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
      amountRefunded: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
    });
    const notificationCancel = Object.assign(
      Object.assign({}, prepareAdyenNotification(0, EventCodeEnum.CancelOrRefund)),
      {
        additionalData: {
          "modification.action": "cancel",
        },
      }
    );
    const transactionCancel = (0, saleor_1.prepareSaleorTransaction)(
      "authorized",
      12.0,
      DEFAULT_CURRENCY
    );
    const resultCancel = (0, utils_1.getTransactionAmountFromAdyen)(
      notificationCancel,
      transactionCancel
    );
    expect(resultCancel).toStrictEqual({
      amountAuthorized: {
        amount: 0,
        currency: DEFAULT_CURRENCY,
      },
      amountVoided: {
        amount: 12.0,
        currency: DEFAULT_CURRENCY,
      },
    });
  });
});

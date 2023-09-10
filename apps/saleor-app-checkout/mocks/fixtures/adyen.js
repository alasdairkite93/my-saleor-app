"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentRefund =
  exports.getFirstPaymentCapture =
  exports.getPaymentCapture =
  exports.getPaymentRequest =
  exports.ADYEN_TRANSACTION_CURRENCY =
  exports.ADYEN_TRANSACTION_AMOUNT =
  exports.ADYEN_ORIGINAL_REFERENCE =
  exports.ADYEN_ORDER_ID =
    void 0;
const validator_1 = require("@/saleor-app-checkout/backend/payments/providers/adyen/validator");
const notificationRequestItem_1 = require("@adyen/api-library/lib/src/typings/notification/notificationRequestItem");
const consts_1 = require("../consts");
const getNotificationWithHmac = (notificationItem) => (hmac) => {
  const getResponse = (item) => ({
    live: "false",
    notificationItems: [
      {
        NotificationRequestItem: item,
      },
    ],
  });
  if (hmac === null) {
    return getResponse(notificationItem);
  }
  if (typeof hmac === "string") {
    return getResponse(
      Object.assign(Object.assign({}, notificationItem), {
        additionalData: Object.assign(Object.assign({}, notificationItem.additionalData), {
          hmacSignature: hmac,
        }),
      })
    );
  }
  return getResponse(
    Object.assign(Object.assign({}, notificationItem), {
      additionalData: Object.assign(Object.assign({}, notificationItem.additionalData), {
        hmacSignature: validator_1.adyenHmacValidator.calculateHmac(
          notificationItem,
          consts_1.testingVars.adyenHmac
        ),
      }),
    })
  );
};
exports.ADYEN_ORDER_ID = "T3JkZXI6MGQ4NDRiZDMtYTA5YS00NzUyLWE0ODktYzFlMzM2Y2I4ZjU4";
exports.ADYEN_ORIGINAL_REFERENCE = "LD65H2FVNXSKGK82";
exports.ADYEN_TRANSACTION_AMOUNT = 4292;
exports.ADYEN_TRANSACTION_CURRENCY = "USD";
const paymentRequest = {
  additionalData: {
    authCode: "085117",
    avsResult: "4 AVS not supported for this card type",
    paymentLinkId: "PLEBC2E2F868C9BE80",
    cardSummary: "0004",
    authorisationMid: "50",
    "checkout.cardAddedBrand": "mc",
    acquirerAccountCode: "TestPmmAcquirerAccount",
    cvcResult: "1 Matches",
    expiryDate: "03/2030",
    "threeds2.cardEnrolled": "false",
    "metadata.orderId": exports.ADYEN_ORDER_ID,
  },
  amount: { currency: exports.ADYEN_TRANSACTION_CURRENCY, value: exports.ADYEN_TRANSACTION_AMOUNT },
  eventCode: notificationRequestItem_1.NotificationRequestItem.EventCodeEnum.Authorisation,
  eventDate: "2022-07-28T14:08:36+02:00",
  merchantAccountCode: "SaleorECOM",
  merchantReference: "3394",
  operations: ["CANCEL", "CAPTURE"],
  paymentMethod: "mc",
  pspReference: exports.ADYEN_ORIGINAL_REFERENCE,
  reason: "085117:0004:03/2030",
  success: notificationRequestItem_1.NotificationRequestItem.SuccessEnum.True,
};
exports.getPaymentRequest = getNotificationWithHmac(paymentRequest);
const paymentCapture = Object.assign(Object.assign({}, paymentRequest), {
  additionalData: {
    bookingDate: "2022-07-28T16:17:47Z",
    paymentLinkId: "PLEBC2E2F868C9BE80",
    "metadata.orderId": exports.ADYEN_ORDER_ID,
  },
  eventCode: notificationRequestItem_1.NotificationRequestItem.EventCodeEnum.Capture,
  eventDate: "2022-07-28T16:17:01+02:00",
  originalReference: exports.ADYEN_ORIGINAL_REFERENCE,
  pspReference: "NP5DFGQGJRWZNN82",
  operations: ["REFUND"],
  reason: "",
});
exports.getPaymentCapture = getNotificationWithHmac(paymentCapture);
const firstPaymentCapture = Object.assign(Object.assign({}, paymentCapture), {
  originalReference: undefined,
  pspReference: exports.ADYEN_ORIGINAL_REFERENCE,
});
exports.getFirstPaymentCapture = getNotificationWithHmac(firstPaymentCapture);
const paymentRefund = Object.assign(Object.assign({}, paymentRequest), {
  additionalData: {
    bookingDate: "2022-07-28T16:17:47Z",
    paymentLinkId: "PLEBC2E2F868C9BE80",
    "metadata.orderId": exports.ADYEN_ORDER_ID,
  },
  eventCode: notificationRequestItem_1.NotificationRequestItem.EventCodeEnum.Refund,
  eventDate: "2022-07-28T16:17:01+02:00",
  originalReference: exports.ADYEN_ORIGINAL_REFERENCE,
  pspReference: "NP5DFGQGJRWZNN82",
  operations: [],
  reason: "Item returned",
});
exports.getPaymentRefund = getNotificationWithHmac(paymentRefund);

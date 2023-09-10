"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewTransactionData =
  exports.getUpdatedTransactionData =
  exports.isNotificationDuplicate =
  exports.ADYEN_PAYMENT_PREFIX =
    void 0;
const utils_1 = require("./utils");
exports.ADYEN_PAYMENT_PREFIX = "adyen";
const isNotificationDuplicate = (transactions, notificationItem) => {
  const eventKeys = transactions
    .map(({ events }) => events.map(utils_1.createEventUniqueKey))
    .flat();
  const newEventKey = (0, utils_1.createEventUniqueKey)({
    reference: notificationItem.pspReference,
    name: notificationItem.eventCode.toString(),
  });
  return eventKeys.includes(newEventKey);
};
exports.isNotificationDuplicate = isNotificationDuplicate;
const getUpdatedTransactionData = (transaction, notification) => {
  const { eventCode, pspReference, originalReference, operations } = notification;
  if (!originalReference) {
    throw "originalReference does not exit on notification";
  }
  const updatedTransactionEvent = {
    name: eventCode.toString(),
    status: (0, utils_1.getNotificationStatus)(notification),
    reference: pspReference,
  };
  const updatedTransaction = Object.assign(
    {
      status: eventCode.toString(),
      availableActions: (0, utils_1.mapAvailableActions)(operations),
    },
    (0, utils_1.getTransactionAmountFromAdyen)(notification, transaction)
  );
  return {
    id: transaction.id,
    transaction: updatedTransaction,
    transactionEvent: updatedTransactionEvent,
  };
};
exports.getUpdatedTransactionData = getUpdatedTransactionData;
const getNewTransactionData = (orderId, notification) => {
  const { eventCode, pspReference, paymentMethod, operations } = notification;
  const transactionEvent = {
    name: eventCode.toString(),
    status: (0, utils_1.getNotificationStatus)(notification),
    reference: pspReference,
  };
  return {
    id: orderId,
    transactionEvent,
    transaction: Object.assign(
      {
        status: eventCode.toString(),
        type: `${exports.ADYEN_PAYMENT_PREFIX}-${paymentMethod || "(unknown-payment-method)"}`,
        reference: pspReference,
        availableActions: (0, utils_1.mapAvailableActions)(operations),
      },
      (0, utils_1.getTransactionAmountFromAdyen)(notification, null)
    ),
  };
};
exports.getNewTransactionData = getNewTransactionData;

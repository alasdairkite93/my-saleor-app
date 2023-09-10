"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionActionRequest =
  exports.prepareSaleorTransaction =
  exports.appPrivateMetafields =
  exports.paymentProviders =
  exports.mollieCompletedOrderId =
    void 0;
const encryption_1 = require("@/saleor-app-checkout/backend/configuration/encryption");
const consts_1 = require("../consts");
exports.mollieCompletedOrderId = "ord_kr6ltl";
exports.paymentProviders = {
  mollie: {
    apiKey: (0, encryption_1.encryptSetting)(consts_1.testingVars.mollieKey),
    profileId: {
      encrypted: false,
      value: consts_1.testingVars.mollieProfileId,
    },
  },
  adyen: {
    merchantAccount: {
      encrypted: false,
      value: consts_1.testingVars.adyenMerchantAccount,
    },
    clientKey: {
      encrypted: false,
      value: consts_1.testingVars.adyenClientKey,
    },
    apiKey: (0, encryption_1.encryptSetting)(consts_1.testingVars.adyenApiKey),
    hmac: (0, encryption_1.encryptSetting)(consts_1.testingVars.adyenHmac),
    password: (0, encryption_1.encryptSetting)(consts_1.testingVars.adyenWebhookPassword),
    username: (0, encryption_1.encryptSetting)(consts_1.testingVars.adyenWebhookUsername),
  },
  stripe: {
    secretKey: (0, encryption_1.encryptSetting)(consts_1.testingVars.stripeSecretKey),
    webhookSecret: (0, encryption_1.encryptSetting)(consts_1.testingVars.stripeWebhookSecret),
    publishableKey: {
      encrypted: false,
      value: consts_1.testingVars.stripePublishableKey,
    },
  },
  dummy: { dummyKey: (0, encryption_1.encryptSetting)("") },
};
exports.appPrivateMetafields = {
  paymentProviders: exports.paymentProviders,
};
const prepareSaleorTransaction = (type, amount, currency, additionalData) => {
  const common = {
    refundedAmount: {
      amount: 0,
      currency,
    },
    authorizedAmount: { amount: 0, currency },
    chargedAmount: { amount: 0, currency },
    voidedAmount: { amount: 0, currency },
  };
  const amounts = Object.assign({}, common);
  switch (type) {
    case "authorized":
      amounts.authorizedAmount.amount = amount;
      break;
    case "charged":
      amounts.chargedAmount.amount = amount;
      break;
    case "refunded":
      amounts.refundedAmount.amount = amount;
      break;
    case "voided":
      amounts.voidedAmount.amount = amount;
      break;
  }
  return Object.assign(
    Object.assign(Object.assign({}, amounts), { reference: "123", events: [], id: "123" }),
    additionalData
  );
};
exports.prepareSaleorTransaction = prepareSaleorTransaction;
exports.transactionActionRequest = {
  missingData: {
    transaction: undefined,
    action: undefined,
  },
  adyenRefund: {
    transaction: {
      id: "VHJhbnNhY3Rpb25JdGVtOjE3OA==",
      reference: "LD65H2FVNXSKGK82",
      type: "adyen-mc",
      authorizedAmount: {
        amount: 0,
        currency: "USD",
      },
      chargedAmount: {
        amount: 42.92,
      },
      voidedAmount: {
        amount: 0,
      },
      refundedAmount: {
        amount: 0,
      },
    },
    action: {
      actionType: "REFUND",
      amount: 4.31,
    },
  },
  mollieRefund: {
    transaction: {
      id: "VHJhbnNhY3Rpb25JdGVtOjE3Mg==",
      reference: "ord_kr6ltl",
      type: "mollie-creditcard",
      authorizedAmount: {
        amount: 0,
        currency: "USD",
      },
      chargedAmount: {
        amount: 21.67,
      },
      voidedAmount: {
        amount: 0,
      },
      refundedAmount: {
        amount: 0,
      },
    },
    action: {
      actionType: "REFUND",
      amount: 38.61,
    },
  },
};

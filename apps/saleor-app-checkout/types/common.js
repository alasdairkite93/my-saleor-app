"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSettingID =
  exports.allPublicTransactionMetafieldID =
  exports.allPrivateSettingID =
  exports.allPublicSettingID =
  exports.allPublicMetafieldID =
    void 0;
exports.allPublicMetafieldID = ["customizationsCheckoutUrl"];
exports.allPublicSettingID = ["customizations", "channelActivePaymentProviders"];
exports.allPrivateSettingID = ["paymentProviders"];
exports.allPublicTransactionMetafieldID = ["processedEvents"];
exports.allSettingID = [...exports.allPublicSettingID, ...exports.allPrivateSettingID];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryItemMoneySection = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const SummaryItemMoneyInfo_1 = require("@/checkout-storefront/sections/Summary/SummaryItemMoneyInfo");
const messages_1 = require("./messages");
const SummaryItemMoneySection = ({ line }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  return (
    <div className="flex flex-col items-end">
      <ui_kit_1.Text>{`${formatMessage(messages_1.summaryMessages.quantity)}: ${
        line.quantity
      }`}</ui_kit_1.Text>
      <SummaryItemMoneyInfo_1.SummaryItemMoneyInfo
        {...line}
        undiscountedUnitPrice={line.undiscountedUnitPrice.gross}
      />
    </div>
  );
};
exports.SummaryItemMoneySection = SummaryItemMoneySection;

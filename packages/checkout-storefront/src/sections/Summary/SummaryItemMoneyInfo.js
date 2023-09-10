"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryItemMoneyInfo = void 0;
const react_1 = __importDefault(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const components_1 = require("@/checkout-storefront/components");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const clsx_1 = __importDefault(require("clsx"));
const money_1 = require("@/checkout-storefront/lib/utils/money");
const messages_1 = require("./messages");
const SummaryItemMoneyInfo = ({ unitPrice, quantity, undiscountedUnitPrice, classNames = {} }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const multiplePieces = quantity > 1;
  const piecePrice = unitPrice.gross;
  const onSale = undiscountedUnitPrice.amount !== unitPrice.gross.amount;
  return (
    <>
      <div className={(0, clsx_1.default)("flex flex-row", classNames.container)}>
        {onSale && (
          <components_1.Money
            ariaLabel={formatMessage(messages_1.summaryLabels.undiscountedPrice)}
            money={{
              currency: undiscountedUnitPrice.currency,
              amount: undiscountedUnitPrice.amount * quantity,
            }}
            className="line-through mr-1"
          />
        )}
        <components_1.Money
          ariaLabel={formatMessage(messages_1.summaryLabels.totalPrice)}
          money={{
            currency: piecePrice === null || piecePrice === void 0 ? void 0 : piecePrice.currency,
            amount:
              ((piecePrice === null || piecePrice === void 0 ? void 0 : piecePrice.amount) || 0) *
              quantity,
          }}
          weight="bold"
          className={(0, clsx_1.default)({
            "!text-text-error": onSale,
          })}
        />
      </div>

      {multiplePieces && (
        <ui_kit_1.Text
          aria-label={formatMessage(messages_1.summaryLabels.singlePiecePrice)}
          size="sm"
          color="secondary"
          className="ml-4"
        >
          {`${(0, money_1.getFormattedMoney)(piecePrice)} ${formatMessage(
            messages_1.summaryMessages.each
          )}`}
        </ui_kit_1.Text>
      )}
    </>
  );
};
exports.SummaryItemMoneyInfo = SummaryItemMoneyInfo;

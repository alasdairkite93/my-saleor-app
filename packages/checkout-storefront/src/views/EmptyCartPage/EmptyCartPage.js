"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyCartPage = void 0;
const react_1 = __importDefault(require("react"));
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const ui_kit_1 = require("@saleor/ui-kit");
const components_1 = require("@/checkout-storefront/components");
const messages_1 = require("./messages");
const EmptyCartPage = () => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  // eslint-disable-next-line no-restricted-globals
  const goBack = () => history.back();
  return (
    <div className="w-full flex flex-row justify-center lg:mt-10">
      <div className="flex flex-col justify-start border rounded-lg border-border-secondary section">
        <components_1.Title>
          {formatMessage(messages_1.emptyCartMessages.emptyCart)}
        </components_1.Title>
        <ui_kit_1.Text>
          {formatMessage(messages_1.emptyCartMessages.addToCardToContinue)}
        </ui_kit_1.Text>
        <components_1.Button
          className="mt-3 md:self-end"
          ariaLabel={formatMessage(messages_1.emptyCartLabels.goBackToStore)}
          onClick={goBack}
          variant="secondary"
          label={formatMessage(messages_1.emptyCartMessages.goBackToStore)}
        />
      </div>
    </div>
  );
};
exports.EmptyCartPage = EmptyCartPage;

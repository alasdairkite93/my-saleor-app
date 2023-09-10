"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSection = void 0;
const Divider_1 = require("@/checkout-storefront/components/Divider");
const Title_1 = require("@/checkout-storefront/components/Title");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const PaymentMethods_1 = require("./PaymentMethods");
const react_1 = __importDefault(require("react"));
const messages_1 = require("./messages");
const PaymentSection = ({ children }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  return (
    <>
      <Divider_1.Divider />
      <div className="section" data-testid="paymentMethods">
        <Title_1.Title>
          {formatMessage(messages_1.paymentSectionMessages.paymentProviders)}
        </Title_1.Title>
        <PaymentMethods_1.PaymentMethods />
        {children}
      </div>
    </>
  );
};
exports.PaymentSection = PaymentSection;

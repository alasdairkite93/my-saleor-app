"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInFormContainer = void 0;
const react_1 = __importDefault(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const Button_1 = require("@/checkout-storefront/components/Button");
const Title_1 = require("@/checkout-storefront/components/Title");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const messages_1 = require("@/checkout-storefront/sections/Contact/messages");
const SignInFormContainer = ({
  title,
  redirectButtonLabel,
  redirectSubtitle,
  subtitle,
  onSectionChange,
  children,
}) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  return (
    <div className="section">
      <div className="flex flex-col mb-2">
        <div className="flex flex-row justify-between items-baseline">
          <Title_1.Title>{title}</Title_1.Title>
          <div className="flex flex-row">
            {redirectSubtitle && (
              <ui_kit_1.Text color="secondary" className="mr-2">
                {redirectSubtitle}
              </ui_kit_1.Text>
            )}
            {redirectButtonLabel && (
              <Button_1.Button
                ariaLabel={formatMessage(messages_1.contactLabels.changeSection)}
                onClick={onSectionChange}
                variant="tertiary"
                label={redirectButtonLabel}
              />
            )}
          </div>
        </div>
        {subtitle && (
          <ui_kit_1.Text color="secondary" className="mt-3">
            {subtitle}
          </ui_kit_1.Text>
        )}
      </div>
      {children}
    </div>
  );
};
exports.SignInFormContainer = SignInFormContainer;

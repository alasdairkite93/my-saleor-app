"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignedInUser = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const react_1 = __importDefault(require("react"));
const SignInFormContainer_1 = require("../Contact/SignInFormContainer");
const ui_kit_1 = require("@saleor/ui-kit");
const Button_1 = require("@/checkout-storefront/components/Button");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const messages_1 = require("../Contact/messages");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const auth_1 = require("@/checkout-storefront/lib/auth");
const SignedInUser = ({ onSectionChange, onSignOutSuccess }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { checkoutSignOut } = (0, auth_1.useSaleorAuthContext)();
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { user } = (0, useUser_1.useUser)();
  const handleLogout = () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield checkoutSignOut({ checkoutId: checkout.id });
      onSignOutSuccess();
    });
  return (
    <SignInFormContainer_1.SignInFormContainer
      title={formatMessage(messages_1.contactMessages.account)}
      onSectionChange={onSectionChange}
    >
      <div className="flex flex-row justify-between">
        <ui_kit_1.Text weight="bold" size="md">
          {user === null || user === void 0 ? void 0 : user.email}
        </ui_kit_1.Text>
        <Button_1.Button
          ariaLabel={formatMessage(messages_1.contactLabels.signOut)}
          variant="tertiary"
          onClick={handleLogout}
          label={formatMessage(messages_1.contactMessages.signOut)}
        />
      </div>
    </SignInFormContainer_1.SignInFormContainer>
  );
};
exports.SignedInUser = SignedInUser;

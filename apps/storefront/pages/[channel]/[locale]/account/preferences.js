"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const EmailPreferences_1 = require("@/components/accountPreferences/EmailPreferences");
const PasswordPreferences_1 = require("@/components/accountPreferences/PasswordPreferences");
function AccountPreferencesPage() {
  return (
    <>
      <div className="checkout-section-container">
        <EmailPreferences_1.EmailPreferences />
      </div>
      <div className="checkout-section-container">
        <PasswordPreferences_1.PasswordPreferences />
      </div>
    </>
  );
}
exports.default = AccountPreferencesPage;
AccountPreferencesPage.getLayout = function getLayout(page) {
  return <components_1.AccountLayout>{page}</components_1.AccountLayout>;
};

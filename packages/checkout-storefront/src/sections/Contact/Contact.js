"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("react");
const SignedInUser_1 = require("../SignedInUser/SignedInUser");
const ResetPassword_1 = require("../ResetPassword/ResetPassword");
const useCustomerAttach_1 = require("@/checkout-storefront/hooks/useCustomerAttach");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const SignIn_1 = require("@/checkout-storefront/sections/SignIn/SignIn");
const GuestUser_1 = require("@/checkout-storefront/sections/GuestUser/GuestUser");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const onlyContactShownSections = ["signIn", "resetPassword"];
const Contact = ({ setShowOnlyContact }) => {
  (0, useCustomerAttach_1.useCustomerAttach)();
  const { user, authenticated } = (0, useUser_1.useUser)();
  const [email, setEmail] = (0, react_2.useState)(
    (user === null || user === void 0 ? void 0 : user.email) || ""
  );
  const [passwordResetShown, setPasswordResetShown] = (0, react_2.useState)(false);
  const selectInitialSection = () => {
    const shouldShowPasswordReset = passwordResetToken && !passwordResetShown;
    if (shouldShowPasswordReset) {
      return "resetPassword";
    }
    return user ? "signedInUser" : "guestUser";
  };
  const passwordResetToken = (0, url_1.getQueryParams)().passwordResetToken;
  const [currentSection, setCurrentSection] = (0, react_2.useState)(selectInitialSection());
  const handleChangeSection = (section) => () => {
    if (onlyContactShownSections.includes(section)) {
      setShowOnlyContact(true);
    }
    setCurrentSection(section);
  };
  const isCurrentSection = (0, react_1.useCallback)(
    (section) => currentSection === section,
    [currentSection]
  );
  const shouldShowOnlyContact = onlyContactShownSections.includes(currentSection);
  (0, react_1.useEffect)(() => {
    if (isCurrentSection("resetPassword")) {
      setPasswordResetShown(true);
    }
  }, [isCurrentSection]);
  (0, react_1.useEffect)(() => {
    setShowOnlyContact(shouldShowOnlyContact);
  }, [currentSection, setShowOnlyContact, shouldShowOnlyContact]);
  (0, react_1.useEffect)(() => {
    if (authenticated && currentSection !== "signedInUser") {
      setCurrentSection("signedInUser");
    } else if (!authenticated && currentSection === "signedInUser") {
      setCurrentSection("guestUser");
    }
  }, [authenticated, currentSection]);
  return (
    <div>
      {isCurrentSection("guestUser") && (
        <GuestUser_1.GuestUser
          onSectionChange={handleChangeSection("signIn")}
          onEmailChange={setEmail}
          email={email}
        />
      )}

      {isCurrentSection("signIn") && (
        <SignIn_1.SignIn
          onSectionChange={handleChangeSection("guestUser")}
          onSignInSuccess={handleChangeSection("signedInUser")}
          onEmailChange={setEmail}
          email={email}
        />
      )}

      {isCurrentSection("signedInUser") && (
        <SignedInUser_1.SignedInUser
          onSectionChange={handleChangeSection("guestUser")}
          onSignOutSuccess={handleChangeSection("guestUser")}
        />
      )}

      {isCurrentSection("resetPassword") && (
        <ResetPassword_1.ResetPassword
          onSectionChange={handleChangeSection("signIn")}
          onResetPasswordSuccess={handleChangeSection("signedInUser")}
        />
      )}
    </div>
  );
};
exports.Contact = Contact;

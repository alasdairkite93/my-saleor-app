"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordInput = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const icons_1 = require("@/checkout-storefront/icons");
const IconButton_1 = require("@/checkout-storefront/components/IconButton");
const TextInput_1 = require("@/checkout-storefront/components/TextInput");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const messages_1 = require("@/checkout-storefront/components/PasswordInput/messages");
const react_1 = require("react");
const PasswordInput = (props) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const [passwordVisible, setPasswordVisible] = (0, react_1.useState)(false);
  return (
    <div className="relative">
      <TextInput_1.TextInput {...props} type={passwordVisible ? "text" : "password"} />
      <div className="password-input-icon">
        <IconButton_1.IconButton
          variant="bare"
          ariaLabel={formatMessage(messages_1.labels.passwordVisibility)}
          onClick={() => setPasswordVisible(!passwordVisible)}
          icon={
            <img
              src={
                passwordVisible
                  ? (0, svgSrc_1.getSvgSrc)(icons_1.EyeIcon)
                  : (0, svgSrc_1.getSvgSrc)(icons_1.EyeHiddenIcon)
              }
              alt=""
            />
          }
        />
      </div>
    </div>
  );
};
exports.PasswordInput = PasswordInput;

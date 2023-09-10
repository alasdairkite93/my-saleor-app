"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNotFound = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const ui_kit_1 = require("@saleor/ui-kit");
const Button_1 = require("@/checkout-storefront/components/Button");
const images_1 = require("@/checkout-storefront/images");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const messages_1 = require("./messages");
const messages_2 = require("@/checkout-storefront/views/EmptyCartPage/messages");
const PageNotFound = ({ error }) => {
  console.error(error);
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  // eslint-disable-next-line no-restricted-globals
  const goBack = () => history.back();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center pt-12">
      <div className="w-full flex justify-center">
        <img src={(0, svgSrc_1.getSvgSrc)(images_1.SaleorLogo)} alt="logo" className="logo" />
      </div>
      <div className="h-full flex flex-col items-center justify-center mb-22">
        <ui_kit_1.Text className="mb-6 max-w-85 text-center">
          {formatMessage(messages_1.pageNotFoundMessages.subtitle)}
        </ui_kit_1.Text>
        <Button_1.Button
          ariaLabel={formatMessage(messages_2.emptyCartLabels.goBackToStore)}
          onClick={goBack}
          variant="secondary"
          label={formatMessage(messages_2.emptyCartMessages.goBackToStore)}
        />
      </div>
    </div>
  );
};
exports.PageNotFound = PageNotFound;

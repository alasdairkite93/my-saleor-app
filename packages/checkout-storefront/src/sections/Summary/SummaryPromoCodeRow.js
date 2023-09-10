"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryPromoCodeRow = void 0;
const IconButton_1 = require("@/checkout-storefront/components/IconButton");
const react_1 = __importDefault(require("react"));
const SummaryMoneyRow_1 = require("./SummaryMoneyRow");
const icons_1 = require("@/checkout-storefront/icons");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const graphql_1 = require("@/checkout-storefront/graphql");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const messages_1 = require("./messages");
const commonMessages_1 = require("@/checkout-storefront/lib/commonMessages");
const useLocale_1 = require("@/checkout-storefront/hooks/useLocale");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const SummaryPromoCodeRow = (_a) => {
  var { promoCode, promoCodeId, editable } = _a,
    rest = __rest(_a, ["promoCode", "promoCodeId", "editable"]);
  const { checkout } = (0, useCheckout_1.useCheckout)({
    pause: (0, url_1.isOrderConfirmationPage)(),
  });
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { locale } = (0, useLocale_1.useLocale)();
  const [, checkoutRemovePromoCode] = (0, graphql_1.useCheckoutRemovePromoCodeMutation)();
  const onDelete = () => {
    const variables = promoCode ? { promoCode: promoCode } : { promoCodeId: promoCodeId };
    void checkoutRemovePromoCode(
      Object.assign(
        { languageCode: (0, locale_1.localeToLanguageCode)(locale), checkoutId: checkout.id },
        variables
      )
    );
  };
  return (
    <SummaryMoneyRow_1.SummaryMoneyRow {...rest}>
      {editable && (
        <IconButton_1.IconButton
          color="secondary"
          onClick={onDelete}
          ariaLabel={formatMessage(messages_1.summaryLabels.removeDiscount)}
          variant="bare"
          icon={
            <img
              src={(0, svgSrc_1.getSvgSrc)(icons_1.RemoveIcon)}
              alt={formatMessage(commonMessages_1.imageAltMessages.removeIcon)}
            />
          }
        />
      )}
    </SummaryMoneyRow_1.SummaryMoneyRow>
  );
};
exports.SummaryPromoCodeRow = SummaryPromoCodeRow;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSelect = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const useLocale_1 = require("@/checkout-storefront/hooks/useLocale");
const useUrlChange_1 = require("@/checkout-storefront/hooks/useUrlChange");
const icons_1 = require("@/checkout-storefront/icons");
const regions_1 = require("@/checkout-storefront/lib/regions");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const messages_1 = require("@/checkout-storefront/sections/PageHeader/messages");
const ui_kit_1 = require("@saleor/ui-kit");
const react_1 = __importDefault(require("react"));
const LanguageSelect = ({}) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { locale } = (0, useLocale_1.useLocale)();
  const handleLanguageChange = (locale) => {
    (0, url_1.replaceUrl)({ query: { locale } });
    const navEvent = new PopStateEvent(useUrlChange_1.POPSTATE_EVENT);
    window.dispatchEvent(navEvent);
  };
  return (
    <div className="language-select-container">
      <ui_kit_1.IconButton
        icon={<img src={(0, svgSrc_1.getSvgSrc)(icons_1.LanguageIcon)} alt="" />}
        label={formatMessage(messages_1.languagesMessages[locale])}
        className="pointer-events-none"
      />
      <ui_kit_1.Select
        classNames={{ container: "language-select" }}
        value={locale}
        onChange={(event) => handleLanguageChange(event.target.value)}
        options={regions_1.locales.map((locale) => ({
          label: formatMessage(messages_1.languagesMessages[locale]),
          value: locale,
        }))}
      />
    </div>
  );
};
exports.LanguageSelect = LanguageSelect;

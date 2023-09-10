"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocale = void 0;
const useUrlChange_1 = require("@/checkout-storefront/hooks/useUrlChange");
const regions_1 = require("@/checkout-storefront/lib/regions");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const react_1 = require("react");
const en_US_json_1 = __importDefault(require("../../content/compiled-locales/en-US.json"));
const pl_PL_json_1 = __importDefault(require("../../content/compiled-locales/pl-PL.json"));
const localeToMessages = {
  "en-US": en_US_json_1.default,
  "pl-PL": pl_PL_json_1.default,
};
const useLocale = () => {
  const { locale, countryCode } = (0, locale_1.getParsedLocaleData)(
    (0, url_1.getQueryParams)().locale
  );
  const [currentLocale, setCurrentLocale] = (0, react_1.useState)(locale);
  const [currentCountryCode, setCurrentCountryCode] = (0, react_1.useState)(countryCode);
  const [currentChannel, setCurrentChannel] = (0, react_1.useState)(
    (0, url_1.getQueryParams)().channel
  );
  const messages = (0, react_1.useMemo)(
    () =>
      currentLocale in localeToMessages
        ? localeToMessages[currentLocale]
        : localeToMessages[regions_1.DEFAULT_LOCALE],
    [currentLocale]
  );
  if (!messages) {
    console.warn(`Missing messages for locale: ${currentLocale}`);
  }
  const handleChange = ({ queryParams }) => {
    const newQuery = (0, locale_1.getParsedLocaleData)(queryParams.locale);
    setCurrentLocale(newQuery.locale);
    setCurrentCountryCode(newQuery.countryCode);
    setCurrentChannel(queryParams.channel);
  };
  (0, useUrlChange_1.useUrlChange)(handleChange);
  return (0, react_1.useMemo)(
    () => ({
      locale: currentLocale,
      countryCode: currentCountryCode,
      messages,
      channel: currentChannel,
    }),
    [currentCountryCode, currentLocale, messages, currentChannel]
  );
};
exports.useLocale = useLocale;

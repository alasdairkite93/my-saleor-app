"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetCountryNames =
  exports.getParsedLocaleData =
  exports.getCurrentHref =
  exports.localeToLanguageCode =
    void 0;
const url_1 = require("@/checkout-storefront/lib/utils/url");
const lodash_es_1 = require("lodash-es");
const localeToLanguageCode = (locale) => (0, lodash_es_1.snakeCase)(locale).toUpperCase();
exports.localeToLanguageCode = localeToLanguageCode;
const getCurrentHref = () => location.href;
exports.getCurrentHref = getCurrentHref;
const getParsedLocaleData = (locale) => {
  const [languageCode, countryCode] =
    locale === null || locale === void 0 ? void 0 : locale.split("-");
  return {
    countryCode: countryCode,
    locale,
    languageCode: languageCode,
  };
};
exports.getParsedLocaleData = getParsedLocaleData;
const createGetCountryNames = () => {
  const countryNames = new Intl.DisplayNames(
    [(0, exports.getParsedLocaleData)((0, url_1.getQueryParams)().locale).languageCode],
    { type: "region" }
  );
  return (countryCode) => countryNames.of(countryCode) || countryCode;
};
exports.createGetCountryNames = createGetCountryNames;

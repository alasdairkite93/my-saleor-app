"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageCodeToLocale =
  exports.contextToRegionQuery =
  exports.localeToEnum =
  exports.regionCombinations =
  exports.CHANNELS =
  exports.DEFAULT_CHANNEL =
  exports.CHANNEL_SLUG_KEY =
  exports.DEFAULT_LOCALE =
  exports.LOCALES =
    void 0;
exports.LOCALES = [
  {
    slug: "en-US",
    code: "EN_US",
    name: "American English",
  },
  { slug: "pl-PL", code: "PL_PL", name: "Polski" },
  { slug: "fr-FR", code: "FR_FR", name: "Français" },
  { slug: "vi-VN", code: "VI_VN", name: "Việt Nam" },
  { slug: "ar-AE", code: "AR_AE", name: "العربية" },
];
exports.DEFAULT_LOCALE = "en-US";
exports.CHANNEL_SLUG_KEY = "channelSlug";
exports.DEFAULT_CHANNEL = {
  slug: "default-channel",
  name: "United States Dollar",
  currencyCode: "USD",
};
exports.CHANNELS = [
  exports.DEFAULT_CHANNEL,
  {
    slug: "channel-pln",
    name: "Polski Złoty",
    currencyCode: "PLN",
  },
  {
    slug: "channel-fr",
    name: "Euro",
    currencyCode: "EUR",
  },
  {
    slug: "channel-vi",
    name: "Việt Nam đồng",
    currencyCode: "VND",
  },
  {
    slug: "channel-ae",
    name: "درهم",
    currencyCode: "AED",
  },
];
const regionCombinations = () => {
  const combinations = [];
  exports.CHANNELS.forEach((channel) => {
    exports.LOCALES.forEach((locale) => {
      combinations.push({ channelSlug: channel.slug, localeSlug: locale.slug });
    });
  });
  return combinations;
};
exports.regionCombinations = regionCombinations;
const localeToEnum = (localeSlug) => {
  var _a, _b;
  const chosenLocale =
    (_a = exports.LOCALES.find(({ slug }) => slug === localeSlug)) === null || _a === void 0
      ? void 0
      : _a.code;
  if (chosenLocale) {
    return chosenLocale;
  }
  return (
    ((_b = exports.LOCALES.find(({ slug }) => slug === exports.DEFAULT_LOCALE)) === null ||
    _b === void 0
      ? void 0
      : _b.code) || "EN_US"
  );
};
exports.localeToEnum = localeToEnum;
const contextToRegionQuery = (context) => {
  var _a, _b, _c, _d;
  return {
    channel:
      ((_b = (_a = context.params) === null || _a === void 0 ? void 0 : _a.channel) === null ||
      _b === void 0
        ? void 0
        : _b.toString()) || exports.DEFAULT_CHANNEL.slug,
    locale: (0, exports.localeToEnum)(
      ((_d = (_c = context.params) === null || _c === void 0 ? void 0 : _c.locale) === null ||
      _d === void 0
        ? void 0
        : _d.toString()) || exports.DEFAULT_LOCALE
    ),
  };
};
exports.contextToRegionQuery = contextToRegionQuery;
const languageCodeToLocale = (locale) => {
  // Converts locale from EN_US to en-US
  const splitted = locale.split("_");
  splitted[0] = splitted[0].toLowerCase();
  return splitted.join("-");
};
exports.languageCodeToLocale = languageCodeToLocale;

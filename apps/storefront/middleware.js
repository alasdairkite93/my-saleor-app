"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleRedirectionMiddleware = void 0;
const server_1 = require("next/server");
const const_1 = require("@/lib/const");
const regions_1 = require("@/lib/regions");
function LocaleRedirectionMiddleware({ nextUrl, headers, geo }) {
  var _a, _b, _c;
  if (nextUrl.pathname !== "/") {
    // redirect should only be applied on homepage, without any region/locale chosen
    return null;
  }
  if (!const_1.GEOLOCATION) {
    // redirection middleware can be turned on by setting the NEXT_PUBLIC_GEOLOCATION
    // env variable. If it's turned off we redirect to the default region
    const url = nextUrl.clone();
    url.pathname = `/${regions_1.DEFAULT_CHANNEL.slug}/${regions_1.DEFAULT_LOCALE}`;
    return server_1.NextResponse.redirect(url);
  }
  const requestLocale =
    ((_b =
      (_a = headers.get("accept-language")) === null || _a === void 0 ? void 0 : _a.split(",")) ===
      null || _b === void 0
      ? void 0
      : _b[0]) || regions_1.DEFAULT_LOCALE;
  let locale = regions_1.DEFAULT_LOCALE;
  if (regions_1.LOCALES.find((l) => l.slug === requestLocale)) {
    // Redirect to the request language if supported by the application
    locale = requestLocale;
  }
  const requestCountry =
    ((_c = geo === null || geo === void 0 ? void 0 : geo.country) === null || _c === void 0
      ? void 0
      : _c.toLowerCase()) || "us";
  let channel = regions_1.DEFAULT_CHANNEL.slug;
  // For the demo purposes channel redirection only recognizes PLN channel by country
  if (requestCountry === "pl" && regions_1.CHANNELS.find((ch) => ch.slug === "channel-pln")) {
    channel = "channel-pln";
  }
  const url = nextUrl.clone();
  url.pathname = `/${channel}/${locale}`;
  return server_1.NextResponse.redirect(url);
}
exports.LocaleRedirectionMiddleware = LocaleRedirectionMiddleware;
exports.default = LocaleRedirectionMiddleware;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GEOLOCATION =
  exports.HOMEPAGE_MENU =
  exports.DEMO_MODE =
  exports.API_URI =
  exports.CHECKOUT_TOKEN =
  exports.STOREFRONT_NAME =
    void 0;
exports.STOREFRONT_NAME = process.env.NEXT_PUBLIC_STOREFRONT_NAME || "";
exports.CHECKOUT_TOKEN = "checkoutToken";
exports.API_URI = process.env.NEXT_PUBLIC_API_URI || "";
exports.DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === "true";
exports.HOMEPAGE_MENU = process.env.NEXT_PUBLIC_HOMEPAGE_MENU || "";
exports.GEOLOCATION = process.env.NEXT_PUBLIC_GEOLOCATION === "true";

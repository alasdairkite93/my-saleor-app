"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagesPath = void 0;
exports.pagesPath = {
  $404: {
    $url: (url) => ({ pathname: "/404", hash: url === null || url === void 0 ? void 0 : url.hash }),
  },
  _channel: (channel) => ({
    _locale: (locale) => ({
      _sitemap: (sitemap) => ({
        $url: (url) => ({
          pathname: "/[channel]/[locale]/[sitemap]",
          query: { channel, locale, sitemap },
          hash: url === null || url === void 0 ? void 0 : url.hash,
        }),
      }),
      account: {
        addressBook: {
          $url: (url) => ({
            pathname: "/[channel]/[locale]/account/addressBook",
            query: { channel, locale },
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        },
        login: {
          $url: (url) => ({
            pathname: "/[channel]/[locale]/account/login",
            query: Object.assign(
              { channel, locale },
              url === null || url === void 0 ? void 0 : url.query
            ),
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        },
        orders: {
          $url: (url) => ({
            pathname: "/[channel]/[locale]/account/orders",
            query: { channel, locale },
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
          _token: (token) => ({
            $url: (url) => ({
              pathname: "/[channel]/[locale]/account/orders/[token]",
              query: { channel, locale, token },
              hash: url === null || url === void 0 ? void 0 : url.hash,
            }),
          }),
        },
        preferences: {
          $url: (url) => ({
            pathname: "/[channel]/[locale]/account/preferences",
            query: { channel, locale },
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        },
        register: {
          $url: (url) => ({
            pathname: "/[channel]/[locale]/account/register",
            query: { channel, locale },
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        },
      },
      category: {
        _slug: (slug) => ({
          $url: (url) => ({
            pathname: "/[channel]/[locale]/category/[slug]",
            query: { channel, locale, slug },
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        }),
      },
      checkout: {
        $url: (url) => ({
          pathname: "/[channel]/[locale]/checkout",
          query: { channel, locale },
          hash: url === null || url === void 0 ? void 0 : url.hash,
        }),
      },
      collection: {
        _slug: (slug) => ({
          $url: (url) => ({
            pathname: "/[channel]/[locale]/collection/[slug]",
            query: { channel, locale, slug },
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        }),
      },
      order: {
        $url: (url) => ({
          pathname: "/[channel]/[locale]/order",
          query: { channel, locale },
          hash: url === null || url === void 0 ? void 0 : url.hash,
        }),
      },
      page: {
        _slug: (slug) => ({
          $url: (url) => ({
            pathname: "/[channel]/[locale]/page/[slug]",
            query: { channel, locale, slug },
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        }),
      },
      products: {
        _slug: (slug) => ({
          $url: (url) => ({
            pathname: "/[channel]/[locale]/products/[slug]",
            query: Object.assign(
              { channel, locale, slug },
              url === null || url === void 0 ? void 0 : url.query
            ),
            hash: url === null || url === void 0 ? void 0 : url.hash,
          }),
        }),
      },
      search: {
        $url: (url) => ({
          pathname: "/[channel]/[locale]/search",
          query: { channel, locale },
          hash: url === null || url === void 0 ? void 0 : url.hash,
        }),
      },
      $url: (url) => ({
        pathname: "/[channel]/[locale]",
        query: { channel, locale },
        hash: url === null || url === void 0 ? void 0 : url.hash,
      }),
    }),
  }),
  $url: (url) => ({ pathname: "/", hash: url === null || url === void 0 ? void 0 : url.hash }),
};

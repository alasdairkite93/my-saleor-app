"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinkPath = void 0;
const _path_1 = require("@/lib/$path");
const getLinkPath = (item, channel, locale) => {
  var _a, _b, _c;
  const paths = _path_1.pagesPath._channel(channel)._locale(locale);
  if (item.category) {
    return paths.category
      ._slug((_a = item.category) === null || _a === void 0 ? void 0 : _a.slug)
      .$url();
  }
  if (item.collection) {
    return paths.collection
      ._slug((_b = item.collection) === null || _b === void 0 ? void 0 : _b.slug)
      .$url();
  }
  if (item.page) {
    return paths.page._slug((_c = item.page) === null || _c === void 0 ? void 0 : _c.slug).$url();
  }
  return paths.$url();
};
exports.getLinkPath = getLinkPath;
exports.default = exports.getLinkPath;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaths = void 0;
const RegionsProvider_1 = require("@/components/RegionsProvider");
const _path_1 = require("@/lib/$path");
const usePaths = () => {
  const { currentChannel, currentLocale: locale } = (0, RegionsProvider_1.useRegions)();
  return _path_1.pagesPath._channel(currentChannel.slug)._locale(locale);
};
exports.usePaths = usePaths;
exports.default = exports.usePaths;

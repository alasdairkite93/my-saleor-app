"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homepagePaths = void 0;
const regions_1 = require("../regions");
const homepagePaths = () => {
  const paths = (0, regions_1.regionCombinations)().map((combination) => ({
    params: {
      locale: combination.localeSlug,
      channel: combination.channelSlug,
    },
  }));
  return paths;
};
exports.homepagePaths = homepagePaths;

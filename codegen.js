"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
  overwrite: true,
  schema: "https://thwatchshop.eu.saleor.cloud/graphql/",
  documents: "graphql/**/*.graphql",
  generates: {
    "./saleor/": {
      preset: "client",
      plugins: [],
    },
  },
};
exports.default = config;

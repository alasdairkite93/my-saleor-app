"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareGraphqlMetafields = exports.saleorApi = void 0;
const msw_1 = require("msw");
exports.saleorApi = msw_1.graphql.link(process.env.NEXT_PUBLIC_SALEOR_API_URL);
const prepareGraphqlMetafields = (keys, metafields) => {
  return keys.reduce(
    (allKeys, key) =>
      Object.assign(Object.assign({}, allKeys), { [key]: JSON.stringify(metafields[key]) }),
    {}
  );
};
exports.prepareGraphqlMetafields = prepareGraphqlMetafields;

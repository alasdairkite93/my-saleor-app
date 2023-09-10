"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typePolicies = void 0;
const utilities_1 = require("@apollo/client/utilities");
exports.typePolicies = {
  User: {
    fields: {
      orders: (0, utilities_1.relayStylePagination)(),
    },
  },
  Query: {
    fields: {
      products: (0, utilities_1.relayStylePagination)(["filter", "sortBy"]),
    },
  },
};
exports.default = exports.typePolicies;

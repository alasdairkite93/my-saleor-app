"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientForAuthData = void 0;
const urql_1 = require("urql");
const getClientForAuthData = ({ saleorApiUrl, token }) => {
  const client = (0, urql_1.createClient)({
    url: saleorApiUrl,
    requestPolicy: "network-only",
    suspense: false,
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
  // client.subscribeToDebugTarget?.((e) => console.dir(e, { depth: 999 }));
  return client;
};
exports.getClientForAuthData = getClientForAuthData;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestData = exports.isExpiredToken = void 0;
const language_1 = require("graphql/language");
const MILLI_MULTIPLYER = 1000;
const TOKEN_GRACE_PERIOD = 2000;
// returns timestamp
const getTokenExpiry = (token) => {
  const tokenParts = token.split(".");
  const decodedTokenData = Buffer.from(tokenParts[1] || "", "base64").toString();
  const parsedTokenData = JSON.parse(decodedTokenData);
  // because api returns seconds, but Date.now() works in millis
  return parsedTokenData.exp * MILLI_MULTIPLYER || 0;
};
const isExpiredToken = (token) => {
  // we'll assume a generous time of 2 seconds for api to
  // process our request
  return getTokenExpiry(token) - TOKEN_GRACE_PERIOD <= Date.now();
};
exports.isExpiredToken = isExpiredToken;
// query here is document node but because of graphql-tag using
// a different version of graphql and pnpm overrides not working
// https://github.com/pnpm/pnpm/issues/4097
// we're gonna do this instead
const getRequestData = (query, variables) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: (0, language_1.print)(query), variables }),
});
exports.getRequestData = getRequestData;

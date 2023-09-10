"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphqlClient = void 0;
const exchange_auth_1 = require("@urql/exchange-auth");
const exchange_multipart_fetch_1 = require("@urql/exchange-multipart-fetch");
const urql_1 = require("urql");
const addAuthToOperation = ({ authState, operation }) => {
  if (!(authState === null || authState === void 0 ? void 0 : authState.token)) {
    return operation;
  }
  const fetchOptions =
    typeof operation.context.fetchOptions === "function"
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {};
  return (0, urql_1.makeOperation)(
    operation.kind,
    operation,
    Object.assign(Object.assign({}, operation.context), {
      fetchOptions: Object.assign(Object.assign({}, fetchOptions), {
        headers: Object.assign(Object.assign({}, fetchOptions.headers), {
          Authorization: `Bearer ${authState.token}`,
        }),
      }),
    })
  );
};
const willAuthError = ({ authState }) =>
  !(authState === null || authState === void 0 ? void 0 : authState.token);
const createGraphqlClient = (apiUrl, token) => {
  console.info(`Using API_URL: ${apiUrl}`);
  return (0, urql_1.createClient)({
    exchanges: [
      urql_1.dedupExchange,
      urql_1.cacheExchange,
      (0, exchange_auth_1.authExchange)({
        getAuth: () =>
          __awaiter(void 0, void 0, void 0, function* () {
            return token ? { token } : null;
          }),
        willAuthError,
        addAuthToOperation,
      }),
      exchange_multipart_fetch_1.multipartFetchExchange,
    ],
    url: apiUrl,
  });
};
exports.createGraphqlClient = createGraphqlClient;

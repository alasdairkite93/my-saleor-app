"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthenticatedApolloClient = exports.serverApolloClient = void 0;
const const_1 = require("@/lib/const");
const client_1 = require("@apollo/client");
const react_1 = require("react");
const typePolicies_1 = require("./typePolicies");
// for static geenration of pages, we don't need auth there
exports.serverApolloClient = new client_1.ApolloClient({
  link: (0, client_1.createHttpLink)({ uri: const_1.API_URI }),
  cache: new client_1.InMemoryCache({ typePolicies: typePolicies_1.typePolicies }),
  ssrMode: true,
});
const useAuthenticatedApolloClient = (fetchWithAuth) => {
  const httpLink = (0, client_1.createHttpLink)({
    uri: const_1.API_URI,
    fetch: fetchWithAuth,
  });
  const apolloClient = (0, react_1.useMemo)(
    () =>
      new client_1.ApolloClient({
        link: httpLink,
        cache: new client_1.InMemoryCache({ typePolicies: typePolicies_1.typePolicies }),
      }),
    []
  );
  return { apolloClient, resetClient: () => apolloClient.resetStore() };
};
exports.useAuthenticatedApolloClient = useAuthenticatedApolloClient;

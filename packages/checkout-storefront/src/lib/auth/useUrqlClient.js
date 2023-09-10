"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUrqlClient = void 0;
const react_1 = require("react");
const urql_1 = require("urql");
// since urql doesn't support invalidating cache manually
// https://github.com/urql-graphql/urql/issues/297#issuecomment-501646761
const useUrqlClient = (opts) => {
  const createNewClient = () => (0, urql_1.createClient)(opts);
  const [urqlClient, setUrqlClient] = (0, react_1.useState)(createNewClient());
  const resetClient = () => setUrqlClient(createNewClient());
  return { urqlClient, resetClient };
};
exports.useUrqlClient = useUrqlClient;

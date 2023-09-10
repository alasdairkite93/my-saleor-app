"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useUser = () => {
  const [{ data, fetching: loading, stale }] = (0, graphql_1.useUserQuery)();
  const user = data === null || data === void 0 ? void 0 : data.user;
  const authenticated = !!(user === null || user === void 0 ? void 0 : user.id);
  return { user, loading: loading || stale, authenticated };
};
exports.useUser = useUser;

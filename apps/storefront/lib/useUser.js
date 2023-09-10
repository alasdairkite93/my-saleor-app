"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUser = void 0;
const api_1 = require("@/saleor/api");
const useUser = () => {
  const { data, loading } = (0, api_1.useUserQuery)();
  const user = data === null || data === void 0 ? void 0 : data.user;
  const authenticated = !!(user === null || user === void 0 ? void 0 : user.id);
  return { user, loading, authenticated };
};
exports.useUser = useUser;

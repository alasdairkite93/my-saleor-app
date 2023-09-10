"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthData = void 0;
const ClientAppBridgeProvider_1 = require("../components/elements/AppProvider/ClientAppBridgeProvider");
const useAuthData = () => {
  const { app, isAuthorized } = (0, ClientAppBridgeProvider_1.useAppContext)();
  return {
    appId: app.getState().id,
    isAuthorized,
  };
};
exports.useAuthData = useAuthData;

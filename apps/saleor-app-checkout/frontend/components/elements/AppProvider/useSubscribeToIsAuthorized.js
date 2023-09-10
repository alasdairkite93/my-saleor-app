"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSubscribeToIsAuthorized = void 0;
const app_bridge_1 = require("@saleor/app-sdk/app-bridge");
const react_1 = require("react");
const useSubscribeToIsAuthorized = (app) => {
  const [isAuthorized, setIsAuthorized] = (0, react_1.useState)(!!app.getState().token);
  (0, react_1.useEffect)(() => {
    if (app) {
      setIsAuthorized(!!app.getState().token);
      const unsubscribe = app.subscribe(app_bridge_1.EventType.handshake, (payload) => {
        setIsAuthorized(!!payload.token);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [app]);
  return isAuthorized;
};
exports.useSubscribeToIsAuthorized = useSubscribeToIsAuthorized;

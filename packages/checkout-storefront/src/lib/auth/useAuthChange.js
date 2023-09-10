"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthChange = void 0;
const react_1 = require("react");
const SaleorAuthStorageHandler_1 = require("./SaleorAuthStorageHandler");
// used to handle client cache invalidation on login / logout and when
// token refreshin fails
const useAuthChange = ({ onSignedOut, onSignedIn }) => {
  const handleAuthChange = (event) => {
    const isCustomAuthEvent =
      (event === null || event === void 0 ? void 0 : event.type) ===
      SaleorAuthStorageHandler_1.STORAGE_AUTH_EVENT_KEY;
    if (!isCustomAuthEvent) {
      return;
    }
    const { authState } = event.detail;
    if (authState === "signedIn") {
      onSignedIn === null || onSignedIn === void 0 ? void 0 : onSignedIn();
    } else if (authState === "signedOut") {
      onSignedOut === null || onSignedOut === void 0 ? void 0 : onSignedOut();
    }
  };
  (0, react_1.useEffect)(() => {
    if (typeof window === "undefined") {
      return;
    }
    // for current window
    window.addEventListener(SaleorAuthStorageHandler_1.STORAGE_AUTH_EVENT_KEY, handleAuthChange);
    return () => {
      window.removeEventListener(
        SaleorAuthStorageHandler_1.STORAGE_AUTH_EVENT_KEY,
        handleAuthChange
      );
    };
  }, []);
};
exports.useAuthChange = useAuthChange;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleorAuthStorageHandler =
  exports.STORAGE_AUTH_STATE_KEY =
  exports.STORAGE_AUTH_EVENT_KEY =
    void 0;
/* auth state when user signs in / out */
exports.STORAGE_AUTH_EVENT_KEY = "saleor_storage_auth_change";
exports.STORAGE_AUTH_STATE_KEY = "saleor_auth_module_auth_state";
const REFRESH_TOKEN_KEY = "saleor_auth_module_refresh_token";
class SaleorAuthStorageHandler {
  constructor(storage) {
    this.handleStorageChange = (event) => {
      const { oldValue, newValue, type, key } = event;
      if (oldValue === newValue || type !== "storage" || key !== exports.STORAGE_AUTH_STATE_KEY) {
        return;
      }
      this.sendAuthStateEvent(newValue);
    };
    this.cleanup = () => {
      window.removeEventListener("storage", this.handleStorageChange);
    };
    /* auth state */
    this.sendAuthStateEvent = (authState) => {
      const event = new CustomEvent(exports.STORAGE_AUTH_EVENT_KEY, { detail: { authState } });
      window.dispatchEvent(event);
    };
    this.getAuthState = () => this.storage.getItem(exports.STORAGE_AUTH_STATE_KEY) || "signedOut";
    this.setAuthState = (authState) => {
      this.storage.setItem(exports.STORAGE_AUTH_STATE_KEY, authState);
      this.sendAuthStateEvent(authState);
    };
    /* refresh token */
    this.getRefreshToken = () => this.storage.getItem(REFRESH_TOKEN_KEY) || null;
    this.setRefreshToken = (token) => {
      this.storage.setItem(REFRESH_TOKEN_KEY, token);
    };
    /* performed on logout */
    this.clearAuthStorage = () => {
      this.setAuthState("signedOut");
      this.storage.removeItem(REFRESH_TOKEN_KEY);
    };
    this.storage = storage;
    window.addEventListener("storage", this.handleStorageChange);
  }
}
exports.SaleorAuthStorageHandler = SaleorAuthStorageHandler;

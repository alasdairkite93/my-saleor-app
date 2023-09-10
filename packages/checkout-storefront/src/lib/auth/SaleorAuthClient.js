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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleorAuthClient = void 0;
const SaleorAuthStorageHandler_1 = require("./SaleorAuthStorageHandler");
const utils_1 = require("./utils");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const mutations_1 = require("./mutations");
class SaleorAuthClient {
  /**
   * Use ths method to clear event listeners from storageHandler
   *  @example
   *  ```jsx
   *  useEffect(() => {
   *    return () => {
   *      SaleorAuthClient.cleanup();
   *    }
   *  }, [])
   *  ```
   */
  constructor({ saleorApiUrl, storage, onAuthRefresh }) {
    this.accessToken = null;
    this.tokenRefreshPromise = null;
    this.cleanup = () => {
      var _a;
      (_a = this.storageHandler) === null || _a === void 0 ? void 0 : _a.cleanup();
    };
    this.runAuthorizedRequest = (input, init) => {
      // technically we run this only when token is there
      // but just to make typescript happy
      if (!this.accessToken) {
        return fetch(input, init);
      }
      const headers = (init === null || init === void 0 ? void 0 : init.headers) || {};
      return fetch(
        input,
        Object.assign(Object.assign({}, init), {
          headers: Object.assign(Object.assign({}, headers), {
            Authorization: `Bearer ${this.accessToken}`,
          }),
        })
      );
    };
    this.handleRequestWithTokenRefresh = (input, init) =>
      __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const refreshToken =
          (_a = this.storageHandler) === null || _a === void 0 ? void 0 : _a.getRefreshToken();
        (0, ts_invariant_1.default)(refreshToken, "Missing refresh token in token refresh handler");
        // the refresh already finished, proceed as normal
        if (this.accessToken) {
          return this.fetchWithAuth(input, init);
        }
        (_b = this.onAuthRefresh) === null || _b === void 0 ? void 0 : _b.call(this, true);
        // if the promise is already there, use it
        if (this.tokenRefreshPromise) {
          const response = yield this.tokenRefreshPromise;
          const res = yield response.clone().json();
          const {
            errors: graphqlErrors,
            data: {
              tokenRefresh: { errors, token },
            },
          } = res;
          (_c = this.onAuthRefresh) === null || _c === void 0 ? void 0 : _c.call(this, false);
          if (
            errors.length ||
            (graphqlErrors === null || graphqlErrors === void 0 ? void 0 : graphqlErrors.length) ||
            !token
          ) {
            this.tokenRefreshPromise = null;
            (_d = this.storageHandler) === null || _d === void 0 ? void 0 : _d.clearAuthStorage();
            return fetch(input, init);
          }
          (_e = this.storageHandler) === null || _e === void 0
            ? void 0
            : _e.setAuthState("signedIn");
          this.accessToken = token;
          this.tokenRefreshPromise = null;
          return this.runAuthorizedRequest(input, init);
        }
        // this is the first failed request, initialize refresh
        this.tokenRefreshPromise = fetch(
          this.saleorApiUrl,
          (0, utils_1.getRequestData)(mutations_1.TOKEN_REFRESH, { refreshToken })
        );
        return this.fetchWithAuth(input, init);
      });
    this.handleSignIn = (response) =>
      __awaiter(this, void 0, void 0, function* () {
        var _f, _g, _h;
        const readResponse = yield response.json();
        const responseData =
          "tokenCreate" in readResponse.data
            ? readResponse.data.tokenCreate
            : readResponse.data.setPassword;
        if (!responseData) {
          return readResponse;
        }
        const { errors, token, refreshToken } = responseData;
        if (!token || errors.length) {
          (_f = this.storageHandler) === null || _f === void 0
            ? void 0
            : _f.setAuthState("signedOut");
          return readResponse;
        }
        if (token) {
          this.accessToken = token;
        }
        if (refreshToken) {
          (_g = this.storageHandler) === null || _g === void 0
            ? void 0
            : _g.setRefreshToken(refreshToken);
        }
        (_h = this.storageHandler) === null || _h === void 0 ? void 0 : _h.setAuthState("signedIn");
        return readResponse;
      });
    this.fetchWithAuth = (input, init) =>
      __awaiter(this, void 0, void 0, function* () {
        var _j;
        const refreshToken =
          (_j = this.storageHandler) === null || _j === void 0 ? void 0 : _j.getRefreshToken();
        // access token is fine, add it to the request and proceed
        if (this.accessToken && !(0, utils_1.isExpiredToken)(this.accessToken)) {
          return this.runAuthorizedRequest(input, init);
        }
        // refresh token exists, try to authenticate if possible
        if (refreshToken) {
          return this.handleRequestWithTokenRefresh(input, init);
        }
        // any regular mutation, no previous sign in, proceed
        return fetch(input, init);
      });
    this.resetPassword = (variables) =>
      __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(
          this.saleorApiUrl,
          (0, utils_1.getRequestData)(mutations_1.PASSWORD_RESET, variables)
        );
        return this.handleSignIn(response);
      });
    this.signIn = (variables) =>
      __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(
          this.saleorApiUrl,
          (0, utils_1.getRequestData)(mutations_1.TOKEN_CREATE, variables)
        );
        return this.handleSignIn(response);
      });
    this.signOut = () => {
      var _a;
      this.accessToken = null;
      (_a = this.storageHandler) === null || _a === void 0 ? void 0 : _a.clearAuthStorage();
    };
    this.checkoutSignOut = (variables) =>
      __awaiter(this, void 0, void 0, function* () {
        // customer detach needs auth so run it and then remove all the tokens
        const response = yield this.runAuthorizedRequest(
          this.saleorApiUrl,
          (0, utils_1.getRequestData)(mutations_1.CHECKOUT_CUSTOMER_DETACH, variables)
        );
        const readResponse = yield response.json();
        const {
          data: {
            checkoutCustomerDetach: { errors },
          },
        } = readResponse;
        if (!(errors === null || errors === void 0 ? void 0 : errors.length)) {
          this.signOut();
        }
        return readResponse;
      });
    this.storageHandler = storage
      ? new SaleorAuthStorageHandler_1.SaleorAuthStorageHandler(storage)
      : null;
    this.onAuthRefresh = onAuthRefresh;
    this.saleorApiUrl = saleorApiUrl;
  }
}
exports.SaleorAuthClient = SaleorAuthClient;

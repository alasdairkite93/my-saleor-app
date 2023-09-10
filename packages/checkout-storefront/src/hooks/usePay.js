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
exports.usePay = void 0;
const fetch_1 = require("@/checkout-storefront/fetch");
const useFetch_1 = require("@/checkout-storefront/hooks/useFetch");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const react_1 = require("react");
const AppConfigProvider_1 = require("../providers/AppConfigProvider");
const getRedirectUrl = (saleorApiUrl) => {
  const url = new URL(window.location.href);
  const redirectUrl = url.searchParams.get("redirectUrl");
  // get redirectUrl from query params (passed from storefront)
  if (redirectUrl) {
    return redirectUrl;
  }
  url.searchParams.set("saleorApiUrl", saleorApiUrl);
  // return existing url without any other search params
  return location.origin + location.pathname;
};
const usePay = () => {
  const [{ loading, error, data }, pay] = (0, useFetch_1.useFetch)(fetch_1.pay, { skip: true });
  const {
    env: { checkoutApiUrl },
    saleorApiUrl,
  } = (0, AppConfigProvider_1.useAppConfig)();
  const checkoutPay = (0, react_1.useCallback)(
    ({ provider, method, checkoutId, totalAmount }) =>
      __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const redirectUrl = getRedirectUrl(saleorApiUrl);
        const result = yield pay({
          saleorApiUrl,
          checkoutApiUrl,
          provider,
          method,
          checkoutId,
          totalAmount,
          redirectUrl,
        });
        if (
          (_a = result === null || result === void 0 ? void 0 : result.data) === null ||
          _a === void 0
            ? void 0
            : _a.paymentUrl
        ) {
          const {
            orderId,
            data: { paymentUrl },
          } = result;
          const domain = new URL(saleorApiUrl).hostname;
          (0, url_1.replaceUrl)({
            query: {
              locale: (0, url_1.getQueryParams)().locale,
              checkout: undefined,
              order: orderId,
              saleorApiUrl,
              // @todo remove `domain`
              // https://github.com/saleor/saleor-dashboard/issues/2387
              // https://github.com/saleor/saleor-app-sdk/issues/87
              domain,
            },
          });
          window.location.href = paymentUrl;
        }
        if (
          !(result === null || result === void 0 ? void 0 : result.ok) &&
          (result === null || result === void 0 ? void 0 : result.orderId)
        ) {
          // Order created, payment creation failed, checkout doesn't exist
          const domain = new URL(saleorApiUrl).hostname;
          const newUrl = (0, url_1.replaceUrl)({
            query: {
              locale: (0, url_1.getQueryParams)().locale,
              checkout: undefined,
              order: result === null || result === void 0 ? void 0 : result.orderId,
              saleorApiUrl,
              // @todo remove `domain`
              // https://github.com/saleor/saleor-dashboard/issues/2387
              // https://github.com/saleor/saleor-app-sdk/issues/87
              domain,
            },
          });
          window.location.href = newUrl;
        }
        return result;
      }),
    [checkoutApiUrl, pay, saleorApiUrl]
  );
  const orderPay = ({ provider, orderId, method }) =>
    __awaiter(void 0, void 0, void 0, function* () {
      var _b;
      const redirectUrl = getRedirectUrl(saleorApiUrl);
      const result = yield pay({
        saleorApiUrl,
        checkoutApiUrl,
        provider,
        method,
        orderId,
        redirectUrl,
      });
      if (
        (_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0
          ? void 0
          : _b.paymentUrl
      ) {
        window.location.href = result.data.paymentUrl;
      }
      return result;
    });
  return { orderPay, checkoutPay, loading, error, data };
};
exports.usePay = usePay;

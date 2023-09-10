"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSetPaymentProviderSettings = exports.requestGetPaymentProviderSettings = void 0;
const requestGetPaymentProviderSettings = ({ saleorApiUrl, token }) =>
  fetch(
    `/api/payment-provider-settings/` + `?` + new URLSearchParams({ saleorApiUrl }).toString(),
    {
      method: "GET",
      headers: {
        "authorization-bearer": token,
        "saleor-api-url": saleorApiUrl,
      },
    }
  );
exports.requestGetPaymentProviderSettings = requestGetPaymentProviderSettings;
const requestSetPaymentProviderSettings = (_a) => {
  var { saleorApiUrl, token } = _a,
    data = __rest(_a, ["saleorApiUrl", "token"]);
  return fetch(
    `/api/set-payment-provider-settings/` + `?` + new URLSearchParams({ saleorApiUrl }).toString(),
    {
      method: "POST",
      headers: {
        "authorization-bearer": token,
        "saleor-api-url": saleorApiUrl,
      },
      body: JSON.stringify(data),
    }
  );
};
exports.requestSetPaymentProviderSettings = requestSetPaymentProviderSettings;

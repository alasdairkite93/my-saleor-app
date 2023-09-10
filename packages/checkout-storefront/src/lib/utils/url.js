"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderConfirmationPage =
  exports.extractCheckoutIdFromUrl =
  exports.replaceUrl =
  exports.getUrl =
  exports.clearQueryParams =
  exports.getQueryParams =
  exports.getRawQueryParams =
    void 0;
const regions_1 = require("@/checkout-storefront/lib/regions");
const query_string_1 = __importDefault(require("query-string"));
const queryParamsMap = {
  locale: "locale",
  dummyPayment: "dummyPayment",
  channel: "channel",
  redirectUrl: "redirectUrl",
  checkout: "checkoutId",
  order: "orderId",
  token: "passwordResetToken",
  email: "passwordResetEmail",
  saleorApiUrl: "saleorApiUrl",
};
const defaultParams = {
  locale: regions_1.DEFAULT_LOCALE,
  channel: regions_1.DEFAULT_CHANNEL,
};
// this is intentional, we know what we'll get from the query but
// queryString has no way to type this in such a specific way
const getRawQueryParams = () => query_string_1.default.parse(location.search);
exports.getRawQueryParams = getRawQueryParams;
const getQueryParams = () => {
  const params = (0, exports.getRawQueryParams)();
  const locale = params.locale || defaultParams.locale;
  if (locale !== params.locale) {
    (0, exports.replaceUrl)({ query: { locale: regions_1.DEFAULT_LOCALE } });
  }
  return Object.entries(Object.assign(Object.assign({}, params), { locale })).reduce(
    (result, entry) => {
      const [paramName, paramValue] = entry;
      const mappedParamName = queryParamsMap[paramName];
      const mappedParamValue = paramValue || defaultParams[paramName];
      return Object.assign(Object.assign({}, result), { [mappedParamName]: mappedParamValue });
    },
    {}
  );
};
exports.getQueryParams = getQueryParams;
const clearQueryParams = (...keys) => {
  const query = Object.entries(queryParamsMap).reduce((result, [unmappedParam, mappedParam]) => {
    if (!keys.includes(mappedParam)) {
      return result;
    }
    return Object.assign(Object.assign({}, result), { [unmappedParam]: undefined });
  }, {});
  (0, exports.replaceUrl)({ query });
};
exports.clearQueryParams = clearQueryParams;
const getUrl = ({ url = window.location.toString(), query, replaceWholeQuery = false }) => {
  const newQuery = replaceWholeQuery
    ? query
    : Object.assign(Object.assign({}, (0, exports.getRawQueryParams)()), query);
  const newUrl = query_string_1.default.stringifyUrl({ url, query: newQuery });
  return { newUrl, newQuery };
};
exports.getUrl = getUrl;
const replaceUrl = ({ url = window.location.toString(), query, replaceWholeQuery = false }) => {
  const { newUrl, newQuery } = (0, exports.getUrl)({ url, query, replaceWholeQuery });
  window.history.pushState(
    Object.assign(Object.assign(Object.assign({}, window.history.state), newQuery), {
      url: newUrl,
      as: newUrl,
    }),
    "",
    newUrl
  );
  return newUrl;
};
exports.replaceUrl = replaceUrl;
const extractCheckoutIdFromUrl = () => {
  const { checkoutId } = (0, exports.getQueryParams)();
  if ((0, exports.isOrderConfirmationPage)()) {
    return "";
  }
  if (typeof checkoutId !== "string") {
    throw new Error("Checkout token does not exist");
  }
  return checkoutId;
};
exports.extractCheckoutIdFromUrl = extractCheckoutIdFromUrl;
const isOrderConfirmationPage = () => {
  const { orderId } = (0, exports.getQueryParams)();
  return typeof orderId === "string";
};
exports.isOrderConfirmationPage = isOrderConfirmationPage;

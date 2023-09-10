"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAvailableShippingCountries = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const react_1 = require("react");
const useAvailableShippingCountries = () => {
  var _a;
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const [{ data }] = (0, graphql_1.useChannelQuery)({
    variables: { slug: checkout.channel.slug },
    pause: !(checkout === null || checkout === void 0 ? void 0 : checkout.channel.slug),
  });
  const availableShippingCountries = (0, react_1.useMemo)(() => {
    var _a, _b;
    return (
      ((_b =
        (_a = data === null || data === void 0 ? void 0 : data.channel) === null || _a === void 0
          ? void 0
          : _a.countries) === null || _b === void 0
        ? void 0
        : _b.map(({ code }) => code)) || []
    );
  }, [
    (_a = data === null || data === void 0 ? void 0 : data.channel) === null || _a === void 0
      ? void 0
      : _a.countries,
  ]);
  return { availableShippingCountries };
};
exports.useAvailableShippingCountries = useAvailableShippingCountries;

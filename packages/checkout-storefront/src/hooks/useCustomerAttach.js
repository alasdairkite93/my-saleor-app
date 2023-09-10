"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomerAttach = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const react_1 = require("react");
const useSubmit_1 = require("@/checkout-storefront/hooks/useSubmit/useSubmit");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const useCustomerAttach = () => {
  var _a;
  const { checkout, loading, refetch } = (0, useCheckout_1.useCheckout)();
  const { authenticated } = (0, useUser_1.useUser)();
  const [{ fetching }, customerAttach] = (0, graphql_1.useCheckoutCustomerAttachMutation)();
  const onSubmit = (0, useSubmit_1.useSubmit)(
    (0, react_1.useMemo)(
      () => ({
        hideAlerts: true,
        scope: "checkoutCustomerAttach",
        shouldAbort: () => {
          var _a;
          return (
            !!((_a = checkout === null || checkout === void 0 ? void 0 : checkout.user) === null ||
            _a === void 0
              ? void 0
              : _a.id) ||
            !authenticated ||
            fetching ||
            loading
          );
        },
        onSubmit: customerAttach,
        parse: ({ languageCode, checkoutId }) => ({ languageCode, checkoutId }),
        onError: ({ errors }) => {
          if (
            errors.some((error) => {
              var _a;
              return (_a = error === null || error === void 0 ? void 0 : error.message) === null ||
                _a === void 0
                ? void 0
                : _a.includes(
                    "[GraphQL] You cannot reassign a checkout that is already attached to a user."
                  );
            })
          ) {
            refetch();
          }
        },
      }),
      [
        authenticated,
        (_a = checkout === null || checkout === void 0 ? void 0 : checkout.user) === null ||
        _a === void 0
          ? void 0
          : _a.id,
        customerAttach,
        fetching,
        loading,
        refetch,
      ]
    )
  );
  (0, react_1.useEffect)(() => {
    void onSubmit();
  }, [onSubmit]);
};
exports.useCustomerAttach = useCustomerAttach;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const maps_1 = require("@/lib/maps");
const api_1 = require("@/saleor/api");
const useUser_1 = require("@/lib/useUser");
function OrdersPage() {
  var _a, _b, _c, _d, _e, _f, _g;
  const { authenticated } = (0, useUser_1.useUser)();
  const {
    data: ordersCollection,
    loading,
    error,
    fetchMore,
  } = (0, api_1.useOrdersQuery)({
    skip: !authenticated,
  });
  if (loading) {
    return <components_1.Spinner />;
  }
  if (error) {
    return (
      <p>
        Error
        {error.message}
      </p>
    );
  }
  const orders = (0, maps_1.mapEdgesToItems)(
    (_a =
      ordersCollection === null || ordersCollection === void 0 ? void 0 : ordersCollection.me) ===
      null || _a === void 0
      ? void 0
      : _a.orders
  );
  const onLoadMore = () => {
    var _a, _b;
    return fetchMore({
      variables: {
        after:
          (_b =
            (_a =
              ordersCollection === null || ordersCollection === void 0
                ? void 0
                : ordersCollection.me) === null || _a === void 0
              ? void 0
              : _a.orders) === null || _b === void 0
            ? void 0
            : _b.pageInfo.endCursor,
      },
    });
  };
  return (
    <>
      <components_1.OrdersTable orders={orders} />
      <components_1.Pagination
        onLoadMore={onLoadMore}
        pageInfo={
          (_c =
            (_b =
              ordersCollection === null || ordersCollection === void 0
                ? void 0
                : ordersCollection.me) === null || _b === void 0
              ? void 0
              : _b.orders) === null || _c === void 0
            ? void 0
            : _c.pageInfo
        }
        itemsCount={
          (_e =
            (_d =
              ordersCollection === null || ordersCollection === void 0
                ? void 0
                : ordersCollection.me) === null || _d === void 0
              ? void 0
              : _d.orders) === null || _e === void 0
            ? void 0
            : _e.edges.length
        }
        totalCount={
          ((_g =
            (_f =
              ordersCollection === null || ordersCollection === void 0
                ? void 0
                : ordersCollection.me) === null || _f === void 0
              ? void 0
              : _f.orders) === null || _g === void 0
            ? void 0
            : _g.totalCount) || undefined
        }
      />
    </>
  );
}
exports.default = OrdersPage;
OrdersPage.getLayout = function getLayout(page) {
  return <components_1.AccountLayout>{page}</components_1.AccountLayout>;
};

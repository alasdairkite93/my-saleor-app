"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCollection = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const maps_1 = require("@/lib/maps");
const api_1 = require("@/saleor/api");
const Pagination_1 = require("../Pagination");
const ProductCard_1 = require("../ProductCard");
const RegionsProvider_1 = require("../RegionsProvider");
const Spinner_1 = require("../Spinner");
const translations_1 = require("../translations");
function ProductCollection({ filter, sortBy, setCounter, allowMore = true, perPage = 4 }) {
  var _a, _b, _c, _d;
  const t = (0, react_intl_1.useIntl)();
  const { query } = (0, RegionsProvider_1.useRegions)();
  const variables = Object.assign(
    Object.assign({ filter, first: perPage }, query),
    (sortBy === null || sortBy === void 0 ? void 0 : sortBy.field) &&
      (sortBy === null || sortBy === void 0 ? void 0 : sortBy.direction) && {
        sortBy: {
          direction: sortBy.direction,
          field: sortBy.field,
        },
      }
  );
  const { loading, error, data, fetchMore } = (0, api_1.useProductCollectionQuery)({
    variables,
  });
  (0, react_1.useEffect)(() => {
    var _a;
    if (setCounter) {
      setCounter(
        ((_a = data === null || data === void 0 ? void 0 : data.products) === null || _a === void 0
          ? void 0
          : _a.totalCount) || 0
      );
    }
  }, [
    setCounter,
    (_a = data === null || data === void 0 ? void 0 : data.products) === null || _a === void 0
      ? void 0
      : _a.totalCount,
  ]);
  const onLoadMore = () => {
    var _a;
    return fetchMore({
      variables: {
        after:
          (_a = data === null || data === void 0 ? void 0 : data.products) === null || _a === void 0
            ? void 0
            : _a.pageInfo.endCursor,
      },
    });
  };
  if (loading) return <Spinner_1.Spinner />;
  if (error) return <p>Error</p>;
  const products = (0, maps_1.mapEdgesToItems)(
    data === null || data === void 0 ? void 0 : data.products
  );
  if (products.length === 0) {
    return (
      <ui_kit_1.Text size="xl" color="secondary" data-testid="noResultsText">
        {t.formatMessage(translations_1.messages.noProducts)}
      </ui_kit_1.Text>
    );
  }
  return (
    <div>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        data-testid="productsList"
      >
        {products.map((product) => (
          <ProductCard_1.ProductCard key={product.id} product={product} />
        ))}
      </ul>
      {allowMore && (
        <Pagination_1.Pagination
          onLoadMore={onLoadMore}
          pageInfo={
            (_b = data === null || data === void 0 ? void 0 : data.products) === null ||
            _b === void 0
              ? void 0
              : _b.pageInfo
          }
          itemsCount={
            (_c = data === null || data === void 0 ? void 0 : data.products) === null ||
            _c === void 0
              ? void 0
              : _c.edges.length
          }
          totalCount={
            ((_d = data === null || data === void 0 ? void 0 : data.products) === null ||
            _d === void 0
              ? void 0
              : _d.totalCount) || undefined
          }
        />
      )}
    </div>
  );
}
exports.ProductCollection = ProductCollection;
exports.default = ProductCollection;

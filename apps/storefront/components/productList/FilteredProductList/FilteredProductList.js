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
exports.FilteredProductList = void 0;
const next_usequerystate_1 = require("next-usequerystate");
const react_1 = require("react");
const ProductCollection_1 = require("@/components/ProductCollection");
const translations_1 = require("@/lib/translations");
const attributes_1 = require("./attributes");
const FilterDropdown_1 = require("./FilterDropdown");
const FilterPills_1 = require("./FilterPills");
const sorting_1 = require("./sorting");
const SortingDropdown_1 = require("./SortingDropdown");
const StockToggle_1 = require("./StockToggle");
function FilteredProductList({ attributeFiltersData, collectionIDs, categoryIDs }) {
  const [queryFilters, setQueryFilters] = (0, next_usequerystate_1.useQueryState)("filters", {
    parse: attributes_1.parseQueryAttributeFilters,
    serialize: attributes_1.serializeQueryAttributeFilters,
    defaultValue: [],
  });
  const [itemsCounter, setItemsCounter] = (0, react_1.useState)(0);
  const [sortByQuery, setSortByQuery] = (0, next_usequerystate_1.useQueryState)("sortBy", {});
  const sortBy = (0, sorting_1.parseQuerySort)(sortByQuery);
  const setSortBy = (value, transitionOptions) =>
    setSortByQuery((0, sorting_1.serializeQuerySort)(value), transitionOptions);
  const [inStockFilter, setInStockFilter] = (0, next_usequerystate_1.useQueryState)(
    "inStock",
    next_usequerystate_1.queryTypes.boolean.withDefault(false)
  );
  const [productsFilter, setProductsFilter] = (0, react_1.useState)();
  const pills = (0, attributes_1.getPillsData)(queryFilters, attributeFiltersData);
  (0, react_1.useEffect)(() => {
    setProductsFilter(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              attributes: queryFilters.filter((filter) => {
                var _a;
                return (_a = filter.values) === null || _a === void 0 ? void 0 : _a.length;
              }),
            },
            (categoryIDs === null || categoryIDs === void 0 ? void 0 : categoryIDs.length) && {
              categories: categoryIDs,
            }
          ),
          (collectionIDs === null || collectionIDs === void 0 ? void 0 : collectionIDs.length) && {
            collections: collectionIDs,
          }
        ),
        inStockFilter && { stockAvailability: "IN_STOCK" }
      )
    );
    // Eslint does not recognize stringified queryFilters, so we have to ignore it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inStockFilter, JSON.stringify(queryFilters), categoryIDs, collectionIDs]);
  const removeAttributeFilter = (attributeSlug, choiceSlug) => {
    const newFilters = queryFilters.reduce((result, filter) => {
      if (filter.slug !== attributeSlug) {
        return [...result, filter];
      }
      const newFilterValues = filter.values.filter((value) => value !== choiceSlug);
      if (
        newFilterValues === null || newFilterValues === void 0 ? void 0 : newFilterValues.length
      ) {
        return [...result, Object.assign(Object.assign({}, filter), { values: newFilterValues })];
      }
      return result;
    }, []);
    return setQueryFilters(newFilters.length ? newFilters : null, {
      scroll: false,
      shallow: true,
    });
  };
  const addAttributeFilter = (attributeSlug, choiceSlug) => {
    const isFilterAlreadyApplied = !!pills.find(
      (pill) => pill.attributeSlug === attributeSlug && pill.choiceSlug === choiceSlug
    );
    if (isFilterAlreadyApplied) {
      return removeAttributeFilter(attributeSlug, choiceSlug);
    }
    // if attribute was not used before, add it
    const existingFilter = queryFilters.find((filter) => filter.slug === attributeSlug);
    if (!existingFilter) {
      return setQueryFilters([...queryFilters, { slug: attributeSlug, values: [choiceSlug] }], {
        scroll: false,
        shallow: true,
      });
    }
    // if its already here, modify values list
    existingFilter.values = [...existingFilter.values, choiceSlug];
    return setQueryFilters(queryFilters, {
      scroll: false,
      shallow: true,
    });
  };
  const clearFilters = () =>
    __awaiter(this, void 0, void 0, function* () {
      // await required when multiple query changes are applied at once
      yield setQueryFilters(null, {
        scroll: false,
        shallow: true,
      });
      yield setInStockFilter(null, {
        scroll: false,
        shallow: true,
      });
    });
  if (!productsFilter) {
    return null;
  }
  return (
    <>
      <div className="flex flex-col divide-y">
        <div className="flex items-center">
          <div className="flex-grow">
            {attributeFiltersData.map((attribute) => (
              <FilterDropdown_1.FilterDropdown
                key={attribute.id}
                label={(0, translations_1.translate)(attribute, "name") || ""}
                optionToggle={addAttributeFilter}
                attributeSlug={attribute.slug}
                options={(0, attributes_1.getFilterOptions)(attribute, pills)}
              />
            ))}
            <SortingDropdown_1.SortingDropdown
              optionToggle={(field, direction) => {
                return setSortBy(field && direction ? { field, direction } : null, {
                  scroll: false,
                  shallow: true,
                });
              }}
              chosen={sortBy}
            />
            <StockToggle_1.StockToggle
              enabled={inStockFilter}
              onChange={(value) =>
                setInStockFilter(!!value || null, {
                  scroll: false,
                  shallow: true,
                })
              }
            />
          </div>
          <div className="flex-none text-main-2 text-base">
            <div>{itemsCounter} items</div>
          </div>
        </div>
        {pills.length > 0 && (
          <FilterPills_1.FilterPills
            pills={pills}
            onClearFilters={clearFilters}
            onRemoveAttribute={removeAttributeFilter}
          />
        )}
      </div>

      <div className="mt-4">
        <ProductCollection_1.ProductCollection
          filter={productsFilter}
          sortBy={sortBy || undefined}
          setCounter={setItemsCounter}
          perPage={40}
        />
      </div>
    </>
  );
}
exports.FilteredProductList = FilteredProductList;
exports.default = FilteredProductList;

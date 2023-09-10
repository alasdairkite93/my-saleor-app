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
exports.getStaticPaths = exports.getStaticProps = void 0;
const router_1 = require("next/router");
const _404_1 = __importDefault(require("pages/404"));
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const FilteredProductList_1 = require("@/components/productList/FilteredProductList/FilteredProductList");
const CategoryPageSeo_1 = require("@/components/seo/CategoryPageSeo");
const maps_1 = require("@/lib/maps");
const paths_1 = require("@/lib/paths");
const regions_1 = require("@/lib/regions");
const translations_1 = require("@/lib/translations");
const api_1 = require("@/saleor/api");
const useAuthenticatedApolloClient_1 = require("@/lib/auth/useAuthenticatedApolloClient");
const getStaticProps = (context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!context.params) {
      return {
        props: {},
        notFound: true,
      };
    }
    const categorySlug = context.params.slug.toString();
    const response = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
      query: api_1.CategoryBySlugDocument,
      variables: {
        slug: categorySlug,
        locale: (0, regions_1.contextToRegionQuery)(context).locale,
      },
    });
    const attributesResponse = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
      query: api_1.FilteringAttributesQueryDocument,
      variables: Object.assign(Object.assign({}, (0, regions_1.contextToRegionQuery)(context)), {
        filter: {
          inCategory: (_a = response.data.category) === null || _a === void 0 ? void 0 : _a.id,
        },
      }),
    });
    const attributes = (0, maps_1.mapEdgesToItems)(attributesResponse.data.attributes).filter(
      (attribute) => {
        var _a;
        return (_a = attribute.choices) === null || _a === void 0 ? void 0 : _a.edges.length;
      }
    );
    return {
      props: {
        category: response.data.category,
        attributeFiltersData: attributes,
      },
    };
  });
exports.getStaticProps = getStaticProps;
function CategoryPage({ category, attributeFiltersData }) {
  const paths = (0, paths_1.usePaths)();
  const router = (0, router_1.useRouter)();
  if (!category) {
    return <_404_1.default />;
  }
  const subcategories = (0, maps_1.mapEdgesToItems)(category.children);
  const navigateToCategory = (categorySlug) => {
    void router.push(paths.category._slug(categorySlug).$url());
  };
  return (
    <>
      <CategoryPageSeo_1.CategoryPageSeo category={category} />
      <header className="mb-4 pt-4">
        <div className="container px-8">
          <components_1.PageHero
            title={(0, translations_1.translate)(category, "name")}
            description={(0, translations_1.translate)(category, "description") || ""}
            pills={subcategories.map((subcategory) => ({
              label: (0, translations_1.translate)(subcategory, "name"),
              onClick: () => navigateToCategory(subcategory.slug),
            }))}
          />
        </div>
      </header>
      <main>
        <div className="container px-8 mt-4">
          <FilteredProductList_1.FilteredProductList
            attributeFiltersData={attributeFiltersData}
            categoryIDs={[category.id]}
          />
        </div>
      </main>
    </>
  );
}
exports.default = CategoryPage;
const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});
exports.getStaticPaths = getStaticPaths;
CategoryPage.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};

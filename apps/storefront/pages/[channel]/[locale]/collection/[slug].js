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
const _404_1 = __importDefault(require("pages/404"));
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const FilteredProductList_1 = require("@/components/productList/FilteredProductList");
const CollectionPageSeo_1 = require("@/components/seo/CollectionPageSeo");
const maps_1 = require("@/lib/maps");
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
    const collectionSlug = context.params.slug.toString();
    const response = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
      query: api_1.CollectionBySlugDocument,
      variables: Object.assign(
        { slug: collectionSlug },
        (0, regions_1.contextToRegionQuery)(context)
      ),
    });
    const attributesResponse = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
      query: api_1.FilteringAttributesQueryDocument,
      variables: Object.assign(Object.assign({}, (0, regions_1.contextToRegionQuery)(context)), {
        filter: {
          inCollection: (_a = response.data.collection) === null || _a === void 0 ? void 0 : _a.id,
        },
      }),
    });
    let attributes = (0, maps_1.mapEdgesToItems)(attributesResponse.data.attributes);
    attributes = attributes.filter((attribute) => {
      var _a;
      return (_a = attribute.choices) === null || _a === void 0 ? void 0 : _a.edges.length;
    });
    return {
      props: {
        collection: response.data.collection,
        attributeFiltersData: attributes,
      },
    };
  });
exports.getStaticProps = getStaticProps;
function CollectionPage({ collection, attributeFiltersData }) {
  if (!collection) {
    return <_404_1.default />;
  }
  return (
    <>
      <CollectionPageSeo_1.CollectionPageSeo collection={collection} />
      <header className="mb-4 pt-4">
        <div className="container px-8">
          <components_1.PageHero
            title={(0, translations_1.translate)(collection, "name")}
            description={(0, translations_1.translate)(collection, "description") || ""}
          />
        </div>
      </header>
      <div className="container px-8 mt-4">
        <FilteredProductList_1.FilteredProductList
          attributeFiltersData={attributeFiltersData}
          collectionIDs={[collection.id]}
        />
      </div>
    </>
  );
}
exports.default = CollectionPage;
const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});
exports.getStaticPaths = getStaticPaths;
CollectionPage.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};

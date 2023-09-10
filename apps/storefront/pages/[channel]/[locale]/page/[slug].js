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
exports.getStaticProps = exports.getStaticPaths = void 0;
const _404_1 = __importDefault(require("pages/404"));
const components_1 = require("@/components");
const regions_1 = require("@/lib/regions");
const translations_1 = require("@/lib/translations");
const api_1 = require("@/saleor/api");
const useAuthenticatedApolloClient_1 = require("@/lib/auth/useAuthenticatedApolloClient");
const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});
exports.getStaticPaths = getStaticPaths;
const getStaticProps = (context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!context.params) {
      return {
        props: {},
        notFound: true,
      };
    }
    const pageSlug = context.params.slug.toString();
    const response = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
      query: api_1.PageDocument,
      variables: {
        slug: pageSlug,
        locale: (0, regions_1.contextToRegionQuery)(context).locale,
      },
    });
    return {
      props: {
        page: response.data.page,
      },
    };
  });
exports.getStaticProps = getStaticProps;
function PagePage({ page }) {
  if (!(page === null || page === void 0 ? void 0 : page.id)) {
    return <_404_1.default />;
  }
  const content = (0, translations_1.translate)(page, "content");
  return (
    <main className="container pt-8 px-8">
      {content && <components_1.RichText jsonStringData={content} />}
    </main>
  );
}
exports.default = PagePage;
PagePage.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};

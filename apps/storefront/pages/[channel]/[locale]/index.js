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
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const BaseSeo_1 = require("@/components/seo/BaseSeo");
const const_1 = require("@/lib/const");
const regions_1 = require("@/lib/regions");
const api_1 = require("@/saleor/api");
const useAuthenticatedApolloClient_1 = require("@/lib/auth/useAuthenticatedApolloClient");
const getStaticProps = (context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
      query: api_1.HomepageBlocksQueryDocument,
      variables: Object.assign(
        { slug: const_1.HOMEPAGE_MENU },
        (0, regions_1.contextToRegionQuery)(context)
      ),
    });
    return {
      props: {
        menuData: result === null || result === void 0 ? void 0 : result.data,
      },
      revalidate: 60 * 60, // value in seconds, how often ISR will trigger on the server
    };
  });
exports.getStaticProps = getStaticProps;
function Home({ menuData }) {
  var _a, _b;
  return (
    <>
      <BaseSeo_1.BaseSeo />
      <div className="py-10">
        <header className="mb-4">
          <div className="container" />
        </header>
        <main>
          <div className="container">
            {(_b =
              (_a = menuData === null || menuData === void 0 ? void 0 : menuData.menu) === null ||
              _a === void 0
                ? void 0
                : _a.items) === null || _b === void 0
              ? void 0
              : _b.map((m) => {
                  if (!m) {
                    return null;
                  }
                  return <components_1.HomepageBlock key={m.id} menuItem={m} />;
                })}
          </div>
        </main>
      </div>
    </>
  );
}
exports.default = Home;
const getStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});
exports.getStaticPaths = getStaticPaths;
Home.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};

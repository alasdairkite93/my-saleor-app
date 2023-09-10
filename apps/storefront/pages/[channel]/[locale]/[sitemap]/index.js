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
exports.getServerSideProps = void 0;
const next_sitemap_1 = require("next-sitemap");
const api_1 = require("@/saleor/api");
const useAuthenticatedApolloClient_1 = require("@/lib/auth/useAuthenticatedApolloClient");
const getServerSideProps = (ctx) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    let fields = [];
    if (ctx.params) {
      if (ctx.params.sitemap === "category") {
        const result = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
          query: api_1.CategoryPathsDocument,
          variables: {},
        });
        const paths =
          ((_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.categories) === null ||
          _b === void 0
            ? void 0
            : _b.edges.map(({ node }) => ({
                params: { slug: node.slug },
              }))) || [];
        fields = paths.map((path) => ({
          loc: `https://localhost:3001/category/${path.params.slug}`,
        }));
      } else if (ctx.params.sitemap === "collection") {
        const result = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
          query: api_1.CollectionPathsDocument,
          variables: {},
        });
        const paths =
          ((_d = (_c = result.data) === null || _c === void 0 ? void 0 : _c.collections) === null ||
          _d === void 0
            ? void 0
            : _d.edges.map(({ node }) => ({
                params: { slug: node.slug },
              }))) || [];
        fields = paths.map((path) => ({
          loc: `https://localhost:3001/collection/${path.params.slug}`,
        }));
      } else if (ctx.params.sitemap === "product") {
        const result = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
          query: api_1.ProductPathsDocument,
          variables: {},
        });
        const paths =
          ((_f = (_e = result.data) === null || _e === void 0 ? void 0 : _e.products) === null ||
          _f === void 0
            ? void 0
            : _f.edges.map(({ node }) => ({
                params: { slug: node.slug },
              }))) || [];
        fields = paths.map((path) => ({
          loc: `https://localhost:3001/product/${path.params.slug}`,
        }));
      }
    }
    return (0, next_sitemap_1.getServerSideSitemap)(ctx, fields);
  });
exports.getServerSideProps = getServerSideProps;
/* eslint @typescript-eslint/no-empty-function: off */
const Sitemap = () => {};
exports.default = Sitemap;

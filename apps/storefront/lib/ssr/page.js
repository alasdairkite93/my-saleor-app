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
exports.pagePaths = void 0;
const api_1 = require("@/saleor/api");
const regions_1 = require("../regions");
const useAuthenticatedApolloClient_1 = require("@/lib/auth/useAuthenticatedApolloClient");
const pagePaths = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const paths = [];
    let hasNextPage = true;
    let endCursor = "";
    while (hasNextPage) {
      const response = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
        query: api_1.PagePathsDocument,
        fetchPolicy: "no-cache",
        variables: {
          after: endCursor,
        },
      });
      const edges = (_a = response.data.pages) === null || _a === void 0 ? void 0 : _a.edges;
      if (!edges) {
        break;
      }
      const responseSlugs = edges.map((edge) => edge.node.slug);
      for (const locale of regions_1.LOCALES) {
        for (const channel of regions_1.CHANNELS) {
          responseSlugs.forEach((slug) => {
            paths.push({
              params: {
                channel: channel.slug,
                locale: locale.slug,
                slug,
              },
            });
          });
        }
      }
      hasNextPage =
        ((_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.pages) === null ||
        _c === void 0
          ? void 0
          : _c.pageInfo.hasNextPage) || false;
      endCursor =
        ((_d = response.data.pages) === null || _d === void 0 ? void 0 : _d.pageInfo.endCursor) ||
        "";
    }
    return paths;
  });
exports.pagePaths = pagePaths;

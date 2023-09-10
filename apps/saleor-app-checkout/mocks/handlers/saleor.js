"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleorHandlers = void 0;
const saleor_1 = require("../fixtures/saleor");
const utils_1 = require("../utils");
exports.saleorHandlers = [
  utils_1.saleorApi.query("PrivateMetafieldsInfered", (req, res, ctx) => {
    const { keys } = req.variables;
    if (
      !keys ||
      typeof keys === "string" ||
      (keys === null || keys === void 0 ? void 0 : keys.length) === 0
    ) {
      return res(
        ctx.errors([
          {
            message: "Missing keys",
            errorType: "TestError",
          },
        ])
      );
    }
    return res(
      ctx.data({
        app: {
          id: "123",
          privateMetafields: (0, utils_1.prepareGraphqlMetafields)(
            keys,
            saleor_1.appPrivateMetafields
          ),
        },
      })
    );
  }),
];

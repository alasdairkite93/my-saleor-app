"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleorApp = void 0;
const saleor_app_1 = require("@saleor/app-sdk/saleor-app");
const apl_1 = require("./apl");
exports.saleorApp = new saleor_app_1.SaleorApp({
  apl: apl_1.apl,
});

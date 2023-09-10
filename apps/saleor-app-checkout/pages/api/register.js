"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saleorApp_1 = require("@/saleor-app-checkout/config/saleorApp");
const next_1 = require("@saleor/app-sdk/handlers/next");
exports.default = (0, next_1.createAppRegisterHandler)(saleorApp_1.saleorApp);

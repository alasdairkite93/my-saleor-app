"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsToSearch = void 0;
exports.productsToSearch = {
  product: Cypress.env("productToSearch"),
  nonExistingProduct: "!@#$%",
  noProductsInfo: "Search query didn't return any viable results",
  productWithVariants: Cypress.env("productWithVariants"),
  productWithoutVariants: Cypress.env("productWithoutVariants"),
  digitalProduct: Cypress.env("digitalProduct"),
};

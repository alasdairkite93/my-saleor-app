"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = require("../fixtures/search");
const product_page_1 = require("../support/pages/product-page");
describe("Select variant and add to cart", () => {
  beforeEach(() => {
    cy.visit("/").clearLocalStorage();
  });
  it("should select a variant and add to the cart SRS_0202", () => {
    const product = search_1.productsToSearch.productWithVariants;
    (0, product_page_1.openProductPage)(product);
    (0, product_page_1.addItemToCart)();
  });
  it("should add product without variants to the cart SRS_0203", () => {
    const product = search_1.productsToSearch.productWithoutVariants;
    (0, product_page_1.openProductPage)(product);
    (0, product_page_1.addItemToCart)();
  });
});

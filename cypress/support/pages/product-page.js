"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItemToCart = exports.openProductPage = void 0;
const navigation_1 = require("../../elements/navigation");
const product_page_1 = require("../../elements/product-page");
const shared_elements_1 = require("../../elements/shared-elements");
const search_1 = require("./search");
function openProductPage(product) {
  (0, search_1.navigateAndSearch)(product);
  cy.get(shared_elements_1.SHARED_ELEMENTS.productName)
    .first()
    .click()
    .get(product_page_1.PRODUCT_ELEMENTS.addToCartButton)
    .should("be.visible");
}
exports.openProductPage = openProductPage;
function addItemToCart() {
  cy.addAliasToGraphRequest("CreateCheckout");
  cy.get(product_page_1.PRODUCT_ELEMENTS.soldOut)
    .should("not.exist")
    .get(product_page_1.PRODUCT_ELEMENTS.addToCartButton)
    .then((addToCartButton) => {
      if (addToCartButton.is(":disabled")) {
        cy.get(product_page_1.PRODUCT_ELEMENTS.variant)
          .first()
          .click()
          .get(product_page_1.PRODUCT_ELEMENTS.addToCartButton)
          .click();
      } else {
        cy.get(product_page_1.PRODUCT_ELEMENTS.addToCartButton).click();
      }
      cy.wait("@CreateCheckout")
        .its("response.body.data.checkoutCreate.errors")
        .should("be.empty")
        .get(navigation_1.NAVIGATION.cartCounter)
        .should("be.visible");
    });
}
exports.addItemToCart = addItemToCart;

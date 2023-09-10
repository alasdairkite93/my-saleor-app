"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingProductsByName = exports.getListOfProducts = exports.filterProducts = void 0;
/* eslint-disable no-param-reassign */
const category_1 = require("../../elements/category");
const shared_elements_1 = require("../../elements/shared-elements");
function filterProducts(filterProductsBy, selectedFilter) {
  cy.addAliasToGraphRequest("ProductCollection");
  cy.get(filterProductsBy)
    .first()
    .invoke("text")
    .then((elementName) => {
      cy.get(filterProductsBy)
        .first()
        .click()
        .wait("@ProductCollection")
        .get(selectedFilter)
        .should("contain.text", elementName);
    });
}
exports.filterProducts = filterProducts;
function getListOfProducts(productsArray) {
  cy.get(shared_elements_1.SHARED_ELEMENTS.productName).each(($listOfProducts) => {
    cy.wrap($listOfProducts)
      .invoke("text")
      .then((productsNames) => {
        productsArray = productsArray.concat([productsNames]);
      });
  });
}
exports.getListOfProducts = getListOfProducts;
function sortingProductsByName(sortOrder) {
  const sortedListOfProducts = [];
  let listOfProductsNames = [];
  cy.addAliasToGraphRequest("ProductCollection");
  getListOfProducts(listOfProductsNames);
  cy.get(category_1.CATEGORY.sorting.sortByButton)
    .click()
    .get(category_1.CATEGORY.sorting.sortingOption)
    .contains(sortOrder)
    .click()
    .wait("@ProductCollection");
  getListOfProducts(sortedListOfProducts);
  cy.then(() => {
    listOfProductsNames = listOfProductsNames.sort();
    if (sortOrder === "Name descending") {
      listOfProductsNames = listOfProductsNames.reverse();
    }
    expect(
      JSON.stringify(listOfProductsNames) === JSON.stringify(sortedListOfProducts)
    ).to.be.equal(true);
  });
}
exports.sortingProductsByName = sortingProductsByName;

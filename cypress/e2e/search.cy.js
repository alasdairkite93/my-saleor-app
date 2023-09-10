"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("../elements/navigation");
const search_page_1 = require("../elements/search-page");
const shared_elements_1 = require("../elements/shared-elements");
const search_1 = require("../fixtures/search");
const search_2 = require("../support/pages/search");
describe("Search for products", () => {
  beforeEach(() => {
    cy.visit("/").clearLocalStorage();
  });
  it("should search for products SRS_0405", () => {
    const searchQuery = search_1.productsToSearch.product;
    (0, search_2.navigateAndSearch)(searchQuery);
    cy.url().should("include", `/search/?q=${searchQuery}`);
  });
  it("should see no errors on search page SRS_0404", () => {
    cy.addAliasToGraphRequest("ProductCollection")
      .get(navigation_1.NAVIGATION.searchIcon)
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(href);
      });
    cy.url()
      .should("include", "/search")
      .wait("@ProductCollection")
      .get(shared_elements_1.SHARED_ELEMENTS.productsList)
      .should("be.visible");
  });
  it("should see no results message SRS_0405", () => {
    const searchQuery = search_1.productsToSearch.nonExistingProduct;
    (0, search_2.navigateAndSearch)(searchQuery);
    cy.get(search_page_1.SEARCH_PAGE_SELECTORS.noResultsText)
      .should("contain", search_1.productsToSearch.noProductsInfo)
      .get(shared_elements_1.SHARED_ELEMENTS.productsList)
      .should("not.exist");
  });
});

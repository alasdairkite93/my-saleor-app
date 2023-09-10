"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateAndSearch = void 0;
const navigation_1 = require("../../elements/navigation");
const search_page_1 = require("../../elements/search-page");
const shared_operations_1 = require("../shared-operations");
function navigateAndSearch(typedText) {
  cy.addAliasForSearchQuery("ProductCollection", typedText)
    .get(navigation_1.NAVIGATION.searchIcon)
    .invoke("attr", "href")
    .then((href) => {
      cy.visit(href);
    });
  (0, shared_operations_1.waitForProgressBarToNotBeVisible)();
  cy.get(search_page_1.SEARCH_PAGE_SELECTORS.searchInput)
    .type(typedText, { delay: 500 })
    .should("have.value", typedText)
    .wait("@ProductCollection");
}
exports.navigateAndSearch = navigateAndSearch;

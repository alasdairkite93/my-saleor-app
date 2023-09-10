"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectNotEmptyCategory = void 0;
const main_page_1 = require("../../elements/main-page");
const navigation_1 = require("../../elements/navigation");
const shared_elements_1 = require("../../elements/shared-elements");
function selectNotEmptyCategory() {
  cy.get(main_page_1.MAIN_PAGE.categorySection)
    .find(shared_elements_1.SHARED_ELEMENTS.productsList)
    .first()
    .parents(main_page_1.MAIN_PAGE.categorySection)
    .children(main_page_1.MAIN_PAGE.categoryName)
    .invoke("text")
    .then((categoryTitle) => {
      cy.get(navigation_1.NAVIGATION.categoriesListButtons).contains(categoryTitle).click();
    });
}
exports.selectNotEmptyCategory = selectNotEmptyCategory;

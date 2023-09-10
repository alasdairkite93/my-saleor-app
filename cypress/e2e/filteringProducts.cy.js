"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../elements/category");
const category_2 = require("../support/pages/category");
const main_page_1 = require("../support/pages/main-page");
const shared_operations_1 = require("../support/shared-operations");
describe("Using filters and sorting on products list", () => {
  const sortByList = ["Name descending", "Name ascending"];
  beforeEach(() => {
    cy.visit("/");
  });
  sortByList.forEach((sortBy) => {
    it(`should be able to sort products by ${sortBy} SRS_0303`, () => {
      (0, shared_operations_1.waitForProgressBarToNotBeVisible)();
      (0, main_page_1.selectNotEmptyCategory)();
      (0, category_2.sortingProductsByName)(`${sortBy}`);
    });
  });
  it("should be able to sort products by in stock SRS_0305", () => {
    (0, shared_operations_1.waitForProgressBarToNotBeVisible)();
    (0, main_page_1.selectNotEmptyCategory)();
    cy.get(category_1.CATEGORY.sorting.sortByInStock)
      .click()
      .url()
      .should("contain", "?inStock=true");
  });
  it("should filter products by variant attribute SRS_0306", () => {
    (0, shared_operations_1.waitForProgressBarToNotBeVisible)();
    (0, main_page_1.selectNotEmptyCategory)();
    cy.get(category_1.CATEGORY.filters.filtersMenuButtons).first().click();
    (0, category_2.filterProducts)(
      category_1.CATEGORY.filters.filterList,
      category_1.CATEGORY.filters.filterPill
    );
  });
  it("should clear selected filters SRS_0308", () => {
    (0, shared_operations_1.waitForProgressBarToNotBeVisible)();
    (0, main_page_1.selectNotEmptyCategory)();
    cy.get(category_1.CATEGORY.filters.filtersMenuButtons).first().click();
    (0, category_2.filterProducts)(
      category_1.CATEGORY.filters.filterList,
      category_1.CATEGORY.filters.filterPill
    );
    cy.get(category_1.CATEGORY.filters.clearAllFiltersButton)
      .click()
      .get(category_1.CATEGORY.filters.filterPill)
      .should("not.exist")
      .get(category_1.CATEGORY.filters.clearAllFiltersButton)
      .should("not.exist");
  });
});

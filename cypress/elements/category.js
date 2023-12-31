"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORY = void 0;
exports.CATEGORY = {
  categoryTitle: "h1[data-testid*='titleOf']",
  filters: {
    filtersMenuButtons: "[data-testid*='filterAttribute']",
    filterList: "[data-testid*='filterAttributeValue']",
    filterPill: "[data-testid*='filterPill']",
    clearAllFiltersButton: "[data-testid='clearFilters']",
  },
  sorting: {
    sortByButton: "[data-testid='sortBy']",
    sortingDropdown: "[data-testid='sortingDropdown']",
    sortingOption: "[ data-testid*='sortByOption']",
    sortByInStock: "[data-testid='stockToggle']",
  },
};

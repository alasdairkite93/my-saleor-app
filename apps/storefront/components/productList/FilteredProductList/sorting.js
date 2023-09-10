"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQuerySort = exports.parseQuerySort = exports.getSortingOptions = void 0;
const getSortingOptions = (chosenSorting) => {
  const options = [
    { label: "Popularity", chosen: false },
    { label: "Name ascending", field: "NAME", direction: "ASC", chosen: false },
    { label: "Name descending", field: "NAME", direction: "DESC", chosen: false },
  ];
  let isChosenSet = false;
  for (const option of options) {
    if (
      option.field ===
        (chosenSorting === null || chosenSorting === void 0 ? void 0 : chosenSorting.field) &&
      option.direction ===
        (chosenSorting === null || chosenSorting === void 0 ? void 0 : chosenSorting.direction)
    ) {
      option.chosen = true;
      isChosenSet = true;
      break;
    }
  }
  if (!isChosenSet) {
    options[0].chosen = true;
  }
  return options;
};
exports.getSortingOptions = getSortingOptions;
const parseQuerySort = (query) => {
  if (!query) {
    return null;
  }
  const [field, direction] = query.split("_");
  if (!field || !direction) {
    return null;
  }
  const sorting = {
    field: field,
    direction: direction,
  };
  return sorting;
};
exports.parseQuerySort = parseQuerySort;
const serializeQuerySort = (value) => {
  if (
    (value === null || value === void 0 ? void 0 : value.direction) &&
    (value === null || value === void 0 ? void 0 : value.field)
  ) {
    return `${value.field}_${value.direction}`;
  }
  return null;
};
exports.serializeQuerySort = serializeQuerySort;

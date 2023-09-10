"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQueryAttributeFilters =
  exports.parseQueryAttributeFilters =
  exports.getFilterOptions =
  exports.getPillsData =
    void 0;
const maps_1 = require("@/lib/maps");
const translations_1 = require("@/lib/translations");
const getPillsData = (urlFilters, attributeFiltersData) =>
  urlFilters.reduce((result, filter) => {
    const choiceAttribute = attributeFiltersData.find((attr) => attr.slug === filter.slug);
    const attrName = choiceAttribute ? choiceAttribute.name : filter.slug;
    const newPills = filter.values.map((value) => {
      var _a;
      const attrChoice =
        (_a =
          choiceAttribute === null || choiceAttribute === void 0
            ? void 0
            : choiceAttribute.choices) === null || _a === void 0
          ? void 0
          : _a.edges.find((choice) => choice.node.slug === value);
      const choiceName =
        (attrChoice === null || attrChoice === void 0 ? void 0 : attrChoice.node.name) || value;
      return {
        label: attrName ? `${attrName}: ${choiceName}` : choiceName,
        choiceSlug: value,
        attributeSlug: filter.slug,
      };
    });
    return [...result, ...newPills];
  }, []);
exports.getPillsData = getPillsData;
const getFilterOptions = (attribute, appliedFilters) => {
  const choices = (0, maps_1.mapEdgesToItems)(attribute.choices);
  return choices.map((choice) => ({
    chosen: !!appliedFilters.find(
      (pill) => pill.attributeSlug === attribute.slug && pill.choiceSlug === choice.slug
    ),
    id: choice.id,
    label: (0, translations_1.translate)(choice, "name") || choice.id,
    slug: choice.slug || choice.id,
  }));
};
exports.getFilterOptions = getFilterOptions;
const parseQueryAttributeFilters = (query) => {
  const filters = query.split(";").flatMap((attributeWithValues) => {
    const splitted = attributeWithValues.split(".");
    const attributeFilter = { slug: splitted[0], values: splitted.slice(1) };
    if (attributeFilter.values.length > 0) {
      return [attributeFilter];
    }
    return [];
  });
  return filters;
};
exports.parseQueryAttributeFilters = parseQueryAttributeFilters;
const serializeQueryAttributeFilters = (values) =>
  values.map((value) => [value.slug, ...value.values].join(".")).join(";");
exports.serializeQueryAttributeFilters = serializeQueryAttributeFilters;

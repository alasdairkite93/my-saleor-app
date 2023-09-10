"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRawAppPath =
  exports.getMetafield =
  exports.getCommonErrors =
  exports.mapNodesToItems =
  exports.mapNodeToItem =
  exports.unflattenSettings =
  exports.unflattenValue =
  exports.flattenSettingId =
    void 0;
const flattenSettingId = (groupId, optionIdx, settingId) => `${groupId}-${optionIdx}-${settingId}`;
exports.flattenSettingId = flattenSettingId;
const unflattenValue = (valueId, flattenedValues) => {
  const valueKey = Object.keys(flattenedValues).find((flattedKey) => {
    const keys = flattedKey.split("-");
    return keys[0] === valueId;
  });
  return valueKey && flattenedValues[valueKey];
};
exports.unflattenValue = unflattenValue;
const unflattenSettings = (groupId, flattenedValues, options) => {
  const unflattenedSettings = {};
  Object.keys(flattenedValues).forEach((flattedKey) => {
    var _a;
    const keys = flattedKey.split("-");
    if (keys[0] !== groupId) {
      return;
    }
    const mainKey = (_a = options[Number(keys[1])]) === null || _a === void 0 ? void 0 : _a.id;
    const subKey = keys[2];
    if (mainKey && subKey) {
      unflattenedSettings[mainKey] = Object.assign(
        Object.assign({}, unflattenedSettings[mainKey]),
        { [subKey]: flattenedValues[flattedKey] }
      );
    }
  });
  return unflattenedSettings;
};
exports.unflattenSettings = unflattenSettings;
const mapNodeToItem = (node) => ({
  id: node.id,
  label: node.name,
});
exports.mapNodeToItem = mapNodeToItem;
const mapNodesToItems = (nodes) =>
  (nodes === null || nodes === void 0 ? void 0 : nodes.map(exports.mapNodeToItem)) || [];
exports.mapNodesToItems = mapNodesToItems;
const getCommonErrors = (error) =>
  (error === null || error === void 0 ? void 0 : error.graphQLErrors) ||
  (error === null || error === void 0 ? void 0 : error.networkError)
    ? [
        ...((error === null || error === void 0 ? void 0 : error.graphQLErrors) || []),
        ...((error === null || error === void 0 ? void 0 : error.networkError)
          ? [error.networkError]
          : []),
      ]
    : [...(error ? [error] : [])];
exports.getCommonErrors = getCommonErrors;
const getMetafield = (metafields, metafieldId) => metafields[metafieldId];
exports.getMetafield = getMetafield;
const getRawAppPath = (path) => {
  const trimmedQueryParams = path.split("?")[0];
  const trimmedLanguage = trimmedQueryParams.replace(/^\/[a-z]{2}(-[A-Z]{2})?(\/|$)/, "/");
  return trimmedLanguage;
};
exports.getRawAppPath = getRawAppPath;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPublicMetafieldsToMetadata = exports.mapPublicSettingsToMetadata = void 0;
const mapPublicSettingsToMetadata = (settingsValues) => {
  return Object.keys(settingsValues).reduce((metadata, settingsValuesKey) => {
    const settingsValuesObject = settingsValues[settingsValuesKey];
    const settingsValuesValue = JSON.stringify(settingsValuesObject);
    return [
      ...metadata,
      {
        key: settingsValuesKey,
        value: settingsValuesValue,
      },
    ];
  }, []);
};
exports.mapPublicSettingsToMetadata = mapPublicSettingsToMetadata;
const mapPublicMetafieldsToMetadata = (metafieldsValues) => {
  return Object.keys(metafieldsValues).reduce((metadata, metafieldsValuesKey) => {
    const metafieldsValuesValue = metafieldsValues[metafieldsValuesKey];
    return [
      ...metadata,
      {
        key: metafieldsValuesKey,
        value: metafieldsValuesValue || "",
      },
    ];
  }, []);
};
exports.mapPublicMetafieldsToMetadata = mapPublicMetafieldsToMetadata;

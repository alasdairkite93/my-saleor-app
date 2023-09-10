"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPublicMetafieldsToSettings = exports.mergeSettingsValues = void 0;
const defaults_1 = require("@/saleor-app-checkout/config/defaults");
const common_1 = require("@/saleor-app-checkout/types/common");
const reduce_1 = __importDefault(require("lodash-es/reduce"));
/**
 * Merges settings. To be used when default and saved settings may differ (e.g. after app update).
 * @param defaultSettings default settings
 * @param savedSettings saved settings
 * @returns Returns either previously saved settings values or default settings values. If settings values are present in default and saved at the same time, then saved value is returned.
 */
const mergeSettingsValues = (defaultSettings, savedSettings) => {
  return (0, reduce_1.default)(
    defaultSettings,
    (result, defaultSetting, settingKey) => {
      const savedSetting = savedSettings[settingKey];
      const hasSettingInBothSettings = !!savedSetting;
      const udpatedSetting = hasSettingInBothSettings
        ? Object.assign(Object.assign({}, defaultSetting), savedSetting)
        : defaultSetting;
      return Object.assign(Object.assign({}, result), { [settingKey]: udpatedSetting });
    },
    savedSettings
  );
};
exports.mergeSettingsValues = mergeSettingsValues;
const mapPublicMetafieldsToSettings = (metafields) => {
  return (0, reduce_1.default)(
    metafields,
    (settings, metafield, metafieldKey) => {
      const settingsKey = metafieldKey;
      if (!settingsKey || !common_1.allPublicSettingID.includes(settingsKey)) {
        return settings;
      }
      try {
        const metadataItemSettings = JSON.parse(metafield || "");
        return Object.assign(Object.assign({}, settings), {
          [settingsKey]: (0, exports.mergeSettingsValues)(
            settings[settingsKey],
            metadataItemSettings
          ),
        });
      } catch (e) {
        return Object.assign(Object.assign({}, settings), {
          [settingsKey]: settings[settingsKey] || {},
        });
      }
    },
    defaults_1.defaultPublicSettings
  );
};
exports.mapPublicMetafieldsToSettings = mapPublicMetafieldsToSettings;

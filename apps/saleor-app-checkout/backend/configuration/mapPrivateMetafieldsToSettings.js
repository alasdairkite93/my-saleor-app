"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPrivateMetafieldsToSettings = exports.mergeSettingsValues = void 0;
const defaults_1 = require("@/saleor-app-checkout/config/defaults");
const common_1 = require("@/saleor-app-checkout/types/common");
const reduce_1 = __importDefault(require("lodash-es/reduce"));
const encryption_1 = require("./encryption");
const readSettingsValues = (subSettings, obfuscateEncryptedData) => {
  return (0, reduce_1.default)(
    subSettings,
    (subSettings, subSetting, subSettingKey) => {
      const isSettingValue =
        typeof subSetting !== "string" &&
        subSetting &&
        "value" in subSetting &&
        "encrypted" in subSetting;
      if (!isSettingValue && subSetting) {
        return Object.assign(Object.assign({}, subSettings), { [subSettingKey]: subSetting });
      }
      if (!isSettingValue) {
        return subSettings;
      }
      return Object.assign(Object.assign({}, subSettings), {
        [subSettingKey]: subSetting.encrypted
          ? (0, encryption_1.decryptSetting)(subSetting, obfuscateEncryptedData)
          : subSetting.value,
      });
    },
    {}
  );
};
/**
 * Merges settings. To be used when default and saved settings may differ (e.g. after app update).
 * @param defaultSettings default settings
 * @param savedSettings saved settings
 * @returns Returns either previously saved settings values or default settings values. If settings values are present in default and saved at the same time, then saved value is returned.
 */
const mergeSettingsValues = (defaultSettings, savedSettings, obfuscateEncryptedData) => {
  return (0, reduce_1.default)(
    defaultSettings,
    (result, defaultSetting, settingKey) => {
      const savedSetting = savedSettings[settingKey];
      const hasSettingInBothSettings = !!savedSetting;
      const udpatedSetting = hasSettingInBothSettings
        ? Object.assign(Object.assign({}, defaultSetting), savedSetting)
        : defaultSetting;
      const setting = readSettingsValues(udpatedSetting, obfuscateEncryptedData);
      return Object.assign(Object.assign({}, result), { [settingKey]: setting });
    },
    {}
  );
};
exports.mergeSettingsValues = mergeSettingsValues;
const mapPrivateMetafieldsToSettings = (metafields, obfuscateEncryptedData) => {
  return (0, reduce_1.default)(
    metafields,
    (settings, metafield, metafieldKey) => {
      const settingsKey = metafieldKey;
      if (!settingsKey || !common_1.allSettingID.includes(settingsKey)) {
        return settings;
      }
      const metadataItemSettings = JSON.parse(metafield || "");
      return Object.assign(Object.assign({}, settings), {
        [settingsKey]: (0, exports.mergeSettingsValues)(
          settings[settingsKey],
          metadataItemSettings,
          obfuscateEncryptedData
        ),
      });
    },
    defaults_1.defaultPrivateSettings
  );
};
exports.mapPrivateMetafieldsToSettings = mapPrivateMetafieldsToSettings;

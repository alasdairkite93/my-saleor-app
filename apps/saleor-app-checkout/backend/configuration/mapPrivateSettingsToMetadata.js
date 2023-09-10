"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPrivateSettingsToMetadata = void 0;
const fields_1 = require("@/saleor-app-checkout/config/fields");
const reduce_1 = __importDefault(require("lodash-es/reduce"));
const encryption_1 = require("./encryption");
const encryptSubSettings = (subSetting, subSettingsFieldsInput) => {
  const subSettingsFields = Array.isArray(subSettingsFieldsInput) ? subSettingsFieldsInput : [];
  const encryptedSubSetting = (0, reduce_1.default)(
    subSetting,
    (result, value, valueKey) => {
      const setting =
        subSettingsFields === null || subSettingsFields === void 0
          ? void 0
          : subSettingsFields.find((setting) => setting.id === valueKey);
      if ((setting === null || setting === void 0 ? void 0 : setting.encrypt) && value) {
        return Object.assign(Object.assign({}, result), {
          [valueKey]: (0, encryption_1.encryptSetting)(value),
        });
      }
      return Object.assign(Object.assign({}, result), {
        [valueKey]: {
          encrypted: false,
          value,
        },
      });
    },
    {}
  );
  return encryptedSubSetting;
};
const encryptSettings = (settingsValues, settingsFields) => {
  const encrypteSettings = (0, reduce_1.default)(
    settingsValues,
    (result, subSetting, settingKey) => {
      const subSettingsFields = settingsFields[settingKey];
      const encryptedSubSetting = encryptSubSettings(subSetting, subSettingsFields);
      return Object.assign(Object.assign({}, result), { [settingKey]: encryptedSubSetting });
    },
    {}
  );
  return encrypteSettings;
};
const mapPrivateSettingsToMetadata = (settingsValues) => {
  return Object.keys(settingsValues).reduce((metadata, settingsValuesKey) => {
    const settingsValuesObject = encryptSettings(
      settingsValues[settingsValuesKey],
      fields_1.fields[settingsValuesKey]
    );
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
exports.mapPrivateSettingsToMetadata = mapPrivateSettingsToMetadata;

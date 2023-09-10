"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadSettingsFiles = void 0;
const lodash_es_1 = require("lodash-es");
const uploadSettingFile = (setting, uploadFile) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const settingIdx = Object.keys(setting)[0];
    const uploadFileResult = yield uploadFile({
      file: setting[settingIdx],
    });
    if ((_a = uploadFileResult.data) === null || _a === void 0 ? void 0 : _a.fileUpload) {
      return {
        [settingIdx]:
          (_c =
            (_b = uploadFileResult.data.fileUpload) === null || _b === void 0
              ? void 0
              : _b.uploadedFile) === null || _c === void 0
            ? void 0
            : _c.url,
      };
    }
    return {
      [settingIdx]: undefined,
    };
  });
const mapSettingsObjectToArray = (settingList) =>
  (0, lodash_es_1.reduce)(
    settingList,
    (settingsUrls, settingFile, settingIdx) => {
      if (settingFile) {
        return [
          ...settingsUrls,
          {
            [settingIdx]: settingFile,
          },
        ];
      }
      return settingsUrls;
    },
    []
  );
const uploadSettingsFiles = ({ data, dataFiles, uploadFile }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!dataFiles) {
      return data;
    }
    return (0, lodash_es_1.reduce)(
      dataFiles,
      (settings, subSettings, idx) =>
        __awaiter(void 0, void 0, void 0, function* () {
          const uploadedSettings = yield settings;
          const uploadedSubSettings = yield Promise.all(
            mapSettingsObjectToArray(subSettings).map((setting) =>
              uploadSettingFile(setting, uploadFile)
            )
          );
          return Object.assign(Object.assign({}, uploadedSettings), {
            [idx]: (0, lodash_es_1.merge)({}, ...uploadedSubSettings),
          });
        }),
      Promise.resolve(data)
    );
  });
exports.uploadSettingsFiles = uploadSettingsFiles;

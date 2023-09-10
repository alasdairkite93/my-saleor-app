"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
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
exports.setPrivateSettings =
  exports.getChannelActivePaymentProvidersSettings =
  exports.getActivePaymentProvidersSettings =
  exports.getPublicSettings =
  exports.getPrivateSettings =
    void 0;
const graphql_1 = require("@/saleor-app-checkout/graphql");
const saleorGraphqlClient_1 = require("@/saleor-app-checkout/backend/saleorGraphqlClient");
const defaults_1 = require("@/saleor-app-checkout/config/defaults");
const utils_1 = require("./utils");
const mapPrivateSettingsToMetadata_1 = require("./mapPrivateSettingsToMetadata");
const mapPrivateMetafieldsToSettings_1 = require("./mapPrivateMetafieldsToSettings");
const mapPublicMetafieldsToSettings_1 = require("@/saleor-app-checkout/frontend/misc/mapPublicMetafieldsToSettings");
const common_1 = require("@/saleor-app-checkout/types/common");
const Apl = __importStar(require("@/saleor-app-checkout/config/apl"));
const getPrivateSettings = ({ saleorApiUrl, obfuscateEncryptedData }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const authData = yield Apl.get(saleorApiUrl);
    const client = (0, saleorGraphqlClient_1.getClientForAuthData)(authData);
    const { data, error } = yield client
      .query(graphql_1.PrivateMetafieldsInferedDocument, {
        keys: [...common_1.allPrivateSettingID],
      })
      .toPromise();
    if (error) {
      throw error;
    }
    const settingsValues = (0, mapPrivateMetafieldsToSettings_1.mapPrivateMetafieldsToSettings)(
      ((_a = data === null || data === void 0 ? void 0 : data.app) === null || _a === void 0
        ? void 0
        : _a.privateMetafields) || {},
      obfuscateEncryptedData
    );
    return settingsValues;
  });
exports.getPrivateSettings = getPrivateSettings;
const getPublicSettings = ({ saleorApiUrl }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const authData = yield Apl.get(saleorApiUrl);
    const { data, error } = yield (0, saleorGraphqlClient_1.getClientForAuthData)(authData)
      .query(graphql_1.PublicMetafieldsInferedDocument, { keys: [...common_1.allPublicSettingID] })
      .toPromise();
    console.log("getPublicSettings request result:", data, error);
    if (error) {
      throw error;
    }
    const settingsValues = (0, mapPublicMetafieldsToSettings_1.mapPublicMetafieldsToSettings)(
      ((_b = data === null || data === void 0 ? void 0 : data.app) === null || _b === void 0
        ? void 0
        : _b.metafields) || {}
    );
    return settingsValues;
  });
exports.getPublicSettings = getPublicSettings;
const getActivePaymentProvidersSettings = (saleorApiUrl) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const authData = yield Apl.get(saleorApiUrl);
    const settings = yield (0, exports.getPublicSettings)({ saleorApiUrl });
    const { data, error } = yield (0, saleorGraphqlClient_1.getClientForAuthData)(authData)
      .query(graphql_1.ChannelsDocument, {})
      .toPromise();
    console.log("getActivePaymentProvidersSettings request result", data, error);
    if (error) {
      throw error;
    }
    const activePaymentProvidersSettings = (0, utils_1.mergeChannelsWithPaymentProvidersSettings)(
      settings,
      data === null || data === void 0 ? void 0 : data.channels
    );
    return activePaymentProvidersSettings;
  });
exports.getActivePaymentProvidersSettings = getActivePaymentProvidersSettings;
const getChannelActivePaymentProvidersSettings = ({ saleorApiUrl, channelId }) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const authData = yield Apl.get(saleorApiUrl);
    const settings = yield (0, exports.getPublicSettings)({ saleorApiUrl });
    const { data, error } = yield (0, saleorGraphqlClient_1.getClientForAuthData)(authData)
      .query(graphql_1.ChannelDocument, {
        id: channelId,
      })
      .toPromise();
    console.log("getChannelActivePaymentProvidersSettings request result:", data, error);
    if (error) {
      throw error;
    }
    const channelActivePaymentProvidersSettings =
      ((_c = settings.channelActivePaymentProviders) === null || _c === void 0
        ? void 0
        : _c[channelId]) || defaults_1.defaultActiveChannelPaymentProviders;
    return channelActivePaymentProvidersSettings;
  });
exports.getChannelActivePaymentProvidersSettings = getChannelActivePaymentProvidersSettings;
const setPrivateSettings = (saleorApiUrl, settings) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    const authData = yield Apl.get(saleorApiUrl);
    const client = (0, saleorGraphqlClient_1.getClientForAuthData)(authData);
    const metadata = (0, mapPrivateSettingsToMetadata_1.mapPrivateSettingsToMetadata)(settings);
    const { data, error } = yield client
      .mutation(graphql_1.UpdatePrivateMetadataDocument, {
        id: authData.appId,
        input: metadata,
        keys: [...common_1.allPrivateSettingID],
      })
      .toPromise();
    console.log("setPrivateSettings request result", data, error);
    if (error) {
      throw error;
    }
    const settingsValues = (0, mapPrivateMetafieldsToSettings_1.mapPrivateMetafieldsToSettings)(
      ((_e =
        (_d = data === null || data === void 0 ? void 0 : data.updatePrivateMetadata) === null ||
        _d === void 0
          ? void 0
          : _d.item) === null || _e === void 0
        ? void 0
        : _e.privateMetafields) || {},
      true
    );
    return settingsValues;
  });
exports.setPrivateSettings = setPrivateSettings;

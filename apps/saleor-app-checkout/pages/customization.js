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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const CustomizationDetails_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/templates/CustomizationDetails")
);
const graphql_1 = require("@/saleor-app-checkout/graphql");
const utils_1 = require("@/saleor-app-checkout/frontend/utils");
const data_1 = require("@/saleor-app-checkout/frontend/data");
const useAuthData_1 = require("@/saleor-app-checkout/frontend/hooks/useAuthData");
const mapPublicSettingsToMetadata_1 = require("@/saleor-app-checkout/frontend/misc/mapPublicSettingsToMetadata");
const mapPublicMetafieldsToSettings_1 = require("@/saleor-app-checkout/frontend/misc/mapPublicMetafieldsToSettings");
const handlers_1 = require("@/saleor-app-checkout/frontend/handlers");
const Customization = () => {
  var _a, _b, _c, _d, _e, _f;
  const router = (0, router_1.useRouter)();
  const { appId, isAuthorized } = (0, useAuthData_1.useAuthData)();
  const [metafieldsQuery] = (0, graphql_1.usePublicMetafieldsQuery)({
    variables: {
      id: appId,
      keys: ["customizations", "customizationsCheckoutUrl"],
    },
    pause: !isAuthorized,
  });
  const [metadataMutation, setPublicMetadata] = (0, graphql_1.useUpdatePublicMetadataMutation)();
  const [uploadFileState, uploadFile] = (0, graphql_1.useFileUploadMutation)();
  const settingsValues = (0, mapPublicMetafieldsToSettings_1.mapPublicMetafieldsToSettings)(
    ((_b = (_a = metafieldsQuery.data) === null || _a === void 0 ? void 0 : _a.app) === null ||
    _b === void 0
      ? void 0
      : _b.metafields) || {}
  );
  const customizationSettings = (0, data_1.useCustomizationSettings)(settingsValues.customizations);
  const checkoutUrl = (0, utils_1.getMetafield)(
    ((_d = (_c = metafieldsQuery.data) === null || _c === void 0 ? void 0 : _c.app) === null ||
    _d === void 0
      ? void 0
      : _d.metafields) || {},
    "customizationsCheckoutUrl"
  );
  const handleCancel = () => {
    router.back();
  };
  const handleSubmit = (data, dataFiles, checkoutUrl) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const newData = yield (0, handlers_1.uploadSettingsFiles)({ data, dataFiles, uploadFile });
      const metadata = [
        ...(0, mapPublicSettingsToMetadata_1.mapPublicSettingsToMetadata)({
          customizations: newData,
        }),
        ...(0, mapPublicSettingsToMetadata_1.mapPublicMetafieldsToMetadata)({
          customizationsCheckoutUrl: checkoutUrl,
        }),
      ];
      yield setPublicMetadata({
        id: appId,
        input: metadata,
      });
    });
  const errors = [
    ...(((_f =
      (_e = metadataMutation.data) === null || _e === void 0 ? void 0 : _e.updateMetadata) ===
      null || _f === void 0
      ? void 0
      : _f.errors) || []),
    ...(0, utils_1.getCommonErrors)(metadataMutation.error),
  ];
  return (
    <CustomizationDetails_1.default
      options={customizationSettings}
      checkoutUrl={checkoutUrl}
      loading={metafieldsQuery.fetching || metadataMutation.fetching || uploadFileState.fetching}
      saveButtonBarState="default"
      errors={errors}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};
exports.default = Customization;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorDetails_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/components/templates/ErrorDetails")
);
const data_1 = require("@/saleor-app-checkout/frontend/data");
const useAuthData_1 = require("@/saleor-app-checkout/frontend/hooks/useAuthData");
const errorMessages_1 = require("@/saleor-app-checkout/frontend/misc/errorMessages");
const mapPublicMetafieldsToSettings_1 = require("@/saleor-app-checkout/frontend/misc/mapPublicMetafieldsToSettings");
const mapPublicSettingsToMetadata_1 = require("@/saleor-app-checkout/frontend/misc/mapPublicSettingsToMetadata");
const utils_1 = require("@/saleor-app-checkout/frontend/utils");
const graphql_1 = require("@/saleor-app-checkout/graphql");
const ChannelDetails_1 = __importDefault(require("frontend/components/templates/ChannelDetails"));
const router_1 = require("next/router");
const react_intl_1 = require("react-intl");
const Channel = () => {
  var _a, _b, _c, _d, _e;
  const router = (0, router_1.useRouter)();
  const { channelId } = router.query;
  const intl = (0, react_intl_1.useIntl)();
  const { appId, isAuthorized } = (0, useAuthData_1.useAuthData)();
  const [metafieldsQuery] = (0, graphql_1.usePublicMetafieldsQuery)({
    variables: {
      id: appId,
      keys: ["channelActivePaymentProviders"],
    },
    pause: !isAuthorized,
  });
  const [metadataMutation, setPublicMetadata] = (0, graphql_1.useUpdatePublicMetadataMutation)();
  const settingsValues = (0, mapPublicMetafieldsToSettings_1.mapPublicMetafieldsToSettings)(
    ((_b = (_a = metafieldsQuery.data) === null || _a === void 0 ? void 0 : _a.app) === null ||
    _b === void 0
      ? void 0
      : _b.metafields) || {}
  );
  const [channelsQuery] = (0, graphql_1.useChannelsQuery)({
    pause: !isAuthorized,
  });
  const channels =
    ((_c = channelsQuery.data) === null || _c === void 0 ? void 0 : _c.channels) || [];
  const channelPaymentOptions = (0, data_1.useChannelPaymentOptions)(
    channels,
    settingsValues.channelActivePaymentProviders,
    channelId === null || channelId === void 0 ? void 0 : channelId.toString()
  );
  const handleCancel = () => {
    router.back();
  };
  const handleSubmit = (data) => {
    const metadata = (0, mapPublicSettingsToMetadata_1.mapPublicSettingsToMetadata)({
      channelActivePaymentProviders: Object.assign(
        Object.assign({}, settingsValues.channelActivePaymentProviders),
        data
      ),
    });
    void setPublicMetadata({
      id: appId,
      input: metadata,
    });
  };
  const errors = [
    ...(((_e =
      (_d = metadataMutation.data) === null || _d === void 0 ? void 0 : _d.updateMetadata) ===
      null || _e === void 0
      ? void 0
      : _e.errors) || []),
    ...(0, utils_1.getCommonErrors)(metadataMutation.error),
  ];
  if (!channelPaymentOptions) {
    return (
      <ErrorDetails_1.default
        error={intl.formatMessage(errorMessages_1.notFoundMessages.channelPaymentOptionsNotFound)}
      />
    );
  }
  return (
    <ChannelDetails_1.default
      channelPaymentOptions={channelPaymentOptions}
      channels={channels}
      saveButtonBarState="default"
      loading={channelsQuery.fetching || metafieldsQuery.fetching || metadataMutation.fetching}
      errors={errors}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};
exports.default = Channel;

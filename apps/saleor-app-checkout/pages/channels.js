"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const ChannelList_1 = __importDefault(require("frontend/components/templates/ChannelList"));
const graphql_1 = require("@/saleor-app-checkout/graphql");
const useAuthData_1 = require("@/saleor-app-checkout/frontend/hooks/useAuthData");
const Channels = () => {
  var _a;
  const { isAuthorized } = (0, useAuthData_1.useAuthData)();
  const [channelsQuery] = (0, graphql_1.useChannelsQuery)({
    pause: !isAuthorized,
  });
  const channels =
    ((_a = channelsQuery.data) === null || _a === void 0 ? void 0 : _a.channels) || [];
  return <ChannelList_1.default channels={channels} loading={channelsQuery.fetching} />;
};
exports.default = Channels;

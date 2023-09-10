"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelDropdown = void 0;
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const RegionsProvider_1 = require("../RegionsProvider");
const BaseRegionsDropdown_1 = require("./BaseRegionsDropdown");
const BaseRegionsDropdownItem_1 = require("./BaseRegionsDropdownItem");
function ChannelDropdown({ horizontalAlignment }) {
  const router = (0, router_1.useRouter)();
  const { channels, currentChannel, setCurrentChannel, currentLocale } = (0,
  RegionsProvider_1.useRegions)();
  const channelOptions = channels.map((ch) => ({
    label: ch.name,
    chosen: ch.slug === currentChannel.slug,
    channelSlug: ch.slug,
  }));
  const onChannelChange = (channelSlug) => {
    if (channelSlug === currentChannel.slug) {
      return;
    }
    setCurrentChannel(channelSlug).catch(console.error);
    // Update current URL to use the chosen channel
    void router.push({
      pathname: router.pathname,
      query: Object.assign(Object.assign({}, router.query), {
        channel: channelSlug,
        locale: currentLocale,
      }),
    });
  };
  return (
    <BaseRegionsDropdown_1.BaseRegionsDropdown
      label={currentChannel.currencyCode}
      horizontalAlignment={horizontalAlignment}
    >
      {channelOptions.map((option) => (
        <BaseRegionsDropdownItem_1.BaseRegionsDropdownItem
          key={option.label}
          chosen={option.chosen}
          label={option.label}
          onClick={() => onChannelChange(option.channelSlug)}
        />
      ))}
    </BaseRegionsDropdown_1.BaseRegionsDropdown>
  );
}
exports.ChannelDropdown = ChannelDropdown;
exports.default = ChannelDropdown;

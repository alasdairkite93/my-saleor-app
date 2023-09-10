"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleDropdown = void 0;
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const regions_1 = require("@/lib/regions");
const RegionsProvider_1 = require("../RegionsProvider");
const BaseRegionsDropdown_1 = require("./BaseRegionsDropdown");
const BaseRegionsDropdownItem_1 = require("./BaseRegionsDropdownItem");
function LocaleDropdown({ horizontalAlignment }) {
  const router = (0, router_1.useRouter)();
  const { currentLocale, currentChannel } = (0, RegionsProvider_1.useRegions)();
  const localeOptions = regions_1.LOCALES.map((loc) => ({
    label: loc.name,
    chosen: loc.slug === currentLocale,
    localeSlug: loc.slug,
  }));
  const onLocaleChange = (localeSlug) => {
    if (localeSlug === currentLocale) {
      return;
    }
    // Update current URL to use the chosen locale
    void router.push({
      pathname: router.pathname,
      query: Object.assign(Object.assign({}, router.query), {
        channel: currentChannel.slug,
        locale: localeSlug,
      }),
    });
  };
  return (
    <BaseRegionsDropdown_1.BaseRegionsDropdown
      label={currentLocale}
      horizontalAlignment={horizontalAlignment}
    >
      {localeOptions.map((option) => (
        <BaseRegionsDropdownItem_1.BaseRegionsDropdownItem
          key={option.label}
          chosen={option.chosen}
          label={option.label}
          onClick={() => onLocaleChange(option.localeSlug)}
        />
      ))}
    </BaseRegionsDropdown_1.BaseRegionsDropdown>
  );
}
exports.LocaleDropdown = LocaleDropdown;
exports.default = LocaleDropdown;

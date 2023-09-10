"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationAnchor = void 0;
const link_1 = __importDefault(require("next/link"));
const menus_1 = require("@/lib/menus");
const translations_1 = require("@/lib/translations");
const RegionsProvider_1 = require("../RegionsProvider");
function NavigationAnchor({ menuItem, className }) {
  const {
    currentChannel: { slug },
    currentLocale,
  } = (0, RegionsProvider_1.useRegions)();
  if (menuItem.url) {
    return (
      <a
        href={menuItem.url}
        target="_blank"
        rel="noreferrer"
        className={className}
        data-testid={`categoriesList${menuItem.name}`}
      >
        {(0, translations_1.translate)(menuItem, "name")}
      </a>
    );
  }
  return (
    <link_1.default
      href={(0, menus_1.getLinkPath)(menuItem, slug, currentLocale)}
      passHref
      legacyBehavior
    >
      <a href="pass" className={className} data-testid={`categoriesList${menuItem.name}`}>
        {(0, translations_1.translate)(menuItem, "name")}
      </a>
    </link_1.default>
  );
}
exports.NavigationAnchor = NavigationAnchor;
exports.default = NavigationAnchor;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const menus_1 = require("@/lib/menus");
const translations_1 = require("@/lib/translations");
const NavigationAnchor_1 = require("../NavigationAnchor");
const RegionsProvider_1 = require("../RegionsProvider");
const BurgerMenu_module_css_1 = __importDefault(require("./BurgerMenu.module.css"));
const chevronDownIcon_svg_1 = __importDefault(require("./chevronDownIcon.svg")); // in the final version it should be imported from ui-kit package
function SubCollapseMenu({ menuItem }) {
  var _a, _b;
  const [open, setOpen] = (0, react_1.useState)(false);
  const { currentChannel, currentLocale } = (0, RegionsProvider_1.useRegions)();
  const shouldDisplayAnchor = !((_a = menuItem.children) === null || _a === void 0
    ? void 0
    : _a.length);
  return (
    <div className="mt-4">
      {shouldDisplayAnchor ? (
        <NavigationAnchor_1.NavigationAnchor
          menuItem={menuItem}
          className={BurgerMenu_module_css_1.default["collapse-sub"]}
        />
      ) : (
        <>
          <button
            type="button"
            className={(0, clsx_1.default)(BurgerMenu_module_css_1.default["collapse-sub"], {
              [BurgerMenu_module_css_1.default["collapse-sub--active"]]: open,
            })}
            onClick={() => setOpen(!open)}
          >
            {(0, translations_1.translate)(menuItem, "name")}
            <chevronDownIcon_svg_1.default />
          </button>
          {open && (
            <div>
              {(_b = menuItem.children) === null || _b === void 0
                ? void 0
                : _b.map((sub) => (
                    <li key={sub.id} className={BurgerMenu_module_css_1.default["menu-link"]}>
                      {sub.url ? (
                        <a href={sub.url} target="_blank" rel="noreferrer">
                          {sub.name}
                        </a>
                      ) : (
                        <link_1.default
                          href={(0, menus_1.getLinkPath)(sub, currentChannel.slug, currentLocale)}
                          passHref
                          legacyBehavior
                        >
                          <a href="pass">{sub.name}</a>
                        </link_1.default>
                      )}
                    </li>
                  ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
exports.default = SubCollapseMenu;

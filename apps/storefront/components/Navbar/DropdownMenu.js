"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const menus_1 = require("@/lib/menus");
const NavigationAnchor_1 = require("../NavigationAnchor/NavigationAnchor");
const RegionsProvider_1 = require("../RegionsProvider");
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css"));
function Dropdown({ menuItem }) {
  var _a, _b;
  const {
    currentChannel: { slug },
    currentLocale,
  } = (0, RegionsProvider_1.useRegions)();
  return (
    <div className={Navbar_module_css_1.default.dropdown}>
      <NavigationAnchor_1.NavigationAnchor
        menuItem={menuItem}
        className={Navbar_module_css_1.default["dropdown-trigger"]}
      />
      {!!((_a = menuItem.children) === null || _a === void 0 ? void 0 : _a.length) && (
        <div className={Navbar_module_css_1.default["dropdown-menu"]}>
          <div className="container">
            <div className="grid grid-cols-7 gap-[2rem] mx-2">
              {(_b = menuItem.children) === null || _b === void 0
                ? void 0
                : _b.map((item) => {
                    var _a, _b;
                    return (
                      <div key={item === null || item === void 0 ? void 0 : item.id}>
                        {(item === null || item === void 0 ? void 0 : item.url) ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className={Navbar_module_css_1.default["dropdown-main"]}
                          >
                            {item === null || item === void 0 ? void 0 : item.name}
                          </a>
                        ) : (
                          <link_1.default
                            href={(0, menus_1.getLinkPath)(item, slug, currentLocale)}
                            passHref
                            legacyBehavior
                          >
                            <a href="pass" className={Navbar_module_css_1.default["dropdown-main"]}>
                              {item === null || item === void 0 ? void 0 : item.name}
                            </a>
                          </link_1.default>
                        )}
                        {!!((_a = item === null || item === void 0 ? void 0 : item.children) ===
                          null || _a === void 0
                          ? void 0
                          : _a.length) && (
                          <ul className={Navbar_module_css_1.default["dropdown-ul"]}>
                            {(_b = item === null || item === void 0 ? void 0 : item.children) ===
                              null || _b === void 0
                              ? void 0
                              : _b.map((sub) => (
                                  <li key={sub === null || sub === void 0 ? void 0 : sub.id}>
                                    <link_1.default
                                      href={(0, menus_1.getLinkPath)(sub, slug, currentLocale)}
                                      passHref
                                      legacyBehavior
                                    >
                                      <a
                                        href="pass"
                                        className={Navbar_module_css_1.default["dropdown-link"]}
                                      >
                                        {sub === null || sub === void 0 ? void 0 : sub.name}
                                      </a>
                                    </link_1.default>
                                  </li>
                                ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
exports.default = Dropdown;

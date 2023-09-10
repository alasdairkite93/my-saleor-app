"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const clsx_1 = __importDefault(require("clsx"));
const image_1 = __importDefault(require("next/legacy/image"));
const link_1 = __importDefault(require("next/link"));
const menus_1 = require("@/lib/menus");
const paths_1 = require("@/lib/paths");
const api_1 = require("@/saleor/api");
const Box_1 = require("../Box");
const ChannelDropdown_1 = require("../regionDropdowns/ChannelDropdown");
const LocaleDropdown_1 = require("../regionDropdowns/LocaleDropdown");
const RegionsProvider_1 = require("../RegionsProvider");
const Footer_module_css_1 = __importDefault(require("./Footer.module.css"));
// Saleor Cloud currently doesn't support relative URLs in the footer.
// This is a workaround to make the links work.
// @todo remove this when the issue is fixed.
const fixMenuItemLocalhostUrl = (url) => url.replace(/^https?:\/\/localhost:8000\//, "/");
function Footer(_a) {
  var _b;
  var { className } = _a,
    rest = __rest(_a, ["className"]);
  const paths = (0, paths_1.usePaths)();
  const { query, currentChannel, currentLocale } = (0, RegionsProvider_1.useRegions)();
  const { data, error } = (0, api_1.useFooterMenuQuery)({ variables: Object.assign({}, query) });
  if (error) {
    console.error("Footer component error", error.message);
  }
  const menu =
    ((_b = data === null || data === void 0 ? void 0 : data.menu) === null || _b === void 0
      ? void 0
      : _b.items) || [];
  return (
    <footer
      className={(0, clsx_1.default)(Footer_module_css_1.default.footer, className)}
      {...rest}
    >
      <Box_1.Box className={Footer_module_css_1.default["footer-inner"]}>
        <div className="flex mb-14 sm:mb-10">
          <link_1.default href={paths.$url()} passHref legacyBehavior>
            <a href="pass" className="hidden sm:inline-block">
              <div className="mt-px group block h-16 w-28 relative grayscale">
                <image_1.default src="/saleor.svg" alt="Saleor logo" layout="fill" />
              </div>
            </a>
          </link_1.default>
          <div className="grid grid-cols-2 gap-[2rem] w-full sm:w-auto sm:flex sm:flex-wrap sm:justify-end sm:ml-auto">
            {menu.map((item) => {
              var _a;
              return (
                <div className="sm:ml-14" key={item === null || item === void 0 ? void 0 : item.id}>
                  {(item === null || item === void 0 ? void 0 : item.url) ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className={Footer_module_css_1.default["menu-heading"]}
                    >
                      {item === null || item === void 0 ? void 0 : item.name}
                    </a>
                  ) : (
                    <link_1.default
                      href={(0, menus_1.getLinkPath)(item, currentChannel.slug, currentLocale)}
                      passHref
                      legacyBehavior
                    >
                      <a href="pass" className={Footer_module_css_1.default["menu-heading"]}>
                        {item === null || item === void 0 ? void 0 : item.name}
                      </a>
                    </link_1.default>
                  )}
                  <ul className={Footer_module_css_1.default.menu}>
                    {(_a = item === null || item === void 0 ? void 0 : item.children) === null ||
                    _a === void 0
                      ? void 0
                      : _a.map((sub) => (
                          <li key={sub === null || sub === void 0 ? void 0 : sub.id}>
                            {(sub === null || sub === void 0 ? void 0 : sub.url) ? (
                              <a
                                href={fixMenuItemLocalhostUrl(sub.url)}
                                target="_blank"
                                rel="noreferrer"
                                className={Footer_module_css_1.default["menu-link"]}
                                data-testid={`footerExternalLinks${
                                  sub === null || sub === void 0 ? void 0 : sub.name
                                }`}
                              >
                                {sub === null || sub === void 0 ? void 0 : sub.name}
                              </a>
                            ) : (
                              <link_1.default
                                href={(0, menus_1.getLinkPath)(
                                  sub,
                                  currentChannel.slug,
                                  currentLocale
                                )}
                                passHref
                                legacyBehavior
                              >
                                <a
                                  href="pass"
                                  className={Footer_module_css_1.default["menu-link"]}
                                  data-testid={`footerInternalLinks${
                                    sub === null || sub === void 0 ? void 0 : sub.name
                                  }`}
                                >
                                  {sub === null || sub === void 0 ? void 0 : sub.name}
                                </a>
                              </link_1.default>
                            )}
                          </li>
                        ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-sm text-main-3 flex-grow">
            © Copyright 2018 - {new Date().getFullYear()} Saleor Commerce
          </p>
          <div className="invisible md:visible flex gap-4">
            <ChannelDropdown_1.ChannelDropdown horizontalAlignment="right" />
            <LocaleDropdown_1.LocaleDropdown horizontalAlignment="right" />
          </div>
        </div>
      </Box_1.Box>
    </footer>
  );
}
exports.Footer = Footer;
exports.default = Footer;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BurgerMenu = void 0;
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const router_1 = require("next/router");
const react_1 = require("react");
const react_intl_1 = require("react-intl");
const useLogout_1 = require("@/lib/hooks/useLogout");
const paths_1 = require("@/lib/paths");
const api_1 = require("@/saleor/api");
const NavIconButton_1 = __importDefault(require("../Navbar/NavIconButton"));
const ChannelDropdown_1 = require("../regionDropdowns/ChannelDropdown");
const LocaleDropdown_1 = require("../regionDropdowns/LocaleDropdown");
const RegionsProvider_1 = require("../RegionsProvider");
const translations_1 = require("../translations");
const BurgerMenu_module_css_1 = __importDefault(require("./BurgerMenu.module.css"));
const CollapseMenu_1 = require("./CollapseMenu");
const useUser_1 = require("@/lib/useUser");
function BurgerMenu({ open, onCloseClick }) {
  var _a;
  const paths = (0, paths_1.usePaths)();
  const { query } = (0, RegionsProvider_1.useRegions)();
  const t = (0, react_intl_1.useIntl)();
  const [authenticated, setAuthenticated] = (0, react_1.useState)(false);
  const { authenticated: actuallyAuthenticated } = (0, useUser_1.useUser)();
  const router = (0, router_1.useRouter)();
  const { error, data } = (0, api_1.useMainMenuQuery)({
    variables: Object.assign({}, query),
  });
  // Avoid hydration warning by setting authenticated state in useEffect
  (0, react_1.useEffect)(() => {
    setAuthenticated(actuallyAuthenticated);
  }, [actuallyAuthenticated]);
  if (error) {
    console.error("BurgerMenu component error", error.message);
  }
  const onLogout = (0, useLogout_1.useLogout)();
  const menu =
    ((_a = data === null || data === void 0 ? void 0 : data.menu) === null || _a === void 0
      ? void 0
      : _a.items) || [];
  return (
    <div
      className={(0, clsx_1.default)(BurgerMenu_module_css_1.default.container, {
        [BurgerMenu_module_css_1.default["container--open"]]: open,
      })}
    >
      <div
        className={BurgerMenu_module_css_1.default.backdrop}
        aria-hidden="true"
        onClick={onCloseClick}
      />
      <div className={BurgerMenu_module_css_1.default.body}>
        <div className="flex justify-end w-full mb-5">
          <NavIconButton_1.default icon="close" onClick={onCloseClick} />
        </div>
        {menu.map((item) => (
          <CollapseMenu_1.CollapseMenu menuItem={item} key={item.id} />
        ))}
        <div className="mt-auto pt-4">
          <div className="flex flex-col">
            {authenticated ? (
              <>
                <link_1.default href={paths.account.preferences.$url()} passHref legacyBehavior>
                  <a
                    tabIndex={0}
                    className={BurgerMenu_module_css_1.default["burger-link"]}
                    href="pass"
                  >
                    {t.formatMessage(translations_1.messages.menuAccountPreferences)}
                  </a>
                </link_1.default>
                <button
                  type="button"
                  onClick={onLogout}
                  tabIndex={-1}
                  className={BurgerMenu_module_css_1.default["burger-link"]}
                >
                  {t.formatMessage(translations_1.messages.logOut)}
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => router.push(paths.account.login.$url())}
                tabIndex={-1}
                className={BurgerMenu_module_css_1.default["burger-link"]}
              >
                {t.formatMessage(translations_1.messages.logIn)}
              </button>
            )}
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <ChannelDropdown_1.ChannelDropdown />
          <LocaleDropdown_1.LocaleDropdown />
        </div>
      </div>
    </div>
  );
}
exports.BurgerMenu = BurgerMenu;
exports.default = BurgerMenu;

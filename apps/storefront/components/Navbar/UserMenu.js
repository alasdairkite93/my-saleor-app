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
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const react_intl_1 = require("react-intl");
const useLogout_1 = require("@/lib/hooks/useLogout");
const paths_1 = require("@/lib/paths");
const translations_1 = require("../translations");
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css"));
const NavIconButton_1 = __importDefault(require("./NavIconButton"));
function UserMenu(_a) {
  var { className } = _a,
    rest = __rest(_a, ["className"]);
  const paths = (0, paths_1.usePaths)();
  const t = (0, react_intl_1.useIntl)();
  const onLogout = (0, useLogout_1.useLogout)();
  return (
    <div
      className={(0, clsx_1.default)(Navbar_module_css_1.default["user-menu-container"], className)}
      {...rest}
    >
      <NavIconButton_1.default icon="user" aria-hidden="true" />
      <div className={Navbar_module_css_1.default["user-menu"]}>
        <link_1.default href={paths.account.preferences.$url()} passHref legacyBehavior>
          <a tabIndex={0} className={Navbar_module_css_1.default["user-menu-item"]} href="pass">
            {t.formatMessage(translations_1.messages.menuAccountPreferences)}
          </a>
        </link_1.default>
        <button
          type="button"
          onClick={onLogout}
          tabIndex={-1}
          className={Navbar_module_css_1.default["user-menu-item"]}
        >
          {t.formatMessage(translations_1.messages.logOut)}
        </button>
      </div>
    </div>
  );
}
exports.default = UserMenu;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationPanel = void 0;
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const paths_1 = require("../../lib/paths");
const translations_1 = require("../translations");
function NavigationPanel() {
  const paths = (0, paths_1.usePaths)();
  const t = (0, react_intl_1.useIntl)();
  const linkClassname =
    "flex p-4 items-center w-full rounded-md shadow-sm h-10 hover:text-blue-500";
  return (
    <div className="group w-full md:w-4/5 cursor-default rounded-md bg-white">
      <link_1.default href={paths.account.preferences.$url()} passHref legacyBehavior>
        <a href="pass" className="text-black">
          <span className={linkClassname}>
            {t.formatMessage(translations_1.messages.menuAccountPreferences)}
          </span>
        </a>
      </link_1.default>
      <link_1.default href={paths.account.addressBook.$url()} passHref legacyBehavior>
        <a href="pass" className="text-black">
          <span className={linkClassname}>
            {t.formatMessage(translations_1.messages.menuAccountAddressBook)}
          </span>
        </a>
      </link_1.default>
      <link_1.default href={paths.account.orders.$url()} passHref legacyBehavior>
        <a href="pass" className="text-black">
          <span className={linkClassname}>
            {t.formatMessage(translations_1.messages.menuAccountOrders)}
          </span>
        </a>
      </link_1.default>
    </div>
  );
}
exports.NavigationPanel = NavigationPanel;
exports.default = NavigationPanel;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenu = void 0;
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const menus_1 = require("@/lib/menus");
const translations_1 = require("@/lib/translations");
const util_1 = require("@/lib/util");
const api_1 = require("@/saleor/api");
const HamburgerButton_1 = require("../HamburgerButton");
const RegionsProvider_1 = require("../RegionsProvider");
function MainMenu() {
  var _a;
  const { query, currentChannel, currentLocale } = (0, RegionsProvider_1.useRegions)();
  const { loading, error, data } = (0, api_1.useMainMenuQuery)({
    variables: Object.assign({}, query),
  });
  const [openDropdown, setOpenDropdown] = react_1.default.useState(false);
  const onClickButton = (ev) => {
    ev.stopPropagation();
    setOpenDropdown(!openDropdown);
  };
  if (loading) {
    return (
      <div className="group md:px-8 relative max-w-screen-md flex md:pt-2 md:pl-2 flex-col">
        <HamburgerButton_1.HamburgerButton onClick={(ev) => onClickButton(ev)} />
      </div>
    );
  }
  if (error) {
    console.error("Navigation component error", error.message);
    return null;
  }
  const menu =
    ((_a = data === null || data === void 0 ? void 0 : data.menu) === null || _a === void 0
      ? void 0
      : _a.items) || [];
  return (
    <div className="group relative justify-center flex flex-col">
      <HamburgerButton_1.HamburgerButton
        active={openDropdown}
        onClick={(ev) => onClickButton(ev)}
      />
      <div
        className={(0, clsx_1.default)(
          "z-40 dropdown-menu transition-all duration-300 transform origin-top-left -translate-y-2 scale-95",
          openDropdown && "visible",
          !openDropdown && "invisible opacity-0"
        )}
      >
        <div className="mt-5 mr-2 -ml-2 md:mx-3 z-40 absolute h-screen w-screen lg:max-w-7xl md:h-56 bg-white border border-gray-200 rounded-md shadow-lg outline-none">
          <div className="flex flex-col md:flex-row cursor-default md:divide-x md:divide-gray-200">
            {menu === null || menu === void 0
              ? void 0
              : menu.map((item) => {
                  var _a;
                  if (!item) {
                    return null;
                  }
                  return (
                    <div
                      key={item === null || item === void 0 ? void 0 : item.id}
                      className="h-32 md:pl-10 ml-5 md:ml-16 mt-10"
                    >
                      <h2 className="font-semibold text-md">
                        {(0, translations_1.translate)(item, "name")}
                      </h2>
                      <ul className="mt-3 absolute">
                        {(_a = item === null || item === void 0 ? void 0 : item.children) ===
                          null || _a === void 0
                          ? void 0
                          : _a.map((child) => {
                              if (!(0, util_1.notNullable)(child)) {
                                return null;
                              }
                              return (
                                <li key={child.id}>
                                  <link_1.default
                                    href={(0, menus_1.getLinkPath)(
                                      child,
                                      currentChannel.slug,
                                      currentLocale
                                    )}
                                    passHref
                                    legacyBehavior
                                  >
                                    <a
                                      onClick={() => setOpenDropdown(false)}
                                      href="pass"
                                      role="menuitem"
                                      className="ml-3 text-black hover:font-semibold hover:text-black"
                                    >
                                      {(0, translations_1.translate)(child, "name")}
                                    </a>
                                  </link_1.default>
                                </li>
                              );
                            })}
                      </ul>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
exports.MainMenu = MainMenu;
exports.default = MainMenu;

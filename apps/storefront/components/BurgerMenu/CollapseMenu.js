"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseMenu = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = require("react");
const translations_1 = require("@/lib/translations");
const NavigationAnchor_1 = require("../NavigationAnchor");
const BurgerMenu_module_css_1 = __importDefault(require("./BurgerMenu.module.css"));
const SubCollapseMenu_1 = __importDefault(require("./SubCollapseMenu"));
function CollapseMenu({ menuItem }) {
  var _a, _b;
  const [open, setOpen] = (0, react_1.useState)(false);
  const shouldDisplayAnchor = !((_a = menuItem.children) === null || _a === void 0
    ? void 0
    : _a.length);
  return (
    <div className={BurgerMenu_module_css_1.default.collapse}>
      {shouldDisplayAnchor ? (
        <NavigationAnchor_1.NavigationAnchor
          menuItem={menuItem}
          className={BurgerMenu_module_css_1.default["collapse-main"]}
        />
      ) : (
        <>
          <button
            type="button"
            className={(0, clsx_1.default)(BurgerMenu_module_css_1.default["collapse-main"], {
              [BurgerMenu_module_css_1.default["collapse-main--active"]]: open,
            })}
            onClick={() => setOpen(!open)}
          >
            {(0, translations_1.translate)(menuItem, "name")}
          </button>
          {open && (
            <div>
              {(_b = menuItem.children) === null || _b === void 0
                ? void 0
                : _b.map((item) => <SubCollapseMenu_1.default menuItem={item} key={item.id} />)}
            </div>
          )}
        </>
      )}
    </div>
  );
}
exports.CollapseMenu = CollapseMenu;
exports.default = CollapseMenu;

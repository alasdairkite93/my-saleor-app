"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(require("react"));
const api_1 = require("@/saleor/api");
const RegionsProvider_1 = require("../RegionsProvider");
const DropdownMenu_1 = __importDefault(require("./DropdownMenu"));
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css"));
function Menu() {
  var _a;
  const { query } = (0, RegionsProvider_1.useRegions)();
  const { error, data } = (0, api_1.useMainMenuQuery)({
    variables: Object.assign({}, query),
  });
  if (error) {
    console.error("Navbar/Menu component error", error.message);
  }
  const menuItems =
    ((_a = data === null || data === void 0 ? void 0 : data.menu) === null || _a === void 0
      ? void 0
      : _a.items) || [];
  return (
    <nav className={Navbar_module_css_1.default.nav}>
      <ol>
        {menuItems.map((item) => (
          <li key={item === null || item === void 0 ? void 0 : item.id}>
            <DropdownMenu_1.default
              key={item === null || item === void 0 ? void 0 : item.id}
              menuItem={item}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
}
exports.Menu = Menu;
exports.default = Menu;

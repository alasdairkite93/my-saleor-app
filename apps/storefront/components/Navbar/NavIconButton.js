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
const bagIcon_svg_1 = __importDefault(require("./bagIcon.svg")); // in the final version it should be imported from ui-kit package
const closeIocn_svg_1 = __importDefault(require("./closeIocn.svg")); // in the final version it should be imported from ui-kit package
const menuIcon_svg_1 = __importDefault(require("./menuIcon.svg")); // in the final version it should be imported from ui-kit package
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css")); // in the final version it should be imported from ui-kit package
const spyglassIcon_svg_1 = __importDefault(require("./spyglassIcon.svg")); // in the final version it should be imported from ui-kit package
const userIcon_svg_1 = __importDefault(require("./userIcon.svg")); // in the final version it should be imported from ui-kit package
const getIcon = (iconName) => {
  switch (iconName) {
    case "user":
      return <userIcon_svg_1.default />;
    case "bag":
      return <bagIcon_svg_1.default />;
    case "spyglass":
      return <spyglassIcon_svg_1.default />;
    case "menu":
      return <menuIcon_svg_1.default />;
    case "close":
      return <closeIocn_svg_1.default />;
    default:
      return iconName;
  }
};
function NavIconButton(_a) {
  var { icon, counter, isButton = true } = _a,
    rest = __rest(_a, ["icon", "counter", "isButton"]);
  const inner = (
    <>
      {getIcon(icon)}
      {!!counter && (
        <span className={Navbar_module_css_1.default["nav-icon-counter"]} data-testid="cartCounter">
          {counter}
        </span>
      )}
    </>
  );
  if (isButton) {
    return (
      <button type="button" className={Navbar_module_css_1.default["nav-icon-button"]} {...rest}>
        {inner}
      </button>
    );
  }
  return (
    <span className={Navbar_module_css_1.default["nav-icon-button"]} {...rest}>
      {inner}
    </span>
  );
}
exports.default = NavIconButton;

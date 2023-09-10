"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const paths_1 = require("@/lib/paths");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const BurgerMenu_1 = require("../BurgerMenu");
const Menu_1 = require("./Menu");
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css"));
const NavIconButton_1 = __importDefault(require("./NavIconButton"));
const Stamp_1 = __importDefault(require("./Stamp"));
const UserMenu_1 = __importDefault(require("./UserMenu"));
const RegionsProvider_1 = require("@/components/RegionsProvider");
const globals_1 = require("@apollo/client/utilities/globals");
const useUser_1 = require("@/lib/useUser");
function Navbar() {
  var _a;
  const paths = (0, paths_1.usePaths)();
  const router = (0, router_1.useRouter)();
  const [isBurgerOpen, setBurgerOpen] = (0, react_1.useState)(false);
  const [authenticated, setAuthenticated] = (0, react_1.useState)(false);
  const { authenticated: actuallyAuthenticated } = (0, useUser_1.useUser)();
  const { checkout } = (0, CheckoutProvider_1.useCheckout)();
  const { currentLocale, currentChannel } = (0, RegionsProvider_1.useRegions)();
  // Avoid hydration warning by setting authenticated state in useEffect
  (0, react_1.useEffect)(() => {
    setAuthenticated(actuallyAuthenticated);
  }, [actuallyAuthenticated]);
  const saleorApiUrl = process.env.NEXT_PUBLIC_API_URI;
  (0, globals_1.invariant)(saleorApiUrl, "Missing NEXT_PUBLIC_API_URI");
  const domain = new URL(saleorApiUrl).hostname;
  const checkoutParams = checkout
    ? new URLSearchParams({
        checkout: checkout.id,
        locale: currentLocale,
        channel: currentChannel.slug,
        saleorApiUrl,
        // @todo remove `domain`
        // https://github.com/saleor/saleor-dashboard/issues/2387
        // https://github.com/saleor/saleor-app-sdk/issues/87
        domain,
      })
    : new URLSearchParams();
  const externalCheckoutUrl = checkout ? `/checkout/?${checkoutParams.toString()}` : "#";
  (0, react_1.useEffect)(() => {
    // Close side menu after changing the page
    router.events.on("routeChangeStart", () => {
      if (isBurgerOpen) {
        setBurgerOpen(false);
      }
    });
  });
  const counter =
    ((_a = checkout === null || checkout === void 0 ? void 0 : checkout.lines) === null ||
    _a === void 0
      ? void 0
      : _a.reduce((amount, line) => (line ? amount + line.quantity : amount), 0)) || 0;
  return (
    <>
      <div className={(0, clsx_1.default)(Navbar_module_css_1.default.navbar)}>
        <div className={(0, clsx_1.default)(Navbar_module_css_1.default.inner)}>
          <div className="flex-1 h-full hidden xs:flex">
            <Menu_1.Menu />
          </div>
          <div className="flex-1 flex xs:justify-center">
            <link_1.default href={paths.$url()} passHref legacyBehavior>
              <a href="pass" className={Navbar_module_css_1.default.logo}>
                <Stamp_1.default />
              </a>
            </link_1.default>
          </div>
          <div className="flex-1 flex justify-end">
            {!authenticated ? (
              <link_1.default href={paths.account.login.$url()} passHref legacyBehavior>
                <a href="pass" data-testid="userIcon">
                  <NavIconButton_1.default isButton={false} icon="user" aria-hidden="true" />
                </a>
              </link_1.default>
            ) : (
              <UserMenu_1.default />
            )}
            <a href={externalCheckoutUrl} className="ml-2 hidden xs:flex" data-testid="cartIcon">
              <NavIconButton_1.default
                isButton={false}
                icon="bag"
                aria-hidden="true"
                counter={counter}
              />
            </a>
            <link_1.default href={paths.search.$url()} passHref legacyBehavior>
              <a href="pass" className="hidden lg:flex ml-2" data-testid="searchIcon">
                <NavIconButton_1.default isButton={false} icon="spyglass" />
              </a>
            </link_1.default>
            <NavIconButton_1.default
              icon="menu"
              className="ml-2 lg:hidden"
              onClick={() => setBurgerOpen(true)}
            />
          </div>
        </div>
      </div>
      <BurgerMenu_1.BurgerMenu open={isBurgerOpen} onCloseClick={() => setBurgerOpen(false)} />
    </>
  );
}
exports.Navbar = Navbar;
exports.default = Navbar;

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
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const components_1 = require("@/components");
const BaseSeo_1 = require("@/components/seo/BaseSeo");
const paths_1 = require("@/lib/paths");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
function CheckoutPage() {
  var _a;
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const { checkout, loading } = (0, CheckoutProvider_1.useCheckout)();
  (0, react_1.useEffect)(() => {
    var _a;
    // Redirect to cart if theres no checkout data
    if (
      !loading &&
      (!checkout || !((_a = checkout.lines) === null || _a === void 0 ? void 0 : _a.length))
    ) {
      void router.push(paths.$url());
    }
  });
  const isCheckoutLoading = loading || typeof window === "undefined";
  if (isCheckoutLoading) {
    return (
      <>
        <components_1.Spinner />
        <BaseSeo_1.BaseSeo title="Checkout" />
      </>
    );
  }
  if (!checkout || ((_a = checkout.lines) === null || _a === void 0 ? void 0 : _a.length) === 0) {
    return <BaseSeo_1.BaseSeo title="Checkout" />;
  }
  return (
    <>
      <BaseSeo_1.BaseSeo title="Checkout" />

      <main className="w-screen max-w-7xl md:px-8 md:mx-auto overflow-hidden flex md:flex-row flex-col justify-between">
        <div className="md:w-2/3 w-full">
          <components_1.CheckoutForm />
        </div>
        <div className="md:w-1/3 w-full">
          <components_1.CheckoutSidebar checkout={checkout} />
        </div>
      </main>
    </>
  );
}
exports.default = CheckoutPage;
CheckoutPage.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};

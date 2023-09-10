"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const checkout_storefront_1 = require("@saleor/checkout-storefront");
require("@saleor/checkout-storefront/dist/index.css");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const checkoutApiUrl =
  typeof process.env["REACT_APP_CHECKOUT_APP_URL"] === "string"
    ? process.env["REACT_APP_CHECKOUT_APP_URL"] + `/api`
    : "";
const checkoutAppUrl = process.env["REACT_APP_CHECKOUT_APP_URL"];
const allowedSaleorApiRegex = process.env.REACT_APP_ALLOWED_SALEOR_API_REGEX;
function App() {
  (0, ts_invariant_1.default)(checkoutApiUrl, `Missing REACT_APP_CHECKOUT_APP_URL!`);
  (0, ts_invariant_1.default)(checkoutAppUrl, `Missing REACT_APP_CHECKOUT_APP_URL!`);
  (0, ts_invariant_1.default)(allowedSaleorApiRegex, `Missing REACT_APP_ALLOWED_SALEOR_API_REGEX!`);
  return (
    <div className="App">
      <checkout_storefront_1.Root
        env={{ checkoutApiUrl, checkoutAppUrl }}
        saleorApiUrlRegex={new RegExp(allowedSaleorApiRegex)}
      />
    </div>
  );
}
exports.App = App;

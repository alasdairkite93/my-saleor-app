"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutSidebar = void 0;
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const components_1 = require("@/components");
const translations_1 = require("@/components/translations");
const util_1 = require("@/lib/util");
function CheckoutSidebar({ checkout }) {
  var _a;
  const t = (0, react_intl_1.useIntl)();
  const lines =
    ((_a = checkout.lines) === null || _a === void 0 ? void 0 : _a.filter(util_1.notNullable)) ||
    [];
  return (
    <section className="max-w-md w-full flex flex-col ">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:pr-4 md:py-4 md:pl-0 p-4">
        {t.formatMessage(translations_1.messages.orderSummary)}
      </h1>

      <components_1.CheckoutProductList lines={lines} token={checkout.token} />
      <components_1.CartSummary checkout={checkout} />
    </section>
  );
}
exports.CheckoutSidebar = CheckoutSidebar;
exports.default = CheckoutSidebar;

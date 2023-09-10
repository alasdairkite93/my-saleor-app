"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutForm = void 0;
const react_1 = __importDefault(require("react"));
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const BillingAddressSection_1 = require("./BillingAddressSection");
const EmailSection_1 = require("./EmailSection");
const PaymentSection_1 = require("./payments/PaymentSection");
const ShippingAddressSection_1 = require("./ShippingAddressSection");
const ShippingMethodSection_1 = require("./ShippingMethodSection");
const sectionsManager = (checkout) => {
  // Will hide sections which cannot be set yet during the checkout
  // Start with all the sections hidden
  const state = {
    billingAddress: true,
    shippingAddress: true,
    shippingMethod: true,
    payment: true,
  };
  if (!checkout || !checkout.email) {
    return state;
  }
  state.billingAddress = false;
  if (!checkout.billingAddress) {
    return state;
  }
  state.shippingAddress = false;
  if (checkout.isShippingRequired && !checkout.shippingAddress) {
    return state;
  }
  state.shippingMethod = false;
  if (checkout.isShippingRequired && !checkout.shippingMethod) {
    return state;
  }
  state.payment = false;
  return state;
};
function CheckoutForm() {
  const { checkout } = (0, CheckoutProvider_1.useCheckout)();
  if (!checkout) {
    return null;
  }
  const collapsedSections = sectionsManager(checkout);
  return (
    <section className="flex flex-auto flex-col overflow-y-auto px-4 pt-4 space-y-4 pb-4">
      <div className="checkout-section-container">
        <EmailSection_1.EmailSection checkout={checkout} />
      </div>
      <div className="checkout-section-container">
        <BillingAddressSection_1.BillingAddressSection
          active={!collapsedSections.billingAddress}
          checkout={checkout}
        />
      </div>

      {checkout.isShippingRequired && (
        <div className="checkout-section-container">
          <ShippingAddressSection_1.ShippingAddressSection
            active={!collapsedSections.shippingAddress}
            checkout={checkout}
          />
        </div>
      )}
      {checkout.isShippingRequired && (
        <div className="checkout-section-container">
          <ShippingMethodSection_1.ShippingMethodSection
            active={!collapsedSections.shippingMethod}
            checkout={checkout}
          />
        </div>
      )}
      <div className="checkout-section-container">
        <PaymentSection_1.PaymentSection active={!collapsedSections.payment} checkout={checkout} />
      </div>
    </section>
  );
}
exports.CheckoutForm = CheckoutForm;
exports.default = CheckoutForm;

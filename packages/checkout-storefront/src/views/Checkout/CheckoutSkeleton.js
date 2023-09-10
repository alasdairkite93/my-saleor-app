"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutSkeleton = void 0;
const CheckoutForm_1 = require("@/checkout-storefront/sections/CheckoutForm");
const PageHeader_1 = require("@/checkout-storefront/sections/PageHeader");
const Summary_1 = require("@/checkout-storefront/sections/Summary");
const CheckoutSkeleton = () => (
  <div className="app">
    <div className="page">
      <PageHeader_1.PageHeader />
      <div className="page-content">
        <CheckoutForm_1.CheckoutFormSkeleton />
        <div className="page-divider" />
        <Summary_1.SummarySkeleton />
      </div>
    </div>
  </div>
);
exports.CheckoutSkeleton = CheckoutSkeleton;

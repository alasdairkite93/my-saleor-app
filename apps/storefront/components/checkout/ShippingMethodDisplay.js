"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodDisplay = void 0;
const translations_1 = require("@/lib/translations");
const RegionsProvider_1 = require("../RegionsProvider");
function ShippingMethodDisplay({ method }) {
  const { formatPrice } = (0, RegionsProvider_1.useRegions)();
  return (
    <div>
      <div className="mt-6 text-base font-medium text-gray-900">
        {(0, translations_1.translate)(method, "name")}
      </div>
      <div className="mt-1 flex items-center text-sm text-gray-500">
        {method.minimumDeliveryDays || 2}-{method.maximumDeliveryDays || 14} business days
      </div>
      <div className="mt-6 text-sm font-medium text-gray-900">{formatPrice(method.price)}</div>
    </div>
  );
}
exports.ShippingMethodDisplay = ShippingMethodDisplay;
exports.default = ShippingMethodDisplay;

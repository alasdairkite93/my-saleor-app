"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryMethodsSkeleton = void 0;
const components_1 = require("@/checkout-storefront/components");
const react_1 = __importDefault(require("react"));
const DeliveryMethodsSkeleton = () => {
  return (
    <div className="section">
      <components_1.Skeleton variant="title" className="w-1/3" />
      <div className="skeleton-box">
        <components_1.Skeleton className="w-2/3" />
        <components_1.Skeleton className="w-1/3" />
      </div>
      <components_1.Skeleton className="mt-6 w-3/4" />
    </div>
  );
};
exports.DeliveryMethodsSkeleton = DeliveryMethodsSkeleton;

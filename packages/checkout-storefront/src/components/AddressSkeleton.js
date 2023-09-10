"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSkeleton = void 0;
const components_1 = require("@/checkout-storefront/components");
const react_1 = __importDefault(require("react"));
const AddressSkeleton = () => {
  return (
    <div className="skeleton-box mb-2" data-testid="addressSkeleton">
      <components_1.Skeleton className="w-1/3" />
      <components_1.Skeleton className="w-2/3" />
      <components_1.Skeleton className="w-1/2" />
      <components_1.Skeleton className="w-4/5" />
      <components_1.Skeleton className="w-1/5" />
    </div>
  );
};
exports.AddressSkeleton = AddressSkeleton;

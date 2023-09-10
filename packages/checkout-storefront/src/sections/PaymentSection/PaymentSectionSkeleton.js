"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSectionSkeleton = void 0;
const components_1 = require("@/checkout-storefront/components");
const react_1 = __importDefault(require("react"));
const PaymentSectionSkeleton = ({}) => {
  return (
    <div className="section">
      <components_1.Skeleton variant="title" />
      <div className="skeleton-box flex flex-row items-center mt-4">
        <components_1.Skeleton className="w-1/5 mr-4" />
        <components_1.Skeleton className="w-1/5 mr-4" />
        <components_1.Skeleton className="w-1/5" />
      </div>
    </div>
  );
};
exports.PaymentSectionSkeleton = PaymentSectionSkeleton;

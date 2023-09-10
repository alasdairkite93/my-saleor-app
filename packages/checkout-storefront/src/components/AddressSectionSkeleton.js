"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressSectionSkeleton = void 0;
const components_1 = require("@/checkout-storefront/components");
const AddressSkeleton_1 = require("./AddressSkeleton");
const react_1 = __importDefault(require("react"));
const AddressSectionSkeleton = () => (
  <div className="section">
    <components_1.Skeleton variant="title" className="w-1/3" />
    <AddressSkeleton_1.AddressSkeleton />
    <components_1.Skeleton className="mt-4 w-3/4" />
  </div>
);
exports.AddressSectionSkeleton = AddressSectionSkeleton;

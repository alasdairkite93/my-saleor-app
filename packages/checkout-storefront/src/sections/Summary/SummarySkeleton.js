"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummarySkeleton = void 0;
const components_1 = require("@/checkout-storefront/components");
const SummarySkeleton = () => (
  <div className="summary px-6 pt-6">
    <div className="flex flex-col lg:hidden">
      <div className="summary-row mb-6">
        <components_1.Skeleton className="w-1/3" />
        <components_1.Skeleton className="w-1/4" />
      </div>
      <components_1.Skeleton className="h-8 w-5/12 block sm:hidden" />
    </div>
    <div className="hidden sm:block">
      <div className="summary-row items-start h-20 mb-8 static">
        <div className="flex flex-col flex-wrap self-stretch">
          <components_1.Skeleton className="h-18 w-18 mr-4" />
          <components_1.Skeleton className="w-22 mb-4" />
          <components_1.Skeleton className="w-18 mb-4" />
          <components_1.Skeleton className="w-12" />
        </div>
        <div className="flex flex-col items-end justify center">
          <components_1.Skeleton className="w-22 mb-4" />
          <components_1.Skeleton className="w-18 mb-4" />
        </div>
      </div>
      <div className="summary-row items-start h-20 mb-4 static">
        <div className="flex flex-col flex-wrap self-stretch">
          <components_1.Skeleton className="h-18 w-18 mr-4" />
          <components_1.Skeleton className="w-22 mb-4" />
          <components_1.Skeleton className="w-18 mb-4" />
        </div>
        <div className="flex flex-col items-end justify center">
          <components_1.Skeleton className="w-22 mb-4" />
          <components_1.Skeleton className="w-18" />
        </div>
      </div>
      <components_1.Skeleton className="h-6 mb-4" />
      <components_1.Divider className="bg-skeleton" />
      <div className="flex flex-col">
        <div className="summary-row mt-6">
          <components_1.Skeleton className="w-22" />
          <components_1.Skeleton className="w-18" />
        </div>
        <div className="summary-row my-6">
          <components_1.Skeleton className="w-16" />
          <components_1.Skeleton className="w-14" />
        </div>
        <div className="summary-row mb-6">
          <components_1.Skeleton className="w-19" />
          <components_1.Skeleton className="w-10" />
        </div>
        <components_1.Divider className="bg-skeleton" />
        <div className="summary-row my-6">
          <components_1.Skeleton className="w-14" />
          <components_1.Skeleton className="w-12" />
        </div>
      </div>
    </div>
  </div>
);
exports.SummarySkeleton = SummarySkeleton;

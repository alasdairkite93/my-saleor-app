"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderConfirmationSkeleton = void 0;
const PageHeader_1 = require("@/checkout-storefront/sections/PageHeader");
const SummarySkeleton_1 = require("@/checkout-storefront/sections/Summary/SummarySkeleton");
const Skeleton_1 = require("@/checkout-storefront/components/Skeleton");
const OrderConfirmationSkeleton = () => {
  return (
    <div className="page">
      <header>
        <PageHeader_1.PageHeader />
        <Skeleton_1.Skeleton className="title h-4 w-72 mb-6" />
        <Skeleton_1.Skeleton />
        <Skeleton_1.Skeleton className="w-2/3" />
      </header>
      <main className="order-content overflow-hidden">
        <div className="skeleton-box w-1/2">
          <div className="mb-10">
            <Skeleton_1.Skeleton variant="title" />
            <Skeleton_1.Skeleton />
          </div>
          <div className="mb-10">
            <Skeleton_1.Skeleton variant="title" />
            <Skeleton_1.Skeleton className="w-2/3" />
          </div>
          <div className="mb-10">
            <Skeleton_1.Skeleton variant="title" />
            <Skeleton_1.Skeleton className="w-3/4" />
          </div>
          <div className="mb-10">
            <Skeleton_1.Skeleton variant="title" />
            <Skeleton_1.Skeleton className="w-1/2" />
            <Skeleton_1.Skeleton className="w-1/4" />
            <Skeleton_1.Skeleton className="w-2/3" />
          </div>
          <div className="mb-10">
            <Skeleton_1.Skeleton variant="title" />
            <Skeleton_1.Skeleton className="w-1/2" />
            <Skeleton_1.Skeleton className="w-1/4" />
            <Skeleton_1.Skeleton className="w-2/3" />
          </div>
        </div>
        <div className="order-divider" />
        <SummarySkeleton_1.SummarySkeleton />
      </main>
    </div>
  );
};
exports.OrderConfirmationSkeleton = OrderConfirmationSkeleton;

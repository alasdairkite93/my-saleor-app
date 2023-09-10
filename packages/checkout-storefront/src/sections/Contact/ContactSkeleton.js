"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSkeleton = void 0;
const components_1 = require("@/checkout-storefront/components");
const react_1 = __importDefault(require("react"));
const ContactSkeleton = ({}) => {
  return (
    <div className="section">
      <components_1.Skeleton variant="title" />
      <div className="flex flex-row justify-between">
        <components_1.Skeleton className="w-1/2" />
        <components_1.Skeleton className="w-1/8" />
      </div>
    </div>
  );
};
exports.ContactSkeleton = ContactSkeleton;

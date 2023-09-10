"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormSubmit = void 0;
const useSubmit_1 = require("@/checkout-storefront/hooks/useSubmit/useSubmit");
const useFormSubmit = (props) => {
  const handleSubmit = (0, useSubmit_1.useSubmit)(props);
  return handleSubmit;
};
exports.useFormSubmit = useFormSubmit;

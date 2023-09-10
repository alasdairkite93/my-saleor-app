"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddressFormSchema = void 0;
const useErrorMessages_1 = require("@/checkout-storefront/hooks/useErrorMessages");
const react_1 = require("react");
const yup_1 = require("yup");
const useAddressFormSchema = () => {
  const { errorMessages } = (0, useErrorMessages_1.useErrorMessages)();
  return (0, react_1.useMemo)(
    () =>
      (0, yup_1.object)({
        firstName: (0, yup_1.string)().required(errorMessages.required),
        lastName: (0, yup_1.string)().required(errorMessages.required),
        streetAddress1: (0, yup_1.string)().required(errorMessages.required),
        streetAddress2: (0, yup_1.string)(),
        companyName: (0, yup_1.string)(),
        city: (0, yup_1.string)().required(errorMessages.required),
        cityArea: (0, yup_1.string)(),
        countryArea: (0, yup_1.string)(),
        phone: (0, yup_1.string)(),
        postalCode: (0, yup_1.string)().required(errorMessages.required),
        countryCode: (0, yup_1.string)(),
      }),
    [errorMessages]
  );
};
exports.useAddressFormSchema = useAddressFormSchema;

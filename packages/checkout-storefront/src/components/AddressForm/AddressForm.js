"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressForm = void 0;
const react_1 = require("react");
const lodash_es_1 = require("lodash-es");
const Title_1 = require("@/checkout-storefront/components/Title");
const TextInput_1 = require("@/checkout-storefront/components/TextInput");
const inputAttributes_1 = require("@/checkout-storefront/lib/consts/inputAttributes");
const CountrySelect_1 = require("@/checkout-storefront/components/CountrySelect");
const Select_1 = require("@/checkout-storefront/components/Select");
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useAddressFormUtils_1 = require("@/checkout-storefront/components/AddressForm/useAddressFormUtils");
const phoneNumber_1 = require("@/checkout-storefront/lib/utils/phoneNumber");
const AddressForm = ({ title, children, availableCountries, fieldProps = {} }) => {
  const { values, setValues, dirty } = (0, useForm_1.useFormContext)();
  const isValidPhoneNumber = (0, phoneNumber_1.usePhoneNumberValidator)(values.countryCode);
  const previousValues = (0, react_1.useRef)(values);
  const {
    orderedAddressFields,
    getFieldLabel,
    isRequiredField,
    countryAreaChoices,
    allowedFields,
  } = (0, useAddressFormUtils_1.useAddressFormUtils)(values.countryCode);
  const allowedFieldsRef = (0, react_1.useRef)(allowedFields || []);
  const customValidators = {
    phone: isValidPhoneNumber,
  };
  // prevents outdated data to remain in the form when a field is
  // no longer allowed
  (0, react_1.useEffect)(() => {
    const hasFormDataChanged = !(0, utils_1.isMatchingAddressFormData)(
      values,
      previousValues.current
    );
    if (!hasFormDataChanged) {
      return;
    }
    previousValues.current = values;
    const removedFields = (0, lodash_es_1.difference)(allowedFieldsRef.current, allowedFields);
    if (removedFields.length && dirty) {
      const emptyAddressFormData = (0, utils_1.getEmptyAddressFormData)();
      void setValues(
        removedFields.reduce(
          (result, field) =>
            Object.assign(Object.assign({}, result), { [field]: emptyAddressFormData[field] }),
          values
        ),
        true
      );
    }
  }, [allowedFields, dirty, setValues, values]);
  return (
    <>
      <div className="flex flex-row justify-between items-baseline mb-3">
        <Title_1.Title className="flex-1">{title}</Title_1.Title>
        <CountrySelect_1.CountrySelect only={availableCountries} />
      </div>
      <div className="mt-2">
        {orderedAddressFields.map((field) => {
          const isRequired = isRequiredField(field);
          const label = getFieldLabel(field);
          const commonProps = Object.assign(
            {
              key: field,
              name: field,
              label: label,
              autoComplete: inputAttributes_1.autocompleteTags[field],
              optional: isRequired ? undefined : true,
              validate: customValidators[field],
            },
            fieldProps
          );
          if (field === "countryArea" && isRequired) {
            return (
              <Select_1.Select
                {...commonProps}
                classNames={{ container: "mb-4" }}
                placeholder={getFieldLabel("countryArea")}
                options={
                  (countryAreaChoices === null || countryAreaChoices === void 0
                    ? void 0
                    : countryAreaChoices.map(({ verbose, raw }) => ({
                        label: verbose,
                        value: raw,
                      }))) || []
                }
              />
            );
          }
          return (
            <TextInput_1.TextInput
              {...commonProps}
              type={inputAttributes_1.typeTags[field] || "text"}
            />
          );
        })}
        {children}
      </div>
    </>
  );
};
exports.AddressForm = AddressForm;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddressFormUtils = void 0;
const graphql_1 = require("@/checkout-storefront/graphql");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const utils_1 = require("@/checkout-storefront/hooks/useFormattedMessages/utils");
const countries_1 = require("@/checkout-storefront/lib/consts/countries");
const messages_1 = require("@/checkout-storefront/components/AddressForm/messages");
const camelCase_1 = __importDefault(require("lodash-es/camelCase"));
const react_1 = require("react");
const utils_2 = require("@/checkout-storefront/components/AddressForm/utils");
const useAddressFormUtils = (countryCode = countries_1.defaultCountry) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const [{ data }] = (0, graphql_1.useAddressValidationRulesQuery)({
    variables: { countryCode },
  });
  const validationRules = data === null || data === void 0 ? void 0 : data.addressValidationRules;
  const { countryAreaType, postalCodeType, cityType } = validationRules || {};
  const localizedFields = (0, react_1.useMemo)(
    () => ({
      countryArea: countryAreaType,
      city: cityType,
      postalCode: postalCodeType,
    }),
    [cityType, countryAreaType, postalCodeType]
  );
  const isRequiredField = (0, react_1.useCallback)(
    (field) =>
      (0, utils_2.getRequiredAddressFields)(
        validationRules === null || validationRules === void 0
          ? void 0
          : validationRules.requiredFields
      ).includes(field),
    [
      validationRules === null || validationRules === void 0
        ? void 0
        : validationRules.requiredFields,
    ]
  );
  const getMissingFieldsFromAddress = (0, react_1.useCallback)(
    (address) => {
      if (!address) {
        return [];
      }
      return Object.entries(address).reduce((result, [fieldName, fieldValue]) => {
        if (!isRequiredField(fieldName)) {
          return result;
        }
        return !!fieldValue ? result : [...result, fieldName];
      }, []);
    },
    [isRequiredField]
  );
  const hasAllRequiredFields = (0, react_1.useCallback)(
    (address) => !getMissingFieldsFromAddress(address).length,
    [getMissingFieldsFromAddress]
  );
  const getLocalizedFieldLabel = (0, react_1.useCallback)(
    (field, localizedField) => {
      try {
        const translatedLabel = formatMessage(
          messages_1.localizedAddressFieldMessages[(0, camelCase_1.default)(localizedField)]
        );
        return translatedLabel;
      } catch (e) {
        (0, utils_1.warnAboutMissingTranslation)(localizedField);
        return formatMessage(messages_1.addressFieldMessages[(0, camelCase_1.default)(field)]);
      }
    },
    [formatMessage]
  );
  const getFieldLabel = (0, react_1.useCallback)(
    (field) => {
      const localizedField = localizedFields[field];
      const isLocalizedField = !!localizedField && localizedField !== field;
      if (isLocalizedField) {
        return getLocalizedFieldLabel(field, localizedFields[field]);
      }
      return formatMessage(messages_1.addressFieldMessages[field]);
    },
    [formatMessage, getLocalizedFieldLabel, localizedFields]
  );
  const orderedAddressFields = (0, utils_2.getOrderedAddressFields)(
    validationRules === null || validationRules === void 0 ? void 0 : validationRules.allowedFields
  );
  return Object.assign(
    Object.assign(
      {
        orderedAddressFields,
        getFieldLabel,
        isRequiredField,
        hasAllRequiredFields,
        getMissingFieldsFromAddress,
      },
      validationRules
    ),
    {
      allowedFields:
        validationRules === null || validationRules === void 0
          ? void 0
          : validationRules.allowedFields,
    }
  );
};
exports.useAddressFormUtils = useAddressFormUtils;

"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilteredAddressFields =
  exports.getRequiredAddressFields =
  exports.getOrderedAddressFields =
  exports.addressFieldsOrder =
  exports.getAddressValidationRulesVariables =
  exports.isMatchingAddressFormData =
  exports.getByMatchingAddress =
  exports.isMatchingAddressData =
  exports.isMatchingAddress =
  exports.getAddressFormDataFromAddress =
  exports.getAddressInputDataFromAddress =
  exports.getAddressInputData =
  exports.getAllAddressFieldKeys =
  exports.getEmptyAddress =
  exports.getEmptyAddressFormData =
    void 0;
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const lodash_es_1 = require("lodash-es");
const getEmptyAddressFormData = () => ({
  firstName: "",
  lastName: "",
  streetAddress1: "",
  streetAddress2: "",
  companyName: "",
  city: "",
  cityArea: "",
  countryArea: "",
  postalCode: "",
  phone: "",
  countryCode: (0, locale_1.getParsedLocaleData)((0, url_1.getQueryParams)().locale).countryCode,
});
exports.getEmptyAddressFormData = getEmptyAddressFormData;
const getEmptyAddress = () => {
  const getCountryName = (0, locale_1.createGetCountryNames)();
  const _a = (0, exports.getEmptyAddressFormData)(),
    { countryCode } = _a,
    emptyAddressRest = __rest(_a, ["countryCode"]);
  return Object.assign(Object.assign({}, emptyAddressRest), {
    id: "",
    country: {
      code: countryCode,
      country: getCountryName(countryCode),
    },
  });
};
exports.getEmptyAddress = getEmptyAddress;
const getAllAddressFieldKeys = () => Object.keys((0, exports.getEmptyAddressFormData)());
exports.getAllAddressFieldKeys = getAllAddressFieldKeys;
const getAddressInputData = (_a) => {
  var { countryCode, country } = _a,
    rest = __rest(_a, ["countryCode", "country"]);
  return Object.assign(
    Object.assign({}, (0, lodash_es_1.pick)(rest, (0, exports.getAllAddressFieldKeys)())),
    { country: countryCode || (country === null || country === void 0 ? void 0 : country.code) }
  );
};
exports.getAddressInputData = getAddressInputData;
const getAddressInputDataFromAddress = (address) => {
  if (!address) {
    return {};
  }
  const { country, phone } = address,
    rest = __rest(address, ["country", "phone"]);
  return Object.assign(
    Object.assign({}, (0, lodash_es_1.pick)(rest, (0, exports.getAllAddressFieldKeys)())),
    {
      country: country === null || country === void 0 ? void 0 : country.code,
      // cause in api phone can be null
      phone: phone || "",
    }
  );
};
exports.getAddressInputDataFromAddress = getAddressInputDataFromAddress;
const getAddressFormDataFromAddress = (address) => {
  if (!address) {
    return Object.assign(Object.assign({}, (0, exports.getEmptyAddressFormData)()), {
      countryCode: (0, locale_1.getParsedLocaleData)((0, url_1.getQueryParams)().locale)
        .countryCode,
    });
  }
  const { country } = address,
    rest = __rest(address, ["country"]);
  const parsedAddressBase = (0, lodash_es_1.reduce)(
    rest,
    (result, val, key) => Object.assign(Object.assign({}, result), { [key]: val || "" }),
    {}
  );
  return (0, lodash_es_1.pick)(
    Object.assign(Object.assign({}, parsedAddressBase), { countryCode: country.code }),
    (0, exports.getAllAddressFieldKeys)()
  );
};
exports.getAddressFormDataFromAddress = getAddressFormDataFromAddress;
// checks for address related data and id
const isMatchingAddress = (address, addressToMatch) => {
  const isTheSameAddressById =
    typeof (address === null || address === void 0 ? void 0 : address.id) === "string" &&
    typeof (addressToMatch === null || addressToMatch === void 0 ? void 0 : addressToMatch.id) ===
      "string" &&
    address.id === addressToMatch.id;
  if (isTheSameAddressById) {
    return true;
  }
  return (0, exports.isMatchingAddressData)(address, addressToMatch);
};
exports.isMatchingAddress = isMatchingAddress;
// checks only for address related data
const isMatchingAddressData = (address, addressToMatch) =>
  (0, lodash_es_1.isEqual)(
    (0, lodash_es_1.pick)(address, (0, exports.getAllAddressFieldKeys)()),
    (0, lodash_es_1.pick)(addressToMatch, (0, exports.getAllAddressFieldKeys)())
  );
exports.isMatchingAddressData = isMatchingAddressData;
const getByMatchingAddress = (addressToMatch) => (address) =>
  (0, exports.isMatchingAddress)(address, addressToMatch);
exports.getByMatchingAddress = getByMatchingAddress;
const isMatchingAddressFormData = (address, addressToMatch) => {
  const propsToOmit = ["id", "autoSave", "__typename"];
  return (0, lodash_es_1.isEqual)(
    (0, lodash_es_1.omit)(address, propsToOmit),
    (0, lodash_es_1.omit)(addressToMatch, propsToOmit)
  );
};
exports.isMatchingAddressFormData = isMatchingAddressFormData;
const getAddressValidationRulesVariables = ({ autoSave } = { autoSave: false }) =>
  autoSave
    ? {
        checkRequiredFields: false,
      }
    : {};
exports.getAddressValidationRulesVariables = getAddressValidationRulesVariables;
exports.addressFieldsOrder = [
  "firstName",
  "lastName",
  "companyName",
  "streetAddress1",
  "streetAddress2",
  "city",
  "countryCode",
  "postalCode",
  "cityArea",
  "countryArea",
  "phone",
];
// api doesn't order the fields but we want to
const getOrderedAddressFields = (addressFields = []) => {
  const filteredAddressFields = (0, exports.getFilteredAddressFields)(addressFields);
  return exports.addressFieldsOrder.filter((orderedAddressField) =>
    filteredAddressFields.includes(orderedAddressField)
  );
};
exports.getOrderedAddressFields = getOrderedAddressFields;
const getRequiredAddressFields = (requiredFields = []) => [
  ...requiredFields,
  "firstName",
  "lastName",
];
exports.getRequiredAddressFields = getRequiredAddressFields;
// api doesn't approve of "name" so we replace it with "firstName"
// and "lastName"
const getFilteredAddressFields = (addressFields) => {
  const filteredAddressFields = addressFields.filter((addressField) => addressField !== "name");
  return (0, lodash_es_1.uniq)([...filteredAddressFields, "firstName", "lastName", "phone"]);
};
exports.getFilteredAddressFields = getFilteredAddressFields;

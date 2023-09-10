"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrySelect = void 0;
const Select_1 = require("@/checkout-storefront/components/Select");
const countries_1 = require("@/checkout-storefront/lib/consts/countries");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const react_1 = __importDefault(require("react"));
const CountrySelect = ({ only = [] }) => {
  const getCountryName = (0, locale_1.createGetCountryNames)();
  const countriesToMap = only.length ? only : countries_1.countries;
  const countryOptions = countriesToMap.map((countryCode) => ({
    value: countryCode,
    label: getCountryName(countryCode),
  }));
  return (
    <Select_1.Select
      name="countryCode"
      classNames={{ container: "flex-1 inline-block !w-auto" }}
      options={countryOptions}
      autoComplete="countryCode"
    />
  );
};
exports.CountrySelect = CountrySelect;

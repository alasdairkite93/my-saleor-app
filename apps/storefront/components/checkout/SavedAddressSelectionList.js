"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedAddressSelectionList = void 0;
const clsx_1 = __importDefault(require("clsx"));
const react_1 = __importDefault(require("react"));
const components_1 = require("@/components");
const api_1 = require("@/saleor/api");
function SavedAddressSelectionList({ updateAddressMutation }) {
  var _a;
  const { loading, error, data } = (0, api_1.useCurrentUserAddressesQuery)();
  const [selectedSavedAddress, setSelectedSavedAddress] = react_1.default.useState();
  if (loading) {
    return <components_1.Spinner />;
  }
  if (error) {
    return <p>Error :{error.message}</p>;
  }
  const addresses =
    ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0
      ? void 0
      : _a.addresses) || [];
  if (addresses.length === 0) return null;
  const onSelectSavedAddress = (address) =>
    __awaiter(this, void 0, void 0, function* () {
      setSelectedSavedAddress(address);
      // @todo handle errors
      const _errors = yield updateAddressMutation({
        firstName: address === null || address === void 0 ? void 0 : address.firstName,
        lastName: address === null || address === void 0 ? void 0 : address.lastName,
        phone: (address === null || address === void 0 ? void 0 : address.phone) || "",
        country: "PL",
        streetAddress1: address.streetAddress1,
        city: address.city,
        postalCode: address.postalCode,
      });
    });
  return (
    <div className="grid grid-cols-2 mb-2">
      {addresses.map((address) => (
        <div
          role="radio"
          aria-checked={
            (address === null || address === void 0 ? void 0 : address.id) ===
            (selectedSavedAddress === null || selectedSavedAddress === void 0
              ? void 0
              : selectedSavedAddress.id)
          }
          tabIndex={-1}
          onClick={() => address && onSelectSavedAddress(address)}
          onKeyDown={(e) => {
            if (address && e.key === "Enter") {
              return onSelectSavedAddress(address);
            }
          }}
          className={(0, clsx_1.default)(
            "border-2 p-3 mr-2 rounded-md",
            (address === null || address === void 0 ? void 0 : address.id) ===
              (selectedSavedAddress === null || selectedSavedAddress === void 0
                ? void 0
                : selectedSavedAddress.id) && "border-blue-500"
          )}
          key={address === null || address === void 0 ? void 0 : address.id}
        >
          <p>{`${address === null || address === void 0 ? void 0 : address.firstName} ${
            address === null || address === void 0 ? void 0 : address.lastName
          }`}</p>
          <p className="text-gray-600 text-sm">
            {address === null || address === void 0 ? void 0 : address.streetAddress1}
          </p>
          <p className="text-gray-600 text-sm">
            {`${address === null || address === void 0 ? void 0 : address.postalCode} ${
              address === null || address === void 0 ? void 0 : address.city
            }, ${address === null || address === void 0 ? void 0 : address.country.country}`}
          </p>
        </div>
      ))}
    </div>
  );
}
exports.SavedAddressSelectionList = SavedAddressSelectionList;
exports.default = SavedAddressSelectionList;

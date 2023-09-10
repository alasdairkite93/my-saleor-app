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
exports.AddressForm = void 0;
const react_1 = __importDefault(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_intl_1 = require("react-intl");
const translations_1 = require("../translations");
function AddressForm({ existingAddressData, toggleEdit, updateAddressMutation }) {
  const t = (0, react_intl_1.useIntl)();
  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    formState: { errors: errorsAddress },
    setError: setErrorAddress,
  } = (0, react_hook_form_1.useForm)({
    defaultValues: {
      firstName:
        (existingAddressData === null || existingAddressData === void 0
          ? void 0
          : existingAddressData.firstName) || "",
      lastName:
        (existingAddressData === null || existingAddressData === void 0
          ? void 0
          : existingAddressData.lastName) || "",
      phone:
        (existingAddressData === null || existingAddressData === void 0
          ? void 0
          : existingAddressData.phone) || "",
      country: "PL",
      streetAddress1:
        (existingAddressData === null || existingAddressData === void 0
          ? void 0
          : existingAddressData.streetAddress1) || "",
      city:
        (existingAddressData === null || existingAddressData === void 0
          ? void 0
          : existingAddressData.city) || "",
      postalCode:
        (existingAddressData === null || existingAddressData === void 0
          ? void 0
          : existingAddressData.postalCode) || "",
    },
  });
  const onAddressFormSubmit = handleSubmitAddress((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      const errors = yield updateAddressMutation(formData);
      // Assign errors to the form fields
      if (errors.length > 0) {
        errors.forEach((e) =>
          setErrorAddress(e.field, {
            message: e.message || "",
          })
        );
        return;
      }
      // Address updated, we can exit the edit mode
      toggleEdit();
    })
  );
  return (
    <form method="post" onSubmit={onAddressFormSubmit}>
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-full">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            {t.formatMessage(translations_1.messages.phoneField)}
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="phone"
              className="w-full border-gray-300 rounded-md shadow-sm text-base"
              spellCheck={false}
              {...registerAddress("phone", {
                required: true,
                pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
              })}
            />
            {!!errorsAddress.phone && <p>{errorsAddress.phone.message}</p>}
          </div>
        </div>

        <div className="col-span-full sm:col-span-6">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            {t.formatMessage(translations_1.messages.firstNameField)}
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="province"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              spellCheck={false}
              {...registerAddress("firstName", {
                required: true,
              })}
            />
            {!!errorsAddress.firstName && <p>{errorsAddress.firstName.message}</p>}
          </div>
        </div>

        <div className="col-span-full sm:col-span-6">
          <label htmlFor="province" className="block text-sm font-medium text-gray-700">
            {t.formatMessage(translations_1.messages.lastNameField)}
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="lastName"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              spellCheck={false}
              {...registerAddress("lastName", {
                required: true,
              })}
            />
            {!!errorsAddress.lastName && <p>{errorsAddress.lastName.message}</p>}
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            {t.formatMessage(translations_1.messages.addressField)}
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="streetAddress1"
              className="w-full border-gray-300 rounded-md shadow-sm text-base"
              spellCheck={false}
              {...registerAddress("streetAddress1", {
                required: true,
              })}
            />
            {!!errorsAddress.streetAddress1 && <p>{errorsAddress.streetAddress1.message}</p>}
          </div>
        </div>

        <div className="col-span-full sm:col-span-6">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            {t.formatMessage(translations_1.messages.cityField)}
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="city"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              spellCheck={false}
              {...registerAddress("city", { required: true })}
            />
            {!!errorsAddress.city && <p>{errorsAddress.city.message}</p>}
          </div>
        </div>

        {/* <div className="col-span-full sm:col-span-4">
        <label
          htmlFor="province"
          className="block text-sm font-medium text-gray-700"
        >
          Province
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="province"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            spellCheck={false}
          />
        </div>
      </div> */}

        <div className="col-span-full sm:col-span-6">
          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
            {t.formatMessage(translations_1.messages.postalCodeField)}
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              spellCheck={false}
              {...registerAddress("postalCode", {
                required: true,
              })}
            />
            {!!errorsAddress.postalCode && <p>{errorsAddress.postalCode.message}</p>}
          </div>
        </div>

        <div className="col-span-full">
          <button type="button" className="btn-checkout-section" onClick={onAddressFormSubmit}>
            {t.formatMessage(translations_1.messages.saveButton)}
          </button>
        </div>
      </div>
    </form>
  );
}
exports.AddressForm = AddressForm;

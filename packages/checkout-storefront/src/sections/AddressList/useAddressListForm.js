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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAddressListForm = void 0;
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const useAddressAvailability_1 = require("@/checkout-storefront/hooks/useAddressAvailability");
const useDebouncedSubmit_1 = require("@/checkout-storefront/hooks/useDebouncedSubmit");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
const useAddressListForm = ({
  onSubmit,
  checkoutAddress,
  defaultAddress,
  checkAddressAvailability = false,
}) => {
  var _a;
  const { user } = (0, useUser_1.useUser)();
  const { isAvailable } = (0, useAddressAvailability_1.useAddressAvailability)(
    !checkAddressAvailability
  );
  // sdk has outdated types
  const addresses = (user === null || user === void 0 ? void 0 : user.addresses) || [];
  const previousCheckoutAddress = (0, react_1.useRef)(null);
  const form = (0, useForm_1.useForm)({
    initialDirty: true,
    initialValues: {
      addressList: addresses,
      selectedAddressId:
        (_a = addresses.find((0, utils_1.getByMatchingAddress)(checkoutAddress))) === null ||
        _a === void 0
          ? void 0
          : _a.id,
    },
    onSubmit,
  });
  const { values, setValues, setFieldValue, handleSubmit } = form;
  const debouncedSubmit = (0, useDebouncedSubmit_1.useDebouncedSubmit)(handleSubmit);
  const { addressList, selectedAddressId } = values;
  const selectedAddress = addressList.find((0, common_1.getById)(selectedAddressId));
  (0, react_1.useEffect)(() => {
    debouncedSubmit();
  }, [debouncedSubmit, selectedAddressId]);
  const addressListUpdate = (selectedAddress, addressList) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (!selectedAddress) {
        return;
      }
      yield setValues({
        addressList,
        selectedAddressId: selectedAddress.id,
      });
      handleSubmit();
    });
  const onAddressCreateSuccess = (address) =>
    __awaiter(void 0, void 0, void 0, function* () {
      return addressListUpdate(address, (0, lodash_es_1.compact)([...addressList, address]));
    });
  const onAddressUpdateSuccess = (address) =>
    __awaiter(void 0, void 0, void 0, function* () {
      return addressListUpdate(
        address,
        addressList.map((existingAddress) =>
          existingAddress.id === (address === null || address === void 0 ? void 0 : address.id)
            ? address
            : existingAddress
        )
      );
    });
  const onAddressDeleteSuccess = (id) =>
    addressListUpdate(addressList[0], addressList.filter((0, common_1.getByUnmatchingId)(id)));
  const handleDefaultAddressSet = (0, react_1.useCallback)(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        const isSelectedAddressSameAsCheckout =
          !!selectedAddress && (0, utils_1.isMatchingAddress)(checkoutAddress, selectedAddress);
        const hasCheckoutAddressChanged = !(0, utils_1.isMatchingAddress)(
          checkoutAddress,
          previousCheckoutAddress.current
        );
        // currently selected address is the same as checkout or
        // address hasn't changed at all -> do nothing
        if (isSelectedAddressSameAsCheckout || (checkoutAddress && !hasCheckoutAddressChanged)) {
          return;
        }
        const matchingDefaultAddressInAddresses = addressList.find(
          (0, utils_1.getByMatchingAddress)(defaultAddress)
        );
        // if not, prefer user default address
        if (defaultAddress && matchingDefaultAddressInAddresses) {
          previousCheckoutAddress.current = defaultAddress;
          void setFieldValue("selectedAddressId", matchingDefaultAddressInAddresses.id);
          return;
        }
        const firstAvailableAddress = addressList.find(isAvailable);
        // otherwise just choose any available
        if (firstAvailableAddress) {
          previousCheckoutAddress.current = firstAvailableAddress;
          void setFieldValue("selectedAddressId", firstAvailableAddress.id);
        }
        // otherwise it gets way overcomplicated to get this to run only when needed
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }),
    [
      defaultAddress === null || defaultAddress === void 0 ? void 0 : defaultAddress.id,
      checkoutAddress === null || checkoutAddress === void 0 ? void 0 : checkoutAddress.id,
    ]
  );
  (0, react_1.useEffect)(() => {
    void handleDefaultAddressSet();
  }, [handleDefaultAddressSet]);
  return {
    form,
    userAddressActions: {
      onAddressCreateSuccess,
      onAddressUpdateSuccess,
      onAddressDeleteSuccess,
    },
  };
};
exports.useAddressListForm = useAddressListForm;

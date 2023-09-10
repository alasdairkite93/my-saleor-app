"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBillingAddressSection = void 0;
const useCheckoutFormValidationTrigger_1 = require("@/checkout-storefront/hooks/useCheckoutFormValidationTrigger");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const AddressSectionSkeleton_1 = require("@/checkout-storefront/components/AddressSectionSkeleton");
const UserAddressSectionContainer_1 = require("@/checkout-storefront/sections/UserAddressSectionContainer");
const useUserBillingAddressForm_1 = require("@/checkout-storefront/sections/UserBillingAddressSection/useUserBillingAddressForm");
const AddressCreateForm_1 = require("@/checkout-storefront/sections/AddressCreateForm/AddressCreateForm");
const AddressEditForm_1 = require("@/checkout-storefront/sections/AddressEditForm/AddressEditForm");
const AddressList_1 = require("@/checkout-storefront/sections/AddressList/AddressList");
const react_1 = __importStar(require("react"));
const components_1 = require("@/checkout-storefront/components");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const useBillingSameAsShippingForm_1 = require("@/checkout-storefront/sections/GuestBillingAddressSection/useBillingSameAsShippingForm");
const messages_1 = require("@/checkout-storefront/sections/UserBillingAddressSection/messages");
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const UserBillingAddressSection = ({}) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const {
    checkout: { isShippingRequired },
  } = (0, useCheckout_1.useCheckout)();
  const {
    form,
    userAddressActions: { onAddressCreateSuccess, onAddressDeleteSuccess, onAddressUpdateSuccess },
  } = (0, useUserBillingAddressForm_1.useUserBillingAddressForm)();
  const {
    resetForm,
    values: { addressList },
  } = form;
  const handleSetBillingSameAsShipping = (address) => {
    const matchingAddress = addressList.find((0, utils_1.getByMatchingAddress)(address));
    if (!address || !matchingAddress) {
      return;
    }
    resetForm({ values: { selectedAddressId: matchingAddress.id, addressList } });
  };
  const billingSameAsShippingForm = (0,
  useBillingSameAsShippingForm_1.useBillingSameAsShippingForm)({
    autoSave: false,
    onSetBillingSameAsShipping: handleSetBillingSameAsShipping,
  });
  (0, useCheckoutFormValidationTrigger_1.useCheckoutFormValidationTrigger)({
    scope: "billingAddress",
    form: billingSameAsShippingForm,
  });
  const {
    values: { billingSameAsShipping },
  } = billingSameAsShippingForm;
  return (
    <react_1.Suspense fallback={<AddressSectionSkeleton_1.AddressSectionSkeleton />}>
      {isShippingRequired && (
        <FormProvider_1.FormProvider form={billingSameAsShippingForm}>
          <components_1.Checkbox
            classNames={{ container: "!mb-0" }}
            name="billingSameAsShipping"
            label={formatMessage(messages_1.billingMessages.useShippingAsBilling)}
            data-testid={"useShippingAsBillingCheckbox"}
          />
        </FormProvider_1.FormProvider>
      )}
      {!billingSameAsShipping && (
        <UserAddressSectionContainer_1.UserAddressSectionContainer>
          {({
            displayAddressCreate,
            displayAddressEdit,
            displayAddressList,
            setDisplayAddressCreate,
            setDisplayAddressEdit,
            editedAddressId,
          }) => (
            <>
              {displayAddressCreate && (
                <AddressCreateForm_1.AddressCreateForm
                  onClose={() => setDisplayAddressCreate(false)}
                  onSuccess={onAddressCreateSuccess}
                />
              )}

              {displayAddressEdit && (
                <AddressEditForm_1.AddressEditForm
                  title={formatMessage(messages_1.billingMessages.billingAddress)}
                  onClose={() => setDisplayAddressEdit()}
                  address={form.values.addressList.find((0, common_1.getById)(editedAddressId))}
                  onUpdate={onAddressUpdateSuccess}
                  onDelete={onAddressDeleteSuccess}
                />
              )}

              {displayAddressList && (
                <AddressList_1.AddressList
                  onEditChange={setDisplayAddressEdit}
                  onAddAddressClick={() => setDisplayAddressCreate(true)}
                  title={formatMessage(messages_1.billingMessages.billingAddress)}
                  form={form}
                />
              )}
            </>
          )}
        </UserAddressSectionContainer_1.UserAddressSectionContainer>
      )}
    </react_1.Suspense>
  );
};
exports.UserBillingAddressSection = UserBillingAddressSection;

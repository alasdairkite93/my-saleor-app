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
exports.UserShippingAddressSection = void 0;
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const common_1 = require("@/checkout-storefront/lib/utils/common");
const AddressSectionSkeleton_1 = require("@/checkout-storefront/components/AddressSectionSkeleton");
const messages_1 = require("@/checkout-storefront/sections/UserShippingAddressSection/messages");
const UserAddressSectionContainer_1 = require("@/checkout-storefront/sections/UserAddressSectionContainer");
const useUserShippingAddressForm_1 = require("@/checkout-storefront/sections/UserShippingAddressSection/useUserShippingAddressForm");
const AddressCreateForm_1 = require("@/checkout-storefront/sections/AddressCreateForm");
const AddressEditForm_1 = require("@/checkout-storefront/sections/AddressEditForm");
const AddressList_1 = require("@/checkout-storefront/sections/AddressList/AddressList");
const react_1 = __importStar(require("react"));
const useCheckoutFormValidationTrigger_1 = require("@/checkout-storefront/hooks/useCheckoutFormValidationTrigger");
const UserShippingAddressSection = ({}) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const {
    form,
    userAddressActions: { onAddressCreateSuccess, onAddressDeleteSuccess, onAddressUpdateSuccess },
  } = (0, useUserShippingAddressForm_1.useUserShippingAddressForm)();
  (0, useCheckoutFormValidationTrigger_1.useCheckoutFormValidationTrigger)({
    scope: "shippingAddress",
    form: form,
  });
  return (
    <react_1.Suspense fallback={<AddressSectionSkeleton_1.AddressSectionSkeleton />}>
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
                title={formatMessage(messages_1.shippingMessages.shippingAddress)}
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
                title={formatMessage(messages_1.shippingMessages.shippingAddress)}
                checkAddressAvailability={true}
                form={form}
              />
            )}
          </>
        )}
      </UserAddressSectionContainer_1.UserAddressSectionContainer>
    </react_1.Suspense>
  );
};
exports.UserShippingAddressSection = UserShippingAddressSection;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateForm = void 0;
const react_1 = __importDefault(require("react"));
const AddressForm_1 = require("@/checkout-storefront/components/AddressForm");
const graphql_1 = require("@/checkout-storefront/graphql");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const ManualSaveAddressForm_1 = require("@/checkout-storefront/components/ManualSaveAddressForm");
const messages_1 = require("@/checkout-storefront/sections/AddressCreateForm/messages");
const useAddressFormSchema_1 = require("@/checkout-storefront/components/AddressForm/useAddressFormSchema");
const AddressCreateForm = ({ onSuccess, onClose }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const validationSchema = (0, useAddressFormSchema_1.useAddressFormSchema)();
  const [, userAddressCreate] = (0, graphql_1.useUserAddressCreateMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    scope: "userAddressCreate",
    onSubmit: userAddressCreate,
    parse: (addressFormData) => ({ address: (0, utils_1.getAddressInputData)(addressFormData) }),
    onSuccess: ({ result }) => {
      var _a, _b;
      onSuccess(
        (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.accountAddressCreate) ===
          null || _b === void 0
          ? void 0
          : _b.address
      );
      onClose();
    },
  });
  const form = (0, useForm_1.useForm)({
    validationSchema,
    initialValues: (0, utils_1.getEmptyAddressFormData)(),
    onSubmit,
  });
  const { handleSubmit, isSubmitting } = form;
  return (
    <FormProvider_1.FormProvider form={form}>
      <AddressForm_1.AddressForm
        title={formatMessage(messages_1.addressCreateMessages.addressCreate)}
      >
        <ManualSaveAddressForm_1.AddressFormActions
          onSubmit={handleSubmit}
          loading={isSubmitting}
          onCancel={onClose}
        />
      </AddressForm_1.AddressForm>
    </FormProvider_1.FormProvider>
  );
};
exports.AddressCreateForm = AddressCreateForm;

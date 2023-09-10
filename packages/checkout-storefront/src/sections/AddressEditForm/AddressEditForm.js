"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressEditForm = void 0;
const react_1 = __importDefault(require("react"));
const AddressForm_1 = require("@/checkout-storefront/components/AddressForm");
const graphql_1 = require("@/checkout-storefront/graphql");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const utils_1 = require("@/checkout-storefront/components/AddressForm/utils");
const useForm_1 = require("@/checkout-storefront/hooks/useForm");
const useFormSubmit_1 = require("@/checkout-storefront/hooks/useFormSubmit");
const ManualSaveAddressForm_1 = require("@/checkout-storefront/components/ManualSaveAddressForm");
const messages_1 = require("@/checkout-storefront/sections/AddressEditForm/messages");
const useAddressFormSchema_1 = require("@/checkout-storefront/components/AddressForm/useAddressFormSchema");
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const useSubmit_1 = require("@/checkout-storefront/hooks/useSubmit/useSubmit");
const AddressEditForm = ({ onUpdate, onClose, onDelete, address }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const validationSchema = (0, useAddressFormSchema_1.useAddressFormSchema)();
  const [{ fetching: updating }, userAddressUpdate] = (0, graphql_1.useUserAddressUpdateMutation)();
  const [{ fetching: deleting }, userAddressDelete] = (0, graphql_1.useUserAddressDeleteMutation)();
  const onSubmit = (0, useFormSubmit_1.useFormSubmit)({
    scope: "userAddressUpdate",
    onSubmit: userAddressUpdate,
    parse: (formData) => ({
      id: address.id,
      address: Object.assign({}, (0, utils_1.getAddressInputData)(formData)),
    }),
    onSuccess: ({ result }) => {
      var _a, _b;
      (0, ts_invariant_1.default)(
        (_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.accountAddressUpdate) ===
          null || _b === void 0
          ? void 0
          : _b.address,
        "Api didn't return address in AccountAddressUpdate mutation. This is most likely a bug in core."
      );
      onUpdate(result.data.accountAddressUpdate.address);
      onClose();
    },
  });
  const onAddressDelete = (0, useSubmit_1.useSubmit)({
    scope: "userAddressDelete",
    onSubmit: userAddressDelete,
    parse: ({ id }) => ({ id }),
    onSuccess: ({ formData: { id } }) => {
      onDelete(id);
      onClose();
    },
  });
  const form = (0, useForm_1.useForm)({
    validationSchema,
    initialValues: (0, utils_1.getAddressFormDataFromAddress)(address),
    onSubmit,
  });
  const { handleSubmit } = form;
  return (
    <FormProvider_1.FormProvider form={form}>
      <AddressForm_1.AddressForm title={formatMessage(messages_1.addressEditMessages.editAddress)}>
        <ManualSaveAddressForm_1.AddressFormActions
          onSubmit={handleSubmit}
          loading={updating || deleting}
          onCancel={onClose}
          onDelete={() => onAddressDelete({ id: address.id })}
        />
      </AddressForm_1.AddressForm>
    </FormProvider_1.FormProvider>
  );
};
exports.AddressEditForm = AddressEditForm;

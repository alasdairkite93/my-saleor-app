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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressList = void 0;
const react_1 = __importDefault(require("react"));
const AddressSelectBox_1 = require("../../components/AddressSelectBox");
const SelectBoxGroup_1 = require("@/checkout-storefront/components/SelectBoxGroup");
const useAddressAvailability_1 = require("@/checkout-storefront/hooks/useAddressAvailability");
const messages_1 = require("./messages");
const ui_kit_1 = require("@saleor/ui-kit");
const Button_1 = require("@/checkout-storefront/components/Button");
const Title_1 = require("@/checkout-storefront/components/Title");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const lodash_es_1 = require("lodash-es");
const AddressList = ({
  onEditChange,
  checkAddressAvailability = false,
  title,
  onAddAddressClick,
  form,
}) => {
  const {
    values: { addressList },
  } = form;
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { isAvailable } = (0, useAddressAvailability_1.useAddressAvailability)(
    !checkAddressAvailability
  );
  return (
    <FormProvider_1.FormProvider form={form}>
      <div className="flex flex-col">
        <Title_1.Title>{title}</Title_1.Title>
        {addressList.length < 1 && (
          <ui_kit_1.Text className="mb-3">
            {formatMessage(messages_1.userAddressMessages.noAddresses)}
          </ui_kit_1.Text>
        )}
        <Button_1.Button
          variant="secondary"
          ariaLabel={formatMessage(messages_1.userAddressLabels.addAddress)}
          onClick={onAddAddressClick}
          label={formatMessage(messages_1.userAddressMessages.addAddress)}
          className="mb-4 w-full"
        />
        <SelectBoxGroup_1.SelectBoxGroup
          label={formatMessage(messages_1.userAddressLabels.userAddresses)}
        >
          {addressList.map((_a) => {
            var { id } = _a,
              rest = __rest(_a, ["id"]);
            const identifier = `${(0, lodash_es_1.camelCase)(title)}-${id}}`;
            return (
              <AddressSelectBox_1.AddressSelectBox
                name="selectedAddressId"
                id={identifier}
                key={identifier}
                value={id}
                address={Object.assign({}, rest)}
                onEdit={() => onEditChange(id)}
                unavailable={!isAvailable(rest)}
              />
            );
          })}
        </SelectBoxGroup_1.SelectBoxGroup>
      </div>
    </FormProvider_1.FormProvider>
  );
};
exports.AddressList = AddressList;

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
exports.AddressSelectBox = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const react_1 = __importDefault(require("react"));
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const SelectBox_1 = require("@/checkout-storefront/components/SelectBox");
const Button_1 = require("@/checkout-storefront/components/Button");
const Address_1 = require("@/checkout-storefront/components/Address");
const messages_1 = require("./messages");
const AddressSelectBox = (_a) => {
  var { address, onEdit, unavailable } = _a,
    rest = __rest(_a, ["address", "onEdit", "unavailable"]);
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const textProps = unavailable
    ? {
        color: "secondary",
      }
    : {};
  return (
    <SelectBox_1.SelectBox {...rest} disabled={unavailable}>
      <div className="w-full flex flex-row justify-between">
        <Address_1.Address address={address} {...textProps}>
          {unavailable && (
            <ui_kit_1.Text size="xs" className="my-1">
              {formatMessage(messages_1.addressSelectBoxMessages.cantShipToAddress)}
            </ui_kit_1.Text>
          )}
        </Address_1.Address>
        <div>
          <Button_1.Button
            variant="tertiary"
            onClick={(event) => {
              event.stopPropagation();
              onEdit();
            }}
            ariaLabel={formatMessage(messages_1.addressSelectBoxMessages.editAddress)}
            className="mr-2"
            label={formatMessage(messages_1.addressSelectBoxLabels.editAddress)}
          />
        </div>
      </div>
    </SelectBox_1.SelectBox>
  );
};
exports.AddressSelectBox = AddressSelectBox;

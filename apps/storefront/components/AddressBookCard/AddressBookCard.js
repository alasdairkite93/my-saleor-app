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
exports.AddressBookCard = void 0;
const react_intl_1 = require("react-intl");
const Button_1 = require("@/components/Button");
const AddressDisplay_1 = require("@/components/checkout/AddressDisplay");
const api_1 = require("@/saleor/api");
const translations_1 = require("../translations");
function AddressBookCard({ address, onRefreshBook }) {
  const t = (0, react_intl_1.useIntl)();
  const [setAddressDefaultMutation] = (0, api_1.useSetAddressDefaultMutation)();
  const [deleteAddressMutation] = (0, api_1.useAddressDeleteMutation)();
  let cardHeader = "";
  if (address.isDefaultShippingAddress && address.isDefaultBillingAddress) {
    cardHeader = t.formatMessage(translations_1.messages.defaultBillingAndShipping);
  } else if (address.isDefaultShippingAddress) {
    cardHeader = t.formatMessage(translations_1.messages.defaultShipping);
  } else if (address.isDefaultBillingAddress) {
    cardHeader = t.formatMessage(translations_1.messages.defaultBilling);
  }
  const onDeleteAddress = (addressId) =>
    __awaiter(this, void 0, void 0, function* () {
      yield deleteAddressMutation({
        variables: { id: addressId },
      });
      onRefreshBook();
    });
  return (
    <div className="justify-between flex flex-col checkout-section-container md:mx-2 mb-2">
      {!!cardHeader && <p className="text-md font-semibold mb-1">{cardHeader}</p>}
      <AddressDisplay_1.AddressDisplay address={address} />
      {!address.isDefaultBillingAddress && (
        <Button_1.Button
          className="my-1"
          onClick={() =>
            setAddressDefaultMutation({
              variables: { id: address.id, type: "BILLING" },
            })
          }
        >
          {t.formatMessage(translations_1.messages.setDefaultBilling)}
        </Button_1.Button>
      )}
      {!address.isDefaultShippingAddress && (
        <Button_1.Button
          className="my-1"
          onClick={() =>
            setAddressDefaultMutation({
              variables: { id: address.id, type: "SHIPPING" },
            })
          }
        >
          {t.formatMessage(translations_1.messages.setDefaultShipping)}
        </Button_1.Button>
      )}
      <Button_1.Button className="my-1" onClick={() => onDeleteAddress(address.id)}>
        {t.formatMessage(translations_1.messages.removeButton)}
      </Button_1.Button>
    </div>
  );
}
exports.AddressBookCard = AddressBookCard;

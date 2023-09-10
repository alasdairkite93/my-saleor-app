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
exports.BillingAddressSection = void 0;
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const components_1 = require("@/components");
const util_1 = require("@/lib/util");
const api_1 = require("@/saleor/api");
const Button_1 = require("../Button");
const RegionsProvider_1 = require("../RegionsProvider");
const translations_1 = require("../translations");
const AddressDisplay_1 = require("./AddressDisplay");
const AddressForm_1 = require("./AddressForm");
const useUser_1 = require("@/lib/useUser");
function BillingAddressSection({ active, checkout }) {
  const t = (0, react_intl_1.useIntl)();
  const { authenticated } = (0, useUser_1.useUser)();
  const [editing, setEditing] = (0, react_1.useState)(!checkout.billingAddress);
  const [checkoutBillingAddressUpdate] = (0, api_1.useCheckoutBillingAddressUpdateMutation)({});
  const { query } = (0, RegionsProvider_1.useRegions)();
  const updateMutation = (formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _a;
      const { data } = yield checkoutBillingAddressUpdate({
        variables: {
          address: Object.assign({}, formData),
          token: checkout.token,
          locale: query.locale,
        },
      });
      setEditing(false);
      return (
        ((_a = data === null || data === void 0 ? void 0 : data.checkoutBillingAddressUpdate) ===
          null || _a === void 0
          ? void 0
          : _a.errors.filter(util_1.notNullable)) || []
      );
    });
  return (
    <>
      <div className="mt-4 mb-4">
        <h2
          className={active ? "checkout-section-header-active" : "checkout-section-header-disabled"}
        >
          {t.formatMessage(translations_1.messages.billingAddressCardHeader)}
        </h2>
      </div>
      {active &&
        (editing ? (
          <>
            {authenticated && (
              <components_1.SavedAddressSelectionList
                updateAddressMutation={(address) => updateMutation(address)}
              />
            )}
            <AddressForm_1.AddressForm
              existingAddressData={checkout.billingAddress || undefined}
              toggleEdit={() => setEditing(false)}
              updateAddressMutation={updateMutation}
            />
          </>
        ) : (
          <section className="flex justify-between items-center mb-4">
            {!!checkout.billingAddress && (
              <AddressDisplay_1.AddressDisplay address={checkout.billingAddress} />
            )}
            <Button_1.Button onClick={() => setEditing(true)}>
              {t.formatMessage(translations_1.messages.changeButton)}
            </Button_1.Button>
          </section>
        ))}
    </>
  );
}
exports.BillingAddressSection = BillingAddressSection;
exports.default = BillingAddressSection;

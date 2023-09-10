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
exports.ShippingMethodSection = void 0;
const react_1 = require("@headlessui/react");
const react_2 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const util_1 = require("@/lib/util");
const api_1 = require("@/saleor/api");
const Button_1 = require("../Button");
const RegionsProvider_1 = require("../RegionsProvider");
const translations_1 = require("../translations");
const ShippingMethodDisplay_1 = require("./ShippingMethodDisplay");
const ShippingMethodOption_1 = require("./ShippingMethodOption");
function ShippingMethodSection({ checkout, active }) {
  const t = (0, react_intl_1.useIntl)();
  const { query } = (0, RegionsProvider_1.useRegions)();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = (0, react_2.useState)(
    checkout.shippingMethod
  );
  const [editing, setEditing] = (0, react_2.useState)(!checkout.shippingMethod);
  const [checkoutShippingMethodUpdate] = (0, api_1.useCheckoutShippingMethodUpdateMutation)({});
  const handleChange = (method) =>
    __awaiter(this, void 0, void 0, function* () {
      var _a, _b;
      const { data } = yield checkoutShippingMethodUpdate({
        variables: {
          token: checkout.token,
          shippingMethodId: method.id,
          locale: query.locale,
        },
      });
      if (
        (_a = data === null || data === void 0 ? void 0 : data.checkoutShippingMethodUpdate) ===
          null || _a === void 0
          ? void 0
          : _a.errors.length
      ) {
        // todo: handle errors
        console.error(
          (_b = data === null || data === void 0 ? void 0 : data.checkoutShippingMethodUpdate) ===
            null || _b === void 0
            ? void 0
            : _b.errors
        );
        return;
      }
      setSelectedDeliveryMethod(method);
      setEditing(false);
    });
  const availableShippingMethods =
    checkout.availableShippingMethods.filter(util_1.notNullable) || [];
  return (
    <>
      <div className="mt-4 mb-4">
        <h2
          className={active ? "checkout-section-header-active" : "checkout-section-header-disabled"}
        >
          {t.formatMessage(translations_1.messages.shippingMethodCardHeader)}
        </h2>
      </div>
      {active &&
        (editing ? (
          <react_1.RadioGroup
            value={selectedDeliveryMethod}
            onChange={handleChange}
            className="py-8"
          >
            <div className="mt-4 grid grid-cols-2 gap-2">
              {availableShippingMethods.map((method) => {
                // todo: Investigate why filter did not excluded non existing methods
                if (!method) {
                  return null;
                }
                return (
                  <ShippingMethodOption_1.ShippingMethodOption method={method} key={method.id} />
                );
              })}
            </div>
          </react_1.RadioGroup>
        ) : (
          <section className="flex justify-between items-center mb-4">
            {!!checkout.shippingMethod && (
              <ShippingMethodDisplay_1.ShippingMethodDisplay method={checkout.shippingMethod} />
            )}
            <div className="flex justify-between items-center">
              <Button_1.Button onClick={() => setEditing(true)}>
                {t.formatMessage(translations_1.messages.changeButton)}
              </Button_1.Button>
            </div>
          </section>
        ))}
    </>
  );
}
exports.ShippingMethodSection = ShippingMethodSection;
exports.default = ShippingMethodSection;

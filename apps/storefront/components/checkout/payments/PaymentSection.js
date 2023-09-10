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
exports.PaymentSection = void 0;
const react_1 = require("@headlessui/react");
const react_2 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const translations_1 = require("@/components/translations");
const DummyCreditCardSection_1 = require("./DummyCreditCardSection");
const StripeCreditCardSection_1 = require("./StripeCreditCardSection");
function PaymentSection({ checkout, active }) {
  const t = (0, react_intl_1.useIntl)();
  const existingGateways = [
    StripeCreditCardSection_1.STRIPE_GATEWAY,
    DummyCreditCardSection_1.DUMMY_CREDIT_CARD_GATEWAY,
  ];
  const availableGateways = checkout.availablePaymentGateways.filter((g) =>
    existingGateways.includes(g.id)
  );
  const [chosenGateway, setChosenGateway] = (0, react_2.useState)("");
  return (
    <>
      <div className="mt-4 mb-4">
        <h2
          className={active ? "checkout-section-header-active" : "checkout-section-header-disabled"}
        >
          {t.formatMessage(translations_1.messages.paymentCardHeader)}
        </h2>
      </div>
      {active && (
        <>
          <div className="block">
            <span className="text-gray-700 text-base">
              {t.formatMessage(translations_1.messages.paymentInstruction)}
            </span>
            <react_1.RadioGroup value={chosenGateway} onChange={setChosenGateway} className="mt-2">
              {availableGateways.map((gateway) => (
                <react_1.RadioGroup.Option key={gateway.id} value={gateway.id}>
                  <label className="inline-flex items-center" htmlFor={gateway.id}>
                    <input
                      type="radio"
                      className="form-radio"
                      name="radio"
                      value={gateway.id}
                      id={gateway.id}
                    />
                    <span className="ml-2 text-base">{gateway.name}</span>
                  </label>
                </react_1.RadioGroup.Option>
              ))}
            </react_1.RadioGroup>
          </div>
          {chosenGateway === DummyCreditCardSection_1.DUMMY_CREDIT_CARD_GATEWAY && (
            <DummyCreditCardSection_1.DummyCreditCardSection checkout={checkout} />
          )}
          {chosenGateway === StripeCreditCardSection_1.STRIPE_GATEWAY && (
            <StripeCreditCardSection_1.StripeCreditCardSection checkout={checkout} />
          )}
        </>
      )}
    </>
  );
}
exports.PaymentSection = PaymentSection;
exports.default = PaymentSection;

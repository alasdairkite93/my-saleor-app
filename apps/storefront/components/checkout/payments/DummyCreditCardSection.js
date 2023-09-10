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
exports.DummyCreditCardSection = exports.DUMMY_CREDIT_CARD_GATEWAY = void 0;
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_intl_1 = require("react-intl");
const RegionsProvider_1 = require("@/components/RegionsProvider");
const translations_1 = require("@/components/translations");
const const_1 = require("@/lib/const");
const paths_1 = require("@/lib/paths");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const api_1 = require("@/saleor/api");
const CompleteCheckoutButton_1 = require("../CompleteCheckoutButton");
exports.DUMMY_CREDIT_CARD_GATEWAY = "mirumee.payments.dummy";
function DummyCreditCardSection({ checkout }) {
  var _a;
  const t = (0, react_intl_1.useIntl)();
  const { resetCheckoutToken } = (0, CheckoutProvider_1.useCheckout)();
  const paths = (0, paths_1.usePaths)();
  const router = (0, router_1.useRouter)();
  const { formatPrice } = (0, RegionsProvider_1.useRegions)();
  const [checkoutPaymentCreateMutation] = (0, api_1.useCheckoutPaymentCreateMutation)();
  const [checkoutCompleteMutation] = (0, api_1.useCheckoutCompleteMutation)();
  const [isPaymentProcessing, setIsPaymentProcessing] = (0, react_1.useState)(false);
  const totalPrice = (_a = checkout.totalPrice) === null || _a === void 0 ? void 0 : _a.gross;
  const payLabel = t.formatMessage(translations_1.messages.paymentButton, {
    total: formatPrice(totalPrice),
  });
  const defaultValues = const_1.DEMO_MODE
    ? {
        cardNumber: "4242 4242 4242 4242",
        expDate: "12/34",
        cvc: "123",
      }
    : {};
  const { register: registerCard, handleSubmit: handleSubmitCard } = (0, react_hook_form_1.useForm)(
    {
      defaultValues,
    }
  );
  const redirectToOrderDetailsPage = () =>
    __awaiter(this, void 0, void 0, function* () {
      // without the `await` checkout data will be removed before the redirection which will cause issue with rendering checkout view
      yield router.push(paths.order.$url());
      resetCheckoutToken();
    });
  const handleSubmit = handleSubmitCard((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _b, _c;
      setIsPaymentProcessing(true);
      // Create Saleor payment
      const { errors: paymentCreateErrors } = yield checkoutPaymentCreateMutation({
        variables: {
          checkoutToken: checkout.token,
          paymentInput: {
            gateway: exports.DUMMY_CREDIT_CARD_GATEWAY,
            amount: (_b = checkout.totalPrice) === null || _b === void 0 ? void 0 : _b.gross.amount,
            token: formData.cardNumber,
          },
        },
      });
      if (paymentCreateErrors) {
        console.error(paymentCreateErrors);
        setIsPaymentProcessing(false);
        return;
      }
      // Try to complete the checkout
      const { data: completeData, errors: completeErrors } = yield checkoutCompleteMutation({
        variables: {
          checkoutToken: checkout.token,
        },
      });
      if (completeErrors) {
        console.error("complete errors:", completeErrors);
        setIsPaymentProcessing(false);
        return;
      }
      const order =
        (_c =
          completeData === null || completeData === void 0
            ? void 0
            : completeData.checkoutComplete) === null || _c === void 0
          ? void 0
          : _c.order;
      // If there are no errors during payment and confirmation, order should be created
      if (order) {
        return redirectToOrderDetailsPage();
      } else {
        console.error("Order was not created");
      }
    })
  );
  return (
    <div className="py-8">
      <form method="post" onSubmit={handleSubmit}>
        <div className="py-8">
          <div className="mt-4 grid grid-cols-12 gap-x-2 gap-y-4">
            <div className="col-span-6">
              <label htmlFor="card-number" className="block text-sm font-semibold text-gray-700">
                {t.formatMessage(translations_1.messages.cardNumberField)}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="card-number"
                  className="block w-full border-gray-300 rounded-md shadow-sm text-base"
                  spellCheck={false}
                  {...registerCard("cardNumber", {
                    required: true,
                  })}
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-semibold text-gray-700"
              >
                {t.formatMessage(translations_1.messages.expDateField)}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="expiration-date"
                  className="block w-full border-gray-300 rounded-md shadow-sm text-base"
                  placeholder="MM / YY"
                  spellCheck={false}
                  {...registerCard("expDate", {
                    required: true,
                  })}
                />
              </div>
            </div>

            <div className="col-span-3">
              <label htmlFor="cvc" className="block text-sm font-semibold text-gray-700">
                {t.formatMessage(translations_1.messages.cvcField)}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="cvc"
                  className="block w-full border-gray-300 rounded-md shadow-sm text-base"
                  spellCheck={false}
                  {...registerCard("cvc", {
                    required: true,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <CompleteCheckoutButton_1.CompleteCheckoutButton
          isProcessing={isPaymentProcessing}
          isDisabled={isPaymentProcessing}
        >
          {payLabel}
        </CompleteCheckoutButton_1.CompleteCheckoutButton>
      </form>
    </div>
  );
}
exports.DummyCreditCardSection = DummyCreditCardSection;
exports.default = DummyCreditCardSection;

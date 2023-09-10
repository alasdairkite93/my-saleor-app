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
exports.CartSummary = void 0;
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_intl_1 = require("react-intl");
const api_1 = require("@/saleor/api");
const RegionsProvider_1 = require("../RegionsProvider");
const translations_1 = require("../translations");
function CartSummary({ checkout }) {
  var _a;
  const t = (0, react_intl_1.useIntl)();
  const [editPromoCode] = (0, react_1.useState)(false);
  const [checkoutAddPromoCodeMutation] = (0, api_1.useCheckoutAddPromoCodeMutation)();
  const { subtotalPrice, shippingPrice, totalPrice, discount } = checkout;
  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = (0, react_hook_form_1.useForm)({});
  const { query, formatPrice } = (0, RegionsProvider_1.useRegions)();
  const onAddPromoCode = handleSubmitForm((formData) =>
    __awaiter(this, void 0, void 0, function* () {
      var _b;
      const { data: promoMutationData } = yield checkoutAddPromoCodeMutation({
        variables: {
          promoCode: formData.promoCode,
          token: checkout.token,
          locale: query.locale,
        },
      });
      const errors =
        (_b =
          promoMutationData === null || promoMutationData === void 0
            ? void 0
            : promoMutationData.checkoutAddPromoCode) === null || _b === void 0
          ? void 0
          : _b.errors;
      if (!!errors && errors.length > 0) {
        setErrorForm("promoCode", { message: errors[0].message || "Error" });
      }
    })
  );
  return (
    <section>
      <div className="bg-gray-50 rounded p-8 border">
        {(editPromoCode ||
          !(discount === null || discount === void 0 ? void 0 : discount.amount)) && (
          <form method="post" className="pb-4" onSubmit={onAddPromoCode}>
            <label htmlFor="discount-code" className="block text-sm font-medium text-gray-700">
              {t.formatMessage(translations_1.messages.discountCodeFieldLabel)}
            </label>
            <div className="flex space-x-4 mt-1">
              <input
                type="text"
                id="discount-code"
                className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                spellCheck={false}
                {...registerForm("promoCode", {
                  required: true,
                })}
              />
              <button
                type="submit"
                className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-blue-300"
              >
                {t.formatMessage(translations_1.messages.activateButton)}
              </button>
            </div>
            {!!errorsForm.promoCode && (
              <p className="text-sm text-red-500 pt-2">
                {(_a = errorsForm.promoCode) === null || _a === void 0 ? void 0 : _a.message}
              </p>
            )}
          </form>
        )}
        <div className="flow-root">
          <dl className="text-sm">
            {!!(discount === null || discount === void 0 ? void 0 : discount.amount) && (
              <div className="py-2 flex items-center justify-between">
                <dt className="text-gray-600">
                  {t.formatMessage(translations_1.messages.discount)}
                </dt>
                <dd className="font-medium text-gray-900">{formatPrice(discount)}</dd>
              </div>
            )}
            <div className="py-2 flex items-center justify-between">
              <dt className="text-gray-600">{t.formatMessage(translations_1.messages.subtotal)}</dt>
              <dd className="font-medium text-gray-900">
                {formatPrice(
                  subtotalPrice === null || subtotalPrice === void 0 ? void 0 : subtotalPrice.net
                )}
              </dd>
            </div>
            <div className="py-2 flex items-center justify-between">
              <dt className="text-gray-600">{t.formatMessage(translations_1.messages.shipping)}</dt>
              <dd className="font-medium text-gray-900">
                {formatPrice(
                  shippingPrice === null || shippingPrice === void 0 ? void 0 : shippingPrice.gross
                )}
              </dd>
            </div>
            <div className="py-2 flex items-center justify-between">
              <dt className="text-gray-600">{t.formatMessage(translations_1.messages.tax)}</dt>
              <dd className="font-medium text-gray-900">
                {formatPrice(
                  subtotalPrice === null || subtotalPrice === void 0 ? void 0 : subtotalPrice.tax
                )}
              </dd>
            </div>
            <div className="pt-4 flex items-center justify-between border-t border-gray-300">
              <dt className="text-lg font-bold text-gray-900">
                {t.formatMessage(translations_1.messages.total)}
              </dt>
              <dd className="text-lg font-bold text-gray-900">
                {formatPrice(
                  totalPrice === null || totalPrice === void 0 ? void 0 : totalPrice.gross
                )}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
exports.CartSummary = CartSummary;

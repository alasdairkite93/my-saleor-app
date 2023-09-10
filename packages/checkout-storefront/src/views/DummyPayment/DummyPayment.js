"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyPayment = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("../../components");
const graphql_1 = require("../../graphql");
const messages_1 = require("./messages");
const locale_1 = require("@/checkout-storefront/lib/utils/locale");
const useLocale_1 = require("@/checkout-storefront/hooks/useLocale");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const useDummyPaymentForm_1 = require("@/checkout-storefront/views/DummyPayment/useDummyPaymentForm");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const utils_1 = require("@/checkout-storefront/views/DummyPayment/utils");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const DummyPayment = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
  const orderId = (_a = (0, url_1.getQueryParams)().orderId) !== null && _a !== void 0 ? _a : "";
  const { locale } = (0, useLocale_1.useLocale)();
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const [orderResult] = (0, graphql_1.useOrderQuery)({
    variables: { languageCode: (0, locale_1.localeToLanguageCode)(locale), id: orderId },
  });
  const orderPaymentAmount =
    (_d =
      (_c = (_b = orderResult.data) === null || _b === void 0 ? void 0 : _b.order) === null ||
      _c === void 0
        ? void 0
        : _c.total.gross.amount) !== null && _d !== void 0
      ? _d
      : 0;
  const orderPaymentCurrency =
    (_g =
      (_f = (_e = orderResult.data) === null || _e === void 0 ? void 0 : _e.order) === null ||
      _f === void 0
        ? void 0
        : _f.total.gross.currency) !== null && _g !== void 0
      ? _g
      : "";
  const paymentBalance = Math.abs(
    (_k =
      (_j = (_h = orderResult.data) === null || _h === void 0 ? void 0 : _h.order) === null ||
      _j === void 0
        ? void 0
        : _j.totalBalance.amount) !== null && _k !== void 0
      ? _k
      : 0
  );
  const paymentCaptured =
    (_m = (_l = orderResult.data) === null || _l === void 0 ? void 0 : _l.order) === null ||
    _m === void 0
      ? void 0
      : _m.totalCaptured;
  const form = (0, useDummyPaymentForm_1.useDummyPaymentForm)({
    initialValues: { amount: paymentBalance, currency: orderPaymentCurrency },
  });
  const { isSubmitting } = form;
  react_1.default.useEffect(() => {
    var _a, _b;
    if (
      (_b = (_a = orderResult.data) === null || _a === void 0 ? void 0 : _a.order) === null ||
      _b === void 0
        ? void 0
        : _b.isPaid
    ) {
      window.location.href = (0, utils_1.getOrderConfirmationUrl)();
    }
  }, [
    (_p = (_o = orderResult.data) === null || _o === void 0 ? void 0 : _o.order) === null ||
    _p === void 0
      ? void 0
      : _p.id,
    (_r = (_q = orderResult.data) === null || _q === void 0 ? void 0 : _q.order) === null ||
    _r === void 0
      ? void 0
      : _r.isPaid,
  ]);
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-8">
        <h2 className="font-bold text-4xl text-center">
          {formatMessage(messages_1.dummyPaymentMessages.dummyPayment)}
        </h2>
        <div className="checkout-form w-auto gap-4 px-4 py-4">
          <div className="flex flex-col">
            <p>
              <span className="text-text-secondary">
                {formatMessage(messages_1.dummyPaymentMessages.orderTotalPrice)}
              </span>
              : {orderPaymentAmount} {orderPaymentCurrency}
            </p>
            <p>
              <span className="text-text-secondary">
                {formatMessage(messages_1.dummyPaymentMessages.orderAlreadyPaid)}
              </span>
              :{" "}
              {paymentCaptured === null || paymentCaptured === void 0
                ? void 0
                : paymentCaptured.amount}{" "}
              {paymentCaptured === null || paymentCaptured === void 0
                ? void 0
                : paymentCaptured.currency}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <FormProvider_1.FormProvider form={form}>
              <components_1.TextInput
                name="amount"
                type="number"
                label={formatMessage(
                  messages_1.dummyPaymentMessages.dummyPaymentAmountPlaceholder,
                  {
                    currency: orderPaymentCurrency.toUpperCase(),
                  }
                )}
                max={paymentBalance}
              />
              <components_1.Button
                disabled={orderResult.fetching}
                type="submit"
                ariaLabel={formatMessage(messages_1.dummyPaymentMessages.dummyPay)}
                label={
                  isSubmitting
                    ? formatMessage(messages_1.dummyPaymentMessages.loadingWithDots)
                    : formatMessage(messages_1.dummyPaymentMessages.dummyPay)
                }
                data-testid="dummyPay"
              />
            </FormProvider_1.FormProvider>
          </div>
        </div>
      </div>
    </section>
  );
};
exports.DummyPayment = DummyPayment;

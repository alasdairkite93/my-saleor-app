"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSection = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const useFetch_1 = require("@/checkout-storefront/hooks/useFetch");
const fetch_1 = require("@/checkout-storefront/fetch");
const AppConfigProvider_1 = require("@/checkout-storefront/providers/AppConfigProvider");
const Section_1 = require("./Section");
const Skeleton_1 = require("@/checkout-storefront/components/Skeleton");
const icons_1 = require("@/checkout-storefront/icons");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const messages_1 = require("./messages");
const commonMessages_1 = require("@/checkout-storefront/lib/commonMessages");
const PaymentDetails = ({ paymentStatusLoading, paymentData }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  if (paymentStatusLoading) {
    return <Skeleton_1.Skeleton className="w-1/2" />;
  }
  if ((paymentData === null || paymentData === void 0 ? void 0 : paymentData.status) === "PAID") {
    return (
      <div className="flex flex-row items-center">
        <ui_kit_1.Text color="success" className="mr-1">
          {formatMessage(messages_1.orderInfoMessages.orderPaid)}
        </ui_kit_1.Text>
        <img
          src={(0, svgSrc_1.getSvgSrc)(icons_1.CheckIcon)}
          alt={formatMessage(commonMessages_1.imageAltMessages.checkIcon)}
        />
      </div>
    );
  }
  if (
    (paymentData === null || paymentData === void 0 ? void 0 : paymentData.status) === "PENDING"
  ) {
    return (
      <ui_kit_1.Text color="success">
        {formatMessage(messages_1.orderInfoMessages.paymentPending)}
      </ui_kit_1.Text>
    );
  }
  if ((paymentData === null || paymentData === void 0 ? void 0 : paymentData.status) === "UNPAID") {
    return (
      <div>
        <ui_kit_1.Text color="error">
          {formatMessage(messages_1.orderInfoMessages.orderUnpaid)}
        </ui_kit_1.Text>
      </div>
    );
  }
  return (
    <ui_kit_1.Text color="error">
      {formatMessage(messages_1.orderInfoMessages.orderPaymentStatusMissing)}
    </ui_kit_1.Text>
  );
};
const PaymentSection = ({ orderId }) => {
  const { env, saleorApiUrl } = (0, AppConfigProvider_1.useAppConfig)();
  const [{ data: paymentData, loading: paymentStatusLoading }] = (0, useFetch_1.useFetch)(
    fetch_1.getOrderPaymentStatus,
    {
      args: { orderId, checkoutApiUrl: env.checkoutApiUrl, saleorApiUrl },
    }
  );
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  return (
    <Section_1.Section title={formatMessage(messages_1.orderInfoMessages.paymentSection)}>
      <div data-testid="paymentStatus">
        <PaymentDetails paymentData={paymentData} paymentStatusLoading={paymentStatusLoading} />
      </div>
    </Section_1.Section>
  );
};
exports.PaymentSection = PaymentSection;

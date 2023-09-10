"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderConfirmation = void 0;
const react_1 = require("react");
const PageHeader_1 = require("@/checkout-storefront/sections/PageHeader");
const Summary_1 = require("@/checkout-storefront/sections/Summary");
const OrderInfo_1 = require("@/checkout-storefront/sections/OrderInfo");
const ui_kit_1 = require("@saleor/ui-kit");
const messages_1 = require("@/checkout-storefront/sections/OrderInfo/messages");
const useOrder_1 = require("@/checkout-storefront/hooks/useOrder");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const OrderConfirmation = ({ orderId }) => {
  var _a, _b, _c;
  const { order } = (0, useOrder_1.useOrder)(orderId);
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  return (
    <div className="page">
      <header>
        <PageHeader_1.PageHeader />
        <ui_kit_1.Text size="lg" weight="bold" className="mb-2" data-testid="orderConfrmationTitle">
          {formatMessage(messages_1.orderInfoMessages.orderConfirmTitle, { number: order.number })}
        </ui_kit_1.Text>
        <ui_kit_1.Text size="md">
          {formatMessage(messages_1.orderInfoMessages.orderConfirmSubtitle, {
            email: order.userEmail || "",
          })}
        </ui_kit_1.Text>
      </header>
      <main className="order-content overflow-hidden">
        <OrderInfo_1.OrderInfo order={order} />
        <div className="order-divider" />
        <react_1.Suspense fallback={<Summary_1.SummarySkeleton />}>
          <Summary_1.Summary
            {...order}
            // for now there can only be one voucher per order in the api
            discount={
              (_b =
                (_a = order === null || order === void 0 ? void 0 : order.discounts) === null ||
                _a === void 0
                  ? void 0
                  : _a.find(({ type }) => type === "VOUCHER")) === null || _b === void 0
                ? void 0
                : _b.amount
            }
            voucherCode={
              (_c = order === null || order === void 0 ? void 0 : order.voucher) === null ||
              _c === void 0
                ? void 0
                : _c.code
            }
            totalPrice={order === null || order === void 0 ? void 0 : order.total}
            subtotalPrice={order === null || order === void 0 ? void 0 : order.subtotal}
            editable={false}
          />
        </react_1.Suspense>
      </main>
    </div>
  );
};
exports.OrderConfirmation = OrderConfirmation;

"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryMethods = void 0;
const Title_1 = require("@/checkout-storefront/components/Title");
const ui_kit_1 = require("@saleor/ui-kit");
const useCheckout_1 = require("@/checkout-storefront/hooks/useCheckout");
const react_1 = __importDefault(require("react"));
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const SelectBox_1 = require("@/checkout-storefront/components/SelectBox");
const SelectBoxGroup_1 = require("@/checkout-storefront/components/SelectBoxGroup");
const money_1 = require("@/checkout-storefront/lib/utils/money");
const Divider_1 = require("@/checkout-storefront/components/Divider");
const messages_1 = require("./messages");
const useDeliveryMethodsForm_1 = require("@/checkout-storefront/sections/DeliveryMethods/useDeliveryMethodsForm");
const FormProvider_1 = require("@/checkout-storefront/providers/FormProvider");
const updateStateStore_1 = require("@/checkout-storefront/state/updateStateStore");
const DeliveryMethodsSkeleton_1 = require("@/checkout-storefront/sections/DeliveryMethods/DeliveryMethodsSkeleton");
const useUser_1 = require("@/checkout-storefront/hooks/useUser");
const DeliveryMethods = ({ collapsed }) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const { checkout } = (0, useCheckout_1.useCheckout)();
  const { authenticated } = (0, useUser_1.useUser)();
  const { shippingMethods, shippingAddress } = checkout;
  const form = (0, useDeliveryMethodsForm_1.useDeliveryMethodsForm)();
  const { updateState } = (0, updateStateStore_1.useCheckoutUpdateState)();
  const getSubtitle = ({ min, max }) => {
    if (!min || !max) {
      return undefined;
    }
    return formatMessage(messages_1.deliveryMethodsMessages.businessDays, {
      min: min.toString(),
      max: max.toString(),
    });
  };
  if (
    !(checkout === null || checkout === void 0 ? void 0 : checkout.isShippingRequired) ||
    collapsed
  ) {
    return null;
  }
  return (
    <FormProvider_1.FormProvider form={form}>
      <Divider_1.Divider />
      <div className="section" data-testid="deliveryMethods">
        <Title_1.Title className="mb-2">
          {formatMessage(messages_1.deliveryMethodsMessages.deliveryMethods)}
        </Title_1.Title>
        {!authenticated && !shippingAddress && (
          <ui_kit_1.Text>
            {formatMessage(messages_1.deliveryMethodsMessages.noShippingAddressMessage)}
          </ui_kit_1.Text>
        )}
        {authenticated && !shippingAddress && updateState.checkoutShippingUpdate ? (
          <DeliveryMethodsSkeleton_1.DeliveryMethodsSkeleton />
        ) : (
          <SelectBoxGroup_1.SelectBoxGroup
            label={formatMessage(messages_1.deliveryMethodsLabels.deliveryMethods)}
          >
            {shippingMethods === null || shippingMethods === void 0
              ? void 0
              : shippingMethods.map(
                  ({ id, name, price, minimumDeliveryDays: min, maximumDeliveryDays: max }) => (
                    <SelectBox_1.SelectBox key={id} name="selectedMethodId" value={id}>
                      <div className="min-h-12 grow flex flex-col justify-center pointer-events-none">
                        <div className="flex flex-row justify-between self-stretch items-center">
                          <ui_kit_1.Text>{name}</ui_kit_1.Text>
                          <ui_kit_1.Text>{(0, money_1.getFormattedMoney)(price)}</ui_kit_1.Text>
                        </div>
                        <ui_kit_1.Text size="xs" color="secondary">
                          {getSubtitle({ min, max })}
                        </ui_kit_1.Text>
                      </div>
                    </SelectBox_1.SelectBox>
                  )
                )}
          </SelectBoxGroup_1.SelectBoxGroup>
        )}
      </div>
    </FormProvider_1.FormProvider>
  );
};
exports.DeliveryMethods = DeliveryMethods;

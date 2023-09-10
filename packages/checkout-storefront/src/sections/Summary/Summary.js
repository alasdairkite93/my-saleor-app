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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const react_1 = __importStar(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const SummaryItem_1 = require("./SummaryItem");
const icons_1 = require("@/checkout-storefront/icons");
const react_2 = require("@headlessui/react");
const clsx_1 = __importDefault(require("clsx"));
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const PromoCodeAdd_1 = require("./PromoCodeAdd");
const SummaryMoneyRow_1 = require("./SummaryMoneyRow");
const SummaryPromoCodeRow_1 = require("./SummaryPromoCodeRow");
const SummaryItemMoneyEditableSection_1 = require("./SummaryItemMoneyEditableSection");
const money_1 = require("@/checkout-storefront/lib/utils/money");
const components_1 = require("@/checkout-storefront/components");
const SummaryItemMoneySection_1 = require("@/checkout-storefront/sections/Summary/SummaryItemMoneySection");
const messages_1 = require("./messages");
const useSummaryHeightCalc_1 = require("@/checkout-storefront/sections/Summary/useSummaryHeightCalc");
const Summary = ({
  editable = true,
  lines,
  totalPrice,
  subtotalPrice,
  giftCards = [],
  voucherCode,
  shippingPrice,
  discount,
}) => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const [isOpen, setOpen] = (0, react_1.useState)(true);
  const { maxSummaryHeight, allItemsHeight } = (0, useSummaryHeightCalc_1.useSummaryHeightCalc)({
    linesCount: lines.length,
    onBreakpointChange: (breakpoint) => {
      setOpen(breakpoint === "lg");
    },
  });
  return (
    <div className="summary">
      <div className={(0, clsx_1.default)("summary-title", isOpen && "open")}>
        <div className="flex flex-row items-center w-full" onClick={() => setOpen(!isOpen)}>
          <components_1.Title className="mb-0">
            {formatMessage(messages_1.summaryMessages.title)}
          </components_1.Title>
          <img src={(0, svgSrc_1.getSvgSrc)(icons_1.ChevronDownIcon)} alt="chevron-down" />
        </div>
        {!isOpen && (
          <components_1.Money
            ariaLabel={formatMessage(messages_1.summaryLabels.totalPrice)}
            weight="bold"
            money={totalPrice === null || totalPrice === void 0 ? void 0 : totalPrice.gross}
          />
        )}
      </div>
      <react_2.Transition
        show={isOpen}
        unmount={false}
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <ul
          style={{ maxHeight: maxSummaryHeight ? `${maxSummaryHeight}px` : "" }}
          className={(0, clsx_1.default)(
            "summary-items",
            allItemsHeight > maxSummaryHeight
              ? "border-b border-border-secondary lg:overflow-y-scroll"
              : ""
          )}
        >
          {lines.map((line) => (
            <SummaryItem_1.SummaryItem
              line={line}
              key={line === null || line === void 0 ? void 0 : line.id}
            >
              {editable ? (
                <SummaryItemMoneyEditableSection_1.SummaryItemMoneyEditableSection line={line} />
              ) : (
                <SummaryItemMoneySection_1.SummaryItemMoneySection line={line} />
              )}
            </SummaryItem_1.SummaryItem>
          ))}
        </ul>
        {editable && <PromoCodeAdd_1.PromoCodeAdd />}
        <div className="summary-recap">
          <components_1.Divider className="mt-1 mb-4" />
          <SummaryMoneyRow_1.SummaryMoneyRow
            label={formatMessage(messages_1.summaryMessages.subtotalPrice)}
            money={
              subtotalPrice === null || subtotalPrice === void 0 ? void 0 : subtotalPrice.gross
            }
            ariaLabel={formatMessage(messages_1.summaryLabels.subtotalPrice)}
          />
          {voucherCode && (
            <SummaryPromoCodeRow_1.SummaryPromoCodeRow
              editable={editable}
              promoCode={voucherCode}
              ariaLabel={formatMessage(messages_1.summaryLabels.voucher)}
              label={formatMessage(messages_1.summaryMessages.voucher, { voucherCode })}
              money={discount}
              negative
            />
          )}
          {giftCards.map(({ currentBalance, displayCode, id }) => (
            <SummaryPromoCodeRow_1.SummaryPromoCodeRow
              editable={editable}
              promoCodeId={id}
              ariaLabel={formatMessage(messages_1.summaryLabels.giftCard)}
              label={formatMessage(messages_1.summaryMessages.giftCard, {
                giftCardCode: `•••• •••• ${displayCode}`,
              })}
              money={currentBalance}
              negative
            />
          ))}
          <SummaryMoneyRow_1.SummaryMoneyRow
            label={formatMessage(messages_1.summaryMessages.shippingCost)}
            ariaLabel={formatMessage(messages_1.summaryLabels.shippingCost)}
            money={
              shippingPrice === null || shippingPrice === void 0 ? void 0 : shippingPrice.gross
            }
          />
          <components_1.Divider className="my-4" />
          <div className="summary-row pb-4 items-baseline">
            <div className="flex flex-row items-baseline">
              <ui_kit_1.Text weight="bold">
                {formatMessage(messages_1.summaryMessages.totalPrice)}
              </ui_kit_1.Text>
              <ui_kit_1.Text color="secondary" className="ml-2">
                {formatMessage(messages_1.summaryMessages.taxCost, {
                  taxCost: (0, money_1.getFormattedMoney)(
                    totalPrice === null || totalPrice === void 0 ? void 0 : totalPrice.tax
                  ),
                })}
              </ui_kit_1.Text>
            </div>
            <components_1.Money
              ariaLabel={formatMessage(messages_1.summaryLabels.totalPrice)}
              weight="bold"
              money={totalPrice === null || totalPrice === void 0 ? void 0 : totalPrice.gross}
              data-testid="totalOrderPrice"
            />
          </div>
        </div>
      </react_2.Transition>
    </div>
  );
};
exports.Summary = Summary;

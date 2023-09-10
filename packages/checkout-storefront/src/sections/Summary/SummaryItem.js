"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryItem = void 0;
const react_1 = __importDefault(require("react"));
const ui_kit_1 = require("@saleor/ui-kit");
const icons_1 = require("@/checkout-storefront/icons");
const useFormattedMessages_1 = require("@/checkout-storefront/hooks/useFormattedMessages");
const utils_1 = require("./utils");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const messages_1 = require("./messages");
const SummaryItem = ({ line, children }) => {
  const { productName, productImage } = (0, utils_1.getSummaryLineProps)(line);
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const attributesText = (0, utils_1.useSummaryLineLineAttributesText)(line);
  return (
    <li className="summary-item">
      <div className="relative flex flex-row">
        <div className="summary-item-image mr-4 z-1">
          {productImage ? (
            <img
              className="object-contain"
              alt={
                (productImage === null || productImage === void 0 ? void 0 : productImage.alt) ||
                undefined
              }
              src={productImage === null || productImage === void 0 ? void 0 : productImage.url}
            />
          ) : (
            <img
              className="object-cover"
              alt="product placeholder"
              src={(0, svgSrc_1.getSvgSrc)(icons_1.PhotoIcon)}
            />
          )}
        </div>
      </div>
      <div className="summary-row w-full items-start">
        <div className="flex flex-col">
          <ui_kit_1.Text
            weight="bold"
            aria-label={formatMessage(messages_1.summaryLabels.summaryItemName)}
            className="mb-3"
          >
            {productName}
          </ui_kit_1.Text>
          <ui_kit_1.Text
            size="xs"
            aria-label={formatMessage(messages_1.summaryLabels.variantName)}
            className="max-w-38"
          >
            {attributesText}
          </ui_kit_1.Text>
        </div>
        {children}
      </div>
    </li>
  );
};
exports.SummaryItem = SummaryItem;

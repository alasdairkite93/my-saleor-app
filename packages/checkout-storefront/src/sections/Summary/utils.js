"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSummaryLineLineAttributesText =
  exports.getSummaryLineProps =
  exports.getThumbnailFromLine =
  exports.isCheckoutLine =
    void 0;
const compact_1 = __importDefault(require("lodash-es/compact"));
const react_intl_1 = require("react-intl");
const isCheckoutLine = (line) => line.__typename === "CheckoutLine";
exports.isCheckoutLine = isCheckoutLine;
const getThumbnailFromLine = (line) => {
  var _a, _b;
  return (
    ((_a = line.variant.media) === null || _a === void 0
      ? void 0
      : _a.find(({ type }) => type === "IMAGE")) ||
    ((_b = line.variant.product.media) === null || _b === void 0
      ? void 0
      : _b.find(({ type }) => type === "IMAGE"))
  );
};
exports.getThumbnailFromLine = getThumbnailFromLine;
const getSummaryLineProps = (line) => {
  var _a, _b;
  return (0, exports.isCheckoutLine)(line)
    ? {
        variantName:
          ((_a = line.variant.translation) === null || _a === void 0 ? void 0 : _a.name) ||
          line.variant.name,
        productName:
          ((_b = line.variant.product.translation) === null || _b === void 0 ? void 0 : _b.name) ||
          line.variant.product.name,
        productImage: (0, exports.getThumbnailFromLine)(line),
      }
    : {
        variantName: line.variantName,
        productName: line.productName,
        productImage: line.thumbnail,
      };
};
exports.getSummaryLineProps = getSummaryLineProps;
const useSummaryLineLineAttributesText = (line) => {
  var _a, _b;
  const intl = (0, react_intl_1.useIntl)();
  const parsedValues =
    ((_b = (_a = line.variant) === null || _a === void 0 ? void 0 : _a.attributes) === null ||
    _b === void 0
      ? void 0
      : _b.reduce(
          (result, { values }) => [
            ...result,
            ...values.map(({ name, dateTime, translation }) => {
              if (translation === null || translation === void 0 ? void 0 : translation.name) {
                return translation.name;
              }
              if (dateTime) {
                return intl.formatDate(dateTime, { dateStyle: "medium" });
              }
              return name;
            }),
          ],
          []
        )) || [];
  return (0, compact_1.default)(parsedValues).join(", ");
};
exports.useSummaryLineLineAttributesText = useSummaryLineLineAttributesText;

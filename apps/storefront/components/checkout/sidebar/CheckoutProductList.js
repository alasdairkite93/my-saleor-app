"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutProductList = void 0;
const image_1 = __importDefault(require("next/legacy/image"));
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const RegionsProvider_1 = require("@/components/RegionsProvider");
const translations_1 = require("@/components/translations");
const translations_2 = require("@/lib/translations");
const api_1 = require("@/saleor/api");
function CheckoutProductList({ lines, token }) {
  const t = (0, react_intl_1.useIntl)();
  const { query, formatPrice } = (0, RegionsProvider_1.useRegions)();
  const [removeProductFromCheckout] = (0, api_1.useRemoveProductFromCheckoutMutation)();
  return (
    <ul className="flex-auto overflow-y-auto divide-y divide-gray-200 px-4 md:pr-4 md:pl-0">
      {lines.map((line) => {
        var _a, _b, _c, _d, _e, _f;
        if (!line) {
          return null;
        }
        return (
          <li key={line.id} className="flex py-4 space-x-4">
            <div className="border bg-white w-32 h-32 object-center object-cover rounded-md relative">
              {((_a = line.variant.product) === null || _a === void 0 ? void 0 : _a.thumbnail) && (
                <image_1.default
                  src={
                    (_c =
                      (_b = line.variant.product) === null || _b === void 0
                        ? void 0
                        : _b.thumbnail) === null || _c === void 0
                      ? void 0
                      : _c.url
                  }
                  alt={
                    ((_e =
                      (_d = line.variant.product) === null || _d === void 0
                        ? void 0
                        : _d.thumbnail) === null || _e === void 0
                      ? void 0
                      : _e.alt) || ""
                  }
                  layout="fill"
                />
              )}
            </div>

            <div className="flex flex-col justify-between space-y-4">
              <div className="text-sm font-medium space-y-1">
                <h3 className="text-gray-900">
                  {(0, translations_2.translate)(line.variant.product, "name")}
                </h3>
                <p className="text-gray-500">
                  {(0, translations_2.translate)(line.variant, "name")}
                </p>
                <p className="text-gray-900">
                  {formatPrice(
                    (_f = line.totalPrice) === null || _f === void 0 ? void 0 : _f.gross
                  )}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  onClick={() =>
                    removeProductFromCheckout({
                      variables: {
                        checkoutToken: token,
                        lineId: line.id,
                        locale: query.locale,
                      },
                    })
                  }
                >
                  {t.formatMessage(translations_1.messages.removeButton)}
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
exports.CheckoutProductList = CheckoutProductList;

"use strict";
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutLineItem = void 0;
const clsx_1 = __importDefault(require("clsx"));
const image_1 = __importDefault(require("next/legacy/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const translations_1 = require("@/lib/translations");
const api_1 = require("@/saleor/api");
const paths_1 = require("../../lib/paths");
const RegionsProvider_1 = require("../RegionsProvider");
const translations_2 = require("../translations");
function CheckoutLineItem({ line }) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const paths = (0, paths_1.usePaths)();
  const t = (0, react_intl_1.useIntl)();
  const { query, formatPrice } = (0, RegionsProvider_1.useRegions)();
  const { checkoutToken: token } = (0, CheckoutProvider_1.useCheckout)();
  const [checkoutLineUpdateMutation, { loading: loadingLineUpdate }] = (0,
  api_1.useCheckoutLineUpdateMutation)();
  const [removeProductFromCheckout] = (0, api_1.useRemoveProductFromCheckoutMutation)();
  const [quantity, setQuantity] = react_1.default.useState();
  const [errors, setErrors] = react_1.default.useState(null);
  react_1.default.useEffect(() => {
    if (!line) return;
    setQuantity(line.quantity);
  }, [line]);
  const changeLineState = (event) => {
    var _a, _b;
    if (
      !((_b =
        (_a = event === null || event === void 0 ? void 0 : event.currentTarget) === null ||
        _a === void 0
          ? void 0
          : _a.validity) === null || _b === void 0
        ? void 0
        : _b.valid)
    )
      return;
    setQuantity(parseFloat(event.currentTarget.value));
  };
  const onQuantityUpdate = (event) =>
    __awaiter(this, void 0, void 0, function* () {
      var _j, _k, _l, _m, _o;
      changeLineState(event);
      if (
        !((_k =
          (_j = event === null || event === void 0 ? void 0 : event.currentTarget) === null ||
          _j === void 0
            ? void 0
            : _j.validity) === null || _k === void 0
          ? void 0
          : _k.valid) ||
        ((_l = event === null || event === void 0 ? void 0 : event.currentTarget) === null ||
        _l === void 0
          ? void 0
          : _l.value) === ""
      )
        return;
      const result = yield checkoutLineUpdateMutation({
        variables: {
          token,
          lines: [
            {
              quantity: parseFloat(event.currentTarget.value),
              variantId: (line === null || line === void 0 ? void 0 : line.variant.id) || "",
            },
          ],
          locale: query.locale,
        },
      });
      const mutationErrors =
        (_o = (_m = result.data) === null || _m === void 0 ? void 0 : _m.checkoutLinesUpdate) ===
          null || _o === void 0
          ? void 0
          : _o.errors;
      if (mutationErrors && mutationErrors.length > 0) {
        setErrors(mutationErrors);
      }
    });
  if (!line) return null;
  return (
    <>
      <div className="flex-shrink-0 bg-white w-32 h-32 sm:w-48 sm:h-48 border object-center object-cover relative">
        {((_a = line.variant.product) === null || _a === void 0 ? void 0 : _a.thumbnail) && (
          <image_1.default
            src={
              (_c =
                (_b = line.variant.product) === null || _b === void 0 ? void 0 : _b.thumbnail) ===
                null || _c === void 0
                ? void 0
                : _c.url
            }
            alt={
              ((_e =
                (_d = line.variant.product) === null || _d === void 0 ? void 0 : _d.thumbnail) ===
                null || _e === void 0
                ? void 0
                : _e.alt) || ""
            }
            layout="fill"
          />
        )}
      </div>

      <div className="ml-8 flex-1 flex flex-col justify-center">
        <div>
          <div className="flex justify-between">
            <div className="pr-6">
              <h3 className="text-md md:text-xl font-bold">
                <link_1.default
                  href={paths.products
                    ._slug(
                      (_g =
                        (_f = line === null || line === void 0 ? void 0 : line.variant) === null ||
                        _f === void 0
                          ? void 0
                          : _f.product) === null || _g === void 0
                        ? void 0
                        : _g.slug
                    )
                    .$url()}
                  passHref
                  legacyBehavior
                >
                  <a
                    href="pass"
                    className="font-medium text-gray-700 hover:text-gray-800"
                    data-testid={`cartProductItem${
                      line === null || line === void 0 ? void 0 : line.variant.product.name
                    }`}
                  >
                    {(0, translations_1.translate)(
                      line === null || line === void 0 ? void 0 : line.variant.product,
                      "name"
                    )}
                  </a>
                </link_1.default>
              </h3>
              <h4 className="text-md font-regular">
                <p
                  className="text-gray-700 hover:text-gray-800"
                  data-testid={`cartVariantItem${
                    line === null || line === void 0 ? void 0 : line.variant.name
                  }`}
                >
                  {(0, translations_1.translate)(
                    line === null || line === void 0 ? void 0 : line.variant,
                    "name"
                  )}
                </p>
              </h4>

              <button
                type="button"
                onClick={() =>
                  removeProductFromCheckout({
                    variables: {
                      checkoutToken: token,
                      lineId: line === null || line === void 0 ? void 0 : line.id,
                      locale: query.locale,
                    },
                  })
                }
                className="text-md font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
              >
                <span>{t.formatMessage(translations_2.messages.removeButton)}</span>
              </button>
              {errors && (
                <div>
                  {errors.map((err) => (
                    <span className="text-red-500 text-sm font-medium" key={err.field}>
                      {err.message}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-items-end space-x-4 ">
              <input
                type="number"
                className={(0, clsx_1.default)(
                  "h-8 md:mt-2 w-10 md:w-16 block border-gray-300 rounded-md shadow-sm text-base",
                  errors && "border-red-500"
                )}
                defaultValue={quantity}
                onFocus={() => {
                  setErrors(null);
                }}
                onChange={changeLineState}
                onBlur={onQuantityUpdate}
                onKeyPress={(ev) => {
                  if (ev.key === "Enter") {
                    return onQuantityUpdate(ev);
                  }
                }}
                min={1}
                required
                disabled={loadingLineUpdate}
                pattern="[0-9]*"
              />
              <p className="text-md md:text-xl text-gray-900 text-right">
                {formatPrice(
                  (_h = line === null || line === void 0 ? void 0 : line.totalPrice) === null ||
                    _h === void 0
                    ? void 0
                    : _h.gross
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
exports.CheckoutLineItem = CheckoutLineItem;
exports.default = CheckoutLineItem;

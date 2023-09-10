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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
const clsx_1 = __importDefault(require("clsx"));
const link_1 = __importDefault(require("next/link"));
const router_1 = require("next/router");
const _404_1 = __importDefault(require("pages/404"));
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const components_1 = require("@/components");
const AttributeDetails_1 = require("@/components/product/AttributeDetails");
const ProductGallery_1 = require("@/components/product/ProductGallery");
const RegionsProvider_1 = require("@/components/RegionsProvider");
const ProductPageSeo_1 = require("@/components/seo/ProductPageSeo");
const translations_1 = require("@/components/translations");
const paths_1 = require("@/lib/paths");
const product_1 = require("@/lib/product");
const CheckoutProvider_1 = require("@/lib/providers/CheckoutProvider");
const regions_1 = require("@/lib/regions");
const translations_2 = require("@/lib/translations");
const api_1 = require("@/saleor/api");
const useAuthenticatedApolloClient_1 = require("@/lib/auth/useAuthenticatedApolloClient");
const useUser_1 = require("@/lib/useUser");
const getStaticPaths = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return {
      paths: [],
      fallback: "blocking",
    };
  });
exports.getStaticPaths = getStaticPaths;
const getStaticProps = (context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (!context.params) {
      return {
        props: {},
        notFound: true,
      };
    }
    const productSlug = context.params.slug.toString();
    const response = yield useAuthenticatedApolloClient_1.serverApolloClient.query({
      query: api_1.ProductBySlugDocument,
      variables: Object.assign({ slug: productSlug }, (0, regions_1.contextToRegionQuery)(context)),
    });
    return {
      props: {
        product: response.data.product,
      },
      revalidate: 60, // value in seconds, how often ISR will trigger on the server
    };
  });
exports.getStaticProps = getStaticProps;
function ProductPage({ product }) {
  var _a, _b, _c, _d, _e, _f, _g;
  const router = (0, router_1.useRouter)();
  const paths = (0, paths_1.usePaths)();
  const t = (0, react_intl_1.useIntl)();
  const { currentChannel, formatPrice, query } = (0, RegionsProvider_1.useRegions)();
  const { checkoutToken, setCheckoutToken, checkout } = (0, CheckoutProvider_1.useCheckout)();
  const [createCheckout] = (0, api_1.useCreateCheckoutMutation)();
  const { user } = (0, useUser_1.useUser)();
  const [addProductToCheckout] = (0, api_1.useCheckoutAddProductLineMutation)();
  const [loadingAddToCheckout, setLoadingAddToCheckout] = (0, react_1.useState)(false);
  const [addToCartError, setAddToCartError] = (0, react_1.useState)("");
  if (!(product === null || product === void 0 ? void 0 : product.id)) {
    return <_404_1.default />;
  }
  const selectedVariantID = (0, product_1.getSelectedVariantID)(product, router);
  const selectedVariant =
    ((_a = product === null || product === void 0 ? void 0 : product.variants) === null ||
    _a === void 0
      ? void 0
      : _a.find((v) => (v === null || v === void 0 ? void 0 : v.id) === selectedVariantID)) ||
    undefined;
  const onAddToCart = () =>
    __awaiter(this, void 0, void 0, function* () {
      var _h, _j, _k, _l, _m, _o;
      // Clear previous error messages
      setAddToCartError("");
      // Block add to checkout button
      setLoadingAddToCheckout(true);
      const errors = [];
      if (!selectedVariantID) {
        return;
      }
      if (checkout) {
        // If checkout is already existing, add products
        const { data: addToCartData } = yield addProductToCheckout({
          variables: {
            checkoutToken,
            variantId: selectedVariantID,
            locale: query.locale,
          },
        });
        (_h =
          addToCartData === null || addToCartData === void 0
            ? void 0
            : addToCartData.checkoutLinesAdd) === null || _h === void 0
          ? void 0
          : _h.errors.forEach((e) => {
              if (e) {
                errors.push(e);
              }
            });
      } else {
        // Theres no checkout, we have to create one
        const { data: createCheckoutData } = yield createCheckout({
          variables: {
            email: user === null || user === void 0 ? void 0 : user.email,
            channel: currentChannel.slug,
            lines: [
              {
                quantity: 1,
                variantId: selectedVariantID,
              },
            ],
          },
        });
        (_j =
          createCheckoutData === null || createCheckoutData === void 0
            ? void 0
            : createCheckoutData.checkoutCreate) === null || _j === void 0
          ? void 0
          : _j.errors.forEach((e) => {
              if (e) {
                errors.push(e);
              }
            });
        if (
          (_l =
            (_k =
              createCheckoutData === null || createCheckoutData === void 0
                ? void 0
                : createCheckoutData.checkoutCreate) === null || _k === void 0
              ? void 0
              : _k.checkout) === null || _l === void 0
            ? void 0
            : _l.token
        ) {
          setCheckoutToken(
            (_o =
              (_m =
                createCheckoutData === null || createCheckoutData === void 0
                  ? void 0
                  : createCheckoutData.checkoutCreate) === null || _m === void 0
                ? void 0
                : _m.checkout) === null || _o === void 0
              ? void 0
              : _o.token
          );
        }
      }
      // Enable button
      setLoadingAddToCheckout(false);
      if (errors.length === 0) {
        // Product successfully added
        return;
      }
      // Display error message
      const errorMessages = errors.map((e) => e.message || "") || [];
      setAddToCartError(errorMessages.join("\n"));
    });
  const isAddToCartButtonDisabled =
    !selectedVariant ||
    (selectedVariant === null || selectedVariant === void 0
      ? void 0
      : selectedVariant.quantityAvailable) === 0 ||
    loadingAddToCheckout;
  const description = (0, translations_2.translate)(product, "description");
  const price =
    (_d =
      (_c = (_b = product.pricing) === null || _b === void 0 ? void 0 : _b.priceRange) === null ||
      _c === void 0
        ? void 0
        : _c.start) === null || _d === void 0
      ? void 0
      : _d.gross;
  const shouldDisplayPrice =
    ((_e = product.variants) === null || _e === void 0 ? void 0 : _e.length) === 1 && price;
  return (
    <>
      <ProductPageSeo_1.ProductPageSeo product={product} />
      <main
        className={(0, clsx_1.default)(
          "grid grid-cols-1 gap-[3rem] max-h-full overflow-auto md:overflow-hidden container pt-8 px-8 md:grid-cols-3"
        )}
      >
        <div className="col-span-2">
          <ProductGallery_1.ProductGallery product={product} selectedVariant={selectedVariant} />
        </div>
        <div className="space-y-5 mt-10 md:mt-0">
          <div>
            <h1
              className="text-4xl font-bold tracking-tight text-gray-800"
              data-testid="productName"
            >
              {(0, translations_2.translate)(product, "name")}
            </h1>
            {shouldDisplayPrice && (
              <h2 className="text-xl font-bold tracking-tight text-gray-800">
                {formatPrice(price)}
              </h2>
            )}
            {!!((_f = product.category) === null || _f === void 0 ? void 0 : _f.slug) && (
              <link_1.default
                href={paths.category
                  ._slug(
                    (_g = product === null || product === void 0 ? void 0 : product.category) ===
                      null || _g === void 0
                      ? void 0
                      : _g.slug
                  )
                  .$url()}
                passHref
                legacyBehavior
              >
                <a>
                  <p className="text-md mt-2 font-medium text-gray-600 cursor-pointer">
                    {(0, translations_2.translate)(product.category, "name")}
                  </p>
                </a>
              </link_1.default>
            )}
          </div>

          <components_1.VariantSelector product={product} selectedVariantID={selectedVariantID} />

          <button
            onClick={onAddToCart}
            type="submit"
            disabled={isAddToCartButtonDisabled}
            className={(0, clsx_1.default)(
              "w-full py-3 px-8 flex items-center justify-center text-base bg-action-1 text-white disabled:bg-disabled hover:bg-white border-2 border-transparent  focus:outline-none",
              !isAddToCartButtonDisabled && "hover:border-action-1 hover:text-action-1"
            )}
            data-testid="addToCartButton"
          >
            {loadingAddToCheckout
              ? t.formatMessage(translations_1.messages.adding)
              : t.formatMessage(translations_1.messages.addToCart)}
          </button>

          {!selectedVariant && (
            <p className="text-base text-yellow-600">
              {t.formatMessage(translations_1.messages.variantNotChosen)}
            </p>
          )}

          {(selectedVariant === null || selectedVariant === void 0
            ? void 0
            : selectedVariant.quantityAvailable) === 0 && (
            <p className="text-base text-yellow-600" data-testid="soldOut">
              {t.formatMessage(translations_1.messages.soldOut)}
            </p>
          )}

          {!!addToCartError && <p>{addToCartError}</p>}

          {description && (
            <div className="space-y-6">
              <components_1.RichText jsonStringData={description} />
            </div>
          )}

          <AttributeDetails_1.AttributeDetails
            product={product}
            selectedVariant={selectedVariant}
          />
        </div>
      </main>
    </>
  );
}
exports.default = ProductPage;
ProductPage.getLayout = function getLayout(page) {
  return <components_1.Layout>{page}</components_1.Layout>;
};

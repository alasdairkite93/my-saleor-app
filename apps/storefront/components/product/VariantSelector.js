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
exports.VariantSelector = void 0;
const react_1 = require("@headlessui/react");
const clsx_1 = __importDefault(require("clsx"));
const router_1 = require("next/router");
const react_2 = __importStar(require("react"));
const paths_1 = require("@/lib/paths");
const translations_1 = require("@/lib/translations");
const RegionsProvider_1 = require("../RegionsProvider");
function VariantSelector({ product, selectedVariantID }) {
  const paths = (0, paths_1.usePaths)();
  const router = (0, router_1.useRouter)();
  const { formatPrice } = (0, RegionsProvider_1.useRegions)();
  const [selectedVariant, setSelectedVariant] = (0, react_2.useState)(selectedVariantID);
  const { variants } = product;
  // Skip displaying selector when theres less than 2 variants
  if (!variants || variants.length === 1) {
    return null;
  }
  const onChange = (value) => {
    setSelectedVariant(value);
    void router.replace(
      paths.products
        ._slug(product.slug)
        .$url(Object.assign({}, value && { query: { variant: value } })),
      undefined,
      {
        shallow: true,
        scroll: false,
      }
    );
  };
  return (
    <div className="w-full">
      <react_1.RadioGroup value={selectedVariant} onChange={onChange}>
        <div className="space-y-4">
          {variants.map((variant) => (
            <react_1.RadioGroup.Option
              key={variant.id}
              value={variant.id}
              className={({ checked }) =>
                (0, clsx_1.default)("bg-main w-full", checked && "bg-brand", !checked && "")
              }
            >
              {({ checked }) => {
                var _a, _b;
                return (
                  <div
                    className={(0, clsx_1.default)(
                      "bg-white w-full h-full relative cursor-pointer object-contain border-2",
                      checked && "border-brand",
                      !checked && "hover:border-main border-main-2"
                    )}
                  >
                    <react_1.RadioGroup.Label as="div" className="w-full justify-between p-4">
                      <div className="flex flex-row gap-2 w-full font-semibold text-md">
                        <div className="grow" data-testid={`variantOf${variant.name}`}>
                          {(0, translations_1.translate)(variant, "name")}
                        </div>
                        <div>
                          {formatPrice(
                            (_b =
                              (_a = variant.pricing) === null || _a === void 0
                                ? void 0
                                : _a.price) === null || _b === void 0
                              ? void 0
                              : _b.gross
                          )}
                        </div>
                      </div>
                    </react_1.RadioGroup.Label>
                  </div>
                );
              }}
            </react_1.RadioGroup.Option>
          ))}
        </div>
      </react_1.RadioGroup>
    </div>
  );
}
exports.VariantSelector = VariantSelector;
exports.default = VariantSelector;

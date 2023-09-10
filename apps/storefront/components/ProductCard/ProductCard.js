"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCard = void 0;
const outline_1 = require("@heroicons/react/outline");
const image_1 = __importDefault(require("next/legacy/image"));
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const paths_1 = require("@/lib/paths");
const translations_1 = require("@/lib/translations");
const getCardSecondaryDescription = (product) => {
  const artistAttribute = product.attributes.find(
    (attribute) => attribute.attribute.slug === "artist"
  );
  const mainValue =
    artistAttribute === null || artistAttribute === void 0 ? void 0 : artistAttribute.values[0];
  if (mainValue === null || mainValue === void 0 ? void 0 : mainValue.name) {
    return mainValue.name;
  }
  if (product.category) {
    return (0, translations_1.translate)(product.category, "name");
  }
  return "";
};
function ProductCard({ product }) {
  var _a, _b;
  const paths = (0, paths_1.usePaths)();
  const secondaryDescription = getCardSecondaryDescription(product);
  const thumbnailUrl =
    (_b =
      (_a = product.media) === null || _a === void 0
        ? void 0
        : _a.find((media) => media.type === "IMAGE")) === null || _b === void 0
      ? void 0
      : _b.url;
  return (
    <li key={product.id} className="w-full">
      <link_1.default
        href={paths.products._slug(product.slug).$url()}
        prefetch={false}
        passHref
        legacyBehavior
      >
        <a href="pass">
          <div className="bg-main active:bg-brand w-full aspect-1">
            <div className="bg-white w-full h-full relative object-contain ">
              {thumbnailUrl ? (
                <image_1.default src={thumbnailUrl} width={512} height={512} />
              ) : (
                <div className="grid justify-items-center content-center h-full w-full">
                  <outline_1.PhotographIcon className="h-10 w-10 content-center" />
                </div>
              )}
            </div>
          </div>
          <p
            className="block mt-2 text-md font-extrabold text-main truncate"
            data-testid={`productName${product.name}`}
          >
            {(0, translations_1.translate)(product, "name")}
          </p>
          {secondaryDescription && (
            <p className="block text-md font-normal text-main underline">{secondaryDescription}</p>
          )}
        </a>
      </link_1.default>
    </li>
  );
}
exports.ProductCard = ProductCard;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPageSeo = void 0;
const next_seo_1 = require("next-seo");
const const_1 = require("@/lib/const");
function ProductPageSeo({ product }) {
  var _a, _b;
  const productName = product.seoTitle || product.name;
  const title = productName
    ? `${productName} - ${const_1.STOREFRONT_NAME}`
    : const_1.STOREFRONT_NAME;
  const description =
    (product === null || product === void 0 ? void 0 : product.seoDescription) || "";
  const thumbnailUrl = ((_a = product.thumbnail) === null || _a === void 0 ? void 0 : _a.url) || "";
  const thumbnailAlt =
    ((_b = product.thumbnail) === null || _b === void 0 ? void 0 : _b.alt) || title;
  return (
    <next_seo_1.NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: thumbnailUrl,
            alt: thumbnailAlt,
          },
        ],
        site_name: "Saleor Tutorial",
      }}
    />
  );
}
exports.ProductPageSeo = ProductPageSeo;
exports.default = ProductPageSeo;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryPageSeo = void 0;
const next_seo_1 = require("next-seo");
const const_1 = require("@/lib/const");
function CategoryPageSeo({ category }) {
  const title = (category === null || category === void 0 ? void 0 : category.seoTitle)
    ? `${category === null || category === void 0 ? void 0 : category.seoTitle} - ${
        const_1.STOREFRONT_NAME
      }`
    : const_1.STOREFRONT_NAME;
  const seoDescription = category.seoDescription || "";
  let images = [
    {
      url: "https://og-image.vercel.app/React%20Storefront.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fsaleor.io%2Fstatic%2Flogo-ad1b99aa7c6f5acf58a61640af760cfd.svg",
      alt: "Hero image",
    },
  ];
  if (category.backgroundImage) {
    images = [
      {
        url: category.backgroundImage.url,
        alt: category.backgroundImage.alt || "Category lead image",
      },
      ...images,
    ];
  }
  return (
    <next_seo_1.NextSeo
      title={title}
      description={seoDescription}
      openGraph={{
        title,
        description: seoDescription,
        images,
        site_name: const_1.STOREFRONT_NAME,
      }}
    />
  );
}
exports.CategoryPageSeo = CategoryPageSeo;
exports.default = CategoryPageSeo;

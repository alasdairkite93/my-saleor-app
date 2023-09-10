"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundSeo = void 0;
const next_seo_1 = require("next-seo");
const const_1 = require("@/lib/const");
function NotFoundSeo() {
  const title = `Page Not found - ${const_1.STOREFRONT_NAME}`;
  const description = "Page not found.";
  return (
    <next_seo_1.NextSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        images: [
          {
            url: "https://og-image.vercel.app/React%20Storefront.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fsaleor.io%2Fstatic%2Flogo-ad1b99aa7c6f5acf58a61640af760cfd.svg",
            alt: "Saleor tutorial hero image",
          },
        ],
        site_name: "Saleor Tutorial",
      }}
    />
  );
}
exports.NotFoundSeo = NotFoundSeo;
exports.default = NotFoundSeo;

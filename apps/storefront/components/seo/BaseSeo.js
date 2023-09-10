"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSeo = void 0;
const router_1 = require("next/router");
const next_seo_1 = require("next-seo");
const url_join_1 = __importDefault(require("url-join"));
const const_1 = require("@/lib/const");
function BaseSeo({ title, description }) {
  const seoTitle = title ? `${title} - ${const_1.STOREFRONT_NAME}` : const_1.STOREFRONT_NAME;
  const seoDescription = description || "";
  const { asPath } = (0, router_1.useRouter)();
  const url = (0, url_join_1.default)(process.env.NEXT_PUBLIC_VERCEL_URL || "", asPath);
  return (
    <next_seo_1.NextSeo
      title={seoTitle}
      description={seoDescription}
      openGraph={{
        title: seoTitle,
        description: seoDescription,
        images: [
          {
            url: "https://og-image.vercel.app/React%20Storefront.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fsaleor.io%2Fstatic%2Flogo-ad1b99aa7c6f5acf58a61640af760cfd.svg",
            alt: "Hero image",
            width: 2048,
            height: 1170,
          },
        ],
        site_name: const_1.STOREFRONT_NAME,
        url,
      }}
    />
  );
}
exports.BaseSeo = BaseSeo;

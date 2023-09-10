"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = void 0;
const images_1 = require("@/checkout-storefront/images");
const svgSrc_1 = require("@/checkout-storefront/lib/svgSrc");
const LanguageSelect_1 = require("@/checkout-storefront/sections/PageHeader/LanguageSelect");
const PageHeader = () => {
  return (
    <div className="page-header">
      <img src={(0, svgSrc_1.getSvgSrc)(images_1.SaleorLogo)} alt="logo" className="logo" />
      <LanguageSelect_1.LanguageSelect />
    </div>
  );
};
exports.PageHeader = PageHeader;

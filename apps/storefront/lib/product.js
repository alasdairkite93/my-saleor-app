"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedVariantID = exports.getProductAttributes = void 0;
/**
 * When a variant is selected, the variant attributes are shown together with
 * the attributes of the product. Otherwise, only the product
 * attributes are shown
 * @param   product  The product object
 * @param   selectedVariant   The selected variant object
 * @return  The attributes that will be shown to the user for the chosen product
 */
const getProductAttributes = (product, selectedVariant) => {
  if (selectedVariant) return product.attributes.concat(selectedVariant.attributes);
  return product.attributes;
};
exports.getProductAttributes = getProductAttributes;
const getSelectedVariantID = (product, router) => {
  var _a, _b, _c;
  // Check, if variant is already in the url
  const urlVariant =
    typeof window !== "undefined" && router
      ? (_a = router.query.variant) === null || _a === void 0
        ? void 0
        : _a.toString()
      : undefined;
  if (
    !!urlVariant &&
    ((_b = product.variants) === null || _b === void 0
      ? void 0
      : _b.find((p) => (p === null || p === void 0 ? void 0 : p.id) === urlVariant))
  ) {
    // case, where url contain valid variant id
    return urlVariant;
  }
  if (
    ((_c = product === null || product === void 0 ? void 0 : product.variants) === null ||
    _c === void 0
      ? void 0
      : _c.length) === 1
  ) {
    // case, where product has only one variant to choose from, so we pre-select it
    return product.variants[0].id;
  }
  // there are multiple variants and user has not chosen any
  return undefined;
};
exports.getSelectedVariantID = getSelectedVariantID;

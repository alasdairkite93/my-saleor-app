"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoThumbnail = exports.getYouTubeIDFromURL = exports.getGalleryMedia = void 0;
const util_1 = require("@/lib/util");
/**
 * If a variant has been selected by the user and this variant has media, return only those items.
 * Otherwise, all product media are returned.
 * @param product  The product object
 * @param selectedVariant   The selected variant object
 */
const getGalleryMedia = ({ product, selectedVariant }) => {
  var _a, _b, _c;
  if (
    selectedVariant &&
    ((_a = selectedVariant.media) === null || _a === void 0 ? void 0 : _a.length) !== 0
  )
    return (
      ((_b = selectedVariant.media) === null || _b === void 0
        ? void 0
        : _b.filter(util_1.notNullable)) || []
    );
  return (
    ((_c = product === null || product === void 0 ? void 0 : product.media) === null ||
    _c === void 0
      ? void 0
      : _c.filter(util_1.notNullable)) || []
  );
};
exports.getGalleryMedia = getGalleryMedia;
const getYouTubeIDFromURL = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : undefined;
};
exports.getYouTubeIDFromURL = getYouTubeIDFromURL;
const getVideoThumbnail = (videoUrl) => {
  const videoId = (0, exports.getYouTubeIDFromURL)(videoUrl);
  if (!videoId) {
    return null;
  }
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};
exports.getVideoThumbnail = getVideoThumbnail;

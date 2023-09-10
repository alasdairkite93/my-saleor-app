"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageExpand = void 0;
const outline_1 = require("@heroicons/react/outline");
const image_1 = __importDefault(require("next/legacy/image"));
const react_1 = __importDefault(require("react"));
function ImageExpand({ image, onRemoveExpand }) {
  if (!image) {
    return null;
  }
  return (
    <div className="min-h-screen absolute overflow-hidden grid grid-cols-1 mx-auto px-8 md:h-full w-full bg-gray-100">
      <button
        type="button"
        className="absolute grid content-center justify-center right-0 p-8 h-6 w-6 z-40 mt-18"
        aria-label="Close"
        onClick={onRemoveExpand}
      >
        <outline_1.XIcon className="w-6 h-6" />
      </button>
      <div className="w-full h-full absolute md:mt-10">
        <image_1.default src={image.url} alt={image.alt} layout="fill" objectFit="scale-down" />
      </div>
    </div>
  );
}
exports.ImageExpand = ImageExpand;
exports.default = ImageExpand;

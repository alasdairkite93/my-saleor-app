"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParsedCssBody = void 0;
const hex_rgb_1 = __importDefault(require("hex-rgb"));
const lodash_es_1 = require("lodash-es");
const getParsedCssBody = (brandingColors) => {
  const { errorColor, successColor } = brandingColors;
  const getRgbString = (hexColor) => {
    const { red, green, blue } = (0, hex_rgb_1.default)(hexColor);
    return `${red}, ${green}, ${blue}`;
  };
  /* we use this to style alerts from toastify lib */
  const alertColorsCSS = `
  --toastify-icon-color-error: ${errorColor};
  --toastify-icon-color-success: ${successColor};
  --toastify-color-error: rgba(${getRgbString(errorColor)}, 0.4);
  --toastify-color-success: rgba(${getRgbString(successColor)}, 0.4);
  `;
  const bodyCSS = (0, lodash_es_1.reduce)(
    brandingColors,
    (cssString, hexColor, varName) => {
      if (!hexColor || !/^#[0-9A-F]{6}$/i.test(hexColor)) {
        return cssString;
      }
      const parsedVarName = (0, lodash_es_1.kebabCase)(varName);
      const rgbColor = getRgbString(hexColor);
      const nextLineHex = `--${parsedVarName}: ${hexColor};`;
      const nextLineRGB = `--${parsedVarName}-rgb: ${rgbColor};`;
      return cssString.concat(nextLineHex, "\n", nextLineRGB, "\n");
    },
    ""
  );
  return `body {
    ${bodyCSS}
    ${alertColorsCSS}
  }`;
};
exports.getParsedCssBody = getParsedCssBody;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSvgSrc = void 0;
const getSvgSrc = (svg) => (typeof svg === "string" ? svg : svg.src);
exports.getSvgSrc = getSvgSrc;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnAboutMissingTranslation = void 0;
const warnAboutMissingTranslation = (messageKey = "") => {
  console.warn(`Missing translation for key: ${messageKey}`);
};
exports.warnAboutMissingTranslation = warnAboutMissingTranslation;

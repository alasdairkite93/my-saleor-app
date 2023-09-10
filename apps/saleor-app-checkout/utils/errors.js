"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
function getErrorMessage(error, fallbackMessage) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (fallbackMessage) return fallbackMessage;
  return String(error);
}
exports.getErrorMessage = getErrorMessage;

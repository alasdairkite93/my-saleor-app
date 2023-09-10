"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetadataErrorMessage = void 0;
const errorMessages_1 = require("./errorMessages");
const camelCase_1 = __importDefault(require("lodash-es/camelCase"));
const getMetadataErrorMessage = (code, intl) => {
  const errorMessage =
    errorMessages_1.commonErrorMessages[(0, camelCase_1.default)(code)] ||
    errorMessages_1.commonErrorMessages.unknown;
  return intl.formatMessage(errorMessage);
};
exports.getMetadataErrorMessage = getMetadataErrorMessage;

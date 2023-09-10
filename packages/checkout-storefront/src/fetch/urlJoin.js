"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlJoinTrailingSlash = void 0;
const url_join_1 = __importDefault(require("url-join"));
/**
 * Like url-join but always with trailing slash
 */
const urlJoinTrailingSlash = (...parts) => {
  return (0, url_join_1.default)(...parts, "/");
};
exports.urlJoinTrailingSlash = urlJoinTrailingSlash;

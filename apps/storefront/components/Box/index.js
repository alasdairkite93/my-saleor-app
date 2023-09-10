"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Box = void 0;
var Box_1 = require("./Box");
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function () {
    return Box_1.Box;
  },
});
var Box_2 = require("./Box");
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return __importDefault(Box_2).default;
  },
});

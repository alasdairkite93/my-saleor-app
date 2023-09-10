"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEditorJSData = exports.notNullable = exports.formatAsMoney = void 0;
const regions_1 = require("@/lib/regions");
const formatAsMoney = (amount = 0, currency = "USD", locale = regions_1.DEFAULT_LOCALE) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
exports.formatAsMoney = formatAsMoney;
// Returns true for non nullable values
function notNullable(value) {
  return value !== null && value !== undefined;
}
exports.notNullable = notNullable;
const parseEditorJSData = (jsonStringData) => {
  var _a;
  if (!jsonStringData) {
    return null;
  }
  let data;
  try {
    data = JSON.parse(jsonStringData);
  } catch (e) {
    return null;
  }
  if (!((_a = data.blocks) === null || _a === void 0 ? void 0 : _a.length)) {
    // No data to render
    return null;
  }
  // Path for compatibility with data from older version od EditorJS
  if (!data.time) {
    data.time = Date.now().toString();
  }
  if (!data.version) {
    data.version = "2.22.2";
  }
  return data;
};
exports.parseEditorJSData = parseEditorJSData;

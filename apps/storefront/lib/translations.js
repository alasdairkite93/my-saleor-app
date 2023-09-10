"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
function translate(obj, key) {
  var _a;
  const result = ((_a = obj.translation) === null || _a === void 0 ? void 0 : _a[key]) || obj[key];
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- typescript seems to think this assertions IS necessary
  return result;
}
exports.translate = translate;

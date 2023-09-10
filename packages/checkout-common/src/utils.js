"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertUnreachable = exports.anythingToString = void 0;
const anythingToString = (value) => {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return String(value);
  }
};
exports.anythingToString = anythingToString;
function assertUnreachable(value) {
  throw new Error(`Unexpected case: ${(0, exports.anythingToString)(value)}`);
}
exports.assertUnreachable = assertUnreachable;

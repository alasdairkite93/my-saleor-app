"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSafeContext = void 0;
const react_1 = __importDefault(require("react"));
function createSafeContext() {
  const context = react_1.default.createContext(undefined);
  function useContext() {
    const value = react_1.default.useContext(context);
    if (value === undefined) {
      throw new Error("useContext must be inside a Provider with a value");
    }
    return value;
  }
  return [useContext, context.Provider];
}
exports.createSafeContext = createSafeContext;

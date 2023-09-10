"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const clsx_1 = __importDefault(require("clsx"));
const styles =
  "bg-blue-100 border border-blue-300 rounded-md shadow-sm py-2 px-4 text-base font-medium hover:bg-blue-200";
function Button(_a) {
  var { className } = _a,
    rest = __rest(_a, ["className"]);
  return <button type="button" className={(0, clsx_1.default)(styles, className)} {...rest} />;
}
exports.Button = Button;

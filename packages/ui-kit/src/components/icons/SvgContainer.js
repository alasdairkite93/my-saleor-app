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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgContainer = void 0;
const SvgContainer = (_a) => {
  var { size } = _a,
    rest = __rest(_a, ["size"]);
  return (
    <svg
      width={size}
      height={size}
      viewBox={size ? `0 0 ${size} ${size}` : undefined}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    />
  );
};
exports.SvgContainer = SvgContainer;

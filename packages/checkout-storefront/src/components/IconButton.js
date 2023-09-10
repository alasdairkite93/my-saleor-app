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
exports.IconButton = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const IconButton = (_a) => {
  var { ariaLabel } = _a,
    rest = __rest(_a, ["ariaLabel"]);
  return <ui_kit_1.IconButton type="button" aria-label={ariaLabel} {...rest} />;
};
exports.IconButton = IconButton;

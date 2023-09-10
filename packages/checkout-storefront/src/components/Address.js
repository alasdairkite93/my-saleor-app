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
exports.Address = void 0;
const ui_kit_1 = require("@saleor/ui-kit");
const compact_1 = __importDefault(require("lodash-es/compact"));
const react_1 = __importDefault(require("react"));
const Address = (_a) => {
  var { address, children } = _a,
    textProps = __rest(_a, ["address", "children"]);
  const name = `${address.firstName} ${address.lastName}`;
  const { phone, city, countryArea, postalCode, streetAddress1, country } = address;
  return (
    <div className="flex flex-col pointer-events-none">
      <ui_kit_1.Text {...textProps} weight="semibold">
        {name}
      </ui_kit_1.Text>
      <ui_kit_1.Text {...textProps}>{phone}</ui_kit_1.Text>
      <ui_kit_1.Text {...textProps}>
        {(0, compact_1.default)([streetAddress1, city, postalCode]).join(", ")}
      </ui_kit_1.Text>
      <ui_kit_1.Text {...textProps}>
        {(0, compact_1.default)([countryArea, country.country]).join(", ")}
      </ui_kit_1.Text>
      {children}
    </div>
  );
};
exports.Address = Address;

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
const core_1 = require("@material-ui/core");
const react_1 = __importDefault(require("react"));
const AdyenIconDark = (0, core_1.createSvgIcon)(
  <g fill="#0abf53">
    <path d="M195.39557,139.59741H140.59711v17.44947l35.7157.00018a4.00008,4.00008,0,0,1,4,4v30.89923h-7.633a4,4,0,0,1-4-4V165.772H153.59705a14,14,0,0,0-14,14v15.624a14,14,0,0,0,14,14h55.79852V153.59741A14,14,0,0,0,195.39557,139.59741Z" />
    <path d="M261.74341,191.94629h-7.633a4,4,0,0,1-4-4V139.59717H235.02856a14,14,0,0,0-14,14V195.396a14,14,0,0,0,14,14h55.79853V110.51465H261.74432Z" />
    <path d="M343.17535,191.94629h-7.633a4,4,0,0,1-4-4V139.59717H302.46008V195.396a14,14,0,0,0,14,14H343.1759v8.72485H303.46014V238.4751h54.79853a14,14,0,0,0,14-14V139.59717H343.17535Z" />
    <path d="M439.69025,139.59741H383.89172V195.396a14,14,0,0,0,14,14h54.7984V191.94629H416.97449a4,4,0,0,1-4-4V157.04736h7.633a4,4,0,0,1,4,4v22.17408h15.08277a14,14,0,0,0,14-14v-15.624A14,14,0,0,0,439.69025,139.59741Z" />
    <path d="M521.12164,139.59741H465.32318V209.396h29.08276V157.04688h7.633a4.01178,4.01178,0,0,1,4,4V209.396h29.0827V153.59741A14,14,0,0,0,521.12164,139.59741Z" />
  </g>,
  "AdyenDark"
);
const AdyenIconLight = (0, core_1.createSvgIcon)(
  <g fill="#FFFFFF">
    <path d="M195.4,139.6h-54.8V157l35.7,0c2.2,0,4,1.8,4,4v30.9h-7.6c-2.2,0-4-1.8-4-4v-22.2h-15.1c-7.7,0-14,6.3-14,14   l0,0v15.6c0,7.7,6.3,14,14,14h55.8v-55.8C209.4,145.9,203.1,139.6,195.4,139.6z" />
    <path d="M261.7,191.9h-7.6c-2.2,0-4-1.8-4-4v-48.3H235c-7.7,0-14,6.3-14,14v41.8c0,7.7,6.3,14,14,14h55.8v-98.9h-29.1   L261.7,191.9z" />
    <path d="M343.2,191.9h-7.6c-2.2,0-4-1.8-4-4v-48.3h-29.1v55.8c0,7.7,6.3,14,14,14h26.7v8.7h-39.7v20.4h54.8   c7.7,0,14-6.3,14-14v-84.9h-29.1V191.9z" />
    <path d="M439.7,139.6h-55.8v55.8c0,7.7,6.3,14,14,14h54.8v-17.4H417c-2.2,0-4-1.8-4-4V157h7.6c2.2,0,4,1.8,4,4v22.2   h15.1c7.7,0,14-6.3,14-14v-15.6C453.7,145.9,447.4,139.6,439.7,139.6L439.7,139.6z" />
    <path d="M521.1,139.6h-55.8v69.8h29.1V157h7.6c2.2,0,4,1.8,4,4v48.3h29.1v-55.8C535.1,145.9,528.9,139.6,521.1,139.6z" />
  </g>,
  "AdyenLight"
);
// TODO: variant should be read from theme when app-bridge will support it
const Adyen = (_a) => {
  var { variant = "dark" } = _a,
    props = __rest(_a, ["variant"]);
  return variant === "dark" ? (
    <AdyenIconDark {...props} viewBox="139.6 110.51 395.52 127.96" />
  ) : (
    <AdyenIconLight {...props} viewBox="139.6 110.51 395.52 127.96" />
  );
};
exports.default = Adyen;

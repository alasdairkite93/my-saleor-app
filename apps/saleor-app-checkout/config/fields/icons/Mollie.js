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
const MollieIconDark = (0, core_1.createSvgIcon)(
  <g fill="#000">
    <path
      clipRule="evenodd"
      d="m286.342 65.3132c-37.175 0-67.35 30.2415-67.35 67.3438 0 37.101 30.245 67.343 67.35 67.343 37.106 0 67.35-30.242 67.35-67.343 0-37.1023-30.174-67.3438-67.35-67.3438zm0 102.8348c-19.533 0-35.425-15.89-35.425-35.421s15.892-35.4222 35.425-35.4222 35.426 15.8912 35.426 35.4222-15.893 35.421-35.426 35.421z"
      fillRule="evenodd"
    />
    <path d="m510.375 42.0021c11.6 0 21.003-9.4025 21.003-21.0011 0-11.59851-9.403-21.001-21.003-21.001-11.599 0-21.003 9.40249-21.003 21.001 0 11.5986 9.404 21.0011 21.003 21.0011z" />
    <path
      clipRule="evenodd"
      d="m148.842 65.3833c-1.75-.14-3.431-.21-5.181-.21-16.242 0-31.644 6.6503-42.706 18.4109-11.0617-11.6906-26.394-18.4109-42.4964-18.4109-32.2047 0-58.4586 26.1813-58.4586 58.3827v73.714h31.5047v-72.804c0-13.37 10.9916-25.691 23.9435-27.0211.9101-.07 1.8203-.14 2.6604-.14 14.5621 0 26.4639 11.9001 26.5339 26.4611v73.504h32.2045v-72.944c0-13.3 10.922-25.621 23.944-26.9511.91-.07 1.82-.14 2.66-.14 14.562 0 26.534 11.8301 26.604 26.3211v73.714h32.205v-72.804c0-14.77-5.461-28.9812-15.332-39.9717-9.872-11.0606-23.384-17.8509-38.086-19.111z"
      fillRule="evenodd"
    />
    <path d="m403.26 3.15015h-32.205v194.25985h32.205z" />
    <path d="m464.869 3.15015h-32.205v194.25985h32.205z" />
    <path d="m526.478 68.5334h-32.205v128.8066h32.205z" />
    <path
      clipRule="evenodd"
      d="m677 129.646c0-17.08-6.651-33.1812-18.693-45.4318-12.112-12.2506-28.074-19.0409-45.086-19.0409-.28 0-.561 0-.841 0-17.642.21-34.305 7.2103-46.766 19.741-12.462 12.5306-19.463 29.1217-19.673 46.8327-.21 18.06 6.721 35.141 19.533 48.092 12.811 12.951 29.754 20.091 47.817 20.091h.07c23.663 0 45.856-12.671 57.968-33.042l1.54-2.59-26.604-13.09-1.33 2.17c-6.651 10.99-18.202 17.501-31.014 17.501-16.383 0-30.525-10.921-34.866-26.462h97.945zm-65.04-35.2113c14.703 0 27.864 9.6603 32.485 23.3813h-64.899c4.55-13.721 17.712-23.3813 32.414-23.3813z"
      fillRule="evenodd"
    />
  </g>,
  "MollieDark"
);
const MollieIconLight = (0, core_1.createSvgIcon)(
  <g fill="#fff">
    <path
      clipRule="evenodd"
      d="m286.342 65.3132c-37.175 0-67.35 30.2415-67.35 67.3438 0 37.101 30.245 67.343 67.35 67.343 37.106 0 67.35-30.242 67.35-67.343 0-37.1023-30.174-67.3438-67.35-67.3438zm0 102.8348c-19.533 0-35.425-15.89-35.425-35.421s15.892-35.4222 35.425-35.4222 35.426 15.8912 35.426 35.4222-15.893 35.421-35.426 35.421z"
      fillRule="evenodd"
    />
    <path d="m510.375 42.0021c11.6 0 21.003-9.4025 21.003-21.0011 0-11.59851-9.403-21.001-21.003-21.001-11.599 0-21.003 9.40249-21.003 21.001 0 11.5986 9.404 21.0011 21.003 21.0011z" />
    <path
      clipRule="evenodd"
      d="m148.842 65.3833c-1.75-.14-3.431-.21-5.181-.21-16.242 0-31.644 6.6503-42.706 18.4109-11.0617-11.6906-26.394-18.4109-42.4964-18.4109-32.2047 0-58.4586 26.1813-58.4586 58.3827v73.714h31.5047v-72.804c0-13.37 10.9916-25.691 23.9435-27.0211.9101-.07 1.8203-.14 2.6604-.14 14.5621 0 26.4639 11.9001 26.5339 26.4611v73.504h32.2045v-72.944c0-13.3 10.922-25.621 23.944-26.9511.91-.07 1.82-.14 2.66-.14 14.562 0 26.534 11.8301 26.604 26.3211v73.714h32.205v-72.804c0-14.77-5.461-28.9812-15.332-39.9718-9.872-11.0605-23.384-17.8508-38.086-19.1109z"
      fillRule="evenodd"
    />
    <path d="m403.26 3.15015h-32.205v194.25985h32.205z" />
    <path d="m464.869 3.15015h-32.205v194.25985h32.205z" />
    <path d="m526.478 68.5334h-32.205v128.8066h32.205z" />
    <path
      clipRule="evenodd"
      d="m677 129.646c0-17.08-6.651-33.1812-18.693-45.4318-12.112-12.2506-28.074-19.0409-45.086-19.0409-.28 0-.561 0-.841 0-17.642.21-34.305 7.2103-46.766 19.741-12.462 12.5306-19.463 29.1217-19.673 46.8327-.21 18.06 6.721 35.141 19.533 48.092 12.811 12.951 29.754 20.091 47.817 20.091h.07c23.663 0 45.856-12.671 57.968-33.042l1.54-2.59-26.604-13.09-1.33 2.17c-6.651 10.99-18.202 17.501-31.014 17.501-16.383 0-30.525-10.921-34.866-26.462h97.945zm-65.04-35.2113c14.703 0 27.864 9.6603 32.485 23.3813h-64.899c4.55-13.721 17.712-23.3813 32.414-23.3813z"
      fillRule="evenodd"
    />
  </g>,
  "MollieLight"
);
// TODO: variant should be read from theme when app-bridge will support it
const Mollie = (_a) => {
  var { variant = "dark" } = _a,
    props = __rest(_a, ["variant"]);
  return variant === "dark" ? (
    <MollieIconDark {...props} viewBox="0 0 677 200" />
  ) : (
    <MollieIconLight {...props} viewBox="0 0 677 200" />
  );
};
exports.default = Mollie;

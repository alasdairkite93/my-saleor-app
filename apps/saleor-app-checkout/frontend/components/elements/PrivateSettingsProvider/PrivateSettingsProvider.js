"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.usePrivateSettingsContext = void 0;
const defaults_1 = require("@/saleor-app-checkout/config/defaults");
const createSafeContext_1 = __importDefault(
  require("@/saleor-app-checkout/frontend/misc/createSafeContext")
);
const react_1 = require("react");
(_a = (0, createSafeContext_1.default)()),
  (exports.usePrivateSettingsContext = _a[0]),
  (exports.Provider = _a[1]);
const PrivateSettingsProvider = (props) => {
  const [privateSettings, setPrivateSettings] = (0, react_1.useState)(
    defaults_1.defaultPrivateSettings
  );
  return (
    <exports.Provider
      value={{
        privateSettings,
        setPrivateSettings,
      }}
      {...props}
    />
  );
};
exports.default = PrivateSettingsProvider;

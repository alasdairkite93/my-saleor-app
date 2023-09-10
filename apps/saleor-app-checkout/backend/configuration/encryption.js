"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptSetting = exports.encryptSetting = exports.obfuscateValue = void 0;
const constants_1 = require("@/saleor-app-checkout/constants");
const crypto_js_1 = __importDefault(require("crypto-js"));
const ts_invariant_1 = __importDefault(require("ts-invariant"));
const obfuscateValue = (value) => {
  const unobfuscatedLength = Math.min(4, value.length - 4);
  // if value is 4 characters or less, obfuscate entire value
  if (unobfuscatedLength <= 0) {
    return "••••";
  }
  const unobfuscatedValue = value.slice(-unobfuscatedLength);
  return "••••" + " " + unobfuscatedValue;
};
exports.obfuscateValue = obfuscateValue;
const encryptSetting = (settingValue) => {
  (0, ts_invariant_1.default)(
    constants_1.serverEnvVars.settingsEncryptionSecret,
    "Cannot encrypt settings when SETTINGS_ENCRYPTION_SECRET is not configured"
  );
  return {
    encrypted: true,
    value:
      crypto_js_1.default.AES.encrypt(
        settingValue,
        constants_1.serverEnvVars.settingsEncryptionSecret
      ).toString() || "",
  };
};
exports.encryptSetting = encryptSetting;
const decryptSetting = (settingValue, obfuscateEncryptedData) => {
  (0, ts_invariant_1.default)(
    constants_1.serverEnvVars.settingsEncryptionSecret,
    "Cannot decrypt settings when SETTINGS_ENCRYPTION_SECRET is not configured"
  );
  const decrypted =
    crypto_js_1.default.AES.decrypt(
      settingValue.value,
      constants_1.serverEnvVars.settingsEncryptionSecret
    ).toString(crypto_js_1.default.enc.Utf8) || "";
  if (obfuscateEncryptedData) {
    return (0, exports.obfuscateValue)(decrypted);
  }
  return decrypted;
};
exports.decryptSetting = decryptSetting;

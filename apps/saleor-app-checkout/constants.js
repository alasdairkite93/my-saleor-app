"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_TEST =
  exports.debugEnvVars =
  exports.serverEnvVarNames =
  exports.serverEnvVars =
  exports.envVarsNames =
  exports.envVars =
  exports.saleorTokenHeader =
  exports.saleorDomainHeader =
  exports.isSsr =
  exports.appName =
    void 0;
exports.appName = "Checkout";
exports.isSsr = typeof window === "undefined";
exports.saleorDomainHeader = "x-saleor-domain";
exports.saleorTokenHeader = "x-saleor-token";
// Need to use `var variable = process.env.VARIABLE;`, not `var env = process.env; var variable = env.VARIABLE;`
// https://github.com/vercel/next.js/issues/19420
exports.envVars = {};
exports.envVarsNames = {};
exports.serverEnvVars = {
  appToken: process.env["SALEOR_APP_TOKEN"],
  settingsEncryptionSecret: process.env["SETTINGS_ENCRYPTION_SECRET"],
};
exports.serverEnvVarNames = {
  appToken: "SALEOR_APP_TOKEN",
  settingsEncryptionSecret: "SETTINGS_ENCRYPTION_SECRET",
};
exports.debugEnvVars =
  process.env.NODE_ENV !== "development"
    ? null
    : {
        appUrl: process.env.DEBUG_APP_URL,
      };
exports.IS_TEST = process.env.NODE_ENV === "test";

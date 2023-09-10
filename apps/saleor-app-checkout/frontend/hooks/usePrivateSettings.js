"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrivateSettings = void 0;
const PrivateSettingsProvider_1 = require("../components/elements/PrivateSettingsProvider");
const usePrivateSettings = () => {
  const app = (0, PrivateSettingsProvider_1.usePrivateSettingsContext)();
  return app;
};
exports.usePrivateSettings = usePrivateSettings;

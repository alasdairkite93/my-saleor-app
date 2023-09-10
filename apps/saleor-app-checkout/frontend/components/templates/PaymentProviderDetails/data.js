"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSettingsData = exports.getFormDefaultValues = void 0;
const getFormDefaultValues = (selectedPaymentProvider) => {
  var _a;
  return (_a =
    selectedPaymentProvider === null || selectedPaymentProvider === void 0
      ? void 0
      : selectedPaymentProvider.settings) === null || _a === void 0
    ? void 0
    : _a.reduce(
        (values, setting) =>
          Object.assign(Object.assign({}, values), { [setting.id]: setting.value }),
        {}
      );
};
exports.getFormDefaultValues = getFormDefaultValues;
const extractSettingsData = (selectedPaymentProvider) => {
  const encryptedSettings = selectedPaymentProvider.settings.filter(({ encrypt }) => encrypt);
  const publicSettings = selectedPaymentProvider.settings.filter(({ encrypt }) => !encrypt);
  const hasEncryptedSettings = encryptedSettings.length > 0;
  const hasPublicSettings = publicSettings.length > 0;
  return {
    encryptedSettings,
    publicSettings,
    hasEncryptedSettings,
    hasPublicSettings,
  };
};
exports.extractSettingsData = extractSettingsData;

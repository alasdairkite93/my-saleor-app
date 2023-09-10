"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHttpUrl = exports.useSettingsFromValues = exports.getFormDefaultValues = void 0;
const utils_1 = require("@/saleor-app-checkout/frontend/utils");
const react_1 = require("react");
const getFormDefaultValues = (options) =>
  options.reduce(
    (settingsGroup, option) =>
      Object.assign(Object.assign({}, settingsGroup), {
        [option.id]: option.settings.reduce(
          (values, setting) =>
            Object.assign(Object.assign({}, values), { [setting.id]: setting.value }),
          {}
        ),
      }),
    {}
  );
exports.getFormDefaultValues = getFormDefaultValues;
const useSettingsFromValues = (options, watch) => {
  const [previewSettings, setPreviewSettings] = (0, react_1.useState)(
    (0, exports.getFormDefaultValues)(options)
  );
  (0, react_1.useEffect)(() => {
    setPreviewSettings((0, exports.getFormDefaultValues)(options));
  }, [options]);
  (0, react_1.useEffect)(() => {
    const subscription = watch((flattenedSettings) => {
      const updatedSettings = (0, utils_1.unflattenSettings)(
        "customizations",
        flattenedSettings,
        options
      );
      setPreviewSettings(updatedSettings);
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return previewSettings;
};
exports.useSettingsFromValues = useSettingsFromValues;
const isValidHttpUrl = (urlString) => {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_a) {
    return false;
  }
};
exports.isValidHttpUrl = isValidHttpUrl;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDynamicAppConfig = void 0;
const react_1 = require("react");
const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};
const useDynamicAppConfig = ({ checkoutAppUrl }) => {
  const [previewSettings, setPreviewSettings] = (0, react_1.useState)();
  (0, react_1.useEffect)(() => {
    if (!inIframe()) {
      return;
    }
    const eventListener = (event) => {
      if (event.origin === checkoutAppUrl) {
        setPreviewSettings(event.data);
      }
    };
    window.addEventListener("message", eventListener);
    window.parent.postMessage("mounted", checkoutAppUrl);
    return () => {
      window.removeEventListener("message", eventListener);
    };
    // because this needs to only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return previewSettings;
};
exports.useDynamicAppConfig = useDynamicAppConfig;

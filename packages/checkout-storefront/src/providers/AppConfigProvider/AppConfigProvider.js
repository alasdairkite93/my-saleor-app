"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigProvider = exports.useAppConfig = void 0;
const useFetch_1 = require("@/checkout-storefront/hooks/useFetch");
const createSafeContext_1 = require("@/checkout-storefront/providers/createSafeContext");
const fetch_1 = require("@/checkout-storefront/fetch");
const react_1 = require("react");
const utils_1 = require("./utils");
const consts_1 = require("./consts");
const lodash_es_1 = require("lodash-es");
const useDynamicAppConfig_1 = require("@/checkout-storefront/hooks/useDynamicAppConfig");
const url_1 = require("@/checkout-storefront/lib/utils/url");
const [useAppConfig, Provider] = (0, createSafeContext_1.createSafeContext)();
exports.useAppConfig = useAppConfig;
const AppConfigProvider = ({ children, env }) => {
  const { saleorApiUrl } = (0, url_1.getQueryParams)();
  const [{ data: storedAppConfig, loading }] = (0, useFetch_1.useFetch)(fetch_1.getAppConfig, {
    args: { checkoutApiUrl: env.checkoutApiUrl, saleorApiUrl },
  });
  const dynamicAppConfig = (0, useDynamicAppConfig_1.useDynamicAppConfig)({
    checkoutAppUrl: env.checkoutAppUrl,
  });
  const appConfig = dynamicAppConfig || storedAppConfig;
  const stylingRef = (0, react_1.useRef)(
    appConfig === null || appConfig === void 0 ? void 0 : appConfig.branding
  );
  const fulfillStyling = (brandingColors) =>
    Object.assign(Object.assign({}, consts_1.defaultAppColors), brandingColors);
  const getOrCreateStyleEl = () => {
    const existingStyleElement = document.getElementById(consts_1.STYLE_ELEMENT_ID);
    if (existingStyleElement) {
      existingStyleElement.innerHTML = "";
      return existingStyleElement;
    }
    const styleEl = document.createElement("style");
    styleEl.setAttribute("id", consts_1.STYLE_ELEMENT_ID);
    return styleEl;
  };
  const appendStylingToBody = (0, react_1.useCallback)((brandingColors) => {
    const css = (0, utils_1.getParsedCssBody)(fulfillStyling(brandingColors));
    const styleEl = getOrCreateStyleEl();
    styleEl.appendChild(document.createTextNode(css));
    document.head.appendChild(styleEl);
  }, []);
  const handleAppStylingUpdate = () => {
    const hasStylingConfigChanged = !(0, lodash_es_1.isEqual)(
      appConfig === null || appConfig === void 0 ? void 0 : appConfig.branding,
      stylingRef.current
    );
    if (hasStylingConfigChanged) {
      appendStylingToBody(appConfig === null || appConfig === void 0 ? void 0 : appConfig.branding);
    }
    stylingRef.current = appConfig === null || appConfig === void 0 ? void 0 : appConfig.branding;
  };
  const handleAppDefaultStylingSetup = () => appendStylingToBody(consts_1.defaultAppColors);
  (0, react_1.useEffect)(handleAppDefaultStylingSetup, [appendStylingToBody]);
  (0, react_1.useEffect)(handleAppStylingUpdate, [appConfig, appendStylingToBody]);
  const value = (0, react_1.useMemo)(() => {
    return { config: appConfig, env, loading, saleorApiUrl };
  }, [appConfig, env, loading, saleorApiUrl]);
  if (!saleorApiUrl) {
    console.warn(`Missing saleorApiUrl query param`);
    return null;
  }
  return <Provider value={value}>{children}</Provider>;
};
exports.AppConfigProvider = AppConfigProvider;

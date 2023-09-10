"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUrlChange = exports.POPSTATE_EVENT = void 0;
const url_1 = require("@/checkout-storefront/lib/utils/url");
const react_1 = require("react");
exports.POPSTATE_EVENT = "popstate";
const useUrlChange = (onLocationChange) => {
  (0, react_1.useEffect)(() => {
    const handleChange = () => onLocationChange({ queryParams: (0, url_1.getQueryParams)() });
    window.addEventListener(exports.POPSTATE_EVENT, handleChange);
    return () => {
      window.removeEventListener(exports.POPSTATE_EVENT, handleChange);
    };
  }, [onLocationChange]);
};
exports.useUrlChange = useUrlChange;

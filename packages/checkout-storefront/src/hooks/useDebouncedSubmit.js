"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedSubmit = void 0;
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
const useDebouncedSubmit = (onSubmit) => {
  const debouncedSubmit = (0, react_1.useCallback)(
    (0, lodash_es_1.debounce)((...args) => {
      void onSubmit(...args);
    }, 2000),
    [onSubmit]
  );
  (0, react_1.useEffect)(() => {
    return () => {
      debouncedSubmit.cancel();
    };
  }, []);
  return debouncedSubmit;
};
exports.useDebouncedSubmit = useDebouncedSubmit;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = void 0;
const react_1 = require("react");
function useLocalStorage(key, initialValue, { sync } = {}) {
  const [storedValue, setStoredValue] = (0, react_1.useState)(() => {
    let result;
    try {
      const item = window.localStorage.getItem(key);
      result = item ? JSON.parse(item) : initialValue;
    } catch (_a) {
      result = initialValue;
    }
    return result;
  });
  const setValue = (valueOrCb) => {
    setStoredValue(valueOrCb);
    const valueToStore = valueOrCb instanceof Function ? valueOrCb(storedValue) : valueOrCb;
    try {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (_a) {
      console.warn(`Could not save ${key} to localStorage`);
    }
  };
  const onStorage = (0, react_1.useCallback)(
    (event) => {
      if (event.key !== key) return;
      try {
        const item = event.newValue;
        if (item) {
          // @todo: should we validate the value here?
          setStoredValue(JSON.parse(item));
        }
      } catch (_a) {
        console.warn(`Could not update value for ${key}`);
      }
    },
    [key]
  );
  (0, react_1.useEffect)(() => {
    if (sync) {
      window.addEventListener("storage", onStorage);
      return () => {
        window.removeEventListener("storage", onStorage);
      };
    }
    return undefined;
  }, [onStorage, sync]);
  return [storedValue, setValue];
}
exports.useLocalStorage = useLocalStorage;

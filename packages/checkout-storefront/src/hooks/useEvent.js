"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEvent = void 0;
const react_1 = require("react");
// https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md
const useEvent = (handler) => {
  const handlerRef = (0, react_1.useRef)(null);
  (0, react_1.useLayoutEffect)(() => {
    handlerRef.current = handler;
  });
  return (0, react_1.useCallback)((...args) => {
    var _a;
    return (_a = handlerRef.current) === null || _a === void 0
      ? void 0
      : _a.call(handlerRef, ...args);
  }, []);
};
exports.useEvent = useEvent;

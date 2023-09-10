"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSummaryHeightCalc = void 0;
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
// once we add custom heights etc. we'll need to calculate
// this from rendered elements
const ITEM_HEIGHT = 104;
const MARGINS_HEIGHT = 456;
const LG_BREAKPOINT = 1024;
const useSummaryHeightCalc = ({ linesCount, onBreakpointChange }) => {
  const [maxSummaryHeight, setMaxSummaryHeight] = (0, react_1.useState)(0);
  const previousWidth = (0, react_1.useRef)(window.innerWidth);
  (0, react_1.useEffect)(() => {
    const handleWindowResize = () => {
      const isLg = window.innerWidth > LG_BREAKPOINT;
      if (previousWidth.current !== window.innerWidth) {
        (0, lodash_es_1.debounce)(() => {
          previousWidth.current = window.innerWidth;
          onBreakpointChange(isLg ? "lg" : "md");
        }, 500)();
      }
      const maxHeight = isLg
        ? // function based on on the best result visually
          // rather than mathematically
          0.97 * window.innerHeight - MARGINS_HEIGHT
        : linesCount * ITEM_HEIGHT;
      // always set at least one line item height
      setMaxSummaryHeight(Math.max(ITEM_HEIGHT, maxHeight));
    };
    window.addEventListener("resize", handleWindowResize, { passive: true });
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [linesCount, onBreakpointChange]);
  const allItemsHeight = (0, react_1.useMemo)(() => linesCount * ITEM_HEIGHT, [linesCount]);
  return (0, react_1.useMemo)(
    () => ({
      maxSummaryHeight,
      allItemsHeight,
    }),
    [allItemsHeight, maxSummaryHeight]
  );
};
exports.useSummaryHeightCalc = useSummaryHeightCalc;

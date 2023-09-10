"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const react_1 = require("react");
const useFetch = (fetchFn, optionalProps) => {
  const { args, skip = false } = optionalProps || {};
  const [loading, setLoading] = (0, react_1.useState)(false);
  const [result, setResult] = (0, react_1.useState)(null);
  const [error, setError] = (0, react_1.useState)(null);
  const useFetchArgsDeps = args ? Object.values(args) : [];
  const fetchData = (0, react_1.useCallback)(
    (immediateArgs) =>
      __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
          const response = yield fetchFn(immediateArgs || args);
          const result = yield response.json();
          setResult(result);
          return result;
        } catch (e) {
          setError(e);
          return null;
        } finally {
          setLoading(false);
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchFn, ...useFetchArgsDeps]
  );
  (0, react_1.useEffect)(() => {
    if (skip) {
      return;
    }
    void fetchData();
  }, [skip, fetchData]);
  return [{ data: result, loading, error }, fetchData];
};
exports.useFetch = useFetch;

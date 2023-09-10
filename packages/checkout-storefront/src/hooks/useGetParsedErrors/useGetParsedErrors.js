"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetParsedErrors = void 0;
const lodash_es_1 = require("lodash-es");
const react_1 = require("react");
const useErrorMessages_1 = require("../useErrorMessages");
const useGetParsedErrors = () => {
  const { getMessageByErrorCode } = (0, useErrorMessages_1.useErrorMessages)();
  const getParsedApiError = (0, react_1.useCallback)(
    ({ code, field }) => {
      const errorCode = (0, lodash_es_1.camelCase)(code);
      return {
        field,
        code: errorCode,
        message: getMessageByErrorCode(errorCode),
      };
    },
    [getMessageByErrorCode]
  );
  const getParsedApiErrors = (0, react_1.useCallback)(
    (apiErrors) => apiErrors.map(getParsedApiError),
    [getParsedApiError]
  );
  const getFormErrorsFromApiErrors = (0, react_1.useCallback)(
    (apiErrors) =>
      getParsedApiErrors(apiErrors).reduce(
        (result, { field, message }) =>
          Object.assign(Object.assign({}, result), { [field]: message }),
        {}
      ),
    [getParsedApiErrors]
  );
  return { getParsedApiError, getParsedApiErrors, getFormErrorsFromApiErrors };
};
exports.useGetParsedErrors = useGetParsedErrors;

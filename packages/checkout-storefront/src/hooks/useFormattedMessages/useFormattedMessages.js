"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormattedMessages = void 0;
const react_1 = require("react");
const react_intl_1 = require("react-intl");
const useFormattedMessages = () => {
  const Intl = (0, react_intl_1.useIntl)();
  return (0, react_1.useCallback)((message, values) => Intl.formatMessage(message, values), [Intl]);
};
exports.useFormattedMessages = useFormattedMessages;

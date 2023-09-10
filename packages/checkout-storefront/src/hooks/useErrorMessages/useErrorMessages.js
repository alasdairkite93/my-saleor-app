"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrorMessages = void 0;
const react_1 = require("react");
const useFormattedMessages_1 = require("../useFormattedMessages");
const utils_1 = require("../useFormattedMessages/utils");
const messages_1 = require("./messages");
const useErrorMessages = () => {
  const formatMessage = (0, useFormattedMessages_1.useFormattedMessages)();
  const getMessageByErrorCode = (0, react_1.useCallback)(
    (errorCode) => {
      try {
        const formattedMessage = formatMessage(messages_1.fieldErrorMessages[errorCode]);
        return formattedMessage;
      } catch (e) {
        (0, utils_1.warnAboutMissingTranslation)(errorCode);
        return "";
      }
    },
    [formatMessage]
  );
  const translatedErrorMessages = (0, react_1.useMemo)(
    () =>
      Object.keys(messages_1.fieldErrorMessages).reduce(
        (result, key) =>
          Object.assign(Object.assign({}, result), { [key]: getMessageByErrorCode(key) }),
        {}
      ),
    [getMessageByErrorCode]
  );
  return {
    errorMessages: translatedErrorMessages,
    getMessageByErrorCode,
  };
};
exports.useErrorMessages = useErrorMessages;

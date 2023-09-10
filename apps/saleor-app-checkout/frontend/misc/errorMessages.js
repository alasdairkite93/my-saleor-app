"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMessages = exports.commonErrorMessages = void 0;
const react_intl_1 = require("react-intl");
exports.commonErrorMessages = (0, react_intl_1.defineMessages)({
  somethingWentWrong: {
    defaultMessage: "Something went wrong",
    id: "misc/errorMessages/KEl0/z",
    description: "error message",
  },
  unknownError: {
    defaultMessage: "Unknown error",
    id: "misc/errorMessages/fHPUmP",
    description: "error message",
  },
  graphqlError: {
    defaultMessage: "GraphQL error",
    id: "misc/errorMessages/vZ8Jjv",
    description: "error message",
  },
  unknown: {
    defaultMessage: "Unknown error",
    id: "misc/errorMessages/fHPUmP",
    description: "error message",
  },
  invalid: {
    defaultMessage: "Invalid",
    id: "misc/errorMessages/ftpe3L",
    description: "error message",
  },
  required: {
    defaultMessage: "Required",
    id: "misc/errorMessages/ofWxwJ",
    description: "error message",
  },
  notFound: {
    defaultMessage: "Not found",
    id: "misc/errorMessages/z3iWGt",
    description: "error message",
  },
  notUpdated: {
    defaultMessage: "Not updated",
    id: "misc/errorMessages/v74OtS",
    description: "error message",
  },
});
exports.notFoundMessages = (0, react_intl_1.defineMessages)({
  paymentProviderNotFound: {
    defaultMessage: "Payment provider not found.",
    id: "misc/errorMessages/OvAW89",
    description: "error message",
  },
  channelPaymentOptionsNotFound: {
    defaultMessage: "Channel payment options not found.",
    id: "misc/errorMessages/nE/aC7",
    description: "error message",
  },
});

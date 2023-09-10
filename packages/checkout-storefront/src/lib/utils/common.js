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
exports.isValidEmail =
  exports.extractMutationErrors =
  exports.getByUnmatchingId =
  exports.getById =
    void 0;
const yup_1 = require("yup");
const getById = (idToCompare) => (obj) => obj.id === idToCompare;
exports.getById = getById;
const getByUnmatchingId = (idToCompare) => (obj) => obj.id !== idToCompare;
exports.getByUnmatchingId = getByUnmatchingId;
const extractMutationErrors = (
  result // any to cover apollo client
  // mutations, to be removed once we remove apollo client from sdk
) => {
  const urqlErrors = (result === null || result === void 0 ? void 0 : result.error)
    ? [result.error]
    : [];
  const graphqlErrors = (result === null || result === void 0 ? void 0 : result.data)
    ? Object.values(result.data).reduce((result, { errors }) => [...result, ...errors], [])
    : [];
  const errors = [...urqlErrors, ...graphqlErrors];
  return [errors.length > 0, errors];
};
exports.extractMutationErrors = extractMutationErrors;
const isValidEmail = (email) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return (0, yup_1.string)().required().email().isValidSync(email);
  });
exports.isValidEmail = isValidEmail;

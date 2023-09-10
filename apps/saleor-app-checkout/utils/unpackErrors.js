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
exports.unpackThrowable = exports.unpackPromise = exports.unknownToError = void 0;
const unknownToError = (maybeError) => {
  if (maybeError instanceof Error) {
    return maybeError;
  }
  if (typeof maybeError === "string") {
    return new Error(maybeError);
  }
  return new Error(String(maybeError));
};
exports.unknownToError = unknownToError;
const unpackPromise = (promise) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const result = yield promise;
      return [null, result];
    } catch (maybeError) {
      const error = (0, exports.unknownToError)(maybeError);
      return [error, null];
    }
  });
exports.unpackPromise = unpackPromise;
const unpackThrowable = (throwable) => {
  try {
    const result = throwable();
    return [null, result];
  } catch (maybeError) {
    const error = (0, exports.unknownToError)(maybeError);
    return [error, null];
  }
};
exports.unpackThrowable = unpackThrowable;

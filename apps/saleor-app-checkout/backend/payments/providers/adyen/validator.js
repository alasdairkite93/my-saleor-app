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
exports.validateHmac = exports.adyenHmacValidator = void 0;
const api_library_1 = require("@adyen/api-library");
exports.adyenHmacValidator = new api_library_1.hmacValidator();
// wrap exceptions from validator in promise
const validateHmac = (notificationRequestItem, hmac) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return exports.adyenHmacValidator.validateHMAC(notificationRequestItem, hmac);
  });
exports.validateHmac = validateHmac;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_USER = void 0;
exports.TEST_USER = {
  email: Cypress.env("userEmail"),
  password: Cypress.env("userPassword"),
};

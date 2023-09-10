"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrors = exports.urqlError = exports.apiErrors = void 0;
exports.apiErrors = [
  {
    message: "This value is required for the address",
    field: "streetAddress1",
    code: "REQUIRED",
  },
  {
    message: "This value is not valid for the address.",
    field: "postalCode",
    code: "INVALID",
  },
];
exports.urqlError = {
  message:
    "You need one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP]",
  name: "authError",
  graphQLErrors: [],
  __typename: "CheckoutError",
};
exports.validationErrors = [
  {
    type: "invalid",
    path: "firstName",
    message: "This is highly irregular",
  },
  {
    type: "required",
    path: "streetAddress1",
    message: "This is missing",
  },
  {
    type: "unique",
    path: "city",
    message: "This is not unique",
  },
];

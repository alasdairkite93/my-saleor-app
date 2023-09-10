"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_RESET =
  exports.TOKEN_CREATE =
  exports.CHECKOUT_CUSTOMER_DETACH =
  exports.TOKEN_REFRESH =
  exports.accountErrorFragment =
    void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.accountErrorFragment = (0, graphql_tag_1.default)`
  fragment AccountErrorFragment on AccountError {
    code
    field
    message
  }
`;
exports.TOKEN_REFRESH = (0, graphql_tag_1.default)`
  ${exports.accountErrorFragment}
  mutation refreshToken($refreshToken: String!) {
    tokenRefresh(refreshToken: $refreshToken) {
      token
      errors {
        ...AccountErrorFragment
      }
    }
  }
`;
exports.CHECKOUT_CUSTOMER_DETACH = (0, graphql_tag_1.default)`
  mutation checkoutCustomerDetach($checkoutId: ID!) {
    checkoutCustomerDetach(id: $checkoutId) {
      errors {
        message
        field
        code
      }
    }
  }
`;
exports.TOKEN_CREATE = (0, graphql_tag_1.default)`
  mutation tokenCreate($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      refreshToken
      errors {
        message
        field
        code
      }
    }
  }
`;
exports.PASSWORD_RESET = (0, graphql_tag_1.default)`
  mutation passwordReset($email: String!, $password: String!, $token: String!) {
    setPassword(email: $email, password: $password, token: $token) {
      token
      refreshToken
      errors {
        message
        field
        code
      }
    }
  }
`;

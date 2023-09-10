"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="cypress" />
const checkout_page_1 = require("../elements/checkout/checkout-page");
const users_1 = require("../fixtures/users");
Cypress.Commands.add("addAliasToGraphRequest", (operationName) => {
  cy.intercept("POST", Cypress.env("API_URL"), (req) => {
    const requestBody = req.body;
    if (Array.isArray(requestBody)) {
      requestBody.forEach((element) => {
        if (element.operationName === operationName) {
          req.alias = operationName;
        }
      });
    } else if (requestBody.operationName === operationName) {
      req.alias = operationName;
    }
  });
});
Cypress.Commands.add("addAliasForSearchQuery", (operationName, searchQuery) => {
  cy.intercept("POST", Cypress.env("API_URL"), (req) => {
    const requestBody = req.body;
    if (Array.isArray(requestBody)) {
      requestBody.forEach((element) => {
        if (
          element.operationName === operationName &&
          req.body.variables.filter.search === searchQuery
        ) {
          req.alias = operationName;
          req.continue();
        }
      });
    } else if (
      requestBody.operationName === operationName &&
      req.body.variables.filter.search === searchQuery
    ) {
      req.alias = operationName;
      req.continue();
    }
  });
});
Cypress.Commands.add("fillUpBasicAddress", (address) => {
  return cy
    .get(checkout_page_1.CHECKOUT_ELEMENTS.countrySelect)
    .select(address.countryFullName)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.firstNameInput)
    .type(address.firstName)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.lastNameInput)
    .type(address.lastName)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.companyNameInput)
    .type(address.companyName)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.streetAddress1Input)
    .type(address.streetAddress1)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.streetAddress2Input)
    .type(address.streetAddress2)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.cityInput)
    .type(address.city)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.postalCodeInput)
    .type(address.postalCode)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.areaSelect)
    .select(address.countryArea)
    .get(checkout_page_1.CHECKOUT_ELEMENTS.phoneInput)
    .type(address.phone);
});
Cypress.Commands.add("sendRequestWithQuery", (query, authorization = "auth", variables = "") => {
  cy.request({
    body: {
      variables,
      query,
    },
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
    method: "POST",
    url: Cypress.env("API_URL"),
    log: true,
  }).then((response) => {
    const respInSting = JSON.stringify(response.body);
    if (respInSting.includes(`"errors":[{`)) {
      cy.log(query).log(JSON.stringify(response.body));
    }
  });
});
Cypress.Commands.add("loginUserViaRequest", (authorization = "auth", user = users_1.TEST_USER) => {
  const mutation = `mutation TokenAuth{
    tokenCreate(email: "${user.email}", password: "${user.password}") {
      token
      csrfToken
      refreshToken
      errors: errors {
        code
        field
        message
      }
      user {
        id
        email
      }
    }
  }`;
  return cy.sendRequestWithQuery(mutation).then((resp) => {
    window.localStorage.setItem("_saleorCSRFToken", resp.body.data.tokenCreate.csrfToken);
    window.sessionStorage.setItem(authorization, resp.body.data.tokenCreate.token);
  });
});

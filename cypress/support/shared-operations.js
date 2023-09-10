"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickOnTheFooterExternalLink =
  exports.clickOnTheFooterInternalLink =
  exports.waitForProgressBarToNotBeVisible =
    void 0;
/* eslint-disable no-loop-func */
const shared_elements_1 = require("../elements/shared-elements");
function waitForProgressBarToNotBeVisible() {
  cy.get(shared_elements_1.SHARED_ELEMENTS.spinner).should("not.exist");
}
exports.waitForProgressBarToNotBeVisible = waitForProgressBarToNotBeVisible;
function clickOnTheFooterInternalLink(listOfInternalLinks) {
  let pageName;
  cy.get(listOfInternalLinks).each(($el) => {
    cy.wrap($el)
      .invoke("attr", "href")
      .then((newPageName) => {
        pageName = newPageName;
        cy.wrap($el).click().url().should("contain", pageName);
      });
  });
}
exports.clickOnTheFooterInternalLink = clickOnTheFooterInternalLink;
function clickOnTheFooterExternalLink(listOfExternalLinks) {
  cy.get(listOfExternalLinks)
    .its("length")
    .then((length) => {
      for (let i = 0; i < length; i += 1) {
        cy.get(listOfExternalLinks)
          .eq(i)
          .then(($el) => {
            cy.wrap($el)
              .invoke("attr", "href")
              .then((pageName) => {
                cy.wrap($el)
                  .invoke("removeAttr", "target")
                  .click()
                  .url()
                  .should("contain", pageName)
                  .visit("/");
              });
          });
      }
    });
}
exports.clickOnTheFooterExternalLink = clickOnTheFooterExternalLink;

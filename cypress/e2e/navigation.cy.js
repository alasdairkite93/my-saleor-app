"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_elements_1 = require("../elements/shared-elements");
const shared_operations_1 = require("../support/shared-operations");
describe("Navigation - checking links", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should open internal links SRS_0402", () => {
    (0, shared_operations_1.clickOnTheFooterInternalLink)(
      shared_elements_1.SHARED_ELEMENTS.footer.internalLinks
    );
  });
  it("should open external links SRS_0403", () => {
    (0, shared_operations_1.clickOnTheFooterExternalLink)(
      shared_elements_1.SHARED_ELEMENTS.footer.externalLinks
    );
  });
});

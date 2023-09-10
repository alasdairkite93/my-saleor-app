"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payByDummyPayment = void 0;
const checkout_page_1 = require("../../elements/checkout/checkout-page");
const dummy_payment_page_1 = require("../../elements/checkout/dummy-payment-page");
function payByDummyPayment() {
  cy.addAliasToGraphRequest("order")
    .get(checkout_page_1.CHECKOUT_ELEMENTS.paymentMethods)
    .children()
    .find("[value='dummy']")
    .click()
    .wait(2000);
  cy.get(checkout_page_1.CHECKOUT_ELEMENTS.payButton).click().wait(2000);
  cy.get(dummy_payment_page_1.DUMMY_PAYMENT.dummyPayButton).click();
}
exports.payByDummyPayment = payByDummyPayment;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfOrderNumberAndPaymentStatusAreCorrect = void 0;
const order_confirmation_1 = require("../../elements/checkout/order-confirmation");
function checkIfOrderNumberAndPaymentStatusAreCorrect() {
  cy.wait("@order")
    .its("response.body.data.order.number")
    .then((orderNumber) => {
      cy.get(order_confirmation_1.ORDER_CONFIRMATION.titleWithOrderNumber).should(
        "contain",
        orderNumber
      );
      cy.get(order_confirmation_1.ORDER_CONFIRMATION.paymentStatus)
        .children()
        .should("contain", "We've received your payment");
    });
}
exports.checkIfOrderNumberAndPaymentStatusAreCorrect = checkIfOrderNumberAndPaymentStatusAreCorrect;

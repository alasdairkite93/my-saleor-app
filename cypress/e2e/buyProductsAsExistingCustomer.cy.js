"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_page_1 = require("../elements/checkout/checkout-page");
const navigation_1 = require("../elements/navigation");
const shared_elements_1 = require("../elements/shared-elements");
const search_1 = require("../fixtures/search");
const product_page_1 = require("../support/pages/product-page");
const shared_operations_1 = require("../support/shared-operations");
const checkout_page_2 = require("../support/pages/checkout-page");
const order_confirmation_page_1 = require("../support/pages/order-confirmation-page");
describe("Buy product as existing user", () => {
  beforeEach(() => {
    cy.clearLocalStorage().loginUserViaRequest().visit("/");
    (0, shared_operations_1.waitForProgressBarToNotBeVisible)();
  });
  it("should buy a product as logged in user SRS_1003", () => {
    cy.addAliasToGraphRequest("user")
      .addAliasToGraphRequest("checkoutShippingAddressUpdate")
      .addAliasToGraphRequest("checkoutBillingAddressUpdate")
      .addAliasToGraphRequest("checkoutDeliveryMethodUpdate")
      .get(shared_elements_1.SHARED_ELEMENTS.productsList)
      .children()
      .first()
      .click();
    (0, product_page_1.addItemToCart)();
    cy.get(navigation_1.NAVIGATION.cartIcon)
      .click()
      .wait("@user")
      .wait("@checkoutShippingAddressUpdate")
      .wait("@checkoutBillingAddressUpdate")
      .its("response.body.data.checkoutBillingAddressUpdate.checkout.billingAddress")
      .should("not.be.null")
      .get(checkout_page_1.CHECKOUT_ELEMENTS.deliveryMethods)
      .children()
      .should("be.visible")
      .first()
      .click()
      .wait("@checkoutDeliveryMethodUpdate")
      .its("response.body.data.checkoutDeliveryMethodUpdate.checkout.totalPrice.gross.amount")
      .then((totalPrice) => {
        cy.get(checkout_page_1.CHECKOUT_ELEMENTS.totalOrderPrice).should("contain", totalPrice);
      });
    (0, checkout_page_2.payByDummyPayment)();
    (0, order_confirmation_page_1.checkIfOrderNumberAndPaymentStatusAreCorrect)();
  });
  it("should buy a digital product as logged in user SRS_1004", () => {
    const product = search_1.productsToSearch.digitalProduct;
    cy.addAliasToGraphRequest("user")
      .addAliasToGraphRequest("checkoutEmailUpdate")
      .addAliasToGraphRequest("checkoutBillingAddressUpdate");
    (0, product_page_1.openProductPage)(product);
    (0, product_page_1.addItemToCart)();
    cy.get(navigation_1.NAVIGATION.cartIcon).click().wait("@user");
    cy.get(checkout_page_1.CHECKOUT_ELEMENTS.deliveryMethods)
      .should("not.exist")
      .wait("@checkoutBillingAddressUpdate")
      .its("response.body.data.checkoutBillingAddressUpdate.checkout.totalPrice.gross.amount")
      .then((totalPrice) => {
        cy.get(checkout_page_1.CHECKOUT_ELEMENTS.totalOrderPrice).should("contain", totalPrice);
      });
    (0, checkout_page_2.payByDummyPayment)();
    (0, order_confirmation_page_1.checkIfOrderNumberAndPaymentStatusAreCorrect)();
  });
});

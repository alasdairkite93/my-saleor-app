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
describe("Buy product as anonymous user", () => {
  let address;
  before(() => {
    cy.fixture("addresses").then(({ usAddress }) => {
      address = usAddress;
    });
  });
  beforeEach(() => {
    cy.visit("/").clearLocalStorage();
    (0, shared_operations_1.waitForProgressBarToNotBeVisible)();
  });
  it("should buy a product as anonymous SRS_1001", () => {
    cy.addAliasToGraphRequest("checkoutEmailUpdate")
      .addAliasToGraphRequest("checkoutShippingAddressUpdate")
      .addAliasToGraphRequest("checkoutBillingAddressUpdate")
      .addAliasToGraphRequest("checkoutDeliveryMethodUpdate")
      .addAliasToGraphRequest("order")
      .get(shared_elements_1.SHARED_ELEMENTS.productsList)
      .children()
      .first()
      .click();
    (0, product_page_1.addItemToCart)();
    cy.get(navigation_1.NAVIGATION.cartIcon)
      .click()
      .get(checkout_page_1.CHECKOUT_ELEMENTS.emailInput)
      .type("user@examle.com")
      .wait("@checkoutEmailUpdate")
      .fillUpBasicAddress(address)
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
  it("should buy a digital product as anonymous SRS_1002", () => {
    const product = search_1.productsToSearch.digitalProduct;
    cy.addAliasToGraphRequest("checkoutEmailUpdate").addAliasToGraphRequest(
      "checkoutBillingAddressUpdate"
    );
    (0, product_page_1.openProductPage)(product);
    (0, product_page_1.addItemToCart)();
    cy.get(navigation_1.NAVIGATION.cartIcon).click();
    cy.get(checkout_page_1.CHECKOUT_ELEMENTS.deliveryMethods)
      .should("not.exist")
      .get(checkout_page_1.CHECKOUT_ELEMENTS.emailInput)
      .type("user@examle.com")
      .wait("@checkoutEmailUpdate")
      .fillUpBasicAddress(address)
      .wait("@checkoutBillingAddressUpdate")
      .its("response.body.data.checkoutBillingAddressUpdate.checkout.totalPrice.gross.amount")
      .then((totalPrice) => {
        cy.get(checkout_page_1.CHECKOUT_ELEMENTS.totalOrderPrice).should("contain", totalPrice);
      });
    (0, checkout_page_2.payByDummyPayment)();
    (0, order_confirmation_page_1.checkIfOrderNumberAndPaymentStatusAreCorrect)();
  });
});

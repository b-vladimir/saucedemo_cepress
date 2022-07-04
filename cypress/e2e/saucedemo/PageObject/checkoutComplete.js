import BasePage from "./basePage";

class CheckoutComplete extends BasePage{
    constructor() {
        super();
        this._thankYouText = 'THANK YOU FOR YOUR ORDER';
        this._checkoutCompleteText = 'Checkout: Complete!';
    }

    isPageOpen() {
        this.urlCheck('/checkout-complete');
    }

    getCheckoutText() {
        return cy.contains(this._checkoutCompleteText);
    }

    getThankYouText() {
        return cy.contains(this._thankYouText);
    }
}

export default CheckoutComplete;
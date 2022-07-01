class CheckoutComplete {
    constructor() {
        this._thankYouText = 'THANK YOU FOR YOUR ORDER';
        this._checkoutCompleteText = 'Checkout: Complete!';
    }

    isPageOpen() {
        cy.url().should('include', '/checkout-complete')
    }

    getCheckoutText() {
        return cy.contains(this._checkoutCompleteText)
    }

    getThankYouText() {
        return cy.contains(this._thankYouText)
    }
}

export default CheckoutComplete;
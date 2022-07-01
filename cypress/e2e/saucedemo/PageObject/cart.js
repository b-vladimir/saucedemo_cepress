class Cart {
    constructor() {
        this._checkoutButton = '[id="checkout"]';
    }

    clickCheckoutButton() {
        cy.get(this._checkoutButton).click();
    }
}

export default Cart;
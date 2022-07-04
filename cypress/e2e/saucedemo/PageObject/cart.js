import BasePage from "./basePage";

class Cart extends BasePage{
    constructor() {
        super();
        this._checkoutButton = '[id="checkout"]';
    }

    isPageOpen() {
        this.urlCheck('/cart');
    }

    clickCheckoutButton() {
        this.clickElement(this._checkoutButton);
    }
}

export default Cart;
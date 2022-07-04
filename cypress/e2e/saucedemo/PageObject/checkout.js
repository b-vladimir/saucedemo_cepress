import BasePage from "./basePage";

class Checkout extends BasePage{
    constructor() {
        super();
        this._finishButton = '[id="finish"]';
    }

    isPageOpen() {
        this.urlCheck('/checkout-step-two');
    }

    clickFinishButton() {
        this.clickElement(this._finishButton);
    }
}

export default Checkout;
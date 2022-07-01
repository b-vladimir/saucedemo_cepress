class Checkout {
    constructor() {
        this._finishButton = '[id="finish"]';
    }

    clickFinishButton() {
        cy.get(this._finishButton).click();
    }
}

export default Checkout;
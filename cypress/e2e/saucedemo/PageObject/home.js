class Home {
    constructor() {
        this._addBackpackButton = '[id="add-to-cart-sauce-labs-backpack"]';
        this._removeBackpackButton = '[id="remove-sauce-labs-backpack"]';
        this._addRedTshirtButton = '[id="add-to-cart-test.allthethings()-t-shirt-(red)"]';
        this._removeRedTshirtButton = '[id="remove-test.allthethings()-t-shirt-(red)"]';
        this._cartButton = '[id="shopping_cart_container"]';
    }

    clickAddBackpack() {
        cy.get(this._addBackpackButton).click();
    }

    clickAddRedTShirt() {
        cy.get(this._addRedTshirtButton).click();
    }

    isRemoveBackpackButtonDisplayed() {
        cy.get(this._removeBackpackButton).should('be.visible')
    }

    isRemoveRedTShirtButtonDisplayed() {
        cy.get(this._removeRedTshirtButton).should('be.visible')
    }

    clickCartButton() {
        cy.get(this._cartButton).click();
    }
}

export default Home;
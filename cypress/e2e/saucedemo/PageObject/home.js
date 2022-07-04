import BasePage from "./basePage";

class Home  extends BasePage{
    constructor() {
        super()
        this._addBackpackButton = '[id="add-to-cart-sauce-labs-backpack"]';
        this._removeBackpackButton = '[id="remove-sauce-labs-backpack"]';
        this._addRedTshirtButton = '[id="add-to-cart-test.allthethings()-t-shirt-(red)"]';
        this._removeRedTshirtButton = '[id="remove-test.allthethings()-t-shirt-(red)"]';
        this._cartButton = '[id="shopping_cart_container"]';
    }

    isPageOpen() {
        this.urlCheck('/inventory')
    }
    
    clickAddBackpack() {
        this.clickElement(this._addBackpackButton);
    }

    clickAddRedTShirt() {
        this.clickElement(this._addRedTshirtButton);
    }

    isRemoveBackpackButtonDisplayed() {
        this.isElementVisible(this._removeBackpackButton);
    }

    isRemoveRedTShirtButtonDisplayed() {
        this.isElementVisible(this._removeRedTshirtButton);
    }

    clickCartButton() {
        this.clickElement(this._cartButton);
    }
}

export default Home;
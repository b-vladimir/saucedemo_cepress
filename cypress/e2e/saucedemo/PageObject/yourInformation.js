import BasePage from "./basePage";

class YourInformation extends BasePage{
    constructor() {
        super();
        this._firstNameField = '[id="first-name"]';
        this._lastNameField = '[id="last-name"]';
        this._postalCodeField = '[id="postal-code"]';
        this._continueButton = '[id="continue"]';
    }

    isPageOpen() {
        this.urlCheck('/checkout-step-one');
    }

    typeFirstName(firstName) {
        this.typeInField(this._firstNameField, firstName);
    }

    typeLastName(lastName) {
        this.typeInField(this._lastNameField, lastName);
    }

    typePostalCode(code) {
        this.typeInField(this._postalCodeField, code);
    }

    clickContinueButton() {
        this.clickElement(this._continueButton);
    }
}

export default YourInformation;
class YourInformation {
    constructor() {
        this._firstNameField = '[id="first-name"]';
        this._lastNameField = '[id="last-name"]';
        this._postalCodeField = '[id="postal-code"]';
        this._continueButton = '[id="continue"]';
    }

    typeFirstName(firstName) {
        cy.get(this._firstNameField).type(firstName);
    }

    typeLastName(lastName) {
        cy.get(this._lastNameField).type(lastName);
    }

    typePostalCode(code) {
        cy.get(this._postalCodeField).type(code);
    }

    clickContinueButton() {
        cy.get(this._continueButton).click();
    }
}

export default YourInformation;
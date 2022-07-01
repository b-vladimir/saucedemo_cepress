class Login {
    constructor() {
        this._userNameField = '[id="user-name"]';
        this._passwordField = '[id="password"]';
        this._loginButton = '[id="login-button"]';
    }

    typeUserNane(name) {
        cy.get(this._userNameField).type(name);
    }

    typePassword(password) {
        cy.get(this._passwordField).type(password);
    }

    clickLoginButton() {
        cy.get(this._loginButton).click();
    }
}

export default Login
import BasePage from './basePage'

class Login extends BasePage {
    constructor() {
        super()
        this._userNameField = '[id="user-name"]';
        this._passwordField = '[id="password"]';
        this._loginButton = '[id="login-button"]';
    }

    typeUserNane(name) {
        this.typeInField(this._userNameField, name);
    }

    typePassword(password) {
        this.typeInField(this._passwordField, password, false);
    }

    clickLoginButton() {
        this.clickElement(this._loginButton);
    }
}

export default Login
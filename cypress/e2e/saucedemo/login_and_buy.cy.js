import PageFactory from './PageObject/pageFactory'

const page = new PageFactory();

describe('Happy path', () => {
    it('Sign in', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.viewport(1920, 1080)
        // login
        page.login.typeUserNane('standard_user')
        page.login.typePassword('secret_sauce')
        page.login.clickLoginButton()
        // add to the cart a bacpack and a red t-shirt
        page.home.clickAddBackpack()
        page.home.isRemoveBackpackButtonDisplayed()
        page.home.clickAddRedTShirt()
        page.home.isRemoveRedTShirtButtonDisplayed()
        // go to the cart
        page.home.clickCartButton()
        // checkout
        page.cart.clickCheckoutButton()
        // your information
        page.yourInformation.typeFirstName('test')
        page.yourInformation.typeLastName('test_last')
        page.yourInformation.typePostalCode('12345')
        page.yourInformation.clickContinueButton()
        // finish checkout
        page.checkout.clickFinishButton()
        //assertions
        page.checkoutComplete.isPageOpen()
        page.checkoutComplete.getThankYouText().should('be.visible')
        page.checkoutComplete.getCheckoutText().should('be.visible')
    })
  })
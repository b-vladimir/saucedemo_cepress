import PageFactory from './PageObject/pageFactory'

const page = new PageFactory();
let client = {
    firstName:'Bob',
    lastName: 'Smit',
    postalCode: 12345
};

describe('Happy path', () => {
    before(() => {
        cy.visit('')
      })

    it('Sign in', () => {
        // login
        page.login.typeUserNane(Cypress.env('username'))
        page.login.typePassword(Cypress.env('password'))
        page.login.clickLoginButton()
        page.home.isPageOpen()
        // add to the cart a bacpack and a red t-shirt
        page.home.clickAddBackpack()
        page.home.isRemoveBackpackButtonDisplayed()
        page.home.clickAddRedTShirt()
        page.home.isRemoveRedTShirtButtonDisplayed()
        // go to the cart
        page.home.clickCartButton()
        page.cart.isPageOpen()
        // checkout
        page.cart.clickCheckoutButton()
        page.yourInformation.isPageOpen()
        // your information
        page.yourInformation.typeFirstName(client.firstName)
        page.yourInformation.typeLastName(client.lastName)
        page.yourInformation.typePostalCode(client.postalCode)
        page.yourInformation.clickContinueButton()
        page.checkout.isPageOpen()
        // finish checkout
        page.checkout.clickFinishButton()
        page.checkoutComplete.isPageOpen()
        //assertions
        page.checkoutComplete.isPageOpen()
        page.checkoutComplete.getThankYouText().should('be.visible')
        page.checkoutComplete.getCheckoutText().should('be.visible')
    })
  })
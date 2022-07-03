import PageFactory from './PageObject/pageFactory'

const page = new PageFactory();
let client = {
    firstName:'Bob',
    lastName: 'Smit',
    postalCode: 12345
};

describe('Happy path', () => {
    beforeEach(() => {
        cy.visit('')
      })

    it('Sign in', () => {
        // login
        page.login.typeUserNane(Cypress.env('username'))
        page.login.typePassword(Cypress.env('password'))
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
        page.yourInformation.typeFirstName(client.firstName)
        page.yourInformation.typeLastName(client.lastName)
        page.yourInformation.typePostalCode(client.postalCode)
        page.yourInformation.clickContinueButton()
        // finish checkout
        page.checkout.clickFinishButton()
        //assertions
        page.checkoutComplete.isPageOpen()
        page.checkoutComplete.getThankYouText().should('be.visible')
        page.checkoutComplete.getCheckoutText().should('be.visible')
    })
  })
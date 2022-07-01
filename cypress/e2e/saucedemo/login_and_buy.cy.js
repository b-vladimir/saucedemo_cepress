describe('Log in', () => {
    it('Sign in', () => {
        cy.visit("https://www.saucedemo.com/")
        // login
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
        //add to the cart a bacpack and a red t-shirt
        cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[id="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[id="remove-test.allthethings()-t-shirt-(red)"]').should('be.visible')
        // go to the cart
        cy.get('[id="shopping_cart_container"]').click()
        // checkout
        cy.get('[id="checkout"]').click()
        // your information
        cy.get('[id="first-name"]').type('test')
        cy.get('[id="last-name"]').type('test_last')
        cy.get('[id="postal-code"]').type('12345')
        cy.get('[id="continue"]').click()
        // finish checkout
        cy.get('[id="finish"]').click()
        //assertions
        cy.url().should('include', '/checkout-complete')
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
        cy.contains('Checkout: Complete!').should('be.visible')
    })
  })
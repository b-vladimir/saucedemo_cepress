describe('Log in', () => {
    it('Sign in', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()

        cy.url().should('include', '/inventory.html')
        expect(true).to.equal(true)
    })
  })
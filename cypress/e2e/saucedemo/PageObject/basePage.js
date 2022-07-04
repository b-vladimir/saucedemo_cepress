class BasePage {

    typeInField(locator, content, logging = true) {
        cy.get(locator).type(content, {log: logging})
            .should('have.value', content);
    }

    urlCheck(part) {
        cy.url().should('include', part)
    }

    clickElement(locator) {
        cy.get(locator).click();
    }

    isElementVisible(locator) {
        cy.get(locator).should('be.visible');
    }
}

export default BasePage;

/// <reference types="cypress"/>

describe("Cypress Selectors", () => {
    beforeEach(() => {
        cy.visit("https://www.techglobal-training.com/frontend/actions");


    });

    it('', () => {
        cy.get('#dropdown-testing').realHover()
        cy.get('#backend-option').click()
        cy.url().should('include', 'backend')
        cy.on('uncaught:exception', () => {
            return true;
        })
    })
});

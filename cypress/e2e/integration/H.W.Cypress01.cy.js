/// <reference types="cypress" />

describe("Cypress Selectors", () => {
    beforeEach(() => {
        cy.visit("https://www.techglobal-training.com/frontend/form-elements");
    });
    it('Test Case 01 - Validate the Contact Us information', () => {

        cy.get('.is-size-3')
            .should('be.visible')
            .and('have.text', 'Contact Us');

        cy.get('#address')
            .should('be.visible')
            .and('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');

        cy.get('#email')
            .should('be.visible')
            .and('have.text', 'info@techglobalschool.com');

        cy.get('#phone-number')
            .should('be.visible')
            .and('have.text', '(224) 580-2150');
    });
    it('Test Case 02 - Validate the Full name input box', () => {

        cy.get('[for="name"]')
            .should('be.visible')
            .and('have.text', 'Full name *');

        cy.get('[placeholder="Enter your full name"]')
            .should('have.attr', 'placeholder', 'Enter your full name')
    });
    it('Test Case 03 - Validate the Gender radio button', () => {

        const buttons = ["Male", "Female", "Prefer not to disclose"]

        cy.get('.control > .label')
            .should('have.text', 'Gender *')
        cy.get('.mr-1').should('have.attr', 'required')

        cy.get('.mr-1')
            .should("be.visible")
            .and("be.enabled")
            .and('not.be.checked')

        cy.get('.radio input').eq(0).click()

        cy.get('.radio').each(($el, index) => {
            if ($el.text() === 'Male') cy.wrap($el).children().should('be.checked');
            else cy.wrap($el).children().should('not.be.checked');
        });

        cy.get('.radio input').eq(1).click()

        cy.get('.radio').each(($el, index) => {
            if ($el.text() === 'Female') cy.wrap($el).children().should('be.checked');
            else cy.wrap($el).children().should('not.be.checked')

        });
    });

    it('Test Case 04 - Validate the Address input box', () => {

        cy.get(':nth-child(3) > .control > .input').should('be.visible');
        cy.get(':nth-child(3) > .control > .input').should('not.have.attr', 'required');
        cy.get(':nth-child(3) > .label').should('have.text', 'Address');
        cy.get(':nth-child(3) > .control > .input').should('have.attr', 'placeholder', 'Enter your address');
    });

    it('TTest Case 05 - Validate the Email input box', () => {

        cy.get(':nth-child(4) > .control > .input').should('be.visible');
        cy.get(':nth-child(4) > .control > .input').should('have.attr', 'required')
        cy.get(':nth-child(4) > .label').should('have.text', 'Email *')
        cy.get(':nth-child(4) > .control > .input').should('have.attr', 'placeholder', 'Enter your email');
    });

    it('Test Case 06 - Validate the Phone input box', () => {

        cy.get(':nth-child(5) > .control > .input').should('be.visible');
        cy.get(':nth-child(5) > .control > .input').should('not.have.attr', 'required')
        cy.get(':nth-child(5) > .label').should('have.text', 'Phone')
        cy.get(':nth-child(5) > .control > .input').should('have.attr', 'placeholder', 'Enter your phone number');
    });

    it('Test Case 07 - Validate the Message text area', () => {

        cy.get('.textarea').should('be.visible')
        cy.get('.textarea').should('not.have.attr', 'requird')
        cy.get(':nth-child(6) > .label').should('have.text', 'Message')
        cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...');

    });

    it('Test Case 08 - Validate the Consent checkbox', () => {

        cy.get('.checkbox').should('be.visible').and('have.text', ' I give my consent to be contacted.')
        cy.get('[type="checkbox"]')
            .click()
            .should('be.checked')
            .click()
            .should('not.be.checked').and('have.attr', 'required')

    });
    it('Test Case 09 - Validate the SUBMIT button', () => {

        cy.get('.is-link').should('be.visible')
            .and('be.enabled')
            .and('have.text', 'SUBMIT')
    });
    it('Test Case 10 - Validate the form submission', () => {

        cy.get(':nth-child(1) > .control > .input')
            .should('have.attr', 'placeholder', 'Enter your full name')
            .type('Haider Dhari')
        cy.get('.mr-1').eq(0).click()
        cy.get(':nth-child(3) > .control')
            .type('985 sheridan dr,NY 14150')
        cy.get(':nth-child(4) > .control > .input')
            .type('haidermdhari@gmail.com')
        cy.get(':nth-child(5) > .control > .input').type('(716)609-5351');
        cy.get('.textarea').type('I like Cypress');
        cy.get('[type="checkbox"]')
            .click();
        cy.get('.button').eq(2).click();
        cy.get('.mt-5').should('have.text', 'Thanks for submitting!');

        cy.on('uncaught:exception', () => {
            return false
        });
    });
});



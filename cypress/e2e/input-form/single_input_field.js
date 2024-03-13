/// <reference types="cypress" />

describe("Verifying Single Input Field", () => {

    beforeEach(() => {
        cy.visit("https://demo.seleniumeasy.com/");
        cy.get('[href="#"]').contains('Input Forms').click();
        cy.get('[href="./basic-first-form-demo.html"]').contains('Simple Form Demo').click();
    })


    it("verify entering a standard message and click the button", () => {
        cy.get('#user-message').first().type('Hello, you are welcome.');
        cy.get('[type="button"]').contains('Show Message').click();
        cy.get('#display').should('have.text', 'Hello, you are welcome.') //Assertion
    });

    it("Validate leaving input field empty and click the button", () => {;
        cy.get('#user-message').first().type(' ');
        cy.get('[type="button"]').contains('Show Message').click();
        cy.get('#display').should('have.text', ' '); //Assertion
    });

    it("Validate entering a message with special character", () => {;
        cy.get('#user-message').first().type('hello&%>');
        cy.get('[type="button"]').contains('Show Message').click();
        cy.get('#display').should('have.text', 'hello&%>'); //Assertion
    });

    it("Validate entering Alphanumeric values", () => {;
        cy.get('#user-message').first().type('Welcome1234');
        cy.get('[type="button"]').contains('Show Message').click();
        cy.get('#display').should('have.text', 'Welcome1234'); //Assertion   
    });

    it("Validate entering message all in upper cases", () => {;
        cy.get('#user-message').first().type('HELLO WORLD');
        cy.get('[type="button"]').contains('Show Message').click();
        cy.get('#display').should('have.text', 'HELLO WORLD'); //Assertion   
    });

})
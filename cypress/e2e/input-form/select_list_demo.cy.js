/// <reference types="cypress" />

describe("Verifying Select List", () => {

    beforeEach(() => {
        cy.visit("https://demo.seleniumeasy.com/");
        cy.get('[href="#"]').contains('Input Forms').click();
        //cy.get('[href="./basic-select-dropdown-demo.html"]').contains('Select Dropdown List').click({force:true})
        cy.get('[href*="./basic"]').contains('Select Dropdown List').click({force:true})
    })

    it("Click 'Select Dropdown List' dropdown button and select 'Sunday' from the options", () => {
        cy.get('#select-demo').select('Sunday')
        cy.get('#select-demo').select(1).should('have.value', 'Sunday') //Assertion
        cy.get('.selected-value').should('have.text', 'Day selected :- Sunday') //Assertion
        cy.get('#select-demo option:selected').should('have.text', 'Sunday') //Assertionhyttr
    });

    it("Click 'Select Dropdown List' dropdown button and select 'Monday' from the options", () => {
        cy.get('#select-demo').select('Monday')
        cy.get('.selected-value').should('have.text', 'Day selected :- Monday') //Assertion
        cy.get('.selected-value').should('not.have.text', 'Day selected :- Friday') //Assertion
    });

    it("Click 'Select Dropdown List' dropdown button and select 'Tuesday' from the options", () => {
        cy.get('#select-demo').select('Tuesday')
        cy.get('.selected-value').should('have.text', 'Day selected :- Tuesday') //Assertion
    });

    it("Click 'Select Dropdown List' dropdown button and select 'Wednesday' from the options", () => {
        cy.get('#select-demo').select('Wednesday')
        cy.get('.selected-value').should('have.text', 'Day selected :- Wednesday') //Assertion
        cy.get('.selected-value').should('not.have.text', 'Day selected :- Tuesday') //Assertion
    });

    it("Click 'Select Dropdown List' dropdown button and select 'Thursday' from the options", () => {
        cy.get('#select-demo').select('Thursday')
        cy.get('.selected-value').should('have.text', 'Day selected :- Thursday') //Assertion
        cy.get('.selected-value').should('not.have.text', 'Day selected :- Monday') //Assertion
    });

    it("Click 'Select Dropdown List' dropdown button and select 'Friday' from the options", () => {
        cy.get('#select-demo').select('Friday')
        cy.get('.selected-value').should('have.text', 'Day selected :- Friday') //Assertion
        cy.get('.selected-value').should('not.have.text', 'Day selected :- Sunday') //Assertion
    });

    it("Click 'Select Dropdown List' dropdown button and select 'Saturday' from the options", () => {
        cy.get('#select-demo').select('Saturday')
        cy.get('.selected-value').should('have.text', 'Day selected :- Saturday') //Assertion
        cy.get('.selected-value').should('not.have.text', 'Day selected :- Tuesday') //Assertion
    });
})
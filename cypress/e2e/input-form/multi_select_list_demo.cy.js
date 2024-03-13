/// <reference types="cypress" />

describe("Verifying Multiple Select List", () => {

    let undefined = 'First selected option is : undefined';

    beforeEach(() => {
        cy.visit("https://demo.seleniumeasy.com/");
        cy.get('[href="#"]').contains('Input Forms').click();
        //cy.get('[href="./basic-select-dropdown-demo.html"]').contains('Select Dropdown List').click({force:true})
        cy.get('[href*="./basic"]').contains('Select Dropdown List').click({force:true})
    })

    it("Click on 'First Selected' button without selecting any options", () => {
        cy.get('#printMe').click()
        cy.get('.getall-selected').should('have.text', undefined)
    });

    it("Click on 'Get All Selected' button without selecting any options", () => {
        cy.get('#printAll').click()
        cy.get('.getall-selected').should('have.text', 'Options selected are : ')
    });

    it("Select 'Select 'California' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('California')
        cy.get('#printAll').click()
    });

    it("Select 'Florida' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('Florida')
        cy.get('#printMe').click()   
    });

    it("Select 'Florida' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('Florida')
        cy.get('#printAll').click() 
    });

    it("Select 'New Jersey' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('New Jersey')
        cy.get('#printMe').click() 
    });

    it("Select 'New Jersey' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('New Jersey')
        cy.get('#printAll').click() 
    });

    it("Select 'New York' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('New York')
        cy.get('#printMe').click() 
    });

    it("Select 'New York' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('New York')
        cy.get('#printAll').click() 
    });

    it("Select 'Ohio' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('Ohio')
        cy.get('#printMe').click() 
    });

    it("Select 'Ohio' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('Ohio')
        cy.get('#printAll').click() 
    });

    it("Select 'Texas' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('Texas')
        cy.get('#printMe').click() 
    });

    it("Select 'Texas' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('Texas')
        cy.get('#printAll').click() 
    });

    it("Select 'Pennsylvania' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('Pennsylvania')
        cy.get('#printMe').click() 
    });

    it("Select 'Pennsylvania' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('Pennsylvania')
        cy.get('#printAll').click() 
    });

    it("Select 'Select 'Washington' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('Washington')
        cy.get('#printMe').click() 
    });

    it("Select 'Washington' from the list and click 'Get All Selected' button", () => {
        cy.get('#multi-select').select('Washington')
        cy.get('#printAll').click() 
    });

    it("Select 'Select 'Washington' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select('Washington')
        cy.get('#printMe').click() 
    });

    it("Select 'California' from the list and click 'First Selected' button", () => {
        cy.get('#multi-select').select(['California', 'Texas', 'Washington'])
        cy.get('#printAll').click()
    });
})
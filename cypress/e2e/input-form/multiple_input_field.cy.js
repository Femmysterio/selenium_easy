/// <reference types="cypress" />

describe("Verifying Multiple Input Field", () => {

    beforeEach(() => {
        cy.visit("https://demo.seleniumeasy.com/");
        cy.get('[href="#"]').contains('Input Forms').click();
        cy.get('[href="./basic-first-form-demo.html"]').contains('Simple Form Demo').click();
    })

    it("Input two positive intergers and verify the sum", () => {
        cy.get('#value1').type(10);
        cy.get('#value2').type(20);
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', 30); //Assertion
    });

    it("validate entering 0 in both input fields and verify the sum", () => {
        cy.get('#value1').type(0);
        cy.get('#value2').type(0);
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', 0); //Assertion
    });

    it("Input two negative intergers and verify the sum", () => {
        cy.get('#value1').type(-4);
        cy.get('#value2').type(-12);
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', -16); //Assertion
    });

    it("Input a negative interger in one field and a positive interger in the other and verify the sum", () => {
        cy.get('#value1').type(-35);
        cy.get('#value2').type(25);
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', -10);  //Assertion
    });

    it("Input 16 digits positive Intergers in both input fields and verify the sum (boundary values)", () => {
        cy.get('#value1').type(1234567890152342);
        cy.get('#value2').type(1234567890152342 );
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', 2469135780304684); //Assertion
    });

    it("Input an interger in one input field and leave the other field empty and verify the sum", () => {
        cy.get('#value1').type(500);
        cy.get('#value2').type(' ');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', 'NaN');  //Assertion
    });

    it("Leave both input fields empty and verify the sum", () => {
        cy.get('#value1').type(' ');
        cy.get('#value2').type(' ');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', 'NaN'); //Assertion
    });

    it("Input letters in both input fields and verify the system rejects the operation", () => {
        cy.get('#value1').type('abc');
        cy.get('#value2').type('def');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', 'NaN'); //Assertion
    });

    it("Input numbers in one input field and letters in the other field and verify the system rejects operation", () => {
        cy.get('#value1').type('123');
        cy.get('#value2').type('abc');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', 'NaN'); //Assertion
    });

    it("Input smaller digits of interger in one input field and input a larger digits of interger in the other field and verify the sum", () => {
        cy.get('#value1').type('5');
        cy.get('#value2').type('1234567');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', '1234572'); //Assertion
    });

    it("Input larger digits of interger in one input field and input a smaller digits of interger in the other field and verify the sum", () => {
        cy.get('#value1').type('1234567');
        cy.get('#value2').type('5');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', '1234572'); //Assertion
    });

    it("Input interger with 0 as the first digits in both input fields and verify the sum", () => {
        cy.get('#value1').type('012');
        cy.get('#value2').type('08');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', '20'); //Assertion
    });

    it("Input interger with 0 as the first digits in both input fields and verify the sum", () => {
        cy.get('#value1').type('012');
        cy.get('#value2').type('08');
        cy.get('[onclick="return total()"]').click();
        cy.get('#displayvalue').should('have.text', '20'); //Assertion
    });
    
})
/// <reference types="cypress" />

describe("Verifying Single Modal", () => {

    beforeEach(() => {
        cy.visit("https://demo.seleniumeasy.com/");
        cy.get('[href="#"]').contains('Alerts & Modals').click();
        cy.get('[href="./bootstrap-modal-demo.html"]').contains('Bootstrap Modals').click();
        cy.get('[href="#myModal0"]').click();
    })


    it("Validate modal is triggered when user clicks  'Launch modal' button ", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("modal dialog displays");

        })
        cy.get('.modal-body').first().should('include.text', 'modal dialog');
    });


    it("Validate modal is closed when user click on the 'close' button", () => {

        cy.on('window:confirm', (str) => {
            //expect(str).to.equal("I'm an autocloseable success message. I will hide in 5 seconds.")
            expect(str).to.include("modal dialog displays");

        })
        cy.get('.modal-body').first().should('include.text', 'modal dialog');
        cy.wait(4000)
        cy.get('.btn').contains('Close').click();
    });


    it("Validate modal is closed when user click on the 'cancel' button", () => {

        cy.on('window:confirm', (str) => {
            //expect(str).to.equal("I'm an autocloseable success message. I will hide in 5 seconds.")
            expect(str).to.include("modal dialog displays");

        })
        cy.get('.modal-body').first().should('include.text', 'modal dialog');
        cy.wait(4000)
        cy.get('.close').first().click();
    });


    it("Validate modal is closed by clicking outside the modal", () => {

        cy.on('window:confirm', (str) => {
            //expect(str).to.equal("I'm an autocloseable success message. I will hide in 5 seconds.")
            expect(str).to.include("modal dialog displays");

        })
        cy.get('.modal-body').first().should('include.text', 'modal dialog');
        cy.wait(4000)
        cy.get('#myModal0').click();
    });


    it("validate changes is saved by clicking 'Save changes' button", () => {

        cy.on('window:confirm', (str) => {
            //expect(str).to.equal("I'm an autocloseable success message. I will hide in 5 seconds.")
            expect(str).to.include("modal dialog displays");

        })
        cy.get('.modal-body').first().should('include.text', 'modal dialog');
        cy.wait(3000)
        cy.get('[onclick="history.go(0)"]').first().click();
    });
})
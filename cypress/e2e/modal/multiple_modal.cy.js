/// <reference types="cypress" />

describe("Verifying Multiple Modal", () => {

    beforeEach(() => {
        cy.visit("https://demo.seleniumeasy.com/");
        cy.get('[href="#"]').contains('Alerts & Modals').click();
        cy.get('[href="./bootstrap-modal-demo.html"]').contains('Bootstrap Modals').click()
        cy.get('[href="#myModal"]').click()
    })

    it("Validate modal is triggered when user clicks  'Launch modal' button  ", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("This is the place where the content for the modal dialog displays.");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
    });


    it(" Validate modal is closed when user click on the 'close' link", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("This is the place where the content for the modal dialog displays.");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(3000);
        cy.get('.btn').contains('Close').click({force:true});

    });


    it(" Validate modal is closed when user click on the 'cancel' button", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("This is the place where the content for the modal dialog displays.");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(3000);
        //cy.get('.close').first().click({force:true});
        cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .close').click()
    });


    it("Validate modal is closed by clicking outside the 'Modal Title' modal", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("This is the place where the content for the modal dialog displays.");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(3000);
        cy.get('#myModal').click()
    });

    it("validate changes is saved by clicking 'Save changes' button", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("This is the place where the content for the modal dialog displays.");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(2000);
        cy.get('[onclick="history.go(0)"]').first().click({force:true});
    });


    it("Validate modal is triggered when user clicks  'Launch modal' button in the 'First Modal' modal", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("This is the place where the content for the modal dialog displays.");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(2000);
        cy.get('[href="#myModal2"]').click();
        cy.get('.modal-title').contains('Modal 2').should('have.text', 'Modal 2')
    });


    it("Validate modal is closed when user click on the 'close' link in the 'Modal 2' modal", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("content for the modal dialog");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(2000);
        cy.get('[href="#myModal2"]').click();
        cy.get('.modal-title').contains('Modal 2').should('have.text', 'Modal 2')
        cy.wait(2000)
        cy.get('.btn').contains('Close').click({force:true})
        //cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]').click()
    });


    it("Validate modal is closed when user click on the 'cancel' button in the 'Modal 2' modal", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("content for the modal dialog");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(2000);
        cy.get('[href="#myModal2"]').click();
        cy.get('.modal-title').contains('Modal 2').should('have.text', 'Modal 2')
        cy.wait(2000)
        cy.get('.close').first().click({force:true});
    });


    it("Validate modal is closed by clicking outside the 'Modal 2' modal ", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("content for the modal dialog");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(2000);
        cy.get('[href="#myModal2"]').click();
        cy.get('.modal-title').contains('Modal 2').should('have.text', 'Modal 2')
        cy.wait(2000)
        cy.get('#myModal2').click()
    });


    it("Validate modal is closed by clicking outside the 'Modal 2' modal ", () => {

        cy.on('window:confirm', (str) => {
            expect(str).to.include("content for the modal dialog");

        })
        cy.get('.modal-title').contains('First Modal').should('have.text', 'First Modal')
        cy.wait(2000);
        cy.get('[href="#myModal2"]').click();
        cy.get('.modal-title').contains('Modal 2').should('have.text', 'Modal 2')
        cy.wait(2000)
        cy.get('[onclick="history.go(0)"]').first().click({force:true});
    });

})
/// <reference types="cypress" />

describe("Verifying Bootstrap Alert Messages", () => {

    beforeEach(() => {
        cy.visit("https://demo.seleniumeasy.com/");
        cy.get('[href="#"]').contains('Alerts & Modals').click();
        cy.get('[href="./bootstrap-alert-messages-demo.html"]').contains('Bootstrap Alerts').click()
    })

    it("Validate alert is triggered when user clicks  'Autocloseable success message' button ", () => {

        cy.get('#autoclosable-btn-success').click()

        cy.on('window:alert', (str) => {
            //expect(str).to.equal("I'm an autocloseable success message. I will hide in 5 seconds.")
            expect(str).to.include("an autocloseable success")
        
        })
    });


    it("Validate that alert message hides after 5 secs, when user Clicks 'Autocloseable success message' button", () => {

        cy.get('#autoclosable-btn-success').click()

        cy.on('window:alert', (str) => {
            //expect(str).to.equal("I'm an autocloseable success message. I will hide in 5 seconds.")
            expect(str).to.include("an autocloseable success")
        
        })
        cy.wait(5000)
    });


    it("validate Alert is triggered when user clicks  'Normal success message' button  ", () => {

        cy.get('#normal-btn-success').click()

        cy.on('window:alert', (str) => {
            //expect(str).to.equal("I'm a normal success message. To close use the appropriate button.")
            expect(str).to.include("normal success")

        })
        cy.get('.alert-normal-success').should('include.text', 'normal success')
    });


    it("Validate Alert can be closed by clicking on the close button after 'Normal success message' button has been triggered", () => {

        cy.get('#normal-btn-success').click()

        cy.on('window:alert', (str) => {
            //expect(str).to.equal("I'm a normal success message. To close use the appropriate button.")
            expect(str).to.include("normal success")
            
        })
        cy.get('.alert-normal-success').should('include.text', 'normal success')
        cy.wait(3000)
        cy.get('.alert-normal-success > .close').click({force:true})
    });


    it("validate Alert is triggered when user clicks  'Autocloseable warning message' button ", () => {

        cy.get('#autoclosable-btn-warning').click()

        cy.on('window:alert', (str) => {
            expect(str).to.include("appropriate button")             

        })
    });


    it("Validate that alert message hides after 3 secs, when user Clicks 'Autocloseable warning message' button", () => {

        cy.get('#autoclosable-btn-warning').click()

        cy.on('window:alert', (str) => {
            expect(str).to.include("appropriate button")             

        })
        cy.wait(3000)
    });


    it("validate Alert is triggered when user clicks  'Normal warning message' button ", () => {

        cy.get('#normal-btn-warning').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm a normal warning message. To close use the appropriate button.")           

        })
        cy.get('.alert-normal-warning').should('include.text', 'normal warning')
    });


    it("Validate Alert can be closed by clicking on the close button after 'Normal warning message' button has been triggered", () => {

        cy.get('#normal-btn-warning').click()

        cy.on('window:alert', (str) => {
            expect(str).to.include("I'm a normal warning")
            
        })
        cy.get('.alert-normal-warning').should('include.text', 'normal warning')
        cy.wait(3000)
        cy.get('.alert-normal-warning > .close').click({force:true})
    });


    it("validate Alert is triggered when user clicks  'Autocloseable danger message' button ", () => {

        cy.get('#autoclosable-btn-danger').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm an autocloseable danger message. I will hide in 5 seconds.")
             

        })
    });


    it("Validate that alert message hides after 5 secs, when user Clicks 'Autocloseable danger message' button", () => {

        cy.get('#autoclosable-btn-danger').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm an autocloseable danger message. I will hide in 5 seconds.")
                        
        })
        cy.wait(5000)
    });


    it("validate Alert is triggered when user clicks  'Normal danger message' button ", () => {

        cy.get('#normal-btn-danger').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm a normal danger message. To close use the appropriate button.")            
        })
        cy.get('.alert-normal-danger').should('include.text',"normal danger message")
    });


    it("Validate Alert can be closed by clicking on the close button after 'Normal danger message' button has been triggered", () => {

        cy.get('#normal-btn-danger').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm a normal danger message. To close use the appropriate button.")
            
        })
        cy.get('.alert-normal-danger').should('include.text',"I'm a normal danger message")
        cy.wait(3000)
            cy.get('.alert-normal-danger > .close').click({force:true})
    
    });


    it("validate Alert is triggered when user clicks  'Autocloseable info message' button", () => {

        cy.get('#autoclosable-btn-info').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm an autocloseable info message. I will hide in 6 seconds.")             

        })
    });


    it("Validate that alert message hides after 6 secs, when user Clicks 'Autocloseable info message' button", () => {

        cy.get('#autoclosable-btn-info').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm an autocloseable info message. I will hide in 6 seconds.")             

        })
        cy.wait(6000)
    });
    

    it("Validate Alert is triggered when user clicks  'Normal info message' button ", () => {

        cy.get('#normal-btn-info').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm a normal info message. To close use the appropriate button.")            
        })
        cy.get('.alert-normal-info').should('include.text',"normal info")
    });


    it("Validate Alert can be closed by clicking on the close button after 'Normal info message' button has been triggered", () => {

        cy.get('#normal-btn-info').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal("I'm a normal info message. To close use the appropriate button.")
            
        })
        cy.get('.alert-normal-info').should('include.text',"info message")
        cy.wait(3000)
            cy.get('.alert-normal-info > .close').click({force:true})
    
    });

})
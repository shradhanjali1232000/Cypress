describe("Textbox",()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevent Cypress from failing the test
      });
    it("TestboxWebelement",()=>{

        cy.visit('https://demoqa.com/elements')
        cy.contains('span', 'Text Box').click();
        cy.get("#userName").should('be.visible')
        cy.get('#userName').type('Shradha')

        cy.get('#userEmail').type('Shradha22@gmail.com')
        cy.get('#currentAddress').type('Bhubaneswar')
        cy.get('#permanentAddress').type('Bhubaneswar')
        cy.get('#submit').click()

        //cy.get('')
    })

    it("TestCheckBox",()=>{
        cy.visit('https://demoqa.com/elements')
        cy.contains('span','Check Box').click()
        cy.get('.rct-icon.rct-icon-uncheck').click()

    })

    it("RadioButton",()=>{
        cy.visit('https://demoqa.com/elements')
        cy.contains('span','Radio Button').click()
        //cy.get('#yesRadio').click()
        cy.get('label[for="yesRadio"]').click()
        cy.get('.text-success').should('have.text', 'Yes')

    })

    it.only('Table',()=>{
        cy.visit('https://demoqa.com/webtables')
        cy.get('.rt-tbody .rt-tr-group').should('have.length',10)
    })
})
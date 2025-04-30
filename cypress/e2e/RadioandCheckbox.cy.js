/// <reference types="cypress" />

describe("Radiobutton",()=>{

    it("checkRadioButton",()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('input#male').should("be.visible")
        cy.get('input#female').should("be.visible") //Visible of RadioButton

        //Selecting Radio Button
        cy.get('input#male').check().should('be.checked')
        cy.get('input#female').should('not.be.checked')


    })

    it("checkCheckBox",()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#sunday').should('be.visible')  //checking Visibility

        //Selecting single checkbox
        cy.get('#sunday').check().should('be.checked')
        cy.get('#sunday').uncheck().should('not.be.checked') //Unselect the checkbox

        // select all checkbox 

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')  

        // Selecting 1st and last  checkbox

        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()




    })
})
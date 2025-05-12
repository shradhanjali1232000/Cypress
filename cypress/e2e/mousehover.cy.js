///  <reference types="cypress" />

describe('MouseHover',()=>{

    it('Hover',()=>{

cy.visit('https://testautomationpractice.blogspot.com/')
//cy.get('.dropdown').trigger('mouseover')
//cy.get('.dropdown').invoke('show')
cy.get('.dropdown-content').invoke('show')
cy.get('.dropdown-content > :nth-child(2)').click()

    })

    it.only("MouseRealHover",()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.dropbtn').realHover()


    })
})
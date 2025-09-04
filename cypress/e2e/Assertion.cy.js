/// <reference types="cypress" />

describe("AssertionDemo",()=>{

    it("ImplicitAssertion", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //Implicit Assertion  shoud & and

       /* cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        .should('contain','orangehrm')  //capture url should assertion with contain keyword*/

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        .and('not.contain','orangehrms')  //capture url and assertion with contain and not.contain keyword

        cy.title().should('include','Orange').and('eq','OrangeHRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value','Admin') // have.value parameter  value check 



    })

    it("ExplicityAssertion", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expctname="Ilham Ramadhan";

        cy.get(".oxd-userdropdown-tab").then( (x)=>{ 

            let actname=x.text()
                // BDD Style
            expect(actname).to.equal( expctname)
            expect(actname).to.not.equal( expctname)

            //TDD Style

            assert.equal(actname,expctname)

            assert.notEqual(actname,expctname)






         })

        //jenkins test
 
        





        




    })
})

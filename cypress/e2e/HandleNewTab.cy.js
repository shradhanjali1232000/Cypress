/// <reference types="cypress" />

describe('HandelTab',() =>{

    it('NewTab',() =>{

        //cy.visit('https://testautomationpractice.blogspot.com/')
        cy.request('https://jsonplaceholder.typicode.com/posts/1')
         .then((response) => {
         expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
  });


    })

   /* it.only('HandelNewTab',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("a[id='opentab']").then((e)=>{

            let url=e.prop('href');
            cy.visit(url);
        })

        cy.url().should('include','https://www.qaclickacademy.com/')

        cy.wait(3000);

        cy.go('back');


    })*/

        it.only('HandleNewTab', () => {
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
          
            cy.get("a[id='opentab']")
              .should('have.attr', 'href')
              .then((href) => {
                const { origin } = new URL(href);
          
                cy.origin(origin, () => {
                  cy.visit('/');
                  cy.url().should('include', 'qaclickacademy');
                });
              });
          });
          
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

/*Cypress.Commands.add('login',(Username,Password)=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type(Username)
    cy.get("input[placeholder='Password']").type(Password)
    cy.get("button[type='submit']").click()

})*/
 
/*Cypress.Commands.add('getIframeBody', (iframe) => {
    return cy
      .get(iframe)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  });*/


  Cypress.Commands.add('fillForm', (data) => {
    cy.get('#firstName').type(data.firstName);
    cy.get('#lastName').type(data.lastName);
    cy.get('#userEmail').type(data.email);
    cy.contains('.custom-control-label', data.gender).click();
    cy.get('#userNumber').type(data.mobile);
  
    // Subject input
    cy.get('#subjectsInput').type(`${data.subject}{enter}`);
  
    // Hobbies
    cy.contains('.custom-control-label', data.hobby).click();
  
    // Address
    cy.get('#currentAddress').type(data.address);
  
    // State and City
    cy.get('#state').click().contains('div', data.state).click();
    cy.get('#city').click().contains('div', data.city).click();
  });
  
  
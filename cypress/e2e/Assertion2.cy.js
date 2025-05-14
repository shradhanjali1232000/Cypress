/// <reference types="cypress" />

describe('DemoQA Assertions', () => {
    it('Demonstrates should vs expect', () => {
      cy.visit('https://demoqa.com/');
  
      // Using should
      cy.get('.card-body').first().should('contain.text', 'Elements');
  
      // Using expect
      cy.get('.card-body').first().then(($el) => {
        expect($el.text()).to.include('Elements');
      });
    });
  });
  
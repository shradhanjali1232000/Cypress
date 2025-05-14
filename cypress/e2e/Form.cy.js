/// <reference types="cypress" />

describe('DemoQA Automation Practice Form', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevent Cypress from failing the test
      });   
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('Fills and submits the form', () => {
      cy.get('#firstName').type('Shradha');
      cy.get('#lastName').type('Swain');
      cy.get('#userEmail').type('shradha@mindfire.com');
      cy.get('input[name="gender"][value="Female"]').check({ force: true });
      cy.get('#userNumber').type('1234567890');
  
      // Date of Birth
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select('March');
      cy.get('.react-datepicker__year-select').select('2001');
      cy.get('.react-datepicker__day--015').click();
  
      // Subjects
      cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');
  
      // Hobbies
      cy.get('label[for="hobbies-checkbox-1"]').click();
  
      // Upload Picture
      cy.get('#uploadPicture').attachFile('files/Status.txt');
  
      // Current Address
      cy.get('#currentAddress').type('Bhubaneswar');
  
      // State and City
      cy.get('#state').click().get('#react-select-3-option-0').click();
      cy.get('#city').click().get('#react-select-4-option-0').click();
  
      // Submit
      cy.get('#submit').click();
  
      // Assertions
      cy.get('.modal-content').should('be.visible');
      cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');
    });
  });
  
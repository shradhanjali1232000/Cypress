describe('DemoQA Form Automation using Fixture and Custom Command', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // Prevent Cypress from failing the test
      }); 
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });
  
    it('fills the form using fixture data', () => {
      cy.fixture('studentData').then((student) => {
        cy.fillForm(student);
  
        // Submit form
        cy.get('#submit').click();
  
        // Validate submission modal
        cy.get('.modal-content').should('contain', student.firstName);
        cy.get('.modal-content').should('contain', student.email);
      });
    });
  });
  
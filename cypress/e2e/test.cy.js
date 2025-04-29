//const cypress = require("cypress")

describe('Suite name', () => {
    it('Verify-Positive Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
 //expect(true).to.equal(true)
    })

    it('Verify-Negative Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM123')
  })

})
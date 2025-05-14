/// <reference types="cypress" />
import 'cypress-iframe'
describe('HandleIframe',()=>{

    it('HandleIFrame -using Custom Command',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.frameLoaded('#courses-iframe');  // Load the frame

        cy.iframe().find("a[href='mentorship']").eq(0).click()
    })

   


      });
      
      
      


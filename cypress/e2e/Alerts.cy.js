/// <reference types="cypress" />

describe('Alerts',()=>{

    it.skip('AlertsHandel',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')  // Handel Simple Alert

        cy.get('#alertBtn').click();
        cy.on('window:alert',(t)=>{        // use event validating something in alert window
            expect(t).to.contains('I am an alert box!')  
        })


    })

    it.skip('AlertsHandel',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')  // Handel Confirmation Alert

        cy.get('#confirmBtn').click();
        cy.on('window:confirm',(t)=>{        // use  window confirm event validating something in alert window with default ok
            expect(t).to.contains('Press a button!')  
        })

    })

    it('AlertsHandel',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')  // Handel Confirmation Alert with Candel alert button

        cy.get('#confirmBtn').click();
        cy.on('window:confirm',(t)=>{        // use  window confirm event validating something in alert window with default ok
            expect(t).to.contains('Press a button!')  
        })

        cy.on('window:confirm',()=> false);    // here we implement Handel Cancel button

    })

    it('PromtAlert',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')  // Handel Promt Alert 

       cy.window().then((win)=>{

        //cy.stub(win,'Prompt').returns('Hello Shradha')

    
       })
       cy.get('#promptBtn').click()
      // cy.on('window:prompt',()=> false); 

    })

This is Cron job Test 

        
})

   

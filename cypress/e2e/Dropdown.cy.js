/// <reference types="cypress" />

describe('handeldropdown',()=>{

    it.skip('Dropdownwithselect',()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#country').select('India').should('have.value','india') // using ID selector with chaining assertion


    })

    it.skip('withoutselecttag',()=>{    // Dropdown handel which dont have select tag 

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('India').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','India')
   


    })

    it.skip('AutoSuggestDropdown',()=>{    // Auto SuggestDropdown handel  

        cy.visit('https://www.wikipedia.org/')

        //cy.get('#select2-billing_country-container').click()
        //cy.get('.select2-search__field').type('India').type('{enter}')
        //cy.get('#select2-billing_country-container').should('have.text','India')

        cy.get("#searchInput").type('Delhi')
        cy.get(".suggestion-title").contains('Delhi University').click()


    })

    it.skip('Dropdown',()=>{    // Auto SuggestDropdown handel  

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('Option1')
        

    })

    it.skip('DynamicDropdown',()=>{    // Auto SuggestDropdown handel  

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#dropdown-class-example').select('Option1')
        

    })


    it.skip('Auto DynamicDropdown',()=>{    // Auto SuggestDropdown handel  

        cy.visit('https://www.google.com/')

        cy.get("input[title='Search']").type('Cypress Document')

        cy.wait(3000)
        cy.get('div.wM6W7d>span').should('have.length',11)

        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{


            if($el.text()=='Cypress Document')       // Using Jquery Function
            {
                cy.wrap($el).click()
            }
        })

        cy.get("input[title='Search']").should('have.value','Cypress Document')
        

    })
    

})
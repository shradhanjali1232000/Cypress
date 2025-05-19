describe("AmazonFlow",()=>{

    it.skip("E2E Loginflow",()=>
        {
            cy.visit("https://www.amazon.in/")
            cy.get('#nav-link-accountList > .nav-a').click()

           
            //cy.get(".a-button-text.a-declarative")
            cy.get('#ap_email_login').type('7681809368')
             cy.get('.a-dropdown-prompt').click()
             cy.contains('a', 'India +91').click();
             cy.get('.a-button-input').click()
             cy.get('#ap_password').type('Amazon@123')
             cy.get('#input-box-otp').type
             cy.get('#signInSubmit').click()

    })

     it("E2E Loginflow using Fixture",()=>
        {
            //cy.get(".a-button-text.a-declarative")
            cy.fixture('amazon').then((data)=>{

            cy.visit("https://www.amazon.in/")
            cy.get('#nav-link-accountList > .nav-a').click()
            cy.get('#ap_email_login').type(data.phNo);
            cy.get('.a-dropdown-prompt').click()
            cy.contains('a', 'India +91').click();
            cy.get('.a-button-input').click()
            cy.get('#ap_password').type(data.password)
           // cy.get('#input-box-otp').type
            cy.get('#signInSubmit').click()

           cy.get("#twotabsearchtextbox").type("Laptop",{ delay: 100 }).then(() => 
            {
           cy.get("#nav-search-submit-button").click();
           });

        /* cy.get('[data-component-type="s-search-result"]').eq(2).find('a.a-link-normal.s-link-style.a-text-normal')
         .first()
          .invoke('removeAttr', 'target') //  Removes opening in new tab
          .should('be.visible').click();

          //cy.get("#a-autoid-1").click()*/
           cy.get('[data-component-type="s-search-result"] a.a-link-normal.s-link-style.a-text-normal')
           .each(($el, index, $list) => {
        if (index === 3) {
          cy.wrap($el)
            .invoke('removeAttr', 'target') // So it opens in same tab
            .scrollIntoView()
            .should('be.visible')
            .click();
        }
    })
      cy.get('#add-to-cart-button').first().click({ force: true });
    
            })      

    })
})
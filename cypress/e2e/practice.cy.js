/// <reference types="cypress" />

it('Use of then function',()=>{

    cy.visit('https://commitquality.com/practice-contact-form')

    cy.get('#name').type('Testing').then((textbox)=>{

        console.log(textbox.val())  //.val() is a jquery function to grab the value info
    })
})

it('Then return exampke',()=>{

    cy.visit('https://commitquality.com/')

   cy.get('.product-list-table>tbody>tr').then((rows)=>{

        return rows[0]
        }).then((row)=>{

            expect(row).to.have.text('11Product 2152021-02-01')
    
    })

})
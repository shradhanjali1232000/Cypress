describe("MockingAPITest",()=>{

    it ("MY1stcase Mock response",()=>{

        cy.intercept({
            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        } ,
        {
            statusCode: 200,
            body : [ 
                {
                   "book_name": "RestAssured with Java",
                   "isbn": "LSA",
                   "aisle": "2303"
                 }
              ]
        }).as('Bookretrivals') //reference variable using .as

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.get(".btn.btn-primary").click()

        cy.wait("@Bookretrivals").then(({request,response})=>
            {
                cy.get('tr').should('have.length',response.body.length+1)


            })

        cy.get('p').should('have.text','Oops only 1 Book available')

    })

    it.only("My2nd Mock Request- Intercept roothandler",()=>{

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req)=>
            {
                req.url ="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=swain"

                req.continue((resp)=>
                {
                    //expect(resp.statusCode).to.equal(403)

                })

            }
        ).as("DummyUrl")

        cy.get(".btn.btn-primary").click()
        cy.wait('@DummyUrl')
    })
})
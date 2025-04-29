describe('CSSTest', () =>{

    it("CSSLocators", ()=>{

        cy.visit('http://www.automationpractice.pl/index.php')

        cy.get('#search_query_top').type("T-shirts") // css id with tag optional
        cy.get("[name='submit_search']").click() // css using attributes

        cy.get('.lighter').contains("T-shirts")  //Assertions  using class 
        
    })



})
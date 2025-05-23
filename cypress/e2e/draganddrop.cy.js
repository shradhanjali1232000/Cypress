describe("draganddrop",()=>{

    it("Dragelement",()=>{

        cy.visit("https://commitquality.com/practice-drag-and-drop")
        cy.get("#small-box").drag(".large-box").then((success)=>{

            assert.isTrue(success)
        })
    })
})
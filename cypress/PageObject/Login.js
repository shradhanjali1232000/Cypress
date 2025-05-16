class login
{
    setusername(username)
    {
        cy.get("input[placeholder='Username']").type(username)

    }

    setpassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)

    }

    clicksubmit()
    {
        cy.get("button[type='submit']").click()
    }

    verifyLogin()
    {
        cy.get(".oxd-text.oxd-text--h6").should('have.text','Dashboard')
    }


}

export default login;
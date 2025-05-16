 class login
{
    txtusername="input[placeholder='Username']"
    txtpassword="input[placeholder='Password']"
    btnsubmit="button[type='submit']"
    lblmsg=".oxd-text.oxd-text--h6"


    setusername(username)
    {
        cy.get(this.txtusername).type(username)

    }

    setpassword(password)
    {
        cy.get(this.txtpassword).type(password)

    }

    clicksubmit()
    {
        cy.get(this.btnsubmit).click()
    }

    verifyLogin()
    {
        cy.get(this.lblmsg).should('have.text','Dashboard')
    }


}

export default login;
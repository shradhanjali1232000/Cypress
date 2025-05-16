import login from "../PageObject/Login2";

describe('PageObject',()=>{
    it.skip("LoginPOM",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln = new login() //ln is new object reference variable

        ln.setusername("Admin")
        ln.setpassword("admin123")
        ln.clicksubmit();
        ln.verifyLogin();

    })
// using Pom With Fixture
    it("LoginPOM",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then((data)=>{

        const ln = new login()            //ln is new object reference variable

        ln.setusername(data.username)
        ln.setpassword(data.password)
        ln.clicksubmit();
        ln.verifyLogin();

        })

    })
})
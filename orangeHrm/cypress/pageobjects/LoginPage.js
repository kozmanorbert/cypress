import NavigationBar from './../pageObjects/NavigationBar';
class LoginPage{
    constructor(){
        cy.get("#btnLogin").should('be.visible').as('loginButton')
    }
      
    clickLoginButton(){
        cy.get("@loginButton").click()

        return new NavigationBar
    }

}

export default LoginPage;
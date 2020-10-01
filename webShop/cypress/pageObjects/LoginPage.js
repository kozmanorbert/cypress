class LoginPage{
    constructor(){
        //pageHeader
        cy.get(".page-heading").should('be.visible').as('pageHeader')
        //createAnAccountText
        cy.get("form#create-account_form > .page-subheading").should('be.visible').as('createAnAccountText')
    }
    getPageHeaderText(){
        return cy.get("@pageHeader")
    }

    getCreateAnAccountText(){
        return cy.get("@createAnAccountText")
    }
}

export default LoginPage
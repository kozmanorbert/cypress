import LoginPage from '../pageObjects/LoginPage'

class OrderPage{
    constructor(){
        //productAttributes
        cy.get("td.cart_description > small:nth-of-type(2)").should('be.visible').as('productAttributes')
        //totalPrice
        cy.get("#total_price").should('be.visible').as('totalPrice')
        //proceedToCheckoutButton
        cy.get("a.standard-checkout > span").should('be.visible').as('proceedToCheckoutButton')
    
    }

    getProductAttributes(){
        return cy.get("@productAttributes")
    }

    getTotalPrice(){
        return cy.get("@totalPrice")
    }

    clickProceedToCheckoutButton(){
        cy.get("@proceedToCheckoutButton").click()
        return new LoginPage
    }
}

export default OrderPage
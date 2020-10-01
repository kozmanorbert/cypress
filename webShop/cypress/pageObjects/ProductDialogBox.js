import OrderPage from '../pageObjects/OrderPage'

class ProductDialogBox{
    constructor(){
        //productAttributes
        cy.get("#layer_cart_product_attributes").should('be.visible').as('productAttributes')
        //quantityNumber
        cy.get("#layer_cart_product_quantity").should('be.visible').as('quantityNumber')
        //prdouctTitle
        cy.get("#layer_cart_product_title").should('be.visible').as('prdouctTitle')
        //proceedToCheckoutButton
        cy.get("a.button-medium > span").should('be.visible').as('proceedToCheckoutButton')

    }
    getProductAttributes(){
        return cy.get("@productAttributes")
    }

    getQuantityNumber(){
        return cy.get("@quantityNumber")
    }

    getPrdouctTitle(){
        return cy.get("@prdouctTitle")
    }

    clickProceedToCheckoutButton(){
        cy.get("@proceedToCheckoutButton").click()
        return new OrderPage
    }

}

export default ProductDialogBox
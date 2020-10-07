import ProductPage from '../pageObjects/ProductPage'

class TshirtsPage{
    constructor(){
        //fadedShortProductLink
        cy.get(".product-name[title='Faded Short Sleeve T-shirts']").should('be.visible').as('fadedShortProductLink')
    }

    clickFadedShortProductLink(){
        cy.get("@fadedShortProductLink").click()
        return new ProductPage
    }
}
export default TshirtsPage
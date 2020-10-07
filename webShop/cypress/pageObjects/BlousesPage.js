import ProductPage from '../pageObjects/ProductPage'

class BlousesPage{
    constructor(){
        //blousesProductLink
        cy.get(".product-name[title='Blouse']").should('be.visible').as('blousesProductLink')
    }

    clickBlouseProductLink(){
        cy.get("@blousesProductLink").click()
        return new ProductPage
    }
}
export default BlousesPage
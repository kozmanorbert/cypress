import ProductPage from '../pageObjects/ProductPage'

class CasualDressesPage{
    constructor(){
        //printedDressProductLink
        cy.get(".product-name[title='Printed Dress']").should('be.visible').as('printedDressProductLink')
    }

    clickPrintedDressProductLink(){
        cy.get("@printedDressProductLink").click()
        return new ProductPage
    }
}
export default CasualDressesPage
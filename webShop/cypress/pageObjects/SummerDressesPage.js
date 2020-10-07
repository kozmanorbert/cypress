import ProductPage from '../pageObjects/ProductPage'

class SummerDressesPage{
    constructor(){
        //printedSummerDressProductLink
        cy.get("ul.product_list > .first-item-of-tablet-line .right-block [title='Printed Summer Dress']").should('be.visible').as('printedSummerDressProductLink')
        //printedChiffonDressProductLink
        cy.get("ul.product_list > .first-item-of-tablet-line .right-block [title='Printed Chiffon Dress']").should('be.visible').as('printedChiffonDressProductLink')
    }

    clickPrintedSummerDressProductLink(){
        cy.get("@printedSummerDressProductLink").click()
        return new ProductPage
    }

    clickPrintedChiffonDressProductLink(){
        cy.get("@printedChiffonDressProductLink").click()
        return new ProductPage
    }
}
export default SummerDressesPage
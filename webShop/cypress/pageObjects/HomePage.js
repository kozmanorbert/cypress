import ProductPage from "./ProductPage"


class HomePage{
    constructor(){
        //firstElementInPopularList
        cy.get('ul#homefeatured > li:nth-of-type(1)').should('be.visible').as('firstElementInPopularList')
        

        //blouseProduct
        cy.get("ul#homefeatured .right-block [title='Blouse']").as('blouseProduct')

        //printedDressProduct
        cy.get("ul#homefeatured > .last-item-of-tablet-line .right-block [title='Printed Dress']").as('printedDressProduct')

        //printedSummerDressProduct
        cy.get("ul#homefeatured > .first-in-line .right-block [title='Printed Summer Dress']").as('printedSummerDressProduct')

        //printedChiffonDressProduct
        cy.get("ul#homefeatured .right-block [title='Printed Chiffon Dress']").as('printedChiffonDressProduct')
    }

    createScreenshotInFirstElement(){
        cy.get("@firstElementInPopularList").screenshot({ padding: 10 })
    }

    clickBlouseProduct(){
        cy.get("@blouseProduct").click()
        return new ProductPage
    }

    clickPrintedDressProduct(){
        cy.get("@printedDressProduct").click()
        return new ProductPage
    }

    clickPrintedSummerDressProduct(){
        cy.get("@printedSummerDressProduct").click()
        return new ProductPage
    }

    clickPrintedChiffonDressProduct(){
        cy.get("@printedChiffonDressProduct").click()
        return new ProductPage
    }
    
}

export default HomePage;
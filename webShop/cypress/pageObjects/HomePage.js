


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
        cy.get("ul#homefeatured [alt='Faded Short Sleeve T-shirts']").screenshot()
    }
    
}

export default HomePage;
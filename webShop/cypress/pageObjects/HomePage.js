import { cyan } from "color-name";

class HomePage{
    constructor(){
        //firstElementInPopularList
        cy.get('ul#homefeatured > li:nth-of-type(1)').should('be.visible').as('firstElementInPopularList')
        
     
    }

    createScreenshotInFirstElement(){
        cy.get("@firstElementInPopularList").scrollTo('center', { ensureScrollable: false }).screenshot({ padding: 10 })
    }
}

export default HomePage;
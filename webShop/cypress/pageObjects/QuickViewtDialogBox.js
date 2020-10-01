import 'cypress-iframe'

class QuickViewtDialogBox{
    constructor(){
        //description
        cy.frameLoaded('.fancybox-iframe')
        cy.iframe().find('div#short_description_content > p').should('be.visible')
        
    }

    getDescriptionText(){
        return cy.iframe().find('div#short_description_content > p')
    }
}

export default QuickViewtDialogBox
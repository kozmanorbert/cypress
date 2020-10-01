import QuickViewtDialogBox from '../pageObjects/QuickViewtDialogBox'

class SearchPage{
    constructor(){
        //quickViewButton
        cy.get('a.quick-view > span').as('quickViewButton')
        
    }

    clickQuickViewButton(){
        cy.get("[alt='Blouse']").trigger('mouseover')
        cy.get('a.quick-view > span').click()
        return new QuickViewtDialogBox
    }

}

export default SearchPage;
import HomePage from '../pageObjects/HomePage'
import NavigationBar from '../pageObjects/NavigationBar'
 
 describe ('Search and screenshot Tests', function() {
    beforeEach(function(){
        cy.visit('/')
    })

    it('Create a screenshot about the element with the girl in the red dress', function() {   
        const homePage = new HomePage
        homePage.createScreenshotInFirstElement()
    })

    it("Search for 'blouse'", function() {   
        const description = 'Short sleeved blouse with feminine draped sleeve detail.'

        const navigationBar = new NavigationBar
        navigationBar.getSearcField().type('blouse')
        const searchPage = navigationBar.clickSearchButton()
        const quickViewtDialogBox = searchPage.clickQuickViewButton()
        quickViewtDialogBox.getDescriptionText().should('have.text', description)
    })

})    
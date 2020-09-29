import HomePage from '../pageObjects/HomePage'

describe ('Users Page', function() {
    beforeEach(function(){
        cy.visit('/')
    })

    
     it('Create Screenshoot', function() {   
        const homePage = new HomePage
        homePage.createScreenshotInFirstElement()
    })
}) 
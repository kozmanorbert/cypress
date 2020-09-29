import LoginPage from '../pageObjects/LoginPage';


describe ('Users Page', function() {
    beforeEach(function(){
        cy.visit('baseUrl', {failOnStatusCode: false})
    })

    
 /*    it('Print all user', function() {   

        const loginPage = new LoginPage()
        const navigationBar = loginPage.clickLoginButton()     
        const userPage = navigationBar.navigateUsersPage()
        userPage.printAllusername()
    }) */

    it('Secomn all user', function() {

        const loginPage = new LoginPage()
        const navigationBar = loginPage.clickLoginButton()     
        const myInfoPage = navigationBar.navigateMyInfoPage()
        
    })

   })
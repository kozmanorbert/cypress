import LoginPage from '../pageObjects/LoginPage';


describe ('Users Page', function() {
    beforeEach(function(){
        cy.visit('baseUrl', {failOnStatusCode: false})
    })

    
    it('Print all user', function() {   

        const loginPage = new LoginPage()
        const navigationBar = loginPage.clickLoginButton()     
        const userPage = navigationBar.navigateUsersPage()
        userPage.printAllusername()
    })  

    it('Check My info', function() {

        const loginPage = new LoginPage()
        const navigationBar = loginPage.clickLoginButton()     
        const myInfoPage = navigationBar.navigateMyInfoPage()
        cy.log(Cypress.env('firstName'))
        myInfoPage.getFirstNameField().should('have.value', Cypress.env('firstName'))
        myInfoPage.getLastNameField().should('have.value', Cypress.env('lastName'))
        myInfoPage.getMiddleNameField().should('have.value', Cypress.env('middleName'))
        myInfoPage.getEmployeeIdField().should('have.value', Cypress.env('employeeId'))
        myInfoPage.getEmpBirthdayField().should('have.value', Cypress.env('empBirthday'))
        myInfoPage.getMartialStatusField().should('contain', Cypress.env('martialStatus'))
        myInfoPage.getGenderField().should('contain', Cypress.env('gender'))
        myInfoPage.getNationalityField().should('contain', Cypress.env('nationality'))
        myInfoPage.getLicenseExpDateField().should('have.value', Cypress.env('licenseExpDate'))
    })

   })
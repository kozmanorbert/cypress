import LoginPage from '../pageObjects/LoginPage';
var navigationBar

describe ('Users Page', function() {
    beforeEach(function(){
        cy.visit('baseUrl', {failOnStatusCode: false})

        const loginPage = new LoginPage()
        navigationBar = loginPage.clickLoginButton()  

        cy.fixture('testData').then(function (checkMyInfoTestData) {
            this.checkMyInfoTestData = checkMyInfoTestData;
          })
    })

    
     it('Print all user', function() {   
    
        const userPage = navigationBar.navigateUsersPage()
        userPage.printAllusername()
    })  

    it('Check My info', function() {
        const testDataPath = this.checkMyInfoTestData.checkMyInfoTestData
        const myInfoPage = navigationBar.navigateMyInfoPage()

        myInfoPage.getFirstNameField().should('have.value', testDataPath.firstName)
        myInfoPage.getLastNameField().should('have.value', testDataPath.lastName)
        myInfoPage.getMiddleNameField().should('have.value', testDataPath.middleName)
        myInfoPage.getEmployeeIdField().should('have.value', testDataPath.employeeId)
        myInfoPage.getEmpBirthdayField().should('have.value', testDataPath.empBirthday)
        myInfoPage.getMartialStatusField().should('contain', testDataPath.martialStatus)
        myInfoPage.getGenderField().should('contain', testDataPath.gender)
        myInfoPage.getNationalityField().should('contain', testDataPath.nationality)
        myInfoPage.getLicenseExpDateField().should('have.value', testDataPath.licenseExpDate)
    }) 

    it('Print Employee Claims', function() {   

        const employeeClaimsPage = navigationBar.navigateEmployeeClaims()
        employeeClaimsPage.checkRowNumber()
        employeeClaimsPage.printAllExpenseClaimId()
    }) 

   })
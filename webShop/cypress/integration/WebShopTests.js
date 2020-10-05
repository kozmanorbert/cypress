import HomePage from '../pageObjects/HomePage'
import NavigationBar from '../pageObjects/NavigationBar'

describe ('Users Page', function() {
    beforeEach(function(){
        cy.visit('/')
        cy.fixture('orderTestData').then(function (orderTestData) {
            this.orderTestData = orderTestData;
          })
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

    it('Order test', function() {   
        
        const navigationBar = new NavigationBar
        const tshirtsPage = navigationBar.hoverWomenAndSelectTshirstLink()

        const productPage = tshirtsPage.clickDadedShortProductLink()
        productPage.selectSizeM()
        productPage.clickBlueColorButton()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        productDialogBox.getPrdouctTitle().should('have.text', this.orderTestData.productDialogBoxData.productName)
        productDialogBox.getProductAttributes().should('have.text', this.orderTestData.productDialogBoxData.productAttributes)
        productDialogBox.getQuantityNumber().should('have.text', this.orderTestData.productDialogBoxData.quantityNumber)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        orderPage.getProductAttributes().should('have.text',  this.orderTestData.orderPageData.orderProductAttributes)
        orderPage.getTotalPrice().should('have.text', this.orderTestData.orderPageData.orderTotalPrice)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        loginPage.getPageHeaderText().should('have.text', this.orderTestData.loginPageData.loginPageHeader)
        loginPage.getCreateAnAccountText().should('have.text', this.orderTestData.loginPageData.createAccountText)
    })
}) 
import HomePage from '../pageObjects/HomePage'
import NavigationBar from '../pageObjects/NavigationBar'

describe ('Order Tests', function() {
    beforeEach(function(){
        cy.visit('/')
        cy.fixture('orderTestData').then(function (orderTestData) {
            this.orderTestData = orderTestData;
          })
    })

    it('Faded Short order test', function() {   
        
        const navigationBar = new NavigationBar
        const tshirtsPage = navigationBar.hoverWomenAndSelectTshirstLink()

        const productPage = tshirtsPage.clickFadedShortProductLink()
        productPage.selectSizeM()
        productPage.clickBlueColorButton()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        productDialogBox.getPrdouctTitle().should('have.text', this.orderTestData.fadedShortTestData.productName)
        productDialogBox.getProductAttributes().should('have.text', this.orderTestData.fadedShortTestData.productAttributes)
        productDialogBox.getQuantityNumber().should('have.text', this.orderTestData.fadedShortTestData.quantityNumber)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        orderPage.getProductAttributes().should('have.text',  this.orderTestData.fadedShortTestData.orderProductAttributes)
        orderPage.getTotalPrice().should('have.text', this.orderTestData.fadedShortTestData.orderTotalPrice)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        loginPage.getPageHeaderText().should('have.text', this.orderTestData.loginPageData.loginPageHeader)
        loginPage.getCreateAnAccountText().should('have.text', this.orderTestData.loginPageData.createAccountText)
    })

    
    it('Blouse order test', function() {   
        
        const homePage = new HomePage
        
        const productPage = homePage.clickBlouseProduct()
        productPage.selectSizeM()
        
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        productDialogBox.getPrdouctTitle().should('have.text', this.orderTestData.blouseTestData.productName)
        productDialogBox.getProductAttributes().should('have.text', this.orderTestData.blouseTestData.productAttributes)
        productDialogBox.getQuantityNumber().should('have.text', this.orderTestData.blouseTestData.quantityNumber)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        orderPage.getProductAttributes().should('have.text',  this.orderTestData.blouseTestData.orderProductAttributes)
        orderPage.getTotalPrice().should('have.text', this.orderTestData.blouseTestData.orderTotalPrice)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        loginPage.getPageHeaderText().should('have.text', this.orderTestData.loginPageData.loginPageHeader)
        loginPage.getCreateAnAccountText().should('have.text', this.orderTestData.loginPageData.createAccountText)
    })

    it('Printed Dress order test', function() {   
        
        const homePage = new HomePage
        
        const productPage = homePage.clickPrintedDressProduct()
        productPage.selectSizeM()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        productDialogBox.getPrdouctTitle().should('have.text', this.orderTestData.printedDressTestData.productName)
        productDialogBox.getProductAttributes().should('have.text', this.orderTestData.printedDressTestData.productAttributes)
        productDialogBox.getQuantityNumber().should('have.text', this.orderTestData.printedDressTestData.quantityNumber)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        orderPage.getProductAttributes().should('have.text',  this.orderTestData.printedDressTestData.orderProductAttributes)
        orderPage.getTotalPrice().should('have.text', this.orderTestData.printedDressTestData.orderTotalPrice)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        loginPage.getPageHeaderText().should('have.text', this.orderTestData.loginPageData.loginPageHeader)
        loginPage.getCreateAnAccountText().should('have.text', this.orderTestData.loginPageData.createAccountText)
    })

    it('Printed Summer Dress order test', function() {   
        
        const homePage = new HomePage

        const productPage = homePage.clickPrintedSummerDressProduct()
        productPage.selectSizeM()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        productDialogBox.getPrdouctTitle().should('have.text', this.orderTestData.printedSummerDressTestData.productName)
        productDialogBox.getProductAttributes().should('have.text', this.orderTestData.printedSummerDressTestData.productAttributes)
        productDialogBox.getQuantityNumber().should('have.text', this.orderTestData.printedSummerDressTestData.quantityNumber)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        orderPage.getProductAttributes().should('have.text',  this.orderTestData.printedSummerDressTestData.orderProductAttributes)
        orderPage.getTotalPrice().should('have.text', this.orderTestData.printedSummerDressTestData.orderTotalPrice)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        loginPage.getPageHeaderText().should('have.text', this.orderTestData.loginPageData.loginPageHeader)
        loginPage.getCreateAnAccountText().should('have.text', this.orderTestData.loginPageData.createAccountText)
    })

    it('Printed Chiffon Dress order test', function() {   
        
        const homePage = new HomePage
        
        const productPage = homePage.clickPrintedChiffonDressProduct()
        productPage.selectSizeM()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        productDialogBox.getPrdouctTitle().should('have.text', this.orderTestData.printedChiffonDressTestData.productName)
        productDialogBox.getProductAttributes().should('have.text', this.orderTestData.printedChiffonDressTestData.productAttributes)
        productDialogBox.getQuantityNumber().should('have.text', this.orderTestData.printedChiffonDressTestData.quantityNumber)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        orderPage.getProductAttributes().should('have.text',  this.orderTestData.printedChiffonDressTestData.orderProductAttributes)
        orderPage.getTotalPrice().should('have.text', this.orderTestData.printedChiffonDressTestData.orderTotalPrice)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        loginPage.getPageHeaderText().should('have.text', this.orderTestData.loginPageData.loginPageHeader)
        loginPage.getCreateAnAccountText().should('have.text', this.orderTestData.loginPageData.createAccountText)
    })
}) 
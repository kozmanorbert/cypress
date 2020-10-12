import NavigationBar from '../pageObjects/NavigationBar'
var navigationBar

describe ('Order Tests', function() {
    beforeEach(function(){
        cy.visit('/')
         navigationBar = new NavigationBar
        
        cy.fixture('orderTestData').then(function (orderTestData) {
            this.orderTestData = orderTestData;
          })
    })

    it('Faded Short order test', function() {   
        
        const tshirtsPage = navigationBar.hoverWomenAndSelectTshirstLink()

        const productPage = tshirtsPage.clickFadedShortProductLink()
        productPage.selectSizeM()
        productPage.clickBlueColorButton()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        checkProductDialogBoxData(productDialogBox, this.orderTestData.fadedShortTestData)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        checkOrderPageData(orderPage, this.orderTestData.fadedShortTestData)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        checkLoginPageData(loginPage, this.orderTestData)
    })

    
    it('Blouse order test', function() {   
        
        const blousePage = navigationBar.hoverWomenAndSelectBlousesLink()

        const productPage = blousePage.clickBlouseProductLink()
        productPage.selectSizeM()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        checkProductDialogBoxData(productDialogBox, this.orderTestData.blouseTestData)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        checkOrderPageData(orderPage, this.orderTestData.blouseTestData)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        checkLoginPageData(loginPage, this.orderTestData)
    })

    it('Printed Dress order test', function() {   
        
        const casualDressesPage = navigationBar.hoverWomenAndSelectCasualDressLink()

        const productPage = casualDressesPage.clickPrintedDressProductLink()
        productPage.selectSizeM()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        checkProductDialogBoxData(productDialogBox, this.orderTestData.printedDressTestData)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        checkOrderPageData(orderPage, this.orderTestData.printedDressTestData)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        checkLoginPageData(loginPage, this.orderTestData)
    })

    it('Printed Summer Dress order test', function() {   
        
        const summerDressesPage = navigationBar.hoverWomenAndSelectSummerDressesLink()

        const productPage = summerDressesPage.clickPrintedSummerDressProductLink()
        productPage.selectSizeM()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        checkProductDialogBoxData(productDialogBox, this.orderTestData.printedSummerDressTestData)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        checkOrderPageData(orderPage, this.orderTestData.printedSummerDressTestData)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        checkLoginPageData(loginPage, this.orderTestData)
    })

    it('Printed Chiffon Dress order test', function() {   

        const summerDressesPage = navigationBar.hoverWomenAndSelectSummerDressesLink()

        const productPage = summerDressesPage.clickPrintedChiffonDressProductLink()
        productPage.selectSizeM()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        checkProductDialogBoxData(productDialogBox, this.orderTestData.printedChiffonDressTestData)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        checkOrderPageData(orderPage, this.orderTestData.printedChiffonDressTestData)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        checkLoginPageData(loginPage, this.orderTestData)
    })
}) 

function checkProductDialogBoxData(page, testDataGroup) {

    page.getPrdouctTitle().should('have.text', testDataGroup.productName)
    page.getProductAttributes().should('have.text', testDataGroup.productAttributes)
    page.getQuantityNumber().should('have.text', testDataGroup.quantityNumber)
  }

function checkOrderPageData(page, testDataGroup) {

    page.getProductAttributes().should('have.text',  testDataGroup.orderProductAttributes)
    page.getTotalPrice().should('have.text', testDataGroup.orderTotalPrice)
  }

function checkLoginPageData(page, testDataGroup) {

    page.getPageHeaderText().should('have.text', testDataGroup.loginPageData.loginPageHeader)
    page.getCreateAnAccountText().should('have.text', testDataGroup.loginPageData.createAccountText)
} 
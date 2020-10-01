import HomePage from '../pageObjects/HomePage'
import NavigationBar from '../pageObjects/NavigationBar'

describe ('Users Page', function() {
    beforeEach(function(){
        cy.visit('/')
    })
    
    it('Create Screenshoot', function() {   
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
        const productName = 'Faded Short Sleeve T-shirts';
        const productAttributes = 'Blue, M';
        const quantityNumber = '2';

        const orderProductAttributes = 'Color : Blue, Size : M';
        const orderTotalPrice = '$35.02';

        const loginPageHeader = 'Authentication';
        const createAccountText = 'Create an account';

        const navigationBar = new NavigationBar
        const tshirtsPage = navigationBar.hoverWomenAndSelectTshirstLink()

        const productPage = tshirtsPage.clickDadedShortProductLink()
        productPage.selectSizeM()
        productPage.clickBlueColorButton()
        productPage.increaseQuantity()

        const productDialogBox = productPage.clickAddToCartButton()
        productDialogBox.getPrdouctTitle().should('have.text', productName)
        productDialogBox.getProductAttributes().should('have.text', productAttributes)
        productDialogBox.getQuantityNumber().should('have.text', quantityNumber)

        const orderPage = productDialogBox.clickProceedToCheckoutButton()
        orderPage.getProductAttributes().should('have.text', orderProductAttributes)
        orderPage.getTotalPrice().should('have.text', orderTotalPrice)
        
        const loginPage = orderPage.clickProceedToCheckoutButton()
        loginPage.getPageHeaderText().should('have.text', loginPageHeader)
        loginPage.getCreateAnAccountText().should('have.text', createAccountText)
    })
}) 
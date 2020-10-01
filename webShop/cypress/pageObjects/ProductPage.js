import ProductDialogBox from '../pageObjects/ProductDialogBox'

class ProductPage{
    constructor(){
        //description
        cy.get("div#short_description_content > p").should('be.visible').as('description')
        //sizeDropDown
        cy.get(".attribute_select").should('be.visible').as('sizeDropDown')
        //IncreaseQuantityButton
        cy.get(".icon-plus").should('be.visible').as('IncreaseQuantityButton');
        //blueColorButton
        cy.get("[name='Blue']").should('be.visible').as('blueColorButton')
        //addToChartButton
        cy.get("button[name='Submit'] > span").should('be.visible').as('addToChartButton')
     }

    selectSizeM(){
        cy.get("@sizeDropDown").select("M")
    }

    clickBlueColorButton(){
        cy.get("@blueColorButton").click()
    } 
    increaseQuantity(){
        cy.get("@IncreaseQuantityButton").click()
    }

    clickAddToCartButton(){
        cy.get("@addToChartButton").click()
        return new ProductDialogBox
    }

    
}
export default ProductPage
import SearchPage from '../pageObjects/SearchPage'
import TshirtsPage from '../pageObjects/TshirtsPage'

class NavigationBar{
    constructor(){
        //logoImage
        cy.get("[alt='My Store']").should('be.visible').as('logoImage')
        //searchField
        cy.get("#search_query_top").should('be.visible').as('searchField')
        //searchButton
        cy.get("[name='submit_search']").should('be.visible').as('searchButton')
         //womenPageButton
        cy.get("a[title='Women']").should('be.visible').as('womenPageButton') 
        //tshirtLink
        cy.get("ul.sf-menu .submenu-container [title='T-shirts']").as('tshirtLink') 
    }

    hoverWomenAndSelectTshirstLink(){
       cy.get("@womenPageButton")
       cy.get("@tshirtLink").click({ force: true })
       return new TshirtsPage
    }

    getSearcField(){
        return cy.get("@searchField")
    }

    clickSearchButton(){
        cy.get("@searchButton").click()
        return new SearchPage
    }

}
export default NavigationBar
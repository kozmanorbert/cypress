import SearchPage from '../pageObjects/SearchPage'
import TshirtsPage from '../pageObjects/TshirtsPage'
import BlousesPage from '../pageObjects/BlousesPage'
import CasualDressesPage from '../pageObjects/CasualDressesPage'
import SummerDressesPage from '../pageObjects/SummerDressesPage'

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
        //blousesLink
        cy.get("a[title='Blouses']").as('blousesLink') 
        //casualDressLink
        cy.get("ul.sf-menu .submenu-container ul [title='Casual Dresses']").as('casualDressLink') 
        //summerDresses
        cy.get("ul.sf-menu .submenu-container ul [title='Summer Dresses']").as('summerDresses')
    }

    hoverWomenAndSelectSummerDressesLink(){
        cy.get("@womenPageButton")
        cy.get("@summerDresses").click({ force: true })
        return new SummerDressesPage
     }

    hoverWomenAndSelectCasualDressLink(){
        cy.get("@womenPageButton")
        cy.get("@casualDressLink").click({ force: true })
        return new CasualDressesPage
     }

    hoverWomenAndSelectBlousesLink(){
        cy.get("@womenPageButton")
        cy.get("@blousesLink").click({ force: true })
        return new BlousesPage
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
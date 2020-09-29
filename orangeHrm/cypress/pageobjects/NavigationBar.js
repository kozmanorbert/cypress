import UseresPage from './../pageObjects/UseresPage';
import MyInfoPage from './MyInfoPage';

class NavigationBar{

    constructor(){
        //adminButton
        cy.get("li#menu_admin_viewAdminModule > .collapsible-header > .left-menu-title").should('be.visible').as('adminButton')
        //userManagmentButton
        cy.get("li#menu_admin_UserManagement > .collapsible-header > .left-menu-title").as('userManagmentButton')
        //usersButton
        cy.get("a#menu_admin_viewSystemUsers > .left-menu-title").as('usersButton')
        //myInfoButton
        cy.get("a#menu_pim_viewMyDetails > .left-menu-title").should('be.visible').as('myInfoButton')
    }
    

     navigateUsersPage(){
        cy.get('@adminButton').click()
        cy.get("@userManagmentButton").should('be.visible').click()
        cy.get("@usersButton").should('be.visible').click()

       return new UseresPage
    }

    navigateMyInfoPage(){
        cy.get('@myInfoButton').click()
        return new MyInfoPage
    }

    getadminButton(){
       return cy.get('@adminButton')
    }
}

export default NavigationBar;
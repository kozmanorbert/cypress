class UsersPage{
    constructor(){
        cy.get("th[data-field='username']", { timeout: 30000 }).should('be.visible')
    }
    
    printAllusername(){
        for(var i = 1; i<=50; i++){
           cy.get("tbody[ng-if='!listData.staticBody'] > tr:nth-of-type(" + i + ") > td:nth-of-type(2) span").then(function($elem) {
     cy.log($elem.text())
})
        }
    }
}

export default UsersPage;
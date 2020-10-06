import 'cypress-iframe'

class EmployeeClaimsPage{
    constructor(){
        cy.get("#noncoreIframe", { timeout: 30000 }).should('be.visible')

        cy.frameLoaded('#noncoreIframe')
        cy.iframe().find("[data-sort-field='id']", { timeout: 30000 })
        
    }

   checkRowNumber(){
    cy.iframe().find("#frmList_ohrmListComponenttotal").should('have.text', '6')
    cy.iframe().find(".dataRaw").should('length', 6)
   } 

   printAllExpenseClaimId(){
    for(var i = 1; i<=6; i++){
        cy.iframe().find("table#resultTable tr:nth-of-type(" + i + ") > td:nth-of-type(1)").then(function($elem) {
        cy.log($elem.text())
})
     }
   }
}
export default EmployeeClaimsPage;
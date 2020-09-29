class MyInfoPage{
    constructor(){
        cy.get("div#personal_details_tab > h4", { timeout: 30000 }).should('be.visible')
        //firstName
        cy.get("#firstName").should('be.visible').as('firstName')
        //lastName
        cy.get("#lastName").should('be.visible').as('lastName')
        //middleName
        cy.get("#middleName").should('be.visible').as('middleName')
        //employeeId
        cy.get("#employeeId").should('be.visible').as('employeeId')
        //empBirthday
        cy.get("#emp_birthday").should('be.visible').as('empBirthday')
        //martialStatus
        cy.get("div#emp_marital_status_inputfileddiv > .select-wrapper").should('be.visible').as('martialStatus')
        //gender
        cy.get("div#emp_gender_inputfileddiv > .select-wrapper").should('be.visible').as('gender')
        //nationality
        cy.get("div#nation_code_inputfileddiv > .select-wrapper").should('be.visible').as('nationality')
        //licenseExpDate
        cy.get("#emp_dri_lice_exp_date").should('be.visible').as('licenseExpDate')
    }

}

export default MyInfoPage;
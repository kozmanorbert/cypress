describe ('Tool tips', function() {
 
    it('Check dynamic elements', function() {   
       cy.visit('/tool-tips', {failOnStatusCode: false})
      
       cy.get('#toolTipButton').trigger('mouseover')
       cy.get(".tooltip-inner").should('have.text', "You hovered over the Button").trigger('mouseout')
       cy.get('#toolTipButton').trigger('mouseout')

       cy.get('#toolTipTextField').trigger('mouseover')
       cy.get(".tooltip-inner").should('have.text', "You hovered over the text field").trigger('mouseout')
       cy.get('#toolTipButton').trigger('mouseleave')

   })  
})
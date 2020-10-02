describe ('Dynamic Properies', function() {
 
    it('Check dynamic elements', function() {   
       cy.visit('/dynamic-properties', {failOnStatusCode: false})
      
       cy.get('p').should('be.visible')
       cy.get('#enableAfter', { timeout: 5500 }).should('be.enabled')
       cy.get('#colorChange').should('have.css', 'color', 'rgb(220, 53, 69)')
       cy.get('#visibleAfter').should('be.visible') 
   })  
})
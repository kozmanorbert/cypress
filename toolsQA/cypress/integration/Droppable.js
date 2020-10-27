describe ('Drag and Drop', function() {
 
     it('Dropabble', function() {   
        cy.visit('/droppable', {failOnStatusCode: false})
       
        cy.get('#draggable')
          .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
          .trigger('mousemove', { which: 1, pageX: 800, pageY: 120 })
          .trigger('mouseup')

  cy.get('#droppable').should('have.css', 'background-color', 'rgb(70, 130, 180)')
    })  
})
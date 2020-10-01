import 'cypress-file-upload'

describe ('', function() {
 
    it('Upload file', function() {   
       cy.visit('/upload-download', {failOnStatusCode: false})
      
       const yourFixturePath = '../upload/sampleFile'
       cy.get('#uploadFile').attachFile(yourFixturePath)
       
       cy.get('#uploadedFilePath').should('have.text', 'C:\\fakepath\\sampleFile')
   })  
})
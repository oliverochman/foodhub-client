describe('Creates a recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes',
      response: '{ "message": "The recipe was successfully created." }',
      status: 200
    })
  
    cy.get('#create-recipe-form').within(() => {
      cy.get('#create-title').type('Warm Apples')
        .get('#create-ingredients').type('Apples, syrup')
        .get('#create-directions').type('Add syrup to apples. Heat in microwave.')
        .get('#submit-create-form').click()
    })
    cy.get('#response-message')
      .should('contain', 'The recipe was successfully created.')
  })

  it('Fails to', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes',
      response: '{ "error_message": "Unable to create recipe." }',
      status: 400
    })
  
    cy.get('#create-recipe-form').within(() => {
      cy.get('#create-title')
        .get('#submit-create-form').click()
    })
    cy.get('#response-message')
      .should('contain', 'Unable to create recipe')
  })
})
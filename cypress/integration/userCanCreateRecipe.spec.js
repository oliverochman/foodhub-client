describe('Creates a recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:create_recipe.json',
      status: 200
    })
  
    cy.get('#create-article-form').within(() => {
      cy.get('#create-title').type('Warm Apples')
        .get('#create-ingredients').type('Apples, syrup')
        .get('#create-description').type('Add syrup to apples. Heat in microwave.')
        .get('#submit-create-form').click()
        .get('#create-response').should('contain', 'The recipe was successfully created.')
    })
  })

  it('Fails to', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: '{ message: "Unable to create recipe." }',
      status: 400
    })
  
    cy.get('#create-article-form').within(() => {
      cy.get('#create-title').type('Warm Apples')
        .get('#create-ingredients').type('Apples, syrup')
        .get('#create-description').type('Add syrup to apples. Heat in microwave.')
        .get('#submit-create-form').click()
        .get('#create-response').should('contain', 'Unable to create recipe.')
    })
  })
})
describe('View single recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
    cy.get('#recipes_1')
      .click({force:true})
    cy.get('#single-recipe').within(() => {
      cy.get('#recipe-title').should('contain', 'Quiche')
        .get('#recipe-ingredients').should('contain', 'Eggs')
        .get('#recipe-directions').should('contain', 'Stir the mixture')
    })
  })

  it('Fails to', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: '{ "error_message": "The recipe could not be found" }',
      status: 404
    })

    cy.get('#recipes_1')
      .click({force:true})
    cy.get('#response-message')
      .should('contain', 'The recipe could not be found')
  })
})
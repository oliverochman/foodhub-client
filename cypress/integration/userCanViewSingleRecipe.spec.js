describe('View single recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
    cy.get('#recipe_1')
      .click({force:true})
    cy.get(':nth-child(1) > .content').within(() => {
      cy.get('#recipe_1 > .header').should('contain', 'Quiche')
        .get('#recipe_1 > .description > :nth-child(2)').should('contain', 'Eggs')
        .get('#recipe_1 > .description > :nth-child(4)').should('contain', 'Stir the mixture')
    })
  })

  it('Fails to', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: '{ "error_message": "The recipe could not be found" }',
      status: 404
    })

    cy.get('#recipe_1')
      .click({force:true})
    cy.get('#response-message')
      .should('contain', 'The recipe could not be found')
  })
})
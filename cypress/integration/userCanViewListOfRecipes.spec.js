describe('FoodHub user can view a list of recipes', () => {

  it("contains recipe content", () => {
    cy.get('#list h1')
      .first().should('have.text', 'Quiche')
    cy.get('#recipe_1 > .description > :nth-child(2)').should('contain', 'Eggs')
    cy.get('#recipe_1 > .description > :nth-child(4)').should('contain', 'Stir the mixture')   
  })

  it('sees message for no recipes', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: '{"recipes":[]}'
    })
    
    cy.visit('http://localhost:3001')
    cy.get("#message").should('contain', 'There are no recipes')
  })
})
describe('FoodHub user can view a list of recipes', () => {

  it("contains recipe content", () => {
    cy.get('[name="recipe-1"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Quiche')
        .get('[name="recipe-ingredients"]').should('have.text', 'Eggs')
        .get('[name="recipe-directions"]').should('contain', 'Stir the mixture')
    })
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
describe('FoodHub user can view a list of recipes', () => {

  it("contains recipe content", () => {
    cy.get('#recipe-1').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Quiche')
        .get('[name="recipe-ingredients"]').should('contain', 'Eggs')
        .get('[name="recipe-directions"]').should('contain', 'Stir the mixture')
    })
    //   .first()
    // cy.get('#recipe-1 > .description > :nth-child(2)')
    // cy.get('#recipe-1 > .description > :nth-child(4)')   
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
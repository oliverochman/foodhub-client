describe('FoodHub user can view a list of recipes', () => {

  it("contains recipe content", () => {
    cy.get('[name="recipe-1"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Quiche')
    })
  })
})

describe('FoodHub user cannot view recipes if there are none', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: '{"recipes":[]}'
    })
    cy.visit('http://localhost:3001')
  })

  it('sees message for no recipes', () => {
    cy.get("#message").should('contain', 'There are no recipes')
  })
})
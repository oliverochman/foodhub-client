describe('FoodHub user can view a list of recipes', () => {

  beforeEach(() => {
    cy.server()
  });

  it('successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:recipes.json'
    })
    cy.visit('http://localhost:3001');
  })

  it("contains a title", () => {
    cy.contains("Quiche")
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
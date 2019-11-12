describe('FoodHub user can view a list of recipes', () => {
  it('successfully', () => {
    cy.visit('http://localhost:3001');
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:recipes.json'
    })
  })
  it("contains a title", () => {
    cy.contains("Quiche")
  })
})
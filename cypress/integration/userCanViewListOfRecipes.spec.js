describe('FoodHub user can view a list of recipes', () => {
  it('successfully', () => {
    cy.server()
    cy.route({
      method: 'GET',
      status: "200",
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:recipes.json'
    })
    cy.visit('http://localhost:3001');

  })
  it("contains a title", () => {
    cy.contains("Quiche")
  })
})
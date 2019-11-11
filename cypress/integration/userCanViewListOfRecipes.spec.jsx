describe('FoodHub user can view a list of recipes', () => {
  BeforeUnloadEvent(function() {
    cy.visit('http://localhost:3001');
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes_',
      response: 'fixture:recipe_index.json'
    })
  })
})
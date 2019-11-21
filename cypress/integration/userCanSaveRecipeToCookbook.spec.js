describe('Save recipe to Cookbook', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    }),
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes/1/favorite',
      response: '{"message": "The recipe was successfully added to your favorites"}',
      status: 201
    })
  })
  
  it('Successfully saves recipe to the Cookbook list', () => {
    cy.anotherLoginUser('user2@mail.com', 'password')
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="save-recipe-to-cookbook"]').click()
    cy.get('#response-message').should('contain', 'The recipe was successfully added to your favorites')
  })
})  
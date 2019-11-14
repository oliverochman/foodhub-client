describe('Only user can edit own recipe', () => {
  
  it('successfully logs in ', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#welcome-message')
      .should('contain', 'Hello BettySpaghetti')
  })

  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
  })
  
  it('Successfully', () => {
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/v1/recipes/1',
      status: 201,
      response: '{ "message": "Your recipe has been updated." }'
    })
  })
})

describe('Save a recipe to Cookbook', () => {

  it('Successfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes',
      response: '{ "message": "The recipe was successfully added to your favorites" }',
      status: 201
    })
  })
})
describe('User can edit recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
    cy.route({
      method: 'PATCH',
      url: 'http://localhost:3000/v1/recipes/1',
      status: 200,
      response: 'fixture:successful_edit_from_user.json',
      headers: {
        "uid": "user@mail.com"
      }
  })
})
})
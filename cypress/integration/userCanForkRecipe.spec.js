describe('User forks a recipe', () => {
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
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes/1/fork',
      status: 201,
      response: '{ "message": "The recipe was successfully forked" }'
    })

    cy.anotherLoginUser('user2@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-listrecipes')
        .click()
    })
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="fork-recipe"]').should('exist')
  })
})

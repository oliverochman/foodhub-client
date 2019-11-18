describe('Save a recipe to Cookbook', () => {

  it('Successfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes',
      response: '{ "message": "The recipe was successfully added to your favorites" }',
      status: 201
    })
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-cookbook')
        .click()
    })
    cy.get('#cookbook-recipe-form').within(() => {
      cy.get('[name="save-to-cookbook"]').click()
  })
  cy.get('#response-message')
  .should('contain', 'The recipe was successfully added to your favorites')
})
})
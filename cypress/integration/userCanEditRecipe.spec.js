describe('User can edit recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'message: Your recipe has been updated.',
      status: 200
    })
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/v1/recipes/1',
      status: 201,
      response: 'fixture:successful_edit_from_user.json',
    })
    cy.get('#recipe-1')
      .click({ force: true })
    cy.get('[name="single-recipe"]').within(() => {
      cy.get('[name="edit-recipe"]')
        .click()
    })

    cy.get('#edit-recipe-form').within(() => {
      cy.get('[name="title"]').type('Apple Pie')
        .get('[name="ingredients"]').type('Apples, dough')
        .get('[name="directions"]').type('Bake pie at 200')
      cy.fixture(fileName).then(fileContent => {
        cy.get('[name="image"]')
          .upload({ fileContent, fileName, mimeType: 'application/json' });
      });
      cy.get('[name="save-updates"]').click()
    })
    cy.get('#response-message')
      .should('contain', 'Your recipe has been updated.')
  })
  xit('Fails to', () => {
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/v1/recipes/1',
      status: 422,
      response: `{ “error_message”: “Unable to edit recipe.” }`,
    })
    cy.get('#response-message')
      .should('contain', 'Unable to edit recipe.')
  })
})
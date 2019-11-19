describe('Save recipe to Cookbook', () => {
  beforeEach(() => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes/:recipe_id/favorite',
      response: 'fixture:favorites.json',
      status: 201
    })
  })
  it('Successfully saves recipe to the Cookbook list', () => {
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="save-recipe-to-cookbook"]').click()
    cy.get('#cookbook-recipe-form').within(() => {
      cy.get('[name="title"]').type('Apple Pie')
      .get('[name="ingredients"]').type('Apples, dough')
      .get('[name="directions"]').type('Bake pie at 200')
    const fileName = '"title": "Quiche"';
    cy.fixture(fileName).then(fileContent => {
      cy.get('[name="title": "Quiche"]')
        .upload({ fileContent, fileName, mimeType: 'application/json' });
    })
    cy.get('[name="Save to Cookbook"]').click()
  })
  cy.get('#response-message').should('contain', 'The recipe was successfully saved')
})
})  
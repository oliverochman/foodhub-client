describe('View list of recipes in Cookbook', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/:recipe_id/favorite',
      response: 'fixture:favorites.json',
      status: 200
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes/:recipe_id/favorite',
      response: 'fixture:favorites.json'
    })
  it('Successfully view Cookbook list', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-cookbook')
        .click()
    })
    cy.get('#cookbook-list')
      .should('contain', 'You have no saved recipes in your cookbook')
  })
})
})

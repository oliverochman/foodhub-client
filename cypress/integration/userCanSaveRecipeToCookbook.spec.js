describe('Save recipe to Cookbook', () => {
  beforeEach(() => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/favorites',
      response: 'fixture:favorites.json',
      status: 201
    })
  })
  it('Successfully saves the recipe in Cookbook', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-cookbook')
        .click()
    })
  })
})
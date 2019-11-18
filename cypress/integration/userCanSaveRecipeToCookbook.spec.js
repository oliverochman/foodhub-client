describe('Save a recipe to Cookbook', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/favorites',
      response: '{"favorites":[]}',
      status: 201
    })
    cy.visit('http://localhost:3001')
  })
  it('successfully logs in ', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#nav-cookbook')
      .should('contain', 'Cookbook')
  })
  it('successfully saves recipe', () => {
    cy.get('#save-recipe').click()
    cy.contains('The recipe was successfully added to your favorites')
  })
})
describe('User can view cookbook', () => {

  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:recipes.json',
      status: 200
    })
  })
  it('Successfully view recipe in the Cookbook', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar')
    .within(() => {
      cy.get('#nav-cookbook').click()
    })
    cy.get('h1')
    cy.should('contain', 'My Cookbook')
    })
  })
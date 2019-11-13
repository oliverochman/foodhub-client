describe('Navigating the site', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:recipes.json'
    })
    cy.visit('http://localhost:3001');
  });
  
  it('successfully', () => {
    cy.get('#navbar').within(() => {
    cy.get('#nav-create')
      .click()
    })
    cy.get('.create-recipe')
      .should('contain', 'Create Your Own Recipe')
  })
})
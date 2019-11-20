describe('User can view cookbook', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1/favorite',
      response: 'fixture:favorites.json',
      status: 200
    })
  
    cy.get('h1')
      cy.should('contain', 'My Cookbook')
    })
  })
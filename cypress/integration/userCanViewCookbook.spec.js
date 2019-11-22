describe('User can view cookbook', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/favorites',
      response: 'fixture:favorites.json',
      status: 200
    })
  })

  it('Successfully view My Cookbook in the Navbar', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar')
    .within(() => {
      cy.get('#nav-cookbook').click()
    })
    cy.get('[name="recipe-title"]').should('contain', 'Chocolate Croissant')
  })

  it('Sees message for no favorite recipes have been added into your Cookbook', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/favorites',
      response: '{"cookbook": {"cookbook_recipes": []}}',
      status: 200
    })
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-cookbook').click()
    })
    
    cy.get('#message')
      .should('contain', 'After you have added a recipe you can always access it in your Cookbook')
  })

  it('Cannot view Cookbook page unless user logs in', () => {
    cy.get('#navbar').within(() => {
      cy.get('#nav-cookbook').should('not.exist')
    })
  })
})
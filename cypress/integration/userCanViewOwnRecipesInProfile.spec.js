describe('Recipes created by user are displayed in the profile', () => {

  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:profile_recipe.json',
      status: 200
    }),
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
  })

  it('successfully views own recipes ', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#welcome-message')
      .should('contain', 'Hello BettySpaghetti')
    cy.get('#navbar')
      .within(() => {
        cy.get('#nav-profile').click()
      })
    cy.get('#profile-greeting')
      .should('contain', 'Hello BettySpaghetti, here are the recipes you have created:')
    cy.get('[name="created-recipes"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Quiche')
      cy.get('#recipe-1').click({ force: true })
    })
    cy.get('[name="single-recipe"]').within(() => {
      cy.get('.header').should('contain', 'Quiche')
        .get('[name="recipe-ingredients"]').should('contain', 'Eggs')
        .get('[name="recipe-directions"]').should('contain', 'Stir the mixture')
    })
  })
  
})
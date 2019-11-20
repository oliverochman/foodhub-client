describe('Recipes created by user are displayed in the profile', () => {

  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes?user_recipe=true',
      response: 'fixture:recipes.json',
      status: 200
    })
  })

  it('successfully views own recipes ', () => {
    cy.loginUser('user@mail.com', 'password')
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

describe('FoodHub user cannot view recipes in profile if there are none', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: '{"recipes":[]}'
    })
    cy.visit('http://localhost:3001')
  })

  it('sees message for no recipes', () => {
    cy.get('#message')
      .should('contain', 'After you have created a recipe you can always view it here')
  })
  
})
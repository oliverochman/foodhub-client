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
    cy.get('[name="recipe-title"]').should('contain', 'Quiche')
    cy.get('[name="recipe-ingredients"]').should('contain', 'Eggs')
  })
})

describe('FoodHub user cannot view recipes in profile if there are none', () => {

  it('sees message for no recipes', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes?user_recipe=true',
      response: '{"recipes":[]}',
      status: 200
    })

    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar')
      .within(() => {
        cy.get('#nav-profile').click()
      })
    cy.get('#message')
      .should('contain', 'After you have created a recipe you can always view it here')
  })
})
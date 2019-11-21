describe('Recipes created by user are displayed in the profile', () => {

  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes?user_recipe=true',
      response: 'fixture:recipes.json',
      status: 200
    })
  })

  it('Successfully views own recipes ', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar')
      .within(() => {
        cy.get('#nav-profile').click()
      })
    cy.get('#profile-greeting')
      .should('contain', 'Hello BettySpaghetti, welcome to your profile page')
    cy.get('[name="recipe-title"]').should('contain', 'Quiche')
    cy.get('[name="recipe-ingredients"]').should('contain', 'Eggs')
  })

  it('Sees message for no recipes', () => {
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
      .should('contain', 'You do not currently have any recipes')
  })

  it('Cannot view profile page unless logged in', () => {
    cy.get('#navbar')
    .within(() => {
      cy.get('#nav-profile').should('not.exist')
    })
  })
})
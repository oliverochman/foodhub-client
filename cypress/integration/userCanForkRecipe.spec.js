describe('User forks a recipe', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
  })

  it('Successfully forks the recipe of another user', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes/1/fork',
      status: 201,
      response: '{ "message": "The recipe was successfully forked" }'
    })
    cy.anotherLoginUser('user2@mail.com', 'password')
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="fork-recipe"]').click()
    cy.get('#fork-recipe-form').within(() => {
      cy.get('[name="title"]').type('Apple Pie')
        .get('[name="ingredients"]').type('Apples, dough')
        .get('[name="directions"]').type('Bake pie at 200')
      const fileName = 'pizza.jpeg';
      cy.fixture(fileName).then(fileContent => {
        cy.get('[name="image"]')
          .upload({ fileContent, fileName, mimeType: 'application/json' });
      });
      cy.get('[name="submit"]').click()
    })
    cy.get('#response-message').should('contain', 'The recipe was successfully forked')
  })

  it('Cannot fork own recipe', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="fork-recipe"]').should('not.exist')
  })

  it('Cannot see fork button unless logged in', () => {
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="single-recipe"]').within(() => {
      cy.get('.header').should('contain', 'Quiche')
        .get('[name="recipe-ingredients"]').should('contain', 'Eggs')
        .get('[name="recipe-directions"]').should('contain', 'Stir the mixture')
    })
    cy.get('[name="fork-recipe"]').should('not.exist')
  })
})



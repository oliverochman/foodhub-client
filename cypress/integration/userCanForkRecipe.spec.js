describe('User forks a recipe', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
  })

  xit('Successfully forks the recipe of another user', () => {
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

  xit('Cannot fork own recipe', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="fork-recipe"]').should('not.exist')
  })
})

describe('User forks a recipe', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/2',
      status: 200,
      response: 'fixture:forked_recipe.json'
    })
  })

  
  it('A forked recipe has original creators details', () => {
    cy.anotherLoginUser('user2@mail.com', 'password')
    cy.get('#recipe-2').click({ force: true })
    cy.get('[name="single-recipe"]').within(() => {
      cy.get('.header').should('contain', 'Quiche')
        .get('[name="parent-data"]').should('contain', 'Bob')
        //.get('[name="recipe-parent-title"]').should('contain', 'Quiche')
    })
  })
})
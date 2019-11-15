import { it } from "mocha"

describe('User edits recipe', () => {

  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
  })
  
  it('Successfully', () => {
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/v1/recipes/1',
      status: 201,
      response: '{ "message": "Your recipe has been updated." }'
    })
    cy.loginUser('user@mail.com', 'password')

    cy.get('#navbar').within(() => {
      cy.get('#nav-listrecipes')
        .click()
    })
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="edit-recipe"]').click()
    cy.get('#edit-recipe-form').within(() => {
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
    cy.get('#response-message')
      .should('contain', 'Your recipe has been updated.')
  })
  
  it('unnsuccessfully if not filling out form correctly', () => {
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/v1/recipes/1',
      status: 422,
      response: '{ "error_message": "Unable to edit recipe." }'
    })
    cy.loginUser('user@mail.com', 'password')

    cy.get('#navbar').within(() => {
      cy.get('#nav-listrecipes')
        .click()
    })
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="edit-recipe"]').click()
    cy.get('#edit-recipe-form').within(() => {
      cy.get('[name="submit"]').click()
    })
    cy.get('#response-message')
      .should('contain', 'Unable to edit recipe.')
  })
  
  it('unsuccessful, user cant edit if they did not create recipe', () => {
    cy.anotherLoginUser('user2@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-listrecipes')
        .click()
    })
    cy.get('#recipe-1').click({ force: true })
    cy.get('[name="edit-recipe"]').should('not.exist')
  })
})
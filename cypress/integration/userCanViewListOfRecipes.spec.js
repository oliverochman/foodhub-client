import { getYear } from "date-fns";

describe('FoodHub user can view a list of recipes', () => {

  beforeEach(() => {
    cy.server()
  });

  it('successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: 'fixture:recipes.json'
    })
    cy.visit('http://localhost:3001');
  })

  it("contains recipe content", () => {
    cy.get('#list h1')
      .first().should('have.text', 'Quiche')
      .next().should('have.text', 'Eggs')
      .next().should('have.text', 'Stir the mixture')     
  })

  it('sees message for no recipes', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes',
      response: '{"recipes":[]}'
    })
    cy.visit('http://localhost:3001')
    cy.get("#message").should('contain', 'There are no recipes')
  })
})
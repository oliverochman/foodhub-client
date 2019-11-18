describe('Save a recipe to Cookbook', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/favorites',
      response: '{"favorites":[]}',
      status: 201
    })
    cy.visit('http://localhost:3001')
  })
})  
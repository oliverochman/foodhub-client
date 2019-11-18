describe('Creates a recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes',
      response: '{ "message": "The recipe was successfully created." }',
      status: 201
    })
    const fileName = 'pizza.jpeg';

    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-create')
        .click()
    })
    cy.get('#create-recipe-form').within(() => {
      cy.get('[name="title"]').type('Warm Apples')
        .get('[name="ingredients"]').type('Apples, syrup')
        .get('[name="directions"]').type('Add syrup to apples. Heat in microwave.')
      cy.fixture(fileName).then(fileContent => {
        cy.get('[name="image"]')
          .upload({ fileContent, fileName, mimeType: 'application/json' });
      });
      cy.get('[name="submit"]').click()
    })
    cy.get('#response-message')
      .should('contain', 'The recipe was successfully created.')
  })
  
  it('Fails to', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes',
      response: '{ "error_message": "Unable to create recipe." }',
      status: 422
    })
    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-create')
        .click()
    })
    cy.get('#create-recipe-form').within(() => {
      cy.get('[name="title"]')
        .get('[name="submit"]').click()
    })
    cy.get('#response-message')
      .should('contain', 'Unable to create recipe')
  })
})
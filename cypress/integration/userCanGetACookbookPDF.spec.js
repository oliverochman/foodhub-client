describe('User can get a PDF version of the cookbook', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/favorites',
      response: 'fixture:favorites.json',
      status: 200
    }),
    cy.route({
      method: "POST",
      url: "http://localhost:3000/v1/cookbooks",
      response: {
        "message": "The cookbook was generated and is available for download",
        "url": "attachment_url"
      },
      status: 201
    });

    cy.loginUser('user@mail.com', 'password')
    cy.get('#navbar')
      .within(() => {
        cy.get('#nav-cookbook').click()
      })
    cy.get('h1').should('contain', 'My Cookbook')
    cy.get('[name="create-pdf"]').click()
    cy.get('#response-message')
      .should('contain', 'The cookbook was generated and is available for download')
  })

  it('Cannot generate a cookbook unless logged in', () => {
    cy.get('#navbar')
      .within(() => {
        cy.get('#nav-cookbook').should('not.exist')
      })
  })
})
describe('User can get a PDF version of the cookbook', () => {

  it('Successfully', () => {
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
    cy.get('[name="recipe-title"]')
      .should('contain', 'Quiche')
    cy.get('[name="create-pdf"]').click()
    cy.get('#response-message')
      .should('contain', 'The cookbook was generated and is available for download at attachment_url')
  })
})
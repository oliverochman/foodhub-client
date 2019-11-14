describe('User can log out from application', () => {
  it('successfully logs out ', () => {
    cy.route({
      method: 'DELETE',
      url: 'http://localhost:3000/auth/sign_out',
      response: '{ "success": true }',
      status: 204
    })
  
    cy.loginUser('user@mail.com', 'password')
    cy.get('#welcome-message')
      .should('contain', 'Hello BettySpaghetti')
      cy.get('#logout-button').click()
      cy.get('#welcome-message')
        .should('not.exist')
  })

  it('Needs to be logged in to see the logout button', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#logout-button').should('not.exist')
  })
})
describe('User can log in to application', () => {

  it('successfully logs in ', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#welcome-message')
      .should('contain', 'Hello BettySpaghetti')
  })
    cy.route({
      method: 'DELETE',
      url: 'http://localhost:3000/auth/sign_out',
      response: '{"success": true }',
      status: 200
    })
    cy.get('#logout-button').click()
    cy.get('#welcome-message')
      .should('not.exist')
})
describe('User can log in to application', () => {

  it('successfully logs in ', () => {
    cy.loginUser('user@mail.com', 'password')
    cy.get('#welcome-message')
      .should('contain', 'Hello BettySpaghetti')
  })

  it('unsuccessfully logs in ', () => {
    cy.failToLoginUser('user@mail.com', 'passwordd')
    cy.get('#response-message')
      .should('contain', 'You need to sign in or sign up before continuing.')
  })
})
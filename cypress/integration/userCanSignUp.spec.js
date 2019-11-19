describe('Visitor can signup', () => {

  it('Successfully signs up', () => {
    cy.signinUser('BettySpaghetti', 'user@mail.com', 'password', 'password')
    cy.get('#welcome-message')
    .should('contain', 'Hello BettySpaghetti')
  })

  it('Attempts to fill in unmatching passwords', () => {
    cy.failTosignUpUser('BettySpaghetti', 'user@mail.com', 'password', 'passwordd')
    cy.get('#response-message').should('contain','Invalid credentials to sign up. Please try again.')
  })
});
describe('Visitor can signup', () => {

  it('Successfully signs up', () => {
    cy.signinUser('user@mail.com', 'password', 'password')
  })

  it('Attempts to fill in unmatching passwords', () => {
    cy.failTosignUpUser('user@mail.com', 'password', 'passwordd')
    cy.get('#response-message').should('contain','Invalid credentials to sign up. Please try again.')
  })
});
describe('Visitor can signup', () => {

  it('Successfully signs up', () => {
    cy.successful_signup('user@mail.com', 'password', 'password')
  })

  it('Attempts to fill in unmatching passwords', () => {
    cy.unsuccessful_signup('user@mail.com', 'password', 'passwordd')
    cy.get('#response-message').should('contain','Invalid credentials to sign up. Please try again.')
  })
});
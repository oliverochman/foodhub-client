describe('Visitor can signup', () => {

  it('Successfully signs up', () => {
    cy.signInUser('BettySpaghetti', 'user@mail.com', 'password', 'password')
    cy.get('#welcome-message')
    .should('contain', 'Hello BettySpaghetti')
  })

  it('Attempts to fill in unmatching passwords', () => {
    cy.failToSignUpUser('BettySpaghetti', 'user@mail.com', 'password', 'passwordd')
    cy.get('#response-message')
      .should('contain','Password confirmation doesn\'t match Password')
  })
});
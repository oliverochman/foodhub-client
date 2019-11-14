Cypress.Commands.add('loginUser', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/auth/sign_in',
    response: 'fixture:successful_user_login.json',
    status: 200
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form').within(() => {
    cy.get('[name="email"]').type('user@mail.com')
      .get('[name="password"]').type('password')
  });
  cy.get('[name="submit"]').click()
})
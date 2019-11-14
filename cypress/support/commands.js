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
  cy.get('#login-form').within(() => {
    cy.get('#email-input').type('user@mail.com')
    cy.get('#password-input').type('password')
  })
  cy.get('#submit-login-form').click()
})
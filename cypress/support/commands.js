Cypress.Commands.add('loginUser', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/auth/sign_in',
    response: 'fixture:successful_login.json',
    status: 200
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form').within(() => {
    cy.get('[name="email"]').type('email')
      .get('[name="password"]').type('password')
  });
  cy.get('[name="submit"]').click()
})

Cypress.Commands.add('failToLoginUser', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/auth/sign_in',
    response: '{"errors":["You need to sign in or sign up before continuing."]}',
    status: 401
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form').within(() => {
    cy.get('[name="email"]').type('email')
      .get('[name="password"]').type('passwordd')
  });
  cy.get('[name="submit"]').click()
})
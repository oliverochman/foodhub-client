Cypress.Commands.add('loginUser', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/v1/auth/sign_in',
    response: 'fixture:successful_login.json',
    status: 200
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form').within(() => {
    cy.get('[name="email"]').type(email)
      .get('[name="password"]').type(password)
  });
  cy.get('[name="submit"]').click()
})

Cypress.Commands.add('anotherLoginUser', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/v1/auth/sign_in',
    response: 'fixture:another_successful_login.json',
    status: 200
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form').within(() => {
    cy.get('[name="email"]').type(email)
      .get('[name="password"]').type(password)
  });
  cy.get('[name="submit"]').click()
})

Cypress.Commands.add('failToLoginUser', (email, password) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/v1/auth/sign_in',
    response: '{"errors":"Invalid login credentials. Please try again"}',
    status: 401
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form').within(() => {
    cy.get('[name="email"]').type(email)
      .get('[name="password"]').type(password)
  });
  cy.get('[name="submit"]').click()
})

Cypress.Commands.add('signInUser', (name, email, password, password_confirmation) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/v1/auth',
    response: 'fixture:successful_signup.json',
    status: 200
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form')
    .get('[name="register"]').click()
  cy.get('#signup-form').within(() => {
    cy.get('[name="name"]').type(name)
      .get('[name="email"]').type(email)
      .get('[name="password"]').type(password)
      .get('[name="password_confirmation"]').type(password_confirmation)
    });
  cy.get('[name="submit"]').click()
})

Cypress.Commands.add('failToSignUpUser', (name, email, password, password_confirmation) => {
  cy.route({
    method: 'POST',
    url: 'http://localhost:3000/v1/auth',
    response: '{"errors": {"full_messages": "Password confirmation doesn\'t match Password"}}',
    status: 401
  })

  cy.get('#navbar')
    .within(() => {
      cy.get('#nav-login').click()
    })
  cy.get('#credentials-form')
    .get('[name="register"]').click()
  cy.get('#signup-form').within(() => {
    cy.get('[name="name"]').type(name)
      .get('[name="email"]').type(email)
      .get('[name="password"]').type(password)
      .get('[name="password_confirmation"]').type(password_confirmation)
    });
  cy.get('[name="submit"]').click()
})
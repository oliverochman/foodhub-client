describe('View the welcome page ', () => {
  it('should display "welcome to the foodhub page"', () => {
    cy.get('h1')
    cy.contains('welcome to the')
    cy.get('h2')
    cy.contains('foodhub');
  })
})
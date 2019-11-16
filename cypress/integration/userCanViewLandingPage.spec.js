describe('View the welcome page ', () => {
  it('should display "welcome to the foodhub page"', () => {
    cy.get('h1')
        .should('contain','welcome to the')
      })
    })
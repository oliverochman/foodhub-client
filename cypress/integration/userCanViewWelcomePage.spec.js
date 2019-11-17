describe('View the welcome page', () => {
  it('should display welcome message', () => {
    cy.get('#welcome').within(()=>{
      cy.get('h1').should('have.text', 'welcome to the')
      cy.get('h2').should('have.text', 'foodhub')
    })
  })
})
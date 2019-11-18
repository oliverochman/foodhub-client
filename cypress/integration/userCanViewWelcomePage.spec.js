describe('View the welcome page', () => {
  it('should display welcome message', () => {
    cy.get('#welcome').within(()=>{
      cy.get('h1').should('have.text', 'Social Cooking')
      cy.get('h5').should('have.text', 'by')
      cy.get('h2').should('have.text', 'FOODHUB')
    })
  })
})
describe('Navigating the site', () => {
  
  it('successfully', () => {
    cy.get('#navbar').within(() => {
    cy.get('#nav-create')
      .click()
    })
    cy.get('.create-recipe')
      .should('contain', 'Create Your Own Recipe')
  })
})
describe('Navigating the site', () => {
  it('successfully', () => {
    cy.get('#navbar')
      .should('contain', 'Food Hub')
  })
})
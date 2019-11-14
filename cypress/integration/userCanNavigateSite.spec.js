describe('Navigating the site on a desktop', () => {

  it('successfully', () => {
    cy.get('#navbar').within(() => {
      cy.get('#nav-create')
        .click()
    })
    cy.get('.create-recipe')
      .should('contain', 'Create Your Own Recipe')
  })
})

describe('Navigating the site on a mobile', () => {
  beforeEach(() => { 
    cy.viewport('iphone-6')
  })

  it('successfully', () => {
    cy.get('#navbar').within(() => {
      cy.get('#sidebar-menu')
        .click()
      cy.get('#mobile-menu').should('be.visible')
      cy.get('.nav-home')
        .should('contain', 'Food Hub')
    })
  })
})